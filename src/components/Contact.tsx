import React, { useState } from 'react';

const SEEDS = [
  'Plataforma SaaS o MVP con Next.js y base de datos',
  'Sitio web corporativo de alta conversión y SEO',
  'E-commerce headless con Shopify y Stripe',
  'Sistema de diseño y componentes UI reutilizables',
  'Migración tecnológica o auditoría Core Web Vitals',
  'Squad dedicado de desarrollo frontend y backend'
];

const FAQS = [
  {
    q: '¿Cuánto tiempo tarda en lanzarse un proyecto web?',
    a: 'Una landing corporativa o web institucional de alto rendimiento suele estar lista en 2 a 3 semanas. Una plataforma SaaS o aplicación web completa (MVP) toma entre 6 y 10 semanas desde la arquitectura UI/UX hasta el despliegue final en producción.'
  },
  {
    q: '¿El código fuente y la propiedad intelectual son míos?',
    a: 'Sí, al 100%. Todo el código desarrollado se entrega en tu organización privada de GitHub o GitLab desde el primer día. No aplicamos tarifas cautivas ni dependencias propietarias: el software pertenece enteramente a tu empresa.'
  },
  {
    q: '¿Qué tecnologías y estándares utilizáis en Kodev?',
    a: 'Trabajamos con el ecosistema moderno de mayor rendimiento: TypeScript estricto, React 19, Next.js, Node.js, Tailwind CSS, PostgreSQL, Docker y arquitecturas edge en Vercel, AWS o Google Cloud con CI/CD automatizado.'
  },
  {
    q: '¿Cómo garantizáis el rendimiento y los Core Web Vitals?',
    a: 'Cada build pasa auditorías automáticas en CI con Google Lighthouse y pruebas reales en dispositivos móviles y de escritorio. Minimizamos el bundle JS, servimos assets en AVIF/WebP y garantizamos puntuaciones 95+ en todas las métricas clave de Google.'
  },
  {
    q: '¿Ofrecéis soporte y mantenimiento tras el lanzamiento?',
    a: 'Por supuesto. Todos los proyectos incluyen 30 días de garantía total y ajustes posteriores al lanzamiento. Además, ofrecemos modelos de squad dedicado mensual o trimestral para evolucionar funcionalidades y monitorizar la infraestructura 24/7.'
  }
];

export const Contact: React.FC = () => {
  const [selectedProcess, setSelectedProcess] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" aria-labelledby="cnt-h" style={{ position: 'relative', background: '#0C0E0D', color: '#F5F7F8', padding: 'clamp(64px,7vw,104px) 0 clamp(40px,4vw,64px)', overflow: 'hidden' }}>
      
      {/* Giant Verb Wordmarks */}
      <div className="k-wmw" data-rv="group" aria-hidden="true" style={{ position: 'relative', maxWidth: '1352px', margin: '0 auto clamp(40px,5vw,72px)', padding: '0 clamp(16px,3vw,44px)' }}>
        <svg className="k-cross" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ position: 'absolute', left: 'clamp(16px,3vw,44px)', top: '-28px', strokeWidth: 1.2 }}><path d="M12 2v20M2 12h20"></path></svg>
        <svg className="k-cross" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ position: 'absolute', right: 'clamp(16px,3vw,44px)', top: '-28px', strokeWidth: 1.2 }}><path d="M12 2v20M2 12h20"></path></svg>
        <div className="k-wm">
          <svg viewBox="0 0 5924 770" style={{ display: 'block', width: '100%', height: 'auto' }}>
            <text x="0" y="760" textLength="5924" lengthAdjust="spacingAndGlyphs" style={{ fontFamily: "Michroma, Arial, sans-serif", fontSize: '1000px', fill: '#1C2120' }}>
              CONSTRUIR
            </text>
          </svg>
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1352px', margin: '0 auto', padding: '0 clamp(16px,3vw,44px)' }}>
        
        {/* Seed Search Bar */}
        <div data-rv="scale" style={{ background: '#161A19', border: '1px solid rgba(255,255,255,.1)', borderRadius: '28px', padding: 'clamp(20px,3vw,32px)', marginBottom: 'clamp(48px,6vw,80px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 600, color: '#F5F7F8' }}>¿Qué solución web te gustaría desarrollar?</h3>
          </div>
          <div className="k-seed" style={{ position: 'relative', marginBottom: '16px', borderRadius: '999px', background: '#0F1211', border: '1px solid rgba(255,255,255,.12)' }}>
            <input
              type="text"
              value={selectedProcess}
              onChange={(e) => setSelectedProcess(e.target.value)}
              placeholder="Haz clic en una idea o escribe el producto que quieres crear..."
              aria-label="Proyecto web a desarrollar"
              style={{ width: '100%', height: '50px', padding: '0 20px', borderRadius: '999px', background: 'transparent', border: 'none', color: '#F5F7F8', fontSize: '14.5px', outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {SEEDS.map((seed, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setSelectedProcess(seed);
                  const el = document.getElementById('form-proceso');
                  if (el) {
                    el.focus();
                  }
                }}
                style={{
                  height: '34px',
                  padding: '0 14px',
                  borderRadius: '999px',
                  background: selectedProcess === seed ? '#C6F23A' : '#222826',
                  color: selectedProcess === seed ? '#0C0E0D' : '#C9CED3',
                  border: 'none',
                  fontSize: '12.5px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all .2s ease'
                }}
              >
                + {seed}
              </button>
            ))}
          </div>
        </div>

        {/* Two-Column Layout: FAQ Accordion & Booking Form */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(460px, 100%), 1fr))', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }}>
          
          {/* Left: FAQ Accordion */}
          <div>
            <h2 id="cnt-h" data-rv="clip" style={{ margin: '0 0 16px', fontFamily: "Michroma, Arial, sans-serif", fontWeight: 400, fontSize: 'clamp(24px,2.8vw,38px)', lineHeight: 1.15, letterSpacing: '-.02em', color: '#F5F7F8' }}>
              Preguntas<br />frecuentes
            </h2>
            <p data-rv="" data-d="2" style={{ margin: '0 0 32px', fontSize: '16px', lineHeight: 1.5, color: '#A2A8AE' }}>
              Resolvemos dudas sobre nuestra metodología de desarrollo, código propietario, plazos y soporte.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} style={{ background: '#161A19', border: '1px solid rgba(255,255,255,.08)', borderRadius: '20px', overflow: 'hidden' }}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      style={{ width: '100%', padding: '20px 24px', background: 'transparent', border: 'none', color: '#F5F7F8', fontSize: '15.5px', fontWeight: 600, textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}
                    >
                      <span>{faq.q}</span>
                      <span style={{ flex: '0 0 auto', width: '28px', height: '28px', borderRadius: '50%', background: isOpen ? '#C6F23A' : '#262C2A', color: isOpen ? '#0C0E0D' : '#F5F7F8', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'transform .3s ease', transform: isOpen ? 'rotate(180deg)' : 'none' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="k-ans" style={{ padding: '0 24px 22px', fontSize: '14.5px', lineHeight: 1.55, color: '#B4BABF' }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Booking Form Card in Lime #C6F23A */}
          <div className="k-form" style={{ background: '#C6F23A', color: '#0C0E0D', borderRadius: '32px', padding: 'clamp(28px,4vw,44px)', boxShadow: '0 24px 60px rgba(0,0,0,.5)' }}>
            <span style={{ display: 'inline-block', fontSize: '11px', fontFamily: "Michroma, Arial, sans-serif", fontWeight: 700, padding: '4px 12px', borderRadius: '999px', background: '#0C0E0D', color: '#C6F23A', marginBottom: '16px' }}>SIN COMPROMISO</span>
            <h3 style={{ margin: '0 0 10px', fontSize: '26px', fontWeight: 600, letterSpacing: '-.02em', color: '#0C0E0D' }}>
              Reserva tu consultoría técnica
            </h3>
            <p style={{ margin: '0 0 28px', fontSize: '15px', lineHeight: 1.45, color: '#33383C' }}>
              30 minutos con un arquitecto web sénior. Analizamos los requerimientos de tu proyecto, arquitectura aconsejada y estimación de tiempos.
            </p>

            {submitted ? (
              <div style={{ background: '#0C0E0D', color: '#F5F7F8', borderRadius: '22px', padding: '32px 24px', textAlign: 'center' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#C6F23A', color: '#0C0E0D', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h4 style={{ margin: '0 0 8px', fontSize: '20px', fontWeight: 600, color: '#FFFFFF' }}>¡Solicitud enviada!</h4>
                <p style={{ margin: 0, fontSize: '14.5px', color: '#A2A8AE' }}>Un arquitecto técnico de Kodev te contactará en menos de 24 horas laborables.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label htmlFor="form-nombre" className="sr-only">Nombre y apellidos</label>
                  <input
                    id="form-nombre"
                    type="text"
                    required
                    placeholder="Nombre y apellidos"
                    style={{ width: '100%', height: '48px', padding: '0 18px', borderRadius: '14px', background: '#FFFFFF', border: '1px solid rgba(12,14,13,.15)', color: '#0C0E0D', fontSize: '14.5px', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label htmlFor="form-email" className="sr-only">Email corporativo</label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    placeholder="Email corporativo"
                    style={{ width: '100%', height: '48px', padding: '0 18px', borderRadius: '14px', background: '#FFFFFF', border: '1px solid rgba(12,14,13,.15)', color: '#0C0E0D', fontSize: '14.5px', boxSizing: 'border-box' }}
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label htmlFor="form-empresa" className="sr-only">Empresa</label>
                    <input
                      id="form-empresa"
                      type="text"
                      required
                      placeholder="Empresa"
                      style={{ width: '100%', height: '48px', padding: '0 18px', borderRadius: '14px', background: '#FFFFFF', border: '1px solid rgba(12,14,13,.15)', color: '#0C0E0D', fontSize: '14.5px', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="form-tel" className="sr-only">Teléfono</label>
                    <input
                      id="form-tel"
                      type="tel"
                      placeholder="Teléfono"
                      style={{ width: '100%', height: '48px', padding: '0 18px', borderRadius: '14px', background: '#FFFFFF', border: '1px solid rgba(12,14,13,.15)', color: '#0C0E0D', fontSize: '14.5px', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="form-proceso" className="sr-only">Proyecto o requerimientos</label>
                  <textarea
                    id="form-proceso"
                    rows={3}
                    value={selectedProcess}
                    onChange={(e) => setSelectedProcess(e.target.value)}
                    placeholder="Cuéntanos brevemente qué plataforma, aplicación web o sitio deseas construir..."
                    style={{ width: '100%', padding: '14px 18px', borderRadius: '14px', background: '#FFFFFF', border: '1px solid rgba(12,14,13,.15)', color: '#0C0E0D', fontSize: '14.5px', boxSizing: 'border-box', resize: 'vertical' }}
                  />
                </div>
                <button
                  type="submit"
                  className="k-btn"
                  style={{
                    height: '52px',
                    borderRadius: '999px',
                    background: '#0C0E0D',
                    color: '#C6F23A',
                    border: 'none',
                    fontSize: '15px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    marginTop: '8px'
                  }}
                >
                  <span>Reservar consultoría técnica sin coste</span>
                  <span style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#C6F23A', color: '#0C0E0D', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
                  </span>
                </button>
                <p style={{ margin: 0, fontSize: '12px', color: '#33383C', textAlign: 'center' }}>
                  Sin spam. Tratamos tus datos y requerimientos bajo estricto acuerdo de confidencialidad.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
