import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ background: '#0C0E0D', color: '#F5F7F8', padding: 'clamp(56px,6vw,80px) 0 28px', overflow: 'hidden' }}>
      <div style={{ position: 'relative', maxWidth: '1352px', margin: '0 auto', padding: '0 clamp(16px,3vw,44px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px,100%),1fr))', gap: '32px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,.12)' }}>
          <div data-rv="" data-d="1" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span style={{ fontFamily: "Michroma, Arial, sans-serif", fontSize: '17px', letterSpacing: '.06em' }}>KODEV</span>
            <p style={{ margin: 0, maxWidth: '260px', fontSize: '14.5px', lineHeight: 1.5, color: '#A2A8AE' }}>Estudio de desarrollo web, arquitectura de software y aplicaciones de alto rendimiento.</p>
          </div>
          <nav aria-label="Servicios" className="k-nav" data-rv="" data-d="2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', fontSize: '15px' }}>
            <span style={{ fontSize: '13px', color: '#A2A8AE', marginBottom: '4px' }}>Servicios</span>
            <a href="#servicios" style={{ textDecoration: 'none' }}>Aplicaciones Web & SaaS</a>
            <a href="#servicios" style={{ textDecoration: 'none' }}>Sitios Corporativos & Landing</a>
            <a href="#servicios" style={{ textDecoration: 'none' }}>E-commerce Headless</a>
            <a href="#servicios" style={{ textDecoration: 'none' }}>Core Web Vitals & Rendimiento</a>
            <a href="#servicios" style={{ textDecoration: 'none' }}>Sistemas de Diseño UI</a>
          </nav>
          <nav aria-label="Empresa" className="k-nav" data-rv="" data-d="3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', fontSize: '15px' }}>
            <span style={{ fontSize: '13px', color: '#A2A8AE', marginBottom: '4px' }}>Empresa</span>
            <a href="#metodo" style={{ textDecoration: 'none' }}>Método de entrega</a>
            <a href="#agentes" style={{ textDecoration: 'none' }}>Especialidades de squad</a>
            <a href="#planes" style={{ textDecoration: 'none' }}>Modelos de colaboración</a>
            <a href="#flujo" style={{ textDecoration: 'none' }}>Pipeline CI/CD en acción</a>
            <a href="#contacto" style={{ textDecoration: 'none' }}>Preguntas frecuentes</a>
          </nav>
          <div className="k-nav" data-rv="" data-d="4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', fontSize: '15px' }}>
            <span style={{ fontSize: '13px', color: '#A2A8AE', marginBottom: '4px' }}>Contacto</span>
            <a href="#contacto" style={{ textDecoration: 'none' }}>contacto@kodev.dev</a>
            <a href="#contacto" style={{ textDecoration: 'none' }}>+34 910 000 000</a>
            <span>Madrid · Barcelona · Remoto</span>
            <a href="#contacto" style={{ textDecoration: 'none' }}>GitHub & LinkedIn</a>
          </div>
        </div>

        <div data-rv="group" style={{ position: 'relative', marginTop: '64px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '16px', flexWrap: 'wrap', fontSize: '13.5px' }}>
            <p style={{ margin: 0, color: '#C6F23A', maxWidth: '340px', lineHeight: 1.4 }}>La infraestructura y experiencia web de mayor impacto para tu negocio.</p>
            <p style={{ margin: 0, color: '#A2A8AE', display: 'flex', gap: '22px', flexWrap: 'wrap' }}>
              <span>1 : diseñar</span>
              <span>2 : construir</span>
              <span>3 : escalar</span>
            </p>
          </div>
          <svg className="k-grow" aria-hidden="true" viewBox="0 0 1352 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '48px', marginTop: '18px' }}>
            <path d="M0 8 H760 L820 52 H1352" fill="none" stroke="#C6F23A" style={{ strokeWidth: 1.5, vectorEffect: 'non-scaling-stroke' }}></path>
          </svg>
        </div>

        <div className="k-wmw" data-rv="group" aria-hidden="true" style={{ position: 'relative', marginTop: '28px' }}>
          <svg className="k-cross" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ position: 'absolute', left: 0, top: '-36px', strokeWidth: 1.2 }}><path d="M12 2v20M2 12h20"></path></svg>
          <svg className="k-cross" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ position: 'absolute', right: 0, top: '-36px', strokeWidth: 1.2 }}><path d="M12 2v20M2 12h20"></path></svg>
          <div className="k-wm">
            <svg viewBox="0 0 5924 770" style={{ display: 'block', width: '100%', height: 'auto' }}>
              <text x="0" y="760" textLength="5924" lengthAdjust="spacingAndGlyphs" style={{ fontFamily: "Michroma, Arial, sans-serif", fontSize: '1000px', fill: '#D3D7DB' }}>KODEV</text>
            </svg>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginTop: '28px', fontSize: '13px', color: '#A2A8AE' }}>
          <span>© 2026 Kodev. Todos los derechos reservados.</span>
          <span className="k-nav" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="#" style={{ textDecoration: 'none' }}>Aviso legal</a>
            <a href="#" style={{ textDecoration: 'none' }}>Privacidad</a>
            <a href="#" style={{ textDecoration: 'none' }}>Cookies</a>
          </span>
          <svg className="k-chev" aria-hidden="true" width="34" height="16" viewBox="0 0 34 16" fill="none" stroke="#C6F23A" style={{ strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }}>
            <path d="M4 2l6 6-6 6"></path>
            <path d="M14 2l6 6-6 6"></path>
            <path d="M24 2l6 6-6 6"></path>
          </svg>
        </div>
      </div>
    </footer>
  );
};
