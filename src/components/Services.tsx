import React from 'react';

export const Services: React.FC = () => {
  return (
    <section id="servicios" aria-labelledby="serv-h" style={{ position: 'relative', overflow: 'hidden', background: '#F1F2F0', padding: 'clamp(48px,5vw,72px) 0 clamp(64px,7vw,104px)' }}>
      <span className="k-f3" aria-hidden="true" style={{ position: 'absolute', zIndex: 0, pointerEvents: 'none', left: '-70px', bottom: '90px', width: '220px', height: '220px', borderRadius: '50%', opacity: 0.22, background: 'radial-gradient(circle at 32% 28%,#F1FFB8 0%,#A6D419 42%,#557D00 100%)' }}></span>
      <span className="k-f1" aria-hidden="true" style={{ position: 'absolute', zIndex: 0, pointerEvents: 'none', left: '150px', bottom: '40px', width: '70px', height: '70px', borderRadius: '50%', opacity: 0.28, background: 'radial-gradient(circle at 32% 28%,#F1FFB8 0%,#A6D419 42%,#557D00 100%)' }}></span>
      <span className="k-f2" aria-hidden="true" style={{ position: 'absolute', zIndex: 0, pointerEvents: 'none', right: '4%', top: '30px', width: '54px', height: '260px', borderRadius: '999px', opacity: 0.55, transform: 'rotate(32deg)', background: 'linear-gradient(90deg,#E9EBEE 0%,#FFFFFF 42%,#D3D7DB 78%,#C4C9CE 100%)' }}></span>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1352px', margin: '0 auto', padding: '0 clamp(16px,3vw,44px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px 48px', flexWrap: 'wrap' }}>
          <h2 id="serv-h" data-rv="clip" style={{ margin: 0, fontFamily: "Michroma, Arial, sans-serif", fontWeight: 400, fontSize: 'clamp(24px,2.8vw,40px)', lineHeight: 1.15, letterSpacing: '-.02em' }}>Lo que construimos</h2>
          <p data-rv="" data-d="2" style={{ margin: 0, maxWidth: '440px', fontSize: '17px', lineHeight: 1.5, color: '#3E4348' }}>Cada proyecto empieza por una arquitectura sólida y termina en software que enamora a tus usuarios y escala sin fricción. Sin plantillas genéricas ni deuda técnica.</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '48px' }}>
          {/* Card 1: Aplicaciones Web & SaaS */}
          <article className="k-card" data-rv="scale" data-d="1" style={{ flex: '2 1 620px', minWidth: 0, background: '#FFFFFF', borderRadius: '28px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div aria-hidden="true" style={{ position: 'relative', height: '270px' }}>
              <svg viewBox="0 0 600 270" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}>
                <defs>
                  <radialGradient id="ka-halo"><stop offset="0" style={{ stopColor: '#C6F23A', stopOpacity: 0.55 }}></stop><stop offset="1" style={{ stopColor: '#C6F23A', stopOpacity: 0 }}></stop></radialGradient>
                  <linearGradient id="ka-tile" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style={{ stopColor: '#E6FF92' }}></stop><stop offset="1" style={{ stopColor: '#A6D419' }}></stop></linearGradient>
                </defs>
                <path d="M258 114 H206 Q194 114 194 102 V70 Q194 58 182 58 H160" fill="none" stroke="#D3D6D9" style={{ strokeWidth: 1.5 }}></path>
                <path d="M258 156 H214 Q202 156 202 168 V200 Q202 212 190 212 H168" fill="none" stroke="#D3D6D9" style={{ strokeWidth: 1.5 }}></path>
                <path d="M258 135 H118" fill="none" stroke="#D3D6D9" style={{ strokeWidth: 1.5 }}></path>
                <path d="M342 112 H394 Q406 112 406 100 V68 Q406 56 418 56 H440" fill="none" stroke="#D3D6D9" style={{ strokeWidth: 1.5 }}></path>
                <path d="M342 135 H446" fill="none" stroke="#D3D6D9" style={{ strokeWidth: 1.5 }}></path>
                <path d="M342 158 H386 Q398 158 398 170 V202 Q398 214 410 214 H432" fill="none" stroke="#D3D6D9" style={{ strokeWidth: 1.5 }}></path>
                <path d="M300 93 V40 Q300 28 312 28 H346" fill="none" stroke="#D3D6D9" style={{ strokeWidth: 1.5 }}></path>
                <path d="M300 177 V236" fill="none" stroke="#D3D6D9" style={{ strokeWidth: 1.5 }}></path>
                <path className="k-run" pathLength="100" d="M258 114 H206 Q194 114 194 102 V70 Q194 58 182 58 H160" fill="none" stroke="#8DBA0A" style={{ strokeWidth: 2.6, strokeLinecap: 'round', animationDelay: '0.00s' }}></path>
                <path className="k-run" pathLength="100" d="M258 156 H214 Q202 156 202 168 V200 Q202 212 190 212 H168" fill="none" stroke="#8DBA0A" style={{ strokeWidth: 2.6, strokeLinecap: 'round', animationDelay: '-0.45s' }}></path>
                <path className="k-run" pathLength="100" d="M258 135 H118" fill="none" stroke="#8DBA0A" style={{ strokeWidth: 2.6, strokeLinecap: 'round', animationDelay: '-0.90s' }}></path>
                <path className="k-run" pathLength="100" d="M342 112 H394 Q406 112 406 100 V68 Q406 56 418 56 H440" fill="none" stroke="#8DBA0A" style={{ strokeWidth: 2.6, strokeLinecap: 'round', animationDelay: '-1.35s' }}></path>
                <path className="k-run" pathLength="100" d="M342 135 H446" fill="none" stroke="#8DBA0A" style={{ strokeWidth: 2.6, strokeLinecap: 'round', animationDelay: '-1.80s' }}></path>
                <path className="k-run" pathLength="100" d="M342 158 H386 Q398 158 398 170 V202 Q398 214 410 214 H432" fill="none" stroke="#8DBA0A" style={{ strokeWidth: 2.6, strokeLinecap: 'round', animationDelay: '-2.25s' }}></path>
                <path className="k-run" pathLength="100" d="M300 93 V40 Q300 28 312 28 H346" fill="none" stroke="#8DBA0A" style={{ strokeWidth: 2.6, strokeLinecap: 'round', animationDelay: '-2.70s' }}></path>
                <path className="k-run" pathLength="100" d="M300 177 V236" fill="none" stroke="#8DBA0A" style={{ strokeWidth: 2.6, strokeLinecap: 'round', animationDelay: '-3.15s' }}></path>
                <circle cx="160" cy="58" r="3.2" fill="#AEB3B8"></circle>
                <circle cx="168" cy="212" r="3.2" fill="#AEB3B8"></circle>
                <circle cx="118" cy="135" r="3.2" fill="#AEB3B8"></circle>
                <circle cx="440" cy="56" r="3.2" fill="#AEB3B8"></circle>
                <circle cx="446" cy="135" r="3.2" fill="#AEB3B8"></circle>
                <circle cx="432" cy="214" r="3.2" fill="#AEB3B8"></circle>
                <circle cx="346" cy="28" r="3.2" fill="#AEB3B8"></circle>
                <circle cx="300" cy="236" r="3.2" fill="#AEB3B8"></circle>
                <circle className="k-breath" cx="300" cy="135" r="82" fill="url(#ka-halo)"></circle>
                <rect x="247" y="82" width="106" height="106" rx="31" fill="#C6F23A" opacity=".3"></rect>
                <rect x="258" y="93" width="84" height="84" rx="24" fill="url(#ka-tile)"></rect>
                <rect x="263" y="97" width="74" height="32" rx="16" fill="#FFFFFF" opacity=".35"></rect>
                <rect x="258.75" y="93.75" width="82.5" height="82.5" rx="23.5" fill="none" stroke="#FFFFFF" opacity=".75" style={{ strokeWidth: 1.5 }}></rect>
                <svg x="263" y="96" width="74" height="83" viewBox="0 0 160 180" overflow="visible">
                  <defs>
                    <linearGradient id="kg-sv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style={{ stopColor: '#545C5E' }}></stop><stop offset="1" style={{ stopColor: '#202625' }}></stop></linearGradient>
                    <linearGradient id="kj-sv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style={{ stopColor: '#5A6066' }}></stop><stop offset="1" style={{ stopColor: '#111514' }}></stop></linearGradient>
                  </defs>
                  <g className="k-ant" style={{ animationDelay: '-.5s' }}><line x1="80" y1="36" x2="80" y2="18" stroke="#111514" style={{ strokeWidth: 4, strokeLinecap: 'round' }}></line><circle cx="80" cy="14" r="6.5" fill="#C6F23A"></circle><circle cx="78" cy="12" r="2" fill="#FFFFFF" opacity=".55"></circle></g>
                  <rect x="17" y="57" width="17" height="36" rx="8.5" fill="url(#kj-sv)"></rect><rect x="126" y="57" width="17" height="36" rx="8.5" fill="url(#kj-sv)"></rect>
                  <rect x="28" y="32" width="104" height="82" rx="32" fill="url(#kg-sv)"></rect>
                  <path d="M62 33 V51 M98 33 V51 M70 97 V113 M90 97 V113" stroke="#000000" opacity=".14" style={{ strokeWidth: 1.3 }}></path>
                  <ellipse cx="54" cy="43" rx="16" ry="5.5" fill="#FFFFFF" opacity=".38" transform="rotate(-12 54 43)"></ellipse>
                  <rect x="40" y="50" width="80" height="47" rx="19" fill="#111514"></rect>
                  <path d="M51 58 Q61 54 75 55" stroke="#FFFFFF" opacity=".2" style={{ strokeWidth: 3, strokeLinecap: 'round' }} fill="none"></path>
                  <ellipse className="k-eye" cx="64" cy="73" rx="5.5" ry="8" fill="#C6F23A" style={{ animationDelay: '.8s' }}></ellipse>
                  <ellipse className="k-eye" cx="96" cy="73" rx="5.5" ry="8" fill="#C6F23A" style={{ animationDelay: '.8s' }}></ellipse>
                  <rect x="72" y="112" width="16" height="9" rx="3" fill="#111514"></rect>
                  <circle cx="47" cy="128" r="7.5" fill="url(#kj-sv)"></circle><circle cx="113" cy="128" r="7.5" fill="url(#kj-sv)"></circle>
                  <rect x="33" y="131" width="13" height="29" rx="6.5" fill="url(#kg-sv)"></rect><rect x="114" y="131" width="13" height="29" rx="6.5" fill="url(#kg-sv)"></rect>
                  <circle cx="39.5" cy="164" r="6" fill="#111514"></circle><circle cx="120.5" cy="164" r="6" fill="#111514"></circle>
                  <rect x="50" y="118" width="60" height="50" rx="17" fill="url(#kg-sv)"></rect>
                  <ellipse cx="64" cy="125" rx="9" ry="3.2" fill="#FFFFFF" opacity=".32"></ellipse>
                  <circle className="k-pulse" cx="80" cy="127" r="3" fill="#C6F23A"></circle>
                </svg>
                <g className="k-badge"><circle cx="342" cy="94" r="12" fill="#0C0E0D"></circle><path d="M336.5 94 l3.6 3.6 6.6 -7" stroke="#C6F23A" style={{ strokeWidth: 2.4, strokeLinecap: 'round', strokeLinejoin: 'round' }} fill="none"></path></g>
                <g className="k-fs1"><rect x="92" y="46" width="62" height="24" rx="12" fill="#FDF1C7"></rect><text x="123.0" y="62" style={{ fontFamily: "Geist, Arial, sans-serif", fontSize: '12px', fontWeight: 500, fill: '#8A6A0C', textAnchor: 'middle' }}>Frontend</text></g>
                <g className="k-fs2"><rect x="92" y="200" width="70" height="24" rx="12" fill="#FCDCDC"></rect><text x="127.0" y="216" style={{ fontFamily: "Geist, Arial, sans-serif", fontSize: '12px', fontWeight: 500, fill: '#B3261E', textAnchor: 'middle' }}>Backend</text></g>
                <g className="k-fs3"><rect x="446" y="44" width="56" height="24" rx="12" fill="#DDF5E3"></rect><text x="474.0" y="60" style={{ fontFamily: "Geist, Arial, sans-serif", fontSize: '12px', fontWeight: 500, fill: '#2E7D4F', textAnchor: 'middle' }}>APIs</text></g>
                <g className="k-fs1"><rect x="452" y="123" width="52" height="24" rx="12" fill="#FFE4D2"></rect><text x="478.0" y="139" style={{ fontFamily: "Geist, Arial, sans-serif", fontSize: '12px', fontWeight: 500, fill: '#A84D16', textAnchor: 'middle' }}>Auth</text></g>
                <g className="k-fs2"><rect x="438" y="202" width="92" height="24" rx="12" fill="#E4E4F7"></rect><text x="484.0" y="218" style={{ fontFamily: "Geist, Arial, sans-serif", fontSize: '12px', fontWeight: 500, fill: '#4B4C9A', textAnchor: 'middle' }}>BBDD SQL</text></g>
                <g className="k-fs3"><rect x="352" y="16" width="80" height="24" rx="12" fill="#DCEBFF"></rect><text x="392.0" y="32" style={{ fontFamily: "Geist, Arial, sans-serif", fontSize: '12px', fontWeight: 500, fill: '#2D5BB9', textAnchor: 'middle' }}>Edge CDN</text></g>
              </svg>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px' }}>
              <div style={{ maxWidth: '480px' }}>
                <h3 style={{ margin: '0 0 8px', fontSize: '22px', fontWeight: 600, letterSpacing: '-.01em' }}>Aplicaciones Web & SaaS</h3>
                <p style={{ margin: 0, fontSize: '15.5px', lineHeight: 1.5, color: '#5B6168' }}>Plataformas cloud a medida, paneles de control y software reactivo con React, Next.js y TypeScript. Arquitectura modular y respuesta en milisegundos.</p>
              </div>
              <a className="k-btn" href="#agentes" aria-label="Ver especialidades" style={{ flex: '0 0 auto', width: '48px', height: '48px', borderRadius: '50%', background: '#0C0E0D', color: '#F5F7F8', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }} aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"></path></svg>
              </a>
            </div>
          </article>

          {/* Card 2: Sitios Corporativos & Landing Pages */}
          <article className="k-card" data-rv="scale" data-d="2" style={{ flex: '1 1 340px', minWidth: 0, background: '#FFFFFF', borderRadius: '28px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div aria-hidden="true" style={{ position: 'relative', height: '270px', overflow: 'hidden' }}>
              <span className="k-glowb" style={{ position: 'absolute', left: '50%', top: '60%', width: '280px', height: '96px', translate: '-50% -50%', borderRadius: '50%', background: 'radial-gradient(closest-side,rgba(166,214,20,.6),rgba(198,242,58,0))', filter: 'blur(12px)' }}></span>
              <span className="k-mess1" style={{ position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%', display: 'inline-flex', alignItems: 'center', gap: '8px', height: '38px', padding: '0 14px 0 7px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid #ECEDEB', boxShadow: '0 10px 24px rgba(12,14,13,.08)', fontSize: '12.5px', color: '#4E545A', whiteSpace: 'nowrap' }}>
                <span style={{ width: '25px', height: '25px', borderRadius: '8px', background: '#F1F2F0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C0E0D" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5"></path></svg></span>Diseño en Figma
              </span>
              <span className="k-mess2" style={{ position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%', display: 'inline-flex', alignItems: 'center', gap: '8px', height: '38px', padding: '0 14px 0 7px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid #ECEDEB', boxShadow: '0 10px 24px rgba(12,14,13,.08)', fontSize: '12.5px', color: '#4E545A', whiteSpace: 'nowrap' }}>
                <span style={{ width: '25px', height: '25px', borderRadius: '8px', background: '#F1F2F0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C0E0D" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M16 18l6-6-6-6 M8 6l-6 6 6 6"></path></svg></span>Código limpio y modular
              </span>
              <span className="k-mess3" style={{ position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%', display: 'inline-flex', alignItems: 'center', gap: '8px', height: '38px', padding: '0 14px 0 7px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid #ECEDEB', boxShadow: '0 10px 24px rgba(12,14,13,.08)', fontSize: '12.5px', color: '#4E545A', whiteSpace: 'nowrap' }}>
                <span style={{ width: '25px', height: '25px', borderRadius: '8px', background: '#F1F2F0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C0E0D" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg></span>Animaciones a 60 FPS
              </span>
              <span className="k-mess4" style={{ position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%', display: 'inline-flex', alignItems: 'center', gap: '8px', height: '38px', padding: '0 14px 0 7px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid #ECEDEB', boxShadow: '0 10px 24px rgba(12,14,13,.08)', fontSize: '12.5px', color: '#4E545A', whiteSpace: 'nowrap' }}>
                <span style={{ width: '25px', height: '25px', borderRadius: '8px', background: '#F1F2F0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0C0E0D" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span>Lanzamiento a producción
              </span>
              <span className="k-ripple" style={{ position: 'absolute', left: '50%', top: '50%', width: '226px', height: '58px', translate: '-50% -50%', borderRadius: '999px', border: '2px solid #A6D614', boxSizing: 'border-box' }}></span>
              <span className="k-au-press" style={{ position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%', display: 'inline-flex', alignItems: 'center', gap: '10px', height: '56px', padding: '0 24px 0 10px', borderRadius: '999px', background: 'linear-gradient(180deg,#E4FF8A,#B2DF1C)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.85), inset 0 -2px 0 rgba(80,110,0,.18),0 14px 30px rgba(140,190,10,.38)', fontSize: '15px', fontWeight: 600, color: '#0C0E0D', whiteSpace: 'nowrap' }}>
                <span style={{ width: '36px', height: '36px', borderRadius: '12px', background: 'rgba(255,255,255,.55)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><svg className="k-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0C0E0D" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M4 12a8 8 0 0 1 14-5.3L20 9 M20 4v5h-5 M20 12a8 8 0 0 1-14 5.3L4 15 M4 20v-5h5"></path></svg></span>Construir landing
              </span>
              <span className="k-done" style={{ position: 'absolute', left: '50%', top: 'calc(50% + 48px)', display: 'inline-flex', alignItems: 'center', gap: '6px', height: '30px', padding: '0 12px', borderRadius: '999px', background: '#0C0E0D', color: '#F5F7F8', fontSize: '12px', whiteSpace: 'nowrap' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ strokeWidth: 2.6, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M5 12l5 5 9-10"></path></svg>Lighthouse 100/100 en 1.1 s
              </span>
              <svg className="k-au-cursor" width="26" height="26" viewBox="0 0 24 24" style={{ position: 'absolute', left: 'calc(50% + 46px)', top: 'calc(50% + 4px)' }}>
                <path d="M5 3l14 8-6 1.6L10 19z" fill="#0C0E0D" stroke="#FFFFFF" style={{ strokeWidth: 1.5, strokeLinejoin: 'round' }}></path>
              </svg>
            </div>
            <div>
              <h3 style={{ margin: '0 0 8px', fontSize: '22px', fontWeight: 600, letterSpacing: '-.01em' }}>Sitios Corporativos & Landing Pages</h3>
              <p style={{ margin: 0, fontSize: '15.5px', lineHeight: 1.5, color: '#5B6168' }}>Sitios de marca de alta conversión diseñados para cautivar y vender. Animaciones interactivas fluidas, SEO técnico y carga ultrarrápida.</p>
            </div>
          </article>

          {/* Card 3: E-commerce Headless & Stripe */}
          <article className="k-card" data-rv="scale" data-d="1" style={{ flex: '1 1 280px', minWidth: 0, background: '#FFFFFF', borderRadius: '28px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div aria-hidden="true" style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
              <span style={{ position: 'absolute', left: '50%', top: '10px', translate: '-50% 0', display: 'inline-flex', alignItems: 'center', gap: '8px', height: '32px', padding: '0 14px', borderRadius: '999px', background: '#0C0E0D', color: '#F5F7F8', fontSize: '12px', whiteSpace: 'nowrap' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M3 4h2l2.4 11h10.2L20 8H6.2 M8 19.5a1.2 1.2 0 1 0 2.4 0 M16 19.5a1.2 1.2 0 1 0 2.4 0"></path></svg>¿Catálogo sincronizado y checkout 1-clic?
              </span>
              <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', translate: '0 -50%', padding: '14px 0', overflow: 'hidden', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 20%,#000 80%,transparent)', maskImage: 'linear-gradient(90deg,transparent,#000 20%,#000 80%,transparent)' }}>
                <div className="k-slide" style={{ display: 'flex', width: 'max-content' }}>
                  <div style={{ display: 'flex', gap: '14px', paddingRight: '14px' }}>
                    <span style={{ flex: '0 0 auto', width: '58px', height: '58px', boxSizing: 'border-box', borderRadius: '17px', background: '#635BFF', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.35),0 8px 18px rgba(12,14,13,.12)' }}><span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '.02em', color: '#FFFFFF' }}>STRIPE</span></span>
                    <span style={{ flex: '0 0 auto', width: '58px', height: '58px', boxSizing: 'border-box', borderRadius: '17px', background: '#96BF48', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.35),0 8px 18px rgba(12,14,13,.12)' }}><span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '.02em', color: '#FFFFFF' }}>SHOP</span></span>
                    <span style={{ flex: '0 0 auto', width: '58px', height: '58px', boxSizing: 'border-box', borderRadius: '17px', background: '#F2B630', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.35),0 8px 18px rgba(12,14,13,.12)' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C0E0D" style={{ strokeWidth: 1.9, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg></span>
                    <span style={{ flex: '0 0 auto', width: '58px', height: '58px', boxSizing: 'border-box', borderRadius: '17px', background: '#000000', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.35),0 8px 18px rgba(12,14,13,.12)' }}><span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '.02em', color: '#FFFFFF' }}>NEXT</span></span>
                    <span style={{ flex: '0 0 auto', width: '58px', height: '58px', boxSizing: 'border-box', borderRadius: '17px', background: '#61DAFB', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.35),0 8px 18px rgba(12,14,13,.12)' }}><span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '.02em', color: '#0C0E0D' }}>REACT</span></span>
                    <span style={{ flex: '0 0 auto', width: '58px', height: '58px', boxSizing: 'border-box', borderRadius: '17px', background: '#FFFFFF', border: '1px solid #E3E5E2', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.35),0 8px 18px rgba(12,14,13,.12)' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C0E0D" style={{ strokeWidth: 1.9, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M3 5h18v14H3z M3 7l9 6 9-6"></path></svg></span>
                  </div>
                </div>
              </div>
              <span className="k-breath" style={{ position: 'absolute', left: '50%', top: '50%', width: '150px', height: '150px', margin: '-75px 0 0 -75px', borderRadius: '50%', background: 'radial-gradient(closest-side,rgba(198,242,58,.5),rgba(198,242,58,0))' }}></span>
              <span style={{ position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%', width: '96px', height: '96px', borderRadius: '30px', background: '#ECF8C6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ width: '76px', height: '76px', borderRadius: '23px', background: 'linear-gradient(180deg,#E6FF92,#A6D419)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.85),0 10px 24px rgba(140,190,10,.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0C0E0D" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z M3 6h18 M16 10a4 4 0 0 1-8 0"></path></svg></span>
              </span>
              <span className="k-type" style={{ position: 'absolute', left: '50%', bottom: '10px', display: 'inline-flex', alignItems: 'center', gap: '8px', height: '34px', padding: '0 14px 0 10px', borderRadius: '999px', background: '#FFFFFF', border: '1px solid #ECEDEB', boxShadow: '0 8px 20px rgba(12,14,13,.08)', fontSize: '12.5px', whiteSpace: 'nowrap' }}>
                <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#635BFF', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" style={{ strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M5 12l5 5 9-10"></path></svg></span>0.8s · Checkout Stripe activo, catálogo en vivo
              </span>
            </div>
            <div>
              <h3 style={{ margin: '0 0 8px', fontSize: '20px', fontWeight: 600, letterSpacing: '-.01em' }}>E-commerce Headless & Stripe</h3>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.5, color: '#5B6168' }}>Comercio electrónico ultrarrápido desacoplado con Shopify o Medusa, pasarela Stripe integrada y catálogo sincronizado.</p>
            </div>
          </article>

          {/* Card 4: Rendimiento & Core Web Vitals */}
          <article className="k-card" data-rv="scale" data-d="2" style={{ flex: '1 1 280px', minWidth: 0, background: '#FFFFFF', borderRadius: '28px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div aria-hidden="true" style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
              <span style={{ position: 'absolute', left: '50%', bottom: '-262px', width: '420px', height: '420px', translate: '-50% 0', borderRadius: '50%', border: '40px solid rgba(198,242,58,.3)', boxSizing: 'border-box' }}></span>
              <span style={{ position: 'absolute', left: '50%', bottom: '-222px', width: '340px', height: '340px', translate: '-50% 0', borderRadius: '50%', background: 'radial-gradient(closest-side,rgba(198,242,58,.18),rgba(198,242,58,0))' }}></span>
              <span className="k-pop-out" data-d="2" style={{ position: 'absolute', left: '22%', top: '92px', translate: '-50% 0' }}><span className="k-f1" style={{ display: 'inline-flex', width: '48px', height: '48px', borderRadius: '50%', background: '#FFFFFF', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 -3px 0 rgba(0,0,0,.12), inset 0 2px 0 rgba(255,255,255,.45),0 10px 20px rgba(12,14,13,.14)' }}><span style={{ fontSize: '15px', fontWeight: 700, color: '#0C0E0D' }}>LCP</span></span></span>
              <span className="k-pop-out" data-d="3" style={{ position: 'absolute', left: '36%', top: '42px', translate: '-50% 0' }}><span className="k-f3" style={{ display: 'inline-flex', width: '48px', height: '48px', borderRadius: '50%', background: '#C6F23A', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 -3px 0 rgba(0,0,0,.12), inset 0 2px 0 rgba(255,255,255,.45),0 10px 20px rgba(12,14,13,.14)' }}><span style={{ fontSize: '15px', fontWeight: 700, color: '#0C0E0D' }}>100</span></span></span>
              <span className="k-pop-out" data-d="4" style={{ position: 'absolute', left: '52%', top: '18px', translate: '-50% 0' }}><span className="k-f2" style={{ display: 'inline-flex', width: '48px', height: '48px', borderRadius: '50%', background: '#0C0E0D', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 -3px 0 rgba(0,0,0,.12), inset 0 2px 0 rgba(255,255,255,.45),0 10px 20px rgba(12,14,13,.14)' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5F7F8" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg></span></span>
              <span className="k-pop-out" data-d="5" style={{ position: 'absolute', left: '67%', top: '44px', translate: '-50% 0' }}><span className="k-f4" style={{ display: 'inline-flex', width: '48px', height: '48px', borderRadius: '50%', background: '#A9C1F5', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 -3px 0 rgba(0,0,0,.12), inset 0 2px 0 rgba(255,255,255,.45),0 10px 20px rgba(12,14,13,.14)' }}><span style={{ fontSize: '14px', fontWeight: 700, color: '#0C0E0D' }}>CLS</span></span></span>
              <span className="k-pop-out" data-d="6" style={{ position: 'absolute', left: '80%', top: '96px', translate: '-50% 0' }}><span className="k-f1" style={{ display: 'inline-flex', width: '48px', height: '48px', borderRadius: '50%', background: '#1E9E5A', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 -3px 0 rgba(0,0,0,.12), inset 0 2px 0 rgba(255,255,255,.45),0 10px 20px rgba(12,14,13,.14)' }}><span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '.03em', color: '#FFFFFF' }}>INP</span></span></span>
              <span style={{ position: 'absolute', left: '50%', bottom: '52px', width: '172px', height: '24px', translate: '-50% 0', background: '#E4E6E3', borderRadius: '8px 8px 0 0' }}></span>
              <span style={{ position: 'absolute', left: 'calc(50% - 100px)', bottom: '66px', width: '100px', height: '30px', background: '#FFFFFF', border: '1px solid #ECEDEB', borderRadius: '6px', transform: 'skewX(20deg) rotate(-9deg)', boxShadow: '0 8px 18px rgba(12,14,13,.06)' }}></span>
              <span style={{ position: 'absolute', left: 'calc(50% + 2px)', bottom: '66px', width: '100px', height: '30px', background: '#FFFFFF', border: '1px solid #ECEDEB', borderRadius: '6px', transform: 'skewX(-20deg) rotate(9deg)', boxShadow: '0 8px 18px rgba(12,14,13,.06)' }}></span>
              <span style={{ position: 'absolute', left: '50%', bottom: '-6px', width: '196px', height: '64px', translate: '-50% 0', background: 'linear-gradient(180deg,#FFFFFF,#EDEFEC)', border: '1px solid #E8EAE7', borderRadius: '10px', boxShadow: '0 16px 30px rgba(12,14,13,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '11.5px', fontWeight: 500, color: '#6A7076' }}>Auditoría Lighthouse</span></span>
              <span className="k-scan2" style={{ position: 'absolute', left: '50%', bottom: '52px', width: '172px', height: '2px', translate: '-50% 0', background: '#9BC40F', boxShadow: '0 0 14px 3px rgba(198,242,58,.9)' }}></span>
            </div>
            <div>
              <h3 style={{ margin: '0 0 8px', fontSize: '20px', fontWeight: 600, letterSpacing: '-.01em' }}>Rendimiento & Core Web Vitals</h3>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.5, color: '#5B6168' }}>Aceleración de código, reducción de bundle, optimización LCP / CLS / INP y auditorías técnicas para posicionar en Google.</p>
            </div>
          </article>

          {/* Card 5: Sistemas de Diseño & UI */}
          <article className="k-card" data-rv="scale" data-d="3" style={{ flex: '1 1 280px', minWidth: 0, background: '#FFFFFF', borderRadius: '28px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div aria-hidden="true" style={{ position: 'relative', height: '240px' }}>
              <span style={{ position: 'absolute', left: 0, top: 0, display: 'inline-flex', alignItems: 'center', gap: '9px', fontSize: '13px', fontWeight: 500 }}><span className="k-halo" style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#8DBA0A' }}></span>Design tokens en vivo</span>
              <span className="k-f2" style={{ position: 'absolute', right: 0, top: '-4px', display: 'inline-flex', alignItems: 'center', height: '30px', padding: '0 12px', borderRadius: '999px', background: '#0C0E0D', color: '#C6F23A', fontSize: '12px', fontWeight: 600 }}>+99% consistencia</span>
              <svg viewBox="0 0 240 134" style={{ position: 'absolute', left: '50%', bottom: '6px', translate: '-50% 0', width: 'min(100%,300px)', height: 'auto', overflow: 'visible' }}>
                <defs><radialGradient id="kgd" cx="50%" cy="35%" r="70%"><stop offset="0" style={{ stopColor: '#FFFFFF' }}></stop><stop offset="1" style={{ stopColor: '#D3D7DB' }}></stop></radialGradient></defs>
                <ellipse cx="120" cy="132" rx="104" ry="6" fill="#0C0E0D" opacity=".06"></ellipse>
                <path pathLength="100" d="M30 130 A90 90 0 0 1 210 130" fill="none" stroke="#EEF8C9" style={{ strokeWidth: 34, strokeDasharray: '19.4 80.6', strokeDashoffset: 0 }}></path>
                <path pathLength="100" d="M30 130 A90 90 0 0 1 210 130" fill="none" stroke="#DDF38A" style={{ strokeWidth: 34, strokeDasharray: '19.4 80.6', strokeDashoffset: -20 }}></path>
                <path pathLength="100" d="M30 130 A90 90 0 0 1 210 130" fill="none" stroke="#C6F23A" style={{ strokeWidth: 34, strokeDasharray: '19.4 80.6', strokeDashoffset: -40 }}></path>
                <path pathLength="100" d="M30 130 A90 90 0 0 1 210 130" fill="none" stroke="#9BC40F" style={{ strokeWidth: 34, strokeDasharray: '19.4 80.6', strokeDashoffset: -60 }}></path>
                <path pathLength="100" d="M30 130 A90 90 0 0 1 210 130" fill="none" stroke="#6E9A00" style={{ strokeWidth: 34, strokeDasharray: '19.4 80.6', strokeDashoffset: -80 }}></path>
                <path d="M56 130 A64 64 0 0 1 184 130 Z" fill="url(#kgd)"></path>
                <path d="M70 130 A50 50 0 0 1 170 130" fill="none" stroke="#FFFFFF" opacity=".8" style={{ strokeWidth: 2 }}></path>
                <g className="k-needle2"><path d="M116.5 130 L120 50 L123.5 130 Z" fill="#0C0E0D"></path></g>
                <circle cx="120" cy="130" r="9" fill="#0C0E0D"></circle><circle cx="120" cy="130" r="3.5" fill="#C6F23A"></circle>
              </svg>
            </div>
            <div>
              <h3 style={{ margin: '0 0 8px', fontSize: '20px', fontWeight: 600, letterSpacing: '-.01em' }}>Sistemas de Diseño & UI</h3>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.5, color: '#5B6168' }}>Componentes modulares con Tailwind, Storybook y React para construir nuevas pantallas en horas con coherencia visual total.</p>
            </div>
          </article>

          {/* Card 6: Infraestructura & Squad Dedicado */}
          <article className="k-card" data-rv="scale" data-d="1" style={{ flex: '1 1 100%', minWidth: 0, background: '#121615', color: '#F5F7F8', borderRadius: '28px', padding: 'clamp(20px,2.4vw,32px)', boxSizing: 'border-box', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '28px 44px' }}>
            <div style={{ flex: '1 1 280px', minWidth: 0, maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <h3 style={{ margin: 0, fontSize: '24px', fontWeight: 600, letterSpacing: '-.01em' }}>Infraestructura & Squad Dedicado</h3>
              <p style={{ margin: 0, fontSize: '15.5px', lineHeight: 1.5, color: '#B4BABF' }}>Arquitectura cloud en Vercel, AWS o Cloudflare, CI/CD automatizado y un equipo de ingeniería senior para evolucionar tu producto.</p>
              <a className="k-btn" href="#contacto" style={{ alignSelf: 'flex-start', marginTop: '6px', display: 'inline-flex', alignItems: 'center', gap: '12px', height: '48px', padding: '0 5px 0 20px', borderRadius: '999px', background: '#F5F7F8', color: '#0C0E0D', textDecoration: 'none', fontSize: '14.5px', fontWeight: 500 }}>
                Pedir propuesta técnica
                <span style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#C6F23A', color: '#0C0E0D', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }} aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
                </span>
              </a>
            </div>
            <div aria-hidden="true" style={{ flex: '2 1 560px', minWidth: 0, display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ flex: '1 1 210px', minHeight: '250px', boxSizing: 'border-box', borderRadius: '22px', background: '#1C2120', padding: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}><span style={{ fontSize: '13px', fontWeight: 600 }}>Proyectos activos</span><span style={{ flex: '0 0 auto', fontSize: '11.5px', padding: '3px 9px', borderRadius: '999px', background: '#E4E4F7', color: '#4B4C9A', fontWeight: 600 }}>en sprint</span></span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
                  <span className="k-pop-out" data-d="2" style={{ display: 'flex', alignItems: 'center', gap: '10px', height: '46px', padding: '0 10px 0 8px', borderRadius: '14px', background: '#262C2A', boxShadow: '0 8px 18px rgba(0,0,0,.25)' }}>
                    <span className="k-halo" style={{ flex: '0 0 auto', width: '30px', height: '30px', borderRadius: '10px', background: 'linear-gradient(180deg,#E6FF92,#A6D419)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.8)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, color: '#0C0E0D' }}>1</span>
                    <span style={{ flex: 1, minWidth: 0, fontSize: '12.5px', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Migración Next.js 15</span>
                    <span style={{ flex: '0 0 auto', fontSize: '11.5px', padding: '3px 9px', borderRadius: '999px', background: '#DDF5E3', color: '#2E7D4F', fontWeight: 600 }}>Alto</span>
                  </span>
                  <span className="k-pop-out" data-d="3" style={{ display: 'flex', alignItems: 'center', gap: '10px', height: '46px', padding: '0 10px 0 8px', borderRadius: '14px', background: '#262C2A', boxShadow: '0 8px 18px rgba(0,0,0,.25)' }}>
                    <span style={{ flex: '0 0 auto', width: '30px', height: '30px', borderRadius: '10px', background: 'linear-gradient(180deg,#D3E0FB,#93AEF0)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.8)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, color: '#0C0E0D' }}>2</span>
                    <span style={{ flex: 1, minWidth: 0, fontSize: '12.5px', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Rediseño SaaS B2B</span>
                    <span style={{ flex: '0 0 auto', fontSize: '11.5px', padding: '3px 9px', borderRadius: '999px', background: '#DDF5E3', color: '#2E7D4F', fontWeight: 600 }}>Alto</span>
                  </span>
                  <span className="k-pop-out" data-d="4" style={{ display: 'flex', alignItems: 'center', gap: '10px', height: '46px', padding: '0 10px 0 8px', borderRadius: '14px', background: '#262C2A', boxShadow: '0 8px 18px rgba(0,0,0,.25)' }}>
                    <span style={{ flex: '0 0 auto', width: '30px', height: '30px', borderRadius: '10px', background: 'linear-gradient(180deg,#FFE9D9,#F7BE95)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.8)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, color: '#0C0E0D' }}>3</span>
                    <span style={{ flex: 1, minWidth: 0, fontSize: '12.5px', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Lighthouse 100/100</span>
                    <span style={{ flex: '0 0 auto', fontSize: '11.5px', padding: '3px 9px', borderRadius: '999px', background: '#FDF1C7', color: '#8A6A0C', fontWeight: 600 }}>Medio</span>
                  </span>
                </div>
              </div>
              <div style={{ flex: '1.2 1 250px', minHeight: '250px', boxSizing: 'border-box', borderRadius: '22px', background: '#1C2120', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}><span style={{ fontSize: '13px', fontWeight: 600 }}>Squad de desarrollo</span><span style={{ flex: '0 0 auto', fontSize: '11.5px', padding: '3px 9px', borderRadius: '999px', background: '#DCEBFF', color: '#2D5BB9', fontWeight: 600 }}>Senior & Ágil</span></span>
                <div style={{ position: 'relative', width: 'min(100%,250px)', aspectRatio: '250 / 140', margin: '0 auto' }}>
                  <svg viewBox="0 0 250 140" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                    <path d="M98 62 H70 Q60 62 60 52 V40 Q60 28 48 28 H46" fill="none" stroke="#3A403E" style={{ strokeWidth: 1.5 }}></path>
                    <path d="M152 62 H180 Q190 62 190 52 V40 Q190 28 202 28 H204" fill="none" stroke="#3A403E" style={{ strokeWidth: 1.5 }}></path>
                    <path d="M98 78 H70 Q60 78 60 88 V100 Q60 112 48 112 H46" fill="none" stroke="#3A403E" style={{ strokeWidth: 1.5 }}></path>
                    <path d="M152 78 H180 Q190 78 190 88 V100 Q190 112 202 112 H204" fill="none" stroke="#3A403E" style={{ strokeWidth: 1.5 }}></path>
                    <path className="k-run" pathLength="100" d="M98 62 H70 Q60 62 60 52 V40 Q60 28 48 28 H46" fill="none" stroke="#C6F23A" style={{ strokeWidth: 2.4, strokeLinecap: 'round', animationDelay: '0.0s' }}></path>
                    <path className="k-run" pathLength="100" d="M152 62 H180 Q190 62 190 52 V40 Q190 28 202 28 H204" fill="none" stroke="#C6F23A" style={{ strokeWidth: 2.4, strokeLinecap: 'round', animationDelay: '-0.6s' }}></path>
                    <path className="k-run" pathLength="100" d="M98 78 H70 Q60 78 60 88 V100 Q60 112 48 112 H46" fill="none" stroke="#C6F23A" style={{ strokeWidth: 2.4, strokeLinecap: 'round', animationDelay: '-1.2s' }}></path>
                    <path className="k-run" pathLength="100" d="M152 78 H180 Q190 78 190 88 V100 Q190 112 202 112 H204" fill="none" stroke="#C6F23A" style={{ strokeWidth: 2.4, strokeLinecap: 'round', animationDelay: '-1.8s' }}></path>
                  </svg>
                  <span className="k-breath" style={{ position: 'absolute', left: '50%', top: '50%', width: '110px', height: '110px', margin: '-55px 0 0 -55px', borderRadius: '50%', background: 'radial-gradient(closest-side,rgba(198,242,58,.55),rgba(198,242,58,0))' }}></span>
                  <span style={{ position: 'absolute', left: '50%', top: '50%', width: '58px', height: '58px', margin: '-29px 0 0 -29px', borderRadius: '18px', background: 'linear-gradient(180deg,#E6FF92,#A6D419)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.85),0 0 0 6px rgba(198,242,58,.3),0 10px 22px rgba(140,190,10,.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0C0E0D" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M16 18l6-6-6-6 M8 6l-6 6 6 6"></path></svg></span>
                  <span className="k-f1" style={{ position: 'absolute', left: '12%', top: '20%', width: '38px', height: '38px', margin: '-19px 0 0 -19px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #262C2A', boxSizing: 'border-box', boxShadow: '0 6px 14px rgba(0,0,0,.35)' }}><img src="https://media.kolpusites.com/avatares/avatar-2.webp" alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} /></span>
                  <span className="k-f2" style={{ position: 'absolute', left: '88%', top: '20%', width: '38px', height: '38px', margin: '-19px 0 0 -19px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #262C2A', boxSizing: 'border-box', boxShadow: '0 6px 14px rgba(0,0,0,.35)' }}><img src="https://media.kolpusites.com/avatares/avatar-3.webp" alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} /></span>
                  <span className="k-f3" style={{ position: 'absolute', left: '12%', top: '80%', width: '38px', height: '38px', margin: '-19px 0 0 -19px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #262C2A', boxSizing: 'border-box', boxShadow: '0 6px 14px rgba(0,0,0,.35)' }}><img src="https://media.kolpusites.com/avatares/avatar-4.webp" alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} /></span>
                  <span className="k-f4" style={{ position: 'absolute', left: '88%', top: '80%', width: '38px', height: '38px', margin: '-19px 0 0 -19px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #262C2A', boxSizing: 'border-box', boxShadow: '0 6px 14px rgba(0,0,0,.35)' }}><img src="https://media.kolpusites.com/avatares/avatar-6.webp" alt="" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} /></span>
                </div>
                <span style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', padding: '8px 10px 8px 14px', borderRadius: '999px', background: '#262C2A', boxShadow: '0 8px 18px rgba(0,0,0,.25)', fontSize: '12.5px', fontWeight: 500 }}>Despliegues continuos CI/CD<span className="k-track" style={{ position: 'relative', flex: '0 0 auto', width: '44px', height: '24px', borderRadius: '999px' }}><span className="k-knob" style={{ position: 'absolute', left: '2px', top: '2px', width: '20px', height: '20px', borderRadius: '50%', background: '#FFFFFF', boxShadow: '0 2px 6px rgba(12,14,13,.25)' }}></span></span></span>
              </div>
              <div style={{ flex: '1 1 210px', minHeight: '250px', boxSizing: 'border-box', borderRadius: '22px', background: '#1C2120', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}><span style={{ fontSize: '13px', fontWeight: 600 }}>Escalabilidad Web</span><span style={{ flex: '0 0 auto', fontSize: '11.5px', padding: '3px 9px', borderRadius: '999px', background: '#DDF5E3', color: '#2E7D4F', fontWeight: 600 }}>Nivel 4 de 5</span></span>
                <div style={{ position: 'relative', flex: 1, minHeight: '150px', display: 'flex', alignItems: 'flex-end', gap: '8px', paddingTop: '40px', boxSizing: 'border-box' }}>
                  <span className="k-f2" style={{ position: 'absolute', right: 0, top: 0, display: 'inline-flex', alignItems: 'center', gap: '6px', height: '28px', padding: '0 10px', borderRadius: '999px', background: '#F5F7F8', color: '#0C0E0D', fontSize: '11.5px', whiteSpace: 'nowrap' }}><span className="k-pulse" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#6E9A00' }}></span>Siguiente: escala global</span>
                  <span style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', height: '100%', justifyContent: 'flex-end' }}><span className="k-growy" data-d="2" style={{ width: '100%', height: '28%', borderRadius: '10px', background: 'linear-gradient(180deg,#E6FF92,#A6D419)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.8),0 8px 22px rgba(198,242,58,.22)' }}></span><span style={{ fontSize: '10.5px', color: '#8E959B' }}>1</span></span>
                  <span style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', height: '100%', justifyContent: 'flex-end' }}><span className="k-growy" data-d="3" style={{ width: '100%', height: '46%', borderRadius: '10px', background: 'linear-gradient(180deg,#E6FF92,#A6D419)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.8),0 8px 22px rgba(198,242,58,.22)' }}></span><span style={{ fontSize: '10.5px', color: '#8E959B' }}>2</span></span>
                  <span style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', height: '100%', justifyContent: 'flex-end' }}><span className="k-growy" data-d="4" style={{ width: '100%', height: '64%', borderRadius: '10px', background: 'linear-gradient(180deg,#E6FF92,#A6D419)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.8),0 8px 22px rgba(198,242,58,.22)' }}></span><span style={{ fontSize: '10.5px', color: '#8E959B' }}>3</span></span>
                  <span style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', height: '100%', justifyContent: 'flex-end' }}><span className="k-growy k-stripes" data-d="5" style={{ width: '100%', height: '82%', borderRadius: '10px', background: 'repeating-linear-gradient(135deg,#C6F23A 0 6px,#2E3532 6px 12px)', backgroundSize: '17px 17px' }}></span><span style={{ fontSize: '10.5px', color: '#8E959B' }}>4</span></span>
                  <span style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', height: '100%', justifyContent: 'flex-end' }}><span className="k-growy" data-d="6" style={{ width: '100%', height: '100%', borderRadius: '10px', background: '#2A302E' }}></span><span style={{ fontSize: '10.5px', color: '#8E959B' }}>5</span></span>
                </div>
                <span style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#8E959B' }}><span>MVP</span><span>Global Edge</span></span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
