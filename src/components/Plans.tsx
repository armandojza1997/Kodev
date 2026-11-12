import React from 'react';

export const Plans: React.FC = () => {
  return (
    <section id="planes" aria-labelledby="plan-h" style={{ position: 'relative', background: '#0C0E0D', color: '#F5F7F8', padding: 'clamp(64px,7vw,104px) 0', overflow: 'hidden' }}>
      <span className="k-f2" aria-hidden="true" style={{ position: 'absolute', zIndex: 0, pointerEvents: 'none', right: '-120px', top: '10%', width: '400px', height: '400px', borderRadius: '50%', opacity: 0.2, background: 'radial-gradient(circle,transparent 0 33%,#F4FFC2 34%,#D9F861 43%,#A6D419 53%,#77A00B 60%,transparent 61%)' }}></span>
      
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1352px', margin: '0 auto', padding: '0 clamp(16px,3vw,44px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px 48px', flexWrap: 'wrap', marginBottom: '48px' }}>
          <div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, letterSpacing: '.05em', textTransform: 'uppercase', color: '#C6F23A', marginBottom: '8px' }}>
              <span className="k-pulse" style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#C6F23A' }}></span>
              Modelos de colaboración
            </span>
            <h2 id="plan-h" data-rv="clip" style={{ margin: 0, fontFamily: "Michroma, Arial, sans-serif", fontWeight: 400, fontSize: 'clamp(24px,2.8vw,40px)', lineHeight: 1.15, letterSpacing: '-.02em' }}>
              Por dónde empezar
            </h2>
          </div>
          <p data-rv="" data-d="2" style={{ margin: 0, maxWidth: '460px', fontSize: '17px', lineHeight: 1.5, color: '#A2A8AE' }}>
            Sin dependencias tecnológicas ni licencias ocultas. Entregamos código limpio, documentado y 100% de tu propiedad para que tu empresa crezca con total autonomía.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '24px', alignItems: 'stretch' }}>
          
          {/* Card 1: Web Corporativa */}
          <div className="k-card" data-rv="scale" data-d="1" style={{ background: '#171B1A', borderRadius: '28px', border: '1px solid rgba(255,255,255,.1)', padding: 'clamp(24px,3vw,36px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: '#262C2A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#8E959B', textTransform: 'uppercase', letterSpacing: '.05em' }}>Lanzamiento · 2–3 semanas</span>
              <h3 style={{ margin: '8px 0 12px', fontSize: '22px', fontWeight: 600, color: '#F5F7F8' }}>Web Corporativa & Landing</h3>
              <p style={{ margin: 0, fontSize: '14.5px', lineHeight: 1.5, color: '#B4BABF', marginBottom: '28px' }}>
                Para marcas que exigen una presencia digital impecable, velocidad de carga instantánea y máxima conversión de leads.
              </p>
              
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px', color: '#E3E6E9', borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: '24px' }}>
                <li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Arquitectura en Next.js / Astro con 100/100 Core Web Vitals</li>
                <li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Diseño UI/UX exclusivo con microinteracciones fluidas</li>
                <li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>CMS headless para que edites contenidos sin programar</li>
                <li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>SEO técnico on-page, datos estructurados y analytics</li>
              </ul>
            </div>

            <div style={{ marginTop: '36px' }}>
              <a className="k-btn" href="#contacto" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', height: '48px', borderRadius: '999px', background: 'transparent', border: '1px solid rgba(255,255,255,.3)', color: '#F5F7F8', textDecoration: 'none', fontSize: '14.5px', fontWeight: 600 }}>
                Pedir propuesta web
              </a>
            </div>
          </div>

          {/* Card 2: Aplicación Web & SaaS (Destacado) */}
          <div className="k-card" data-rv="scale" data-d="2" style={{ position: 'relative', background: '#141817', borderRadius: '28px', border: '2px solid #C6F23A', boxShadow: '0 0 35px rgba(198,242,58,.15)', padding: 'clamp(24px,3vw,36px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <span style={{ position: 'absolute', right: '24px', top: '24px', fontSize: '10.5px', fontFamily: "Michroma, Arial, sans-serif", fontWeight: 700, padding: '4px 12px', borderRadius: '999px', background: '#C6F23A', color: '#0C0E0D' }}>MÁS DEMANDADO</span>
            <div>
              <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'linear-gradient(180deg,#E6FF92,#A6D419)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C0E0D" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              </div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#C6F23A', textTransform: 'uppercase', letterSpacing: '.05em' }}>Desarrollo a medida · 6–10 semanas</span>
              <h3 style={{ margin: '8px 0 12px', fontSize: '22px', fontWeight: 600, color: '#F5F7F8' }}>Plataforma SaaS & Aplicación</h3>
              <p style={{ margin: 0, fontSize: '14.5px', lineHeight: 1.5, color: '#B4BABF', marginBottom: '28px' }}>
                Tu producto digital construido con estándares de ingeniería de silicon valley: frontend reactivo, backend seguro y pasarelas de pago.
              </p>
              
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px', color: '#E3E6E9', borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: '24px' }}>
                <li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Fullstack con React/Next.js, TypeScript y Node.js</li>
                <li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Autenticación segura (OAuth/MFA) y control de roles (RBAC)</li>
                <li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Integración de suscripciones y facturación Stripe</li>
                <li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Base de datos relacional PostgreSQL / Cloud SQL optimizada</li>
                <li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Código 100% propio en tu GitHub con pipeline CI/CD</li>
              </ul>
            </div>

            <div style={{ marginTop: '36px' }}>
              <a className="k-btn" href="#contacto" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', height: '48px', borderRadius: '999px', background: '#C6F23A', color: '#0C0E0D', textDecoration: 'none', fontSize: '14.5px', fontWeight: 600 }}>
                Empezar con este plan
              </a>
            </div>
          </div>

          {/* Card 3: Squad Dedicado */}
          <div className="k-card" data-rv="scale" data-d="3" style={{ background: '#171B1A', borderRadius: '28px', border: '1px solid rgba(255,255,255,.1)', padding: 'clamp(24px,3vw,36px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: '#262C2A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#8E959B', textTransform: 'uppercase', letterSpacing: '.05em' }}>Retainer · Continuo</span>
              <h3 style={{ margin: '8px 0 12px', fontSize: '22px', fontWeight: 600, color: '#F5F7F8' }}>Squad de Ingeniería Dedicado</h3>
              <p style={{ margin: 0, fontSize: '14.5px', lineHeight: 1.5, color: '#B4BABF', marginBottom: '28px' }}>
                Tu equipo externo de desarrollo web sénior para iterar funcionalidades, resolver deuda técnica y escalar tu producto sin frenar.
              </p>
              
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px', color: '#E3E6E9', borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: '24px' }}>
                <li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Desarrollo continuo en sprints quincenales ágiles</li>
                <li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Mantenimiento proactivo, actualización de dependencias</li>
                <li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Monitorización y resolución prioritaria de incidentes</li>
                <li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ flex: '0 0 auto', strokeWidth: 2.5 }}><polyline points="20 6 9 17 4 12"></polyline></svg>Sincronización semanal de arquitectura y roadmap técnico</li>
              </ul>
            </div>

            <div style={{ marginTop: '36px' }}>
              <a className="k-btn" href="#contacto" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', height: '48px', borderRadius: '999px', background: 'transparent', border: '1px solid rgba(255,255,255,.3)', color: '#F5F7F8', textDecoration: 'none', fontSize: '14.5px', fontWeight: 600 }}>
                Hablar con un arquitecto
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
