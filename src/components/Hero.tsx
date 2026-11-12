import React, { useState } from 'react';

export const Hero: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="k-progress" aria-hidden="true"></div>

      <div className="k-sticky" style={{ background: 'rgba(12,14,13,.96)', color: '#F5F7F8', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1352px', margin: '0 auto', padding: '0 clamp(16px,3vw,44px)', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <a href="#top" aria-label="Kodev, ir al inicio" style={{ fontFamily: "Michroma, Arial, sans-serif", fontSize: '16px', letterSpacing: '.06em', textDecoration: 'none', color: '#F5F7F8' }}>KODEV</a>
          <nav aria-label="Secundaria" className="k-nav k-sticky-links" style={{ display: 'flex', gap: '28px', fontSize: '14px' }}>
            <a href="#servicios" style={{ textDecoration: 'none' }}>Servicios</a>
            <a href="#agentes" style={{ textDecoration: 'none' }}>Especialidades</a>
            <a href="#metodo" style={{ textDecoration: 'none' }}>Método</a>
            <a href="#flujo" style={{ textDecoration: 'none' }}>Pipeline</a>
            <a href="#planes" style={{ textDecoration: 'none' }}>Planes</a>
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a className="k-btn" href="#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', height: '44px', padding: '0 4px 0 18px', borderRadius: '999px', background: '#C6F23A', color: '#0C0E0D', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
              Iniciar proyecto
              <span style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#0C0E0D', color: '#C6F23A', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }} aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
              </span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú de navegación"
              className="k-mobile-menu-btn"
              style={{ display: 'none', width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.2)', color: '#F5F7F8', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {mobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div style={{ background: '#0C0E0D', borderTop: '1px solid rgba(255,255,255,.08)', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7F8', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>Servicios</a>
            <a href="#agentes" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7F8', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>Especialidades</a>
            <a href="#metodo" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7F8', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>Método</a>
            <a href="#flujo" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7F8', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>Pipeline en vivo</a>
            <a href="#planes" onClick={() => setMobileMenuOpen(false)} style={{ color: '#F5F7F8', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>Planes</a>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} style={{ color: '#C6F23A', textDecoration: 'none', fontSize: '16px', fontWeight: 600 }}>Contacto & Consultoría</a>
          </div>
        )}
      </div>

      <header id="top" className="hero" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg,#D8DBE0 0%,#CED2D7 30%,#A3A9AF 50%,#555B5E 66%,#1B1F1E 82%,#0C0E0D 100%)' }}>
        <div className="hero-inner" style={{ position: 'relative', maxWidth: '1352px', margin: '0 auto', padding: '0 clamp(16px,3vw,44px)', minHeight: '900px', display: 'flex', flexDirection: 'column' }}>
          <nav aria-label="Principal" className="k-down" style={{ position: 'relative', zIndex: 4, display: 'flex', alignItems: 'center', gap: '16px 20px', flexWrap: 'wrap', padding: '24px 0' }}>
            <div className="k-nav k-desktop-nav-links" style={{ flex: '1 1 0', minWidth: '260px', display: 'flex', gap: 'clamp(18px,2.4vw,36px)', flexWrap: 'wrap', fontSize: '15px' }}>
              <a href="#servicios" style={{ textDecoration: 'none', color: '#0C0E0D' }}>Servicios</a>
              <a href="#agentes" style={{ textDecoration: 'none', color: '#0C0E0D' }}>Especialidades</a>
              <a href="#metodo" style={{ textDecoration: 'none', color: '#0C0E0D' }}>Método</a>
              <a href="#planes" style={{ textDecoration: 'none', color: '#0C0E0D' }}>Planes</a>
            </div>
            <a className="nav-logo" href="#top" aria-label="Kodev, ir al inicio" style={{ flex: '0 0 auto', fontFamily: "Michroma, Arial, sans-serif", fontSize: '19px', letterSpacing: '.06em', textDecoration: 'none', color: '#0C0E0D' }}>KODEV</a>
            <div className="k-desktop-cta" style={{ flex: '1 1 0', minWidth: '260px', display: 'flex', justifyContent: 'flex-end', gap: '10px', flexWrap: 'wrap' }}>
              <a className="k-btn" href="#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', textDecoration: 'none', color: '#0C0E0D', fontSize: '15px' }}>
                <span style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(12,14,13,.45)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }} aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span>
                <span style={{ height: '44px', padding: '0 22px', borderRadius: '999px', border: '1px solid rgba(12,14,13,.45)', display: 'inline-flex', alignItems: 'center' }}>Pedir presupuesto</span>
              </a>
              <a className="k-btn" href="#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', textDecoration: 'none', color: '#0C0E0D', fontSize: '15px' }}>
                <span style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(12,14,13,.45)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }} aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span>
                <span style={{ height: '44px', padding: '0 22px', borderRadius: '999px', border: '1px solid rgba(12,14,13,.45)', display: 'inline-flex', alignItems: 'center' }}>Contacto</span>
              </a>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menú principal"
              className="k-hero-menu-btn"
              style={{ display: 'none', marginLeft: 'auto', width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(12,14,13,.12)', border: '1px solid rgba(12,14,13,.3)', color: '#0C0E0D', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                {mobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>
          </nav>
          <div className="k-word" aria-hidden="true" style={{ position: 'relative', zIndex: 1, marginTop: 'clamp(12px,2.4vw,36px)' }}>
            <svg viewBox="0 0 5924 770" style={{ display: 'block', width: '100%', height: 'auto' }}><text x="0" y="760" textLength="5924" lengthAdjust="spacingAndGlyphs" style={{ fontFamily: "Michroma, Arial, sans-serif", fontSize: '1000px', fill: '#A6ABB1' }}>KODEV</text></svg>
          </div>
          <div className="hero-figure" style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}>
            <div className="hero-img" style={{ position: 'absolute', left: '50%', top: 'clamp(70px,9%,110px)', height: '112%', aspectRatio: '820 / 1000', transform: 'translateX(-50%)' }}>
              <img src="https://media.kolpusites.com/kortex/robot-kortex.webp" alt="Robot humanoide de cuerpo gris mate y casco negro brillante, con una línea de luz lima en el visor, un anillo lima en la oreja, una luz lima en el pecho y la palabra KODEV impresa" style={{ display: 'block', width: '100%', height: '100%' }} />
              <div className="k-bot3d" aria-hidden="true" style={{ position: 'absolute', inset: 0 }}></div>
            </div>
          </div>
          <div className="hero-bottom" style={{ position: 'relative', zIndex: 3, marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '36px 48px', flexWrap: 'wrap', padding: '40px 0 48px' }}>
            <div style={{ flex: '0 1 500px', minWidth: 0 }}>
              <p className="k-rise d2" style={{ margin: '0 0 22px', display: 'flex', alignItems: 'center', gap: '14px', fontSize: '15.5px', fontWeight: 500, letterSpacing: '-.005em', color: '#E3E6E9' }}>
                <span className="k-visor-ic" aria-hidden="true" style={{ position: 'relative', flex: '0 0 auto', width: '44px', height: '22px', borderRadius: '11px 11px 14px 14px', background: 'linear-gradient(180deg,#2A2F31 0%,#050606 60%)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.28),0 4px 10px rgba(0,0,0,.35)', overflow: 'hidden' }}>
                  <span style={{ position: 'absolute', left: '7px', right: '7px', top: '11px', height: '2px', borderRadius: '2px', background: '#C6F23A', boxShadow: '0 0 5px rgba(198,242,58,.9)' }}></span>
                  <span className="k-visor-dot" style={{ position: 'absolute', left: '7px', top: '9.5px', width: '9px', height: '5px', borderRadius: '3px', background: '#F2FFC9', boxShadow: '0 0 6px 1px rgba(198,242,58,.9)' }}></span>
                  <span style={{ position: 'absolute', left: '8px', top: '3px', width: '14px', height: '3px', borderRadius: '3px', background: 'rgba(255,255,255,.22)', transform: 'rotate(-8deg)' }}></span>
                </span>
                <span>Ingeniería y desarrollo <span style={{ color: '#C6F23A', fontWeight: 600 }}>WEB</span> para empresas</span>
              </p>
              <h1 style={{ margin: 0, fontFamily: "Michroma, Arial, sans-serif", fontWeight: 400, fontSize: 'clamp(25px,2.8vw,40px)', lineHeight: 1.16, letterSpacing: '-.01em', textTransform: 'uppercase', color: '#F5F7F8' }}>
                <span style={{ display: 'block', overflow: 'hidden' }}><span className="k-line k-l1">Ingeniería web</span></span>
                <span style={{ display: 'block', overflow: 'hidden', padding: '.22em .5em', margin: '-.22em -.5em' }}><span className="k-line k-l2"><span className="k-neon" style={{ color: '#CDF24A' }}>de alto impacto</span></span></span>
                <span style={{ display: 'block', overflow: 'hidden' }}><span className="k-line k-l3">para tu empresa.</span></span>
              </h1>
              <div className="k-rise d3" style={{ display: 'flex', alignItems: 'center', gap: '14px 26px', flexWrap: 'wrap', marginTop: '34px' }}>
                <a className="k-btn" href="#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', height: '56px', padding: '0 6px 0 24px', borderRadius: '999px', background: 'rgba(245,247,248,.14)', border: '1px solid rgba(245,247,248,.3)', color: '#F5F7F8', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>
                  Iniciar proyecto
                  <span className="k-ringdot" style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#C6F23A', color: '#0C0E0D', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }} aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
                  </span>
                </a>
                <a href="#servicios" style={{ color: '#F5F7F8', fontSize: '15px', textUnderlineOffset: '5px' }}>Explorar servicios</a>
              </div>
            </div>
            <div className="k-rise d4" style={{ flex: '0 1 300px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <p className="hero-copy" style={{ margin: 0, fontSize: '15.5px', lineHeight: 1.5, fontWeight: 500, color: '#0C0E0D' }}>
                Diseñamos, programamos y desplegamos <strong style={{ fontWeight: 600, color: '#0C0E0D', background: '#C6F23A', padding: '0 .28em', borderRadius: '.35em', WebkitBoxDecorationBreak: 'clone', boxDecorationBreak: 'clone' }}>aplicaciones web y SaaS</strong> con arquitectura moderna, carga instantánea y <strong style={{ fontWeight: 600, color: '#0C0E0D', background: '#C6F23A', padding: '0 .28em', borderRadius: '.35em', WebkitBoxDecorationBreak: 'clone', boxDecorationBreak: 'clone' }}>conversión máxima</strong> garantizada.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ position: 'relative', background: '#0F1211', borderRadius: '24px', padding: '16px', color: '#F5F7F8', border: '1px solid rgba(255,255,255,.08)', boxShadow: '0 24px 50px rgba(0,0,0,.35)', overflow: 'hidden' }}>
                  <span className="k-breath" style={{ position: 'absolute', right: '-70px', top: '-70px', width: '210px', height: '210px', borderRadius: '50%', background: 'radial-gradient(closest-side,rgba(198,242,58,.2),rgba(198,242,58,0))' }}></span>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ flex: '0 0 auto', width: '40px', height: '40px', borderRadius: '13px', background: 'linear-gradient(180deg,#E6FF92,#A6D419)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.8),0 0 0 4px rgba(198,242,58,.16)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="30" height="26" viewBox="14 4 132 112">
                        <defs><linearGradient id="kg-hd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style={{ stopColor: '#545C5E' }}></stop><stop offset="1" style={{ stopColor: '#202625' }}></stop></linearGradient></defs>
                        <g className="k-ant"><line x1="80" y1="36" x2="80" y2="18" stroke="#111514" style={{ strokeWidth: 4, strokeLinecap: 'round' }}></line><circle cx="80" cy="14" r="6.5" fill="#F5F7F8"></circle></g>
                        <rect x="17" y="57" width="17" height="36" rx="8.5" fill="#111514"></rect>
                        <rect x="126" y="57" width="17" height="36" rx="8.5" fill="#111514"></rect>
                        <rect x="28" y="32" width="104" height="82" rx="32" fill="url(#kg-hd)"></rect>
                        <rect x="40" y="50" width="80" height="47" rx="19" fill="#111514"></rect>
                        <ellipse className="k-eye" cx="64" cy="73" rx="5.5" ry="8" fill="#C6F23A"></ellipse>
                        <ellipse className="k-eye" cx="96" cy="73" rx="5.5" ry="8" fill="#C6F23A"></ellipse>
                      </svg>
                    </span>
                    <span style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span data-demo="title" style={{ fontSize: '14px', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', animation: 'k-log-b .45s cubic-bezier(.2,.7,.2,1) both' }}>Despliegue en Edge</span>
                      <span className="k-pulse" style={{ flex: '0 0 auto', width: '7px', height: '7px', borderRadius: '50%', background: '#C6F23A' }}></span>
                    </span>
                    <span style={{ flex: '0 0 auto', fontSize: '11px', padding: '4px 9px', borderRadius: '999px', border: '1px solid rgba(255,255,255,.2)', color: '#C9CED3' }}>Pipeline</span>
                  </div>
                  <div data-demo="strip" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '14px', padding: '10px 12px', borderRadius: '16px', background: '#171B1A', animation: 'k-log-b .45s cubic-bezier(.2,.7,.2,1) both' }}>
                    <span style={{ flex: '0 0 auto', width: '36px', height: '36px', borderRadius: '12px', background: '#262C2A', color: '#F5F7F8', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.08)' }}>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path data-demo="i1" d="M16 18l6-6-6-6 M8 6l-6 6 6 6"></path></svg>
                    </span>
                    <svg viewBox="0 0 100 10" preserveAspectRatio="none" style={{ flex: '1 1 0', width: 0, minWidth: 0, height: '10px', overflow: 'visible' }}>
                      <path d="M0 5 H100" stroke="#3A403E" style={{ strokeWidth: 1.5, strokeDasharray: '3 3' }}></path>
                      <path className="k-run" pathLength="100" d="M0 5 H100" fill="none" stroke="#C6F23A" style={{ strokeWidth: 3, strokeLinecap: 'round' }}></path>
                    </svg>
                    <span className="k-halo" style={{ flex: '0 0 auto', width: '40px', height: '40px', borderRadius: '13px', background: 'linear-gradient(180deg,#E6FF92,#A6D419)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.85)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0C0E0D" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                    </span>
                    <svg viewBox="0 0 100 10" preserveAspectRatio="none" style={{ flex: '1 1 0', width: 0, minWidth: 0, height: '10px', overflow: 'visible' }}>
                      <path d="M0 5 H100" stroke="#3A403E" style={{ strokeWidth: 1.5, strokeDasharray: '3 3' }}></path>
                      <path className="k-run" pathLength="100" d="M0 5 H100" fill="none" stroke="#C6F23A" style={{ strokeWidth: 3, strokeLinecap: 'round' }}></path>
                    </svg>
                    <span style={{ flex: '0 0 auto', width: '36px', height: '36px', borderRadius: '12px', background: '#262C2A', color: '#F5F7F8', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.08)' }}>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path data-demo="i2" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
                    </span>
                  </div>
                  <div data-demo="rows" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '9px', marginTop: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', animation: 'k-log-b .5s cubic-bezier(.2,.7,.2,1) 350ms both' }}>
                      <span style={{ flex: '0 0 auto', width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(180deg,#E6FF92,#A6D419)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.8)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', animation: 'k-pop-b .45s cubic-bezier(.2,.9,.3,1.4) 650ms both' }}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0C0E0D" style={{ strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M5 12l5 5 9-10"></path></svg></span>
                      <span style={{ flex: 1, minWidth: 0, fontSize: '13px', lineHeight: 1.3, color: '#E3E6E9' }}>Commit push a main</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', animation: 'k-log-b .5s cubic-bezier(.2,.7,.2,1) 770ms both' }}>
                      <span style={{ flex: '0 0 auto', width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(180deg,#E6FF92,#A6D419)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.8)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', animation: 'k-pop-b .45s cubic-bezier(.2,.9,.3,1.4) 1070ms both' }}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0C0E0D" style={{ strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M5 12l5 5 9-10"></path></svg></span>
                      <span style={{ flex: 1, minWidth: 0, fontSize: '13px', lineHeight: 1.3, color: '#E3E6E9' }}>Build Next.js optimizado</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', animation: 'k-log-b .5s cubic-bezier(.2,.7,.2,1) 1190ms both' }}>
                      <span style={{ flex: '0 0 auto', width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(180deg,#E6FF92,#A6D419)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.8)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', animation: 'k-pop-b .45s cubic-bezier(.2,.9,.3,1.4) 1490ms both' }}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0C0E0D" style={{ strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M5 12l5 5 9-10"></path></svg></span>
                      <span style={{ flex: 1, minWidth: 0, fontSize: '13px', lineHeight: 1.3, color: '#E3E6E9' }}>Live en Edge Vercel (18ms)</span>
                    </div>
                  </div>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '10px', marginTop: '14px' }}>
                    <div style={{ flex: 1, height: '6px', borderRadius: '6px', background: 'rgba(255,255,255,.08)', overflow: 'hidden' }}><div className="k-shinebar" data-demo="bar" style={{ height: '100%', borderRadius: '6px', transition: 'width 1.2s cubic-bezier(.2,.7,.2,1)', width: '78%' }}></div></div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#C9CED3' }}>
                  <span data-demo="num" style={{ fontSize: '12px', fontVariantNumeric: 'tabular-nums' }}>01</span>
                  <div data-demo="dots" aria-hidden="true" style={{ flex: 1, display: 'flex', gap: '4px' }}>
                    <span style={{ position: 'relative', flex: 1, height: '2px', borderRadius: '2px', background: 'rgba(255,255,255,.22)', overflow: 'hidden' }}><span style={{ position: 'absolute', inset: 0, background: '#C6F23A', transformOrigin: 'left center', transform: 'scaleX(0)', animation: 'k-fill-b 5.2s linear forwards' }}></span></span>
                    <span style={{ position: 'relative', flex: 1, height: '2px', borderRadius: '2px', background: 'rgba(255,255,255,.22)', overflow: 'hidden' }}><span style={{ position: 'absolute', inset: 0, background: '#C6F23A', transformOrigin: 'left center', transform: 'scaleX(0)' }}></span></span>
                    <span style={{ position: 'relative', flex: 1, height: '2px', borderRadius: '2px', background: 'rgba(255,255,255,.22)', overflow: 'hidden' }}><span style={{ position: 'absolute', inset: 0, background: '#C6F23A', transformOrigin: 'left center', transform: 'scaleX(0)' }}></span></span>
                    <span style={{ position: 'relative', flex: 1, height: '2px', borderRadius: '2px', background: 'rgba(255,255,255,.22)', overflow: 'hidden' }}><span style={{ position: 'absolute', inset: 0, background: '#C6F23A', transformOrigin: 'left center', transform: 'scaleX(0)' }}></span></span>
                  </div>
                  <span style={{ fontSize: '12px', fontVariantNumeric: 'tabular-nums' }}>04</span>
                  <button type="button" data-demo="prev" aria-label="Demo anterior" style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(255,255,255,.25)', background: 'transparent', color: '#F5F7F8', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }} aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg></button>
                  <button className="k-btn" type="button" data-demo="next" aria-label="Demo siguiente" style={{ width: '44px', height: '44px', borderRadius: '50%', border: 0, background: '#F5F7F8', color: '#0C0E0D', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }} aria-hidden="true"><path d="M9 6l6 6-6 6"></path></svg></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
