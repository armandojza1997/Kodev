import React from 'react';

export const Flow: React.FC = () => {
  return (
    <section id="flujo" className="k-flowsec" aria-labelledby="flow-h" style={{ position: 'relative', overflow: 'hidden', background: '#E3E5E8', padding: 'clamp(64px,7vw,104px) 0', display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1352px', margin: '0 auto', padding: '0 clamp(16px,3vw,44px)', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(440px, 100%), 1fr))', gap: 'clamp(36px, 5vw, 64px)', alignItems: 'center' }}>
          
          {/* Left Column: Copy & Live Steps */}
          <div data-rv="left" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, letterSpacing: '.05em', textTransform: 'uppercase', color: '#5B6168', marginBottom: '12px' }}>
                <span className="k-pulse" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#8DBA0A' }}></span>
                Pipeline de ingeniería en vivo
              </span>
              <h2 id="flow-h" style={{ margin: 0, fontFamily: "Michroma, Arial, sans-serif", fontWeight: 400, fontSize: 'clamp(26px,3vw,42px)', lineHeight: 1.15, letterSpacing: '-.02em', color: '#0C0E0D' }}>
                Mira a nuestro equipo<br />construir
              </h2>
            </div>
            
            <p style={{ margin: 0, fontSize: '16.5px', lineHeight: 1.55, color: '#444A50' }}>
              Así despliega Kodev cada funcionalidad a producción. Arquitectura modular, validación estricta de tipos, testing automatizado y entrega global en el edge en menos de un minuto.
            </p>

            {/* 3-Step Live Sequence */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginTop: '8px' }}>
              
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ flex: '0 0 auto', width: '38px', height: '38px', borderRadius: '12px', background: '#FFFFFF', border: '1px solid #C9CDD2', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '13px', color: '#0C0E0D', boxShadow: '0 4px 10px rgba(0,0,0,.04)' }}>
                  01
                </span>
                <div>
                  <h3 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: 600, color: '#0C0E0D' }}>Tipado Estricto & Test Automatizados</h3>
                  <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.45, color: '#5B6168' }}>Validación estática con TypeScript y ejecución de suites E2E en Playwright antes de autorizar cualquier pull request.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ flex: '0 0 auto', width: '38px', height: '38px', borderRadius: '12px', background: '#C6F23A', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '13px', color: '#0C0E0D', boxShadow: '0 4px 12px rgba(198,242,58,.35)' }}>
                  02
                </span>
                <div>
                  <h3 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: 600, color: '#0C0E0D' }}>Compilación Next.js & Optimización</h3>
                  <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.45, color: '#5B6168' }}>Generación incremental de páginas, compresión de bundles, tree-shaking agresivo y optimización de assets visuales.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ flex: '0 0 auto', width: '38px', height: '38px', borderRadius: '12px', background: '#0C0E0D', color: '#F5F7F8', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '13px', boxShadow: '0 4px 10px rgba(0,0,0,.2)' }}>
                  03
                </span>
                <div>
                  <h3 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: 600, color: '#0C0E0D' }}>Despliegue Edge & Lighthouse 100/100</h3>
                  <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.45, color: '#5B6168' }}>Distribución instantánea en 300+ nodos globales con verificación automática de Core Web Vitals y cero tiempo de inactividad.</p>
                </div>
              </div>

            </div>

            <div style={{ paddingTop: '8px' }}>
              <a className="k-btn" href="#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', height: '50px', padding: '0 6px 0 22px', borderRadius: '999px', background: '#0C0E0D', color: '#F5F7F8', textDecoration: 'none', fontSize: '14.5px', fontWeight: 500 }}>
                Impulsar mi producto web
                <span style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#C6F23A', color: '#0C0E0D', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }} aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Tilted Agent Screen Container */}
          <div style={{ perspective: '1600px', width: '100%' }}>
            <div className="k-screen" style={{ width: '100%', borderRadius: '24px', background: '#0C0E0D', border: '1px solid rgba(255,255,255,.15)', boxShadow: '0 30px 70px rgba(0,0,0,.45)', overflow: 'hidden', color: '#F5F7F8' }}>
              
              {/* Terminal Titlebar */}
              <div style={{ height: '44px', background: '#171B1A', borderBottom: '1px solid rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F56' }}></span>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }}></span>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27C93F' }}></span>
                </div>
                <div style={{ fontFamily: "Michroma, Arial, sans-serif", fontSize: '11px', letterSpacing: '.08em', color: '#A2A8AE' }}>
                  KODEV ENGINE v4.2 · CI_CD_DEPLOY
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="k-pulse" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C6F23A' }}></span>
                  <span style={{ fontSize: '10.5px', color: '#C6F23A', fontWeight: 600 }}>BUILD PASS</span>
                </div>
              </div>

              {/* Sub-header status bar */}
              <div style={{ padding: '10px 18px', background: '#121615', borderBottom: '1px solid rgba(255,255,255,.05)', display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', color: '#8E959B' }}>
                <span>SQUAD: <strong style={{ color: '#F5F7F8' }}>#01 Web & SaaS Core</strong></span>
                <span>TIEMPO BUILD: <strong style={{ color: '#C6F23A' }}>42s</strong></span>
                <span>LIGHTHOUSE: <strong style={{ color: '#C6F23A' }}>100/100</strong></span>
              </div>

              {/* Live Run Window */}
              <div style={{ padding: '20px', fontFamily: "monospace", fontSize: '12.5px', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ color: '#8E959B' }}>
                  <span style={{ color: '#4B96FF' }}>[10:14:02]</span> git push origin main <span style={{ color: '#F5F7F8' }}>(commit 9f2a7bc: 'feat: checkout reactivo & dashboard v2')</span>
                </div>
                <div style={{ color: '#8E959B' }}>
                  <span style={{ color: '#4B96FF' }}>[10:14:06]</span> TurboRepo CI: 14 tareas en paralelo · TypeScript 5.8 compila sin errores
                </div>
                <div style={{ color: '#8E959B' }}>
                  <span style={{ color: '#4B96FF' }}>[10:14:14]</span> Playwright E2E: 52 pruebas de interacción superadas (auth, carritos, webhooks)
                </div>
                <div style={{ color: '#8E959B' }}>
                  <span style={{ color: '#4B96FF' }}>[10:14:23]</span> Bundle Analyzer: JS inicial reducido a <span style={{ color: '#E9F57A' }}>68.4 kB gzip</span> · CSS en línea crítico
                </div>
                <div style={{ color: '#C6F23A', fontWeight: 600 }}>
                  <span style={{ color: '#4B96FF' }}>[10:14:38]</span> Edge CDN Release: Desplegado en 310 regiones con 0ms de inactividad
                </div>
                <div style={{ color: '#8E959B' }}>
                  <span style={{ color: '#4B96FF' }}>[10:14:40]</span> Telemetría Vitals: LCP 0.6s · CLS 0.00 · INP 28ms (todas las métricas en verde)
                </div>

                {/* Stream visualizer card */}
                <div style={{ marginTop: '12px', background: '#161C19', border: '1px solid rgba(198,242,58,.2)', borderRadius: '14px', padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#C6F23A', color: '#0C0E0D', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <div>
                      <p style={{ margin: 0, fontSize: '13px', fontWeight: 600, color: '#F5F7F8', fontFamily: "Geist, sans-serif" }}>Despliegue a producción completado</p>
                      <p style={{ margin: 0, fontSize: '11px', color: '#8E959B', fontFamily: "Geist, sans-serif" }}>Código auditado, tipado y optimizado al 100%</p>
                    </div>
                  </div>
                  <span style={{ fontFamily: "Michroma, Arial, sans-serif", fontSize: '12px', color: '#C6F23A' }}>42s TOTAL</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
