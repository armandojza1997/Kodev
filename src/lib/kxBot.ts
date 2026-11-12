/* eslint-disable @typescript-eslint/no-explicit-any */
export function kxBot(THREE: any, canvas: HTMLCanvasElement, opt: any = {}) {
  const V3 = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);
  const R = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: !!opt.keep, powerPreference: 'high-performance' });
  R.setClearColor(0x000000, 0);
  R.toneMapping = THREE.ACESFilmicToneMapping;
  R.toneMappingExposure = 1.0;
  R.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();

  // Studio softboxes baked into an environment map: they draw the long highlights on the glossy shell.
  const env = new THREE.Scene();
  env.add(new THREE.Mesh(new THREE.BoxGeometry(14, 14, 14), new THREE.MeshBasicMaterial({ color: 0x1d2022, side: THREE.BackSide })));
  const box = (w: number, h: number, x: number, y: number, z: number, k: number, tint?: number) => {
    const c = new THREE.Color(tint || 0xffffff).multiplyScalar(k);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: c, side: THREE.DoubleSide }));
    m.position.set(x, y, z); m.lookAt(0, 0.6, 0); env.add(m);
  };
  box(9, 1.1, 0, 6, 1.2, 5);              // overhead strip
  box(2.6, 5.5, -6, 1.5, 3.2, 3.2);       // key softbox, front left
  box(1.0, 7, 6, 1.2, -3.2, 7, 0xeef4ff); // rim strip, back right
  box(3.5, 2.2, 3, -2.4, 5.5, 0.9);       // low front fill
  box(1.2, 4, -4.5, 1, -5, 2.2);          // back left kicker
  const pm = new THREE.PMREMGenerator(R);
  const envTex = pm.fromScene(env, 0.025).texture;
  scene.environment = envTex;
  scene.environmentIntensity = 0.7;
  pm.dispose();

  const key = new THREE.DirectionalLight(0xffffff, 2.8); key.position.set(-4, 3.2, 2.6); scene.add(key);
  const rim = new THREE.DirectionalLight(0xeaf1ff, 4.2); rim.position.set(4.5, 2.2, -4); scene.add(rim);
  const fill = new THREE.DirectionalLight(0xffffff, 0.22); fill.position.set(3, -1, 4); scene.add(fill);

  const LIME = new THREE.Color('#C6F23A');
  const M = {
    shell: new THREE.MeshPhysicalMaterial({ color: 0x15181a, metalness: 0.45, roughness: 0.24, clearcoat: 1, clearcoatRoughness: 0.06 }),
    visor: new THREE.MeshPhysicalMaterial({ color: 0x030404, metalness: 0.95, roughness: 0.04, clearcoat: 1, clearcoatRoughness: 0.02 }),
    body: new THREE.MeshPhysicalMaterial({ color: 0x5f6366, metalness: 0.2, roughness: 0.5, clearcoat: 0.35, clearcoatRoughness: 0.38 }),
    joint: new THREE.MeshPhysicalMaterial({ color: 0x060707, metalness: 0.7, roughness: 0.16, clearcoat: 1, clearcoatRoughness: 0.04 }),
    seam: new THREE.MeshStandardMaterial({ color: 0x2a2e31, roughness: 0.7, metalness: 0.1 }),
    core: new THREE.MeshPhysicalMaterial({ color: 0x3a3e41, metalness: 0.3, roughness: 0.35, clearcoat: 0.6 }),
    neon: new THREE.MeshBasicMaterial({ color: LIME, toneMapped: false }),
    hot: new THREE.MeshBasicMaterial({ color: new THREE.Color('#F2FFC9'), toneMapped: false })
  };
  const glowTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const g = c.getContext('2d')!; const r = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.25, 'rgba(255,255,255,.55)'); r.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = r; g.fillRect(0, 0, 128, 128);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  const glow = (scale: number, op: number) => {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, color: LIME, transparent: true, opacity: op, depthWrite: false, toneMapped: false }));
    s.scale.set(scale, scale, 1); return s;
  };

  const root = new THREE.Group(); scene.add(root);
  const torsoG = new THREE.Group(); root.add(torsoG);

  // ---------- torso: lofted super-ellipse, broad chest tapering to the waist ----------
  const prof = new THREE.CatmullRomCurve3([
    [0.163, -0.2, 0.134], [0.15, -0.08, 0.128], [0.157, 0.04, 0.133], [0.176, 0.14, 0.145], [0.222, 0.26, 0.172], [0.26, 0.36, 0.186],
    [0.262, 0.42, 0.168], [0.232, 0.468, 0.14], [0.178, 0.5, 0.108], [0.086, 0.516, 0.08]
  ].map((a) => V3(a[0], a[1], a[2])));
  const SE = 2.7;
  const VM = (v: number) => 0.2 + 0.8 * v;
  const tPt = (v: number, a: number, off: number = 0) => {
    const c = prof.getPoint(VM(v)), s = Math.sin(a), co = Math.cos(a);
    const px = Math.sign(s) * Math.pow(Math.abs(s), 2 / SE), pz = Math.sign(co) * Math.pow(Math.abs(co), 2 / SE);
    const an = Math.atan2(s, co);
    const pec = 0.013 * Math.exp(-Math.pow((v - 0.69) / 0.12, 2)) * (Math.exp(-Math.pow((an - 0.42) / 0.3, 2)) + Math.exp(-Math.pow((an + 0.42) / 0.3, 2)));
    return V3(px * (c.x + off), c.y, pz * (c.z + off) * (co < 0 ? 0.94 : 1) + pec * Math.max(0, co));
  };
  const loft = (fn: (v: number, a: number) => any, NV: number, NA: number) => {
    const pos: number[] = [], idx: number[] = [];
    for (let i = 0; i <= NV; i++) for (let j = 0; j <= NA; j++) { const p = fn(i / NV, (j / NA) * Math.PI * 2); pos.push(p.x, p.y, p.z); }
    for (let i = 0; i < NV; i++) for (let j = 0; j < NA; j++) {
      const a = i * (NA + 1) + j, b = a + NA + 1;
      idx.push(a, a + 1, b, a + 1, b + 1, b);
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals(); return g;
  };
  const torso = new THREE.Mesh(loft((v, a) => tPt(v * 1.25 - 0.25, a + Math.PI), 110, 140), M.body); torsoG.add(torso);
  const waist = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 24), M.joint); waist.scale.set(0.158, 0.04, 0.13); waist.position.y = -0.198; torsoG.add(waist);

  const tube = (pts: any[], r: number, mat: any, closed?: boolean) => new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, !!closed), Math.max(24, pts.length * 4), r, 8, !!closed), mat);
  const seamLine = (fn: (t: number) => any, n: number) => { const p = []; for (let i = 0; i <= n; i++) p.push(fn(i / n)); return tube(p, 0.0011, M.seam); };
  const tq = (t: number, a: number, off: number = 0) => tPt((t - 0.2) / 0.8, a, off);
  [-1, 1].forEach((sg) => {
    torsoG.add(seamLine((t) => tq(0.8 - 0.17 * t, sg * (0.8 - 0.74 * Math.pow(t, 0.8)), 0.0004), 30));
    torsoG.add(seamLine((t) => tq(0.7 - 0.42 * t, sg * (1.48 + 0.06 * t), 0.0004), 24));
  });
  torsoG.add(seamLine((t) => { const a = -1.3 + 2.6 * t; return tq(0.53 - 0.035 * Math.abs(Math.sin(a * 1.2)) + 0.012 * Math.cos(a * 2.4), a, 0.0004); }, 72));
  torsoG.add(seamLine((t) => tq(0.5 - 0.22 * t, 0, 0.0004), 20));
  const chestPts: any[] = []; for (let i = 0; i <= 10; i++) chestPts.push(tq(0.6 + 0.09 * (i / 10), 0, 0.0016));
  const chest = tube(chestPts, 0.0046, M.neon); torsoG.add(chest);
  const chestGlow = glow(0.11, 0.5); chestGlow.position.copy(tq(0.645, 0, 0.014)); torsoG.add(chestGlow);

  // ---------- KORTEX wordmark printed on the left pec ----------
  const lab = document.createElement('canvas'); lab.width = 1024; lab.height = 176;
  const labTex = new THREE.CanvasTexture(lab); labTex.colorSpace = THREE.SRGBColorSpace; labTex.anisotropy = Math.min(8, R.capabilities.getMaxAnisotropy());
  const drawLab = () => {
    const g = lab.getContext('2d')!; g.clearRect(0, 0, lab.width, lab.height);
    const txt = 'KODEV', sp = 0.16; let fs = 120;
    g.font = '400 ' + fs + 'px Michroma, Arial, sans-serif';
    const wOf = () => { let w = 0; for (const ch of txt) w += g.measureText(ch).width; return w + sp * fs * (txt.length - 1); };
    fs = Math.floor(fs * Math.min(1, 980 / wOf())); g.font = '400 ' + fs + 'px Michroma, Arial, sans-serif';
    let x = (lab.width - wOf()) / 2; g.fillStyle = '#1b1f21'; g.textBaseline = 'middle';
    for (const ch of txt) { g.fillText(ch, x, lab.height / 2 + 4); x += g.measureText(ch).width + sp * fs; }
    labTex.needsUpdate = true;
  };
  drawLab();
  try { if (document.fonts && document.fonts.load) document.fonts.load('120px Michroma').then(drawLab, () => {}); } catch (e) {}
  const patch = (t0: number, t1: number, a0: number, a1: number, off: number, NV: number, NA: number) => {
    const pos: number[] = [], uv: number[] = [], idx: number[] = [];
    for (let i = 0; i <= NV; i++) for (let j = 0; j <= NA; j++) {
      const v = i / NV, u = j / NA, p = tq(t0 + (t1 - t0) * v, a0 + (a1 - a0) * u, off);
      pos.push(p.x, p.y, p.z); uv.push(u, v);
    }
    for (let i = 0; i < NV; i++) for (let j = 0; j < NA; j++) { const a = i * (NA + 1) + j, b = a + NA + 1; idx.push(a, a + 1, b, a + 1, b + 1, b); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals(); return g;
  };
  const labMat = new THREE.MeshStandardMaterial({ map: labTex, transparent: true, roughness: 0.55, metalness: 0.15, polygonOffset: true, polygonOffsetFactor: -2 });
  torsoG.add(new THREE.Mesh(patch(0.577, 0.623, 0.13, 0.9, 0.0012, 8, 56), labMat));

  // ---------- shoulders and arms ----------
  const lathe = (pts: number[][], mat: any, seg?: number) => {
    let pList = pts.slice();
    if (pList[0][1] > pList[pList.length - 1][1]) pList = pList.reverse();
    const c = new THREE.CatmullRomCurve3(pList.map((p) => V3(p[0], p[1], 0)), false, 'centripetal');
    const sm = c.getSpacedPoints(Math.max(40, pList.length * 8)).map((p: any) => new THREE.Vector2(Math.max(0, p.x), p.y));
    sm[0].x = 0; sm[sm.length - 1].x = pList[pList.length - 1][0];
    return new THREE.Mesh(new THREE.LatheGeometry(sm, seg || 64), mat);
  };
  const arms: any[] = [];
  [-1, 1].forEach((sg) => {
    const S = new THREE.Group(); S.position.set(sg * 0.246, 0.392, -0.004); S.rotation.z = sg * 0.06; torsoG.add(S);
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.062, 40, 28), M.joint); ball.position.set(-sg * 0.016, -0.036, 0); S.add(ball);
    const delt = new THREE.Mesh(new THREE.SphereGeometry(1, 72, 48, 0, Math.PI * 2, 0, Math.PI * 0.62), M.body);
    delt.scale.set(0.09, 0.104, 0.098); delt.position.y = -0.012; S.add(delt);
    const lip = new THREE.Mesh(new THREE.TorusGeometry(0.074, 0.0095, 16, 72), M.joint); lip.rotation.x = Math.PI / 2; lip.position.y = -0.052; lip.scale.y = 1.08; S.add(lip);
    const upper = new THREE.Group(); upper.rotation.x = 0.04; upper.position.x = sg * 0.012; S.add(upper);
    upper.add(lathe([[0, -0.04], [0.069, -0.05], [0.075, -0.12], [0.072, -0.2], [0.064, -0.27], [0.059, -0.3], [0, -0.318]], M.body));
    const elbow = new THREE.Group(); elbow.position.y = -0.33; upper.add(elbow);
    elbow.add(new THREE.Mesh(new THREE.SphereGeometry(0.059, 40, 28), M.joint));
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.039, 0.039, 0.126, 40), M.joint); disc.rotation.z = Math.PI / 2; elbow.add(disc);
    const discIn = new THREE.Mesh(new THREE.CylinderGeometry(0.021, 0.021, 0.13, 32), M.core); discIn.rotation.z = Math.PI / 2; elbow.add(discIn);
    const fore = new THREE.Group(); fore.rotation.x = -0.35; elbow.add(fore);
    fore.add(lathe([[0, -0.01], [0.058, -0.02], [0.065, -0.085], [0.06, -0.18], [0.051, -0.26], [0, -0.278]], M.body));
    arms.push({ S, upper, fore });
  });

  // ---------- neck ----------
  const neckG = new THREE.Group(); neckG.position.set(0, 0.476, 0.004); torsoG.add(neckG);
  neckG.add(lathe([[0, 0], [0.086, 0], [0.08, 0.04], [0.073, 0.085], [0.071, 0.13], [0.074, 0.18], [0, 0.19]], M.body, 56));
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.088, 0.013, 20, 72), M.joint); collar.rotation.x = Math.PI / 2; collar.position.y = 0.035; neckG.add(collar);

  // ---------- head: egg-shaped shell, mirror visor, neon slit, ear disc ----------
  const headG = new THREE.Group(); headG.position.set(0, 0.165, 0.004); neckG.add(headG);
  const headIn = new THREE.Group(); headIn.position.set(0, 0.125, 0.014); headIn.rotation.x = -0.08; headIn.scale.setScalar(1.24); headG.add(headIn);
  const hp = (x: number, y: number, z: number, k: number) => {
    const t = Math.max(0, -y);
    const sx = 0.1 * (1 - 0.34 * Math.pow(t, 1.5));
    const sz = (z > 0 ? 0.118 : 0.13) * (1 - 0.1 * t);
    const yy = y >= 0 ? y * 0.134 : y * 0.162;
    return V3(x * sx * k, yy * k, (z * sz + 0.03 * t * t) * k);
  };
  const deform = (g: any, k: number) => {
    const p = g.attributes.position, v = new THREE.Vector3();
    for (let i = 0; i < p.count; i++) { v.fromBufferAttribute(p, i); const q = hp(v.x, v.y, v.z, k); p.setXYZ(i, q.x, q.y, q.z); }
    g.computeVertexNormals(); return g;
  };
  const shellG = new THREE.SphereGeometry(1, 128, 96); shellG.rotateY(-Math.PI / 2);
  headIn.add(new THREE.Mesh(deform(shellG, 1), M.shell));
  const visorG = new THREE.SphereGeometry(1, 120, 80, Math.PI / 2 - 1.02, 2.04, Math.PI * 0.37, Math.PI * 0.5);
  headIn.add(new THREE.Mesh(deform(visorG, 1.006), M.visor));
  const unit = (a: number, y: number) => { const r = Math.sqrt(1 - y * y); return [r * Math.sin(a), y, r * Math.cos(a)]; };
  const slitY = -0.15, slitA = 0.86;
  const slitPts: any[] = []; for (let i = 0; i <= 40; i++) { const u = unit(-slitA + 2 * slitA * (i / 40), slitY); slitPts.push(hp(u[0], u[1], u[2], 1.0135)); }
  const slitCurve = new THREE.CatmullRomCurve3(slitPts);
  headIn.add(new THREE.Mesh(new THREE.TubeGeometry(slitCurve, 80, 0.0036, 8, false), M.neon));
  const slitGlows: any[] = [];
  for (let i = 0; i < 7; i++) { const g = glow(0.07, 0.22); g.position.copy(slitCurve.getPointAt(0.08 + 0.84 * (i / 6))); headIn.add(g); slitGlows.push(g); }
  const scan = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 12), M.hot); scan.scale.set(0.016, 0.0052, 0.0052); headIn.add(scan);
  const scanGlow = glow(0.085, 0.75); headIn.add(scanGlow);
  const visorLight = new THREE.PointLight(LIME, 0.035, 0, 2); visorLight.position.set(0, -0.03, 0.2); headIn.add(visorLight);

  [-1, 1].forEach((sg) => {
    const e = new THREE.Group(); const u = unit(sg * 1.62, -0.1); e.position.copy(hp(u[0], u[1], u[2], 1)); e.position.x += sg * 0.004; headIn.add(e);
    const d1 = new THREE.Mesh(new THREE.CylinderGeometry(0.044, 0.046, 0.022, 48), M.joint); d1.rotation.z = Math.PI / 2; e.add(d1);
    const d2 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.026, 40), M.core); d2.rotation.z = Math.PI / 2; e.add(d2);
    const d3 = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.03, 32), M.joint); d3.rotation.z = Math.PI / 2; e.add(d3);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.037, 0.0022, 12, 64), M.neon); ring.rotation.y = Math.PI / 2; ring.position.x = sg * 0.0115; e.add(ring);
  });

  const camera = new THREE.PerspectiveCamera(opt.fov || 25, 0.72, 0.1, 20);
  const camPos = opt.cam || [0.0, 0.4, 2.45], camTgt = opt.tgt || [0.0, 0.47, 0];
  camera.position.set(camPos[0], camPos[1], camPos[2]); camera.lookAt(camTgt[0], camTgt[1], camTgt[2]);

  const st = { yaw: -0.5, pitch: 0.05, torso: -0.5, trk: 0, flash: 0, s: 0.5 };
  const tmpT = new THREE.Vector3(), X = new THREE.Vector3(1, 0, 0);
  const BASE = opt.base == null ? -0.55 : opt.base;
  function frame(t: number, dt: number, input: any) {
    const a = input.snap ? 1 : Math.min(1, dt * 4.2);
    const nx = input.nx, ny = input.ny;
    const tTorso = 0.25 * nx;
    const tYaw = Math.max(-0.95, Math.min(0.95, 0.85 * nx - BASE - tTorso));
    const tPitch = 0.04 + 0.32 * ny;
    st.torso += (tTorso - st.torso) * (input.snap ? 1 : a * 0.6);
    st.yaw += (tYaw - st.yaw) * a;
    st.pitch += (tPitch - st.pitch) * a;
    st.trk += ((input.active || 0) - st.trk) * (input.snap ? 1 : Math.min(1, dt * 3));
    st.flash = Math.max(input.flash || 0, st.flash - dt * 2.4);
    root.rotation.y = BASE;
    torsoG.rotation.y = st.torso;
    torsoG.position.y = 0.004 * Math.sin(t * 1.15);
    neckG.rotation.y = st.yaw * 0.35; neckG.rotation.x = st.pitch * 0.3;
    headG.rotation.y = st.yaw * 0.65; headG.rotation.x = st.pitch * 0.7; headG.rotation.z = -0.03 * st.yaw;
    arms.forEach((m, i) => { m.upper.rotation.x = 0.04 + 0.012 * Math.sin(t * 1.15 + i); m.S.position.y = 0.392 + 0.0025 * Math.sin(t * 1.15); m.fore.rotation.x = -0.35 - 0.02 * Math.sin(t * 0.9 + i); });
    const sweep = 0.5 + 0.4 * Math.sin(t * 1.5);
    const sTarget = sweep * (1 - st.trk) + 0.5 * st.trk;
    st.s += (sTarget - st.s) * (input.snap ? 1 : Math.min(1, dt * 6));
    const p = slitCurve.getPointAt(st.s); slitCurve.getTangentAt(st.s, tmpT);
    scan.position.copy(p); scan.quaternion.setFromUnitVectors(X, tmpT.normalize());
    const boost = 1 + st.flash * 1.6 + st.trk * 0.35;
    scan.scale.set(0.016 * (1 + st.trk * 0.5 + st.flash), 0.0052, 0.0052);
    scanGlow.position.copy(p); scanGlow.material.opacity = Math.min(1, 0.6 * boost);
    const sz = 0.085 * (1 + st.flash * 0.8 + st.trk * 0.2); scanGlow.scale.set(sz, sz, 1);
    const pulse = 0.5 + 0.5 * Math.sin(t * 2.2);
    slitGlows.forEach((g) => { g.material.opacity = Math.min(1, (0.16 + 0.08 * pulse) * boost); });
    chestGlow.material.opacity = Math.min(1, 0.32 + 0.3 * pulse + st.flash * 0.5);
    visorLight.intensity = 0.03 * boost;
    R.render(scene, camera);
  }
  function resize(w: number, h: number, dpr?: number) {
    R.setPixelRatio(dpr || 1); R.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
  }
  function dispose() {
    scene.traverse((o: any) => { if (o.geometry) o.geometry.dispose(); if (o.material) { if (o.material.map) o.material.map.dispose(); o.material.dispose(); } });
    envTex.dispose(); glowTex.dispose(); labTex.dispose(); Object.values(M).forEach((m) => m.dispose()); R.dispose();
  }
  return { frame, resize, dispose, st };
}
