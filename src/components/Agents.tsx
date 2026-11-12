import React from 'react';

export const Agents: React.FC = () => {
  return (
    <section id="agentes" aria-labelledby="ag-h" style={{ position: 'relative', background: '#0C0E0D', color: '#F5F7F8', padding: 'clamp(64px,7vw,104px) 0 clamp(40px,4vw,56px)', overflow: 'hidden' }}>
      <span className="k-f1" aria-hidden="true" style={{ position: 'absolute', zIndex: 0, pointerEvents: 'none', right: '12%', top: '-90px', width: '58px', height: '300px', borderRadius: '999px', opacity: 0.55, transform: 'rotate(32deg)', background: 'linear-gradient(90deg,#1C2120 0%,#4F585A 42%,#262C2A 72%,#141817 100%)' }}></span>
      <span className="k-f3" aria-hidden="true" style={{ position: 'absolute', zIndex: 0, pointerEvents: 'none', right: '4%', top: '-40px', width: '58px', height: '280px', borderRadius: '999px', opacity: 0.4, transform: 'rotate(32deg)', background: 'linear-gradient(90deg,#1C2120 0%,#4F585A 42%,#262C2A 72%,#141817 100%)' }}></span>
      <span className="k-f2" aria-hidden="true" style={{ position: 'absolute', zIndex: 0, pointerEvents: 'none', left: '-80px', top: '20%', width: '340px', height: '340px', borderRadius: '50%', opacity: 0.25, background: 'radial-gradient(circle,transparent 0 33%,#F4FFC2 34%,#D9F861 43%,#A6D419 53%,#77A00B 60%,transparent 61%)' }}></span>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1352px', margin: '0 auto', padding: '0 clamp(16px,3vw,44px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px 48px', flexWrap: 'wrap', marginBottom: '32px' }}>
          <h2 id="ag-h" data-rv="clip" style={{ margin: 0, fontFamily: "Michroma, Arial, sans-serif", fontWeight: 400, fontSize: 'clamp(24px,2.8vw,40px)', lineHeight: 1.15, letterSpacing: '-.02em' }}>
            Especialidades para<br />cada reto digital
          </h2>
          <p data-rv="" data-d="2" style={{ margin: 0, maxWidth: '480px', fontSize: '17px', lineHeight: 1.5, color: '#B4BABF' }}>
            No creemos en soluciones web genéricas que no escalan. Disponemos de células especializadas en cada capa tecnológica, conectadas a tu negocio y con foco en resultados y velocidad tangibles.
          </p>
        </div>

        {/* Scrollable container for mobile to maintain fixed composition stage */}
        <div style={{ overflowX: 'auto', paddingBottom: '24px' }}>
          <div style={{ position: 'relative', minWidth: '1100px', height: '712px', margin: '0 auto' }}>
            
            {/* Widget 1: Blue 'despliegues hoy 24' tile with 3 stacked avatars */}
            <div className="k-f1" data-rv="pop" data-d="1" style={{ position: 'absolute', left: '4%', top: '30px', background: '#172238', border: '1px solid rgba(169,193,245,.2)', borderRadius: '20px', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: '14px', boxShadow: '0 14px 30px rgba(0,0,0,.4)' }}>
              <div style={{ display: 'flex', marginLeft: '6px' }}>
                <img src="https://media.kolpusites.com/avatares/avatar-1.webp" alt="" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid #172238', marginLeft: '-8px' }} />
                <img src="https://media.kolpusites.com/avatares/avatar-2.webp" alt="" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid #172238', marginLeft: '-8px' }} />
                <img src="https://media.kolpusites.com/avatares/avatar-3.webp" alt="" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid #172238', marginLeft: '-8px' }} />
              </div>
              <div>
                <p style={{ margin: 0, fontSize: '11px', color: '#A9C1F5', textTransform: 'uppercase', letterSpacing: '.05em' }}>Despliegues hoy</p>
                <p style={{ margin: 0, fontSize: '17px', fontWeight: 600, color: '#FFFFFF' }}>24 a producción</p>
              </div>
            </div>

            {/* Widget 2: Lime pill 'Carlos · Tech Lead' with avatar */}
            <div className="k-f2" data-rv="pop" data-d="2" style={{ position: 'absolute', left: '26%', top: '16px', background: '#C6F23A', color: '#0C0E0D', borderRadius: '999px', padding: '6px 16px 6px 6px', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600, fontSize: '13.5px', boxShadow: '0 10px 24px rgba(198,242,58,.3)' }}>
              <img src="https://media.kolpusites.com/avatares/avatar-4.webp" alt="" style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} />
              <span>Carlos · Tech Lead</span>
              <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#0C0E0D', color: '#C6F23A', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>✓</span>
            </div>

            {/* Widget 3: Coral round badge '100' */}
            <div className="k-f3" data-rv="pop" data-d="3" style={{ position: 'absolute', left: '23%', top: '88px', width: '42px', height: '42px', borderRadius: '50%', background: '#FF7A6B', color: '#0C0E0D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '15px', boxShadow: '0 8px 20px rgba(255,122,107,.35)' }}>
              100
            </div>

            {/* Widget 4: Dark notification 'Pipeline CI/CD — Build exitoso en 38s.' */}
            <div className="k-f1" data-rv="pop" data-d="2" style={{ position: 'absolute', left: '46%', top: '24px', background: '#171B1A', border: '1px solid rgba(255,255,255,.12)', borderRadius: '22px', padding: '14px 18px', maxWidth: '340px', boxShadow: '0 20px 40px rgba(0,0,0,.5)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'linear-gradient(180deg,#E6FF92,#A6D419)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0C0E0D" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M16 18l6-6-6-6 M8 6l-6 6 6 6"></path></svg>
                </span>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#F5F7F8' }}>Pipeline CI/CD</span>
                <span className="k-pulse" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C6F23A', marginLeft: 'auto' }}></span>
              </div>
              <p style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.4, color: '#C9CED3' }}>
                Build exitoso en 38s con <strong style={{ color: '#C6F23A' }}>Next.js 15 & Vercel Edge</strong>. Pruebas E2E completas.
              </p>
            </div>

            {/* Widget 5: White metrics pill */}
            <div className="k-f2" data-rv="pop" data-d="4" style={{ position: 'absolute', right: '4%', top: '34px', background: '#FFFFFF', color: '#0C0E0D', borderRadius: '999px', padding: '8px 18px 8px 12px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 14px 30px rgba(0,0,0,.3)' }}>
              <span style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#0C0E0D', color: '#C6F23A', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '18px' }}>
                <span className="k-wv" style={{ width: '3px', height: '14px', borderRadius: '2px', background: '#0C0E0D', animationDelay: '0s' }}></span>
                <span className="k-wv" style={{ width: '3px', height: '20px', borderRadius: '2px', background: '#0C0E0D', animationDelay: '0.2s' }}></span>
                <span className="k-wv" style={{ width: '3px', height: '10px', borderRadius: '2px', background: '#0C0E0D', animationDelay: '0.4s' }}></span>
                <span className="k-wv" style={{ width: '3px', height: '16px', borderRadius: '2px', background: '#0C0E0D', animationDelay: '0.1s' }}></span>
              </div>
              <span style={{ fontSize: '13px', fontWeight: 600 }}>0.4s LCP</span>
            </div>

            {/* Widget 6: Blue chat bubble */}
            <div className="k-f3" data-rv="pop" data-d="5" style={{ position: 'absolute', right: '8%', top: '116px', background: '#1D2A47', border: '1px solid rgba(169,193,245,.25)', borderRadius: '18px 18px 4px 18px', padding: '12px 18px', maxWidth: '300px', boxShadow: '0 12px 28px rgba(0,0,0,.4)' }}>
              <p style={{ margin: '0 0 4px', fontSize: '12px', fontWeight: 600, color: '#A9C1F5' }}>Elena Soto · VP Producto</p>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.4, color: '#FFFFFF' }}>Adelante con el lanzamiento. El rendimiento en móvil es impecable.</p>
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '4px', marginTop: '6px' }}>
                <span style={{ fontSize: '10.5px', color: '#8E959B' }}>08:42</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M18 6L7 17l-5-5"></path><path d="M22 10l-7.5 7.5-2-2"></path></svg>
              </div>
            </div>

            {/* Widget 7: Green speech tile */}
            <div className="k-f4" data-rv="pop" data-d="3" style={{ position: 'absolute', left: '7%', top: '130px', background: '#122E1A', border: '1px solid rgba(159,230,160,.25)', color: '#9FE6A0', borderRadius: '16px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', fontWeight: 600, boxShadow: '0 10px 24px rgba(0,0,0,.3)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>18ms latencia Edge global</span>
            </div>

            {/* Widget 8: Butter round code button */}
            <div className="k-f1" data-rv="pop" data-d="4" style={{ position: 'absolute', right: '35%', top: '126px', width: '44px', height: '44px', borderRadius: '50%', background: '#E9F57A', color: '#0C0E0D', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 24px rgba(233,245,122,.3)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </div>

            {/* Widget 9: Coral chip */}
            <div className="k-f2" data-rv="pop" data-d="2" style={{ position: 'absolute', left: '38%', top: '116px', background: '#FF7A6B', color: '#0C0E0D', borderRadius: '999px', padding: '6px 14px', fontSize: '12px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px', boxShadow: '0 8px 20px rgba(255,122,107,.3)' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0C0E0D' }}></span>
              0 incidencias reportadas
            </div>

            {/* PART 5: Fan of 5 Flip Cards inside .k-fan */}
            <div className="k-fan" data-rv="group" style={{ position: 'absolute', left: 0, right: 0, bottom: '20px', display: 'flex', justifyContent: 'center', gap: '16px' }}>
              
              {/* Card 1: Frontend */}
              <article role="button" tabIndex={0} aria-pressed="false" data-flip="0" style={{ flex: '0 0 236px', height: '430px', borderRadius: '26px', background: '#171B1A', border: '1px solid rgba(255,255,255,.12)', transform: 'rotate(-8deg) translateY(24px) rotateY(var(--fy,0deg))' }}>
                <div className="k-ff" style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', padding: '22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                  <div className="k-gloss"></div>
                  <div>
                    <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '999px', background: '#262C2A', color: '#C6F23A', letterSpacing: '.04em' }}>FRONTEND & UI</span>
                    <h3 style={{ margin: '18px 0 10px', fontSize: '20px', fontWeight: 600, color: '#F5F7F8', letterSpacing: '-.01em' }}>Arquitectura Next.js & React</h3>
                    <p style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.5, color: '#B4BABF' }}>Interfaces reactivas ultrarrápidas con TypeScript, Server Components y renderizado híbrido.</p>
                  </div>
                  <div>
                    <div style={{ padding: '10px 12px', borderRadius: '14px', background: '#202624', marginBottom: '16px' }}>
                      <span style={{ display: 'block', fontSize: '11px', color: '#8E959B' }}>Métrica clave</span>
                      <span style={{ fontSize: '16px', fontWeight: 700, color: '#C6F23A' }}>60 FPS constantes</span>
                    </div>
                    <span className="k-fliphint" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', fontWeight: 600, color: '#C9CED3' }}>
                      Girar ficha <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                    </span>
                  </div>
                </div>
                <div className="k-back" style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', background: '#1C2120', padding: '22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#C6F23A' }}>¿QUÉ INCLUYE ESTA ÁREA?</span>
                    <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '11px', fontSize: '13px', color: '#E3E6E9' }}>
                      <li style={{ display: 'flex', gap: '8px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Componentes tipados con TypeScript</li>
                      <li style={{ display: 'flex', gap: '8px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Server Components y streaming</li>
                      <li style={{ display: 'flex', gap: '8px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Microfrontends & Monorepos</li>
                      <li style={{ display: 'flex', gap: '8px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Animaciones fluidas con Motion</li>
                    </ul>
                  </div>
                  <a href="#contacto" className="k-btn" style={{ textAlign: 'center', padding: '10px 0', borderRadius: '999px', background: '#C6F23A', color: '#0C0E0D', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>Consultar este caso</a>
                </div>
              </article>

              {/* Card 2: Backend */}
              <article role="button" tabIndex={0} aria-pressed="false" data-flip="0" style={{ flex: '0 0 236px', height: '430px', borderRadius: '26px', background: '#1A211F', border: '1px solid rgba(159,230,160,.25)', transform: 'rotate(-4deg) translateY(8px) rotateY(var(--fy,0deg))' }}>
                <div className="k-ff" style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', padding: '22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                  <div className="k-gloss"></div>
                  <div>
                    <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '999px', background: '#142C1B', color: '#9FE6A0', letterSpacing: '.04em' }}>BACKEND & APIS</span>
                    <h3 style={{ margin: '18px 0 10px', fontSize: '20px', fontWeight: 600, color: '#F5F7F8', letterSpacing: '-.01em' }}>APIs Escalables & Serverless</h3>
                    <p style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.5, color: '#B4BABF' }}>Microservicios, APIs GraphQL/REST de baja latencia con Node.js, Postgres y Redis.</p>
                  </div>
                  <div>
                    <div style={{ padding: '10px 12px', borderRadius: '14px', background: '#1C2922', marginBottom: '16px' }}>
                      <span style={{ display: 'block', fontSize: '11px', color: '#8E959B' }}>Métrica clave</span>
                      <span style={{ fontSize: '16px', fontWeight: 700, color: '#9FE6A0' }}>&lt; 20ms tiempo de respuesta</span>
                    </div>
                    <span className="k-fliphint" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', fontWeight: 600, color: '#C9CED3' }}>
                      Girar ficha <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                    </span>
                  </div>
                </div>
                <div className="k-back" style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', background: '#1C2120', padding: '22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#9FE6A0' }}>¿QUÉ INCLUYE ESTA ÁREA?</span>
                    <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '11px', fontSize: '13px', color: '#E3E6E9' }}>
                      <li style={{ display: 'flex', gap: '8px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9FE6A0" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Modelado Postgres, Supabase y Redis</li>
                      <li style={{ display: 'flex', gap: '8px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9FE6A0" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Autenticación segura JWT y OAuth</li>
                      <li style={{ display: 'flex', gap: '8px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9FE6A0" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Webhooks en tiempo real y colas</li>
                      <li style={{ display: 'flex', gap: '8px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9FE6A0" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Rate limiting y protección DDoS</li>
                    </ul>
                  </div>
                  <a href="#contacto" className="k-btn" style={{ textAlign: 'center', padding: '10px 0', borderRadius: '999px', background: '#C6F23A', color: '#0C0E0D', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>Consultar este caso</a>
                </div>
              </article>

              {/* Card 3: SaaS a Medida (Centro destacado) */}
              <article role="button" tabIndex={0} aria-pressed="false" data-flip="0" style={{ flex: '0 0 246px', height: '440px', borderRadius: '26px', background: '#0F1211', border: '1.5px solid #C6F23A', boxShadow: '0 20px 40px rgba(0,0,0,.6)', transform: 'rotate(0deg) translateY(0px) rotateY(var(--fy,0deg))' }}>
                <div className="k-ff" style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', padding: '22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                  <div className="k-gloss"></div>
                  <div>
                    <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '999px', background: '#C6F23A', color: '#0C0E0D', letterSpacing: '.04em' }}>FULLSTACK SAAS</span>
                    <h3 style={{ margin: '18px 0 10px', fontSize: '21px', fontWeight: 600, color: '#F5F7F8', letterSpacing: '-.01em' }}>Plataformas Web a Medida</h3>
                    <p style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.5, color: '#B4BABF' }}>Dashboards, portales multi-tenant y SaaS completos listos para monetizar y escalar.</p>
                  </div>
                  <div>
                    <div style={{ padding: '10px 12px', borderRadius: '14px', background: '#1A211D', marginBottom: '16px' }}>
                      <span style={{ display: 'block', fontSize: '11px', color: '#8E959B' }}>Métrica clave</span>
                      <span style={{ fontSize: '17px', fontWeight: 700, color: '#C6F23A' }}>100/100 Lighthouse score</span>
                    </div>
                    <span className="k-fliphint" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', fontWeight: 600, color: '#F5F7F8' }}>
                      Girar ficha <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                    </span>
                  </div>
                </div>
                <div className="k-back" style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', background: '#1C2120', padding: '22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#C6F23A' }}>¿QUÉ INCLUYE ESTA ÁREA?</span>
                    <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '11px', fontSize: '13px', color: '#E3E6E9' }}>
                      <li style={{ display: 'flex', gap: '8px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Paneles con roles multi-tenant</li>
                      <li style={{ display: 'flex', gap: '8px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Cobros recurrentes y Stripe Billing</li>
                      <li style={{ display: 'flex', gap: '8px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Emails transaccionales automáticos</li>
                      <li style={{ display: 'flex', gap: '8px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Integración con ERPs y CRMs</li>
                    </ul>
                  </div>
                  <a href="#contacto" className="k-btn" style={{ textAlign: 'center', padding: '10px 0', borderRadius: '999px', background: '#C6F23A', color: '#0C0E0D', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>Consultar este caso</a>
                </div>
              </article>

              {/* Card 4: E-commerce */}
              <article role="button" tabIndex={0} aria-pressed="false" data-flip="0" style={{ flex: '0 0 236px', height: '430px', borderRadius: '26px', background: '#171B1A', border: '1px solid rgba(169,193,245,.25)', transform: 'rotate(4deg) translateY(8px) rotateY(var(--fy,0deg))' }}>
                <div className="k-ff" style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', padding: '22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                  <div className="k-gloss"></div>
                  <div>
                    <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '999px', background: '#1A2944', color: '#A9C1F5', letterSpacing: '.04em' }}>E-COMMERCE</span>
                    <h3 style={{ margin: '18px 0 10px', fontSize: '20px', fontWeight: 600, color: '#F5F7F8', letterSpacing: '-.01em' }}>Headless Commerce & Checkout</h3>
                    <p style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.5, color: '#B4BABF' }}>Tiendas de altísima conversión con Shopify Headless, Medusa o WooCommerce desacoplado.</p>
                  </div>
                  <div>
                    <div style={{ padding: '10px 12px', borderRadius: '14px', background: '#1A2333', marginBottom: '16px' }}>
                      <span style={{ display: 'block', fontSize: '11px', color: '#8E959B' }}>Métrica clave</span>
                      <span style={{ fontSize: '16px', fontWeight: 700, color: '#A9C1F5' }}>+35% tasa de conversión</span>
                    </div>
                    <span className="k-fliphint" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', fontWeight: 600, color: '#C9CED3' }}>
                      Girar ficha <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                    </span>
                  </div>
                </div>
                <div className="k-back" style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', background: '#1C2120', padding: '22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#A9C1F5' }}>¿QUÉ INCLUYE ESTA ÁREA?</span>
                    <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '11px', fontSize: '13px', color: '#E3E6E9' }}>
                      <li style={{ display: 'flex', gap: '8px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A9C1F5" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Checkout 1-clic ultra optimizado</li>
                      <li style={{ display: 'flex', gap: '8px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A9C1F5" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Filtros instantáneos en cliente</li>
                      <li style={{ display: 'flex', gap: '8px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A9C1F5" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Carga de catálogo en &lt; 0.6s</li>
                      <li style={{ display: 'flex', gap: '8px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A9C1F5" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Sincronización de stock en tiempo real</li>
                    </ul>
                  </div>
                  <a href="#contacto" className="k-btn" style={{ textAlign: 'center', padding: '10px 0', borderRadius: '999px', background: '#C6F23A', color: '#0C0E0D', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>Consultar este caso</a>
                </div>
              </article>

              {/* Card 5: Cloud & DevOps */}
              <article role="button" tabIndex={0} aria-pressed="false" data-flip="0" style={{ flex: '0 0 236px', height: '430px', borderRadius: '26px', background: '#171B1A', border: '1px solid rgba(255,255,255,.12)', transform: 'rotate(8deg) translateY(24px) rotateY(var(--fy,0deg))' }}>
                <div className="k-ff" style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', padding: '22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                  <div className="k-gloss"></div>
                  <div>
                    <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '999px', background: '#362419', color: '#FFB067', letterSpacing: '.04em' }}>CLOUD & DEVOPS</span>
                    <h3 style={{ margin: '18px 0 10px', fontSize: '20px', fontWeight: 600, color: '#F5F7F8', letterSpacing: '-.01em' }}>Infraestructura & Edge Global</h3>
                    <p style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.5, color: '#B4BABF' }}>Despliegues continuos, CDN mundial, monitorización y 99.99% uptime garantizado.</p>
                  </div>
                  <div>
                    <div style={{ padding: '10px 12px', borderRadius: '14px', background: '#261F1A', marginBottom: '16px' }}>
                      <span style={{ display: 'block', fontSize: '11px', color: '#8E959B' }}>Métrica clave</span>
                      <span style={{ fontSize: '16px', fontWeight: 700, color: '#FFB067' }}>99.99% disponibilidad</span>
                    </div>
                    <span className="k-fliphint" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', fontWeight: 600, color: '#C9CED3' }}>
                      Girar ficha <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                    </span>
                  </div>
                </div>
                <div className="k-back" style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', background: '#1C2120', padding: '22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#FFB067' }}>¿QUÉ INCLUYE ESTA ÁREA?</span>
                    <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: '11px', fontSize: '13px', color: '#E3E6E9' }}>
                      <li style={{ display: 'flex', gap: '8px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB067" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Pipelines CI/CD con GitHub Actions</li>
                      <li style={{ display: 'flex', gap: '8px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB067" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Despliegue multi-región Edge CDN</li>
                      <li style={{ display: 'flex', gap: '8px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB067" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Monitorización y alertas con Sentry</li>
                      <li style={{ display: 'flex', gap: '8px' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFB067" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Zero-downtime en cada actualización</li>
                    </ul>
                  </div>
                  <a href="#contacto" className="k-btn" style={{ textAlign: 'center', padding: '10px 0', borderRadius: '999px', background: '#C6F23A', color: '#0C0E0D', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>Consultar este caso</a>
                </div>
              </article>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
