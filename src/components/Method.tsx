import React from 'react';

export const Method: React.FC = () => {
  return (
    <section id="metodo" aria-labelledby="met-h" style={{ position: 'relative', overflow: 'hidden', background: '#D6D9DE', padding: 'clamp(64px,7vw,104px) 0' }}>
      <svg aria-hidden="true" style={{ position: 'absolute', zIndex: 0, pointerEvents: 'none', left: 0, top: '20px', width: '100%', height: '150px', opacity: 0.35, overflow: 'visible' }} viewBox="0 0 400 120" preserveAspectRatio="xMidYMid slice">
        <path className="k-wave2" d="M-10 92 C 20 92, 20 32, 50 32 S 80 92, 110 92 S 140 32, 170 32 S 200 92, 230 92 S 260 32, 290 32 S 320 92, 350 92 S 380 32, 410 32 S 440 92, 470 92 S 500 32, 530 32" fill="none" stroke="#FFFFFF" style={{ strokeWidth: 26, strokeLinecap: 'round', animationDuration: '9s' }}></path>
      </svg>
      <span className="k-f2" aria-hidden="true" style={{ position: 'absolute', zIndex: 0, pointerEvents: 'none', right: '6%', top: '40px', width: '90px', height: '90px', borderRadius: '50%', opacity: 0.3, background: 'radial-gradient(circle at 32% 28%,#F1FFB8 0%,#A6D419 42%,#557D00 100%)' }}></span>
      
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1352px', margin: '0 auto', padding: '0 clamp(16px,3vw,44px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px 48px', flexWrap: 'wrap' }}>
          <h2 id="met-h" data-rv="clip" style={{ margin: 0, fontFamily: "Michroma, Arial, sans-serif", fontWeight: 400, fontSize: 'clamp(24px,2.8vw,40px)', lineHeight: 1.15, letterSpacing: '-.02em' }}>
            De la idea a<br />producción
          </h2>
          <p data-rv="" data-d="2" style={{ margin: 0, maxWidth: '460px', fontSize: '17px', lineHeight: 1.5, color: '#33383C' }}>
            Un método corto y medible. Cada fase termina con algo que puedes ver funcionando, y decides si seguimos.
          </p>
        </div>

        <svg aria-hidden="true" width="0" height="0" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
          <defs>
            <clipPath id="kc-diag" clipPathUnits="objectBoundingBox">
              <path d="M0.0859 0 L0.7055 0 Q0.7546 0 0.7893 0.0241 L0.9653 0.1461 Q1 0.1702 1 0.2043 L1 0.9404 A0.0859 0.0596 0 0 1 0.9141 1 L0.0859 1 A0.0859 0.0596 0 0 1 0 0.9404 L0 0.0596 A0.0859 0.0596 0 0 1 0.0859 0 Z"></path>
            </clipPath>
            <clipPath id="kc-cham" clipPathUnits="objectBoundingBox">
              <path d="M0.0859 0 L0.9141 0 A0.0859 0.0596 0 0 1 1 0.0596 L1 0.9404 A0.0859 0.0596 0 0 1 0.9141 1 L0.2454 1 Q0.1963 1 0.1616 0.9759 L0.0347 0.8879 Q0 0.8638 0 0.8298 L0 0.0596 A0.0859 0.0596 0 0 1 0.0859 0 Z"></path>
            </clipPath>
          </defs>
        </svg>

        <ol style={{ listStyle: 'none', margin: '48px 0 0', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px,100%),1fr))', gap: '16px' }}>
          
          {/* Step 1: Descubrimiento & UX */}
          <li className="k-card" data-rv="scale" data-d="1" style={{ position: 'relative', minHeight: '470px', boxSizing: 'border-box', borderRadius: '28px', clipPath: 'url(#kc-diag)', background: '#FFFFFF', color: '#0C0E0D', overflow: 'hidden', padding: '22px', display: 'flex', flexDirection: 'column' }}>
            <span className="k-f1" aria-hidden="true" style={{ position: 'absolute', right: '-64px', top: '-74px', width: '240px', height: '240px', borderRadius: '50%', background: 'radial-gradient(circle,transparent 0 33%,#F4FFC2 34%,#D9F861 43%,#A6D419 53%,#77A00B 60%,transparent 61%)', filter: 'drop-shadow(0 18px 22px rgba(140,190,10,.35))' }}></span>
            <span aria-hidden="true" style={{ position: 'absolute', right: '70px', top: '4px', width: '48px', height: '14px', borderRadius: '50%', background: 'rgba(255,255,255,.75)', filter: 'blur(4px)', transform: 'rotate(-24deg)' }}></span>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span aria-hidden="true" style={{ fontFamily: "Michroma, Arial, sans-serif", fontSize: '40px', lineHeight: 1 }}>01</span>
              <span aria-hidden="true" style={{ flex: '0 0 auto', marginRight: '54px', width: '48px', height: '48px', borderRadius: '16px', background: '#0C0E0D', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.18),0 10px 20px rgba(12,14,13,.18)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M4 11a7 7 0 1 0 14 0a7 7 0 1 0 -14 0 M20 20l-4-4"></path></svg>
              </span>
            </div>
            <div style={{ position: 'relative', marginTop: 'auto', paddingTop: '150px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ alignSelf: 'flex-start', fontSize: '12.5px', fontWeight: 600, padding: '5px 11px', borderRadius: '999px', background: '#F1F2F0', color: '#0C0E0D' }}>Semanas 1–2</span>
              <h3 style={{ margin: 0, fontSize: '23px', fontWeight: 600, letterSpacing: '-.02em' }}>Descubrimiento & UX</h3>
              <p style={{ margin: 0, fontSize: '14.5px', lineHeight: 1.45, color: '#5B6168' }}>Definición de objetivos, arquitectura de información y diseño de prototipos interactivos en Figma.</p>
              <div style={{ marginTop: '6px', borderRadius: '18px', background: '#F1F2F0', padding: '13px 15px' }}>
                <p style={{ margin: '0 0 3px', fontSize: '12px', fontWeight: 600, color: '#5B6168' }}>Entregable</p>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.4 }}>Prototipo navegable y especificación técnica de arquitectura.</p>
              </div>
            </div>
          </li>

          {/* Step 2: Desarrollo & Prototipo */}
          <li className="k-card" data-rv="scale" data-d="2" style={{ position: 'relative', minHeight: '470px', boxSizing: 'border-box', borderRadius: '28px 28px 50% 50% / 28px 28px 19% 19%', background: '#C6F23A', color: '#0C0E0D', overflow: 'hidden', padding: '22px 22px 72px', display: 'flex', flexDirection: 'column' }}>
            <span className="k-f1" aria-hidden="true" style={{ position: 'absolute', right: '70px', top: '70px', width: '84px', height: '84px', borderRadius: '50%', background: 'radial-gradient(circle at 32% 28%,#F1FFB8 0%,#A6D419 42%,#557D00 100%)', boxShadow: '0 10px 20px rgba(60,90,0,.3)' }}></span>
            <span className="k-f3" aria-hidden="true" style={{ position: 'absolute', right: '150px', top: '108px', width: '44px', height: '44px', borderRadius: '50%', background: 'radial-gradient(circle at 32% 28%,#F1FFB8 0%,#A6D419 42%,#557D00 100%)', boxShadow: '0 10px 20px rgba(60,90,0,.3)' }}></span>
            <span className="k-f2" aria-hidden="true" style={{ position: 'absolute', right: '30px', top: '40px', width: '34px', height: '34px', borderRadius: '50%', background: 'radial-gradient(circle at 32% 28%,#F1FFB8 0%,#A6D419 42%,#557D00 100%)', boxShadow: '0 10px 20px rgba(60,90,0,.3)' }}></span>
            <span className="k-f4" aria-hidden="true" style={{ position: 'absolute', right: '180px', top: '60px', width: '22px', height: '22px', borderRadius: '50%', background: 'radial-gradient(circle at 32% 28%,#F1FFB8 0%,#A6D419 42%,#557D00 100%)', boxShadow: '0 10px 20px rgba(60,90,0,.3)' }}></span>
            <span className="k-f3" aria-hidden="true" style={{ position: 'absolute', right: '118px', top: '24px', width: '18px', height: '18px', borderRadius: '50%', background: 'radial-gradient(circle at 32% 28%,#F1FFB8 0%,#A6D419 42%,#557D00 100%)', boxShadow: '0 10px 20px rgba(60,90,0,.3)' }}></span>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span aria-hidden="true" style={{ fontFamily: "Michroma, Arial, sans-serif", fontSize: '40px', lineHeight: 1 }}>02</span>
              <span aria-hidden="true" style={{ flex: '0 0 auto', width: '48px', height: '48px', borderRadius: '16px', background: 'rgba(12,14,13,.88)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.18),0 10px 20px rgba(12,14,13,.18)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M16 18l6-6-6-6 M8 6l-6 6 6 6"></path></svg>
              </span>
            </div>
            <div style={{ position: 'relative', marginTop: 'auto', paddingTop: '150px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ alignSelf: 'flex-start', fontSize: '12.5px', fontWeight: 600, padding: '5px 11px', borderRadius: '999px', background: 'rgba(255,255,255,.5)', color: '#0C0E0D' }}>Semanas 3–6</span>
              <h3 style={{ margin: 0, fontSize: '23px', fontWeight: 600, letterSpacing: '-.02em' }}>Desarrollo & MVP</h3>
              <p style={{ margin: 0, fontSize: '14.5px', lineHeight: 1.45, color: '#3B4A12' }}>Programación con React, Next.js y TypeScript. Primer release navegable en entorno privado.</p>
              <div style={{ marginTop: '6px', borderRadius: '18px', background: 'rgba(255,255,255,.45)', padding: '13px 15px' }}>
                <p style={{ margin: '0 0 3px', fontSize: '12px', fontWeight: 600, color: '#3B4A12' }}>Entregable</p>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.4 }}>Versión alpha funcional conectada a datos y servicios reales.</p>
              </div>
            </div>
          </li>

          {/* Step 3: Producción & Lanzamiento */}
          <li className="k-card" data-rv="scale" data-d="3" style={{ position: 'relative', minHeight: '470px', boxSizing: 'border-box', borderRadius: '28px', clipPath: 'url(#kc-cham)', background: '#1C2120', color: '#F5F7F8', overflow: 'hidden', padding: '22px 22px 64px', display: 'flex', flexDirection: 'column' }}>
            <span className="k-f1" aria-hidden="true" style={{ position: 'absolute', left: '34%', top: '-110px', width: '46px', height: '220px', borderRadius: '999px', transform: 'rotate(32deg)', background: 'linear-gradient(90deg,#262C2A 0%,#4F585A 42%,#2A302E 70%,#1C2120 100%)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.05),0 20px 30px rgba(0,0,0,.35)' }}></span>
            <span className="k-f3" aria-hidden="true" style={{ position: 'absolute', left: '56%', top: '-70px', width: '46px', height: '220px', borderRadius: '999px', transform: 'rotate(32deg)', background: 'linear-gradient(90deg,#262C2A 0%,#4F585A 42%,#2A302E 70%,#1C2120 100%)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.05),0 20px 30px rgba(0,0,0,.35)' }}></span>
            <span className="k-f2" aria-hidden="true" style={{ position: 'absolute', left: '78%', top: '-120px', width: '46px', height: '220px', borderRadius: '999px', transform: 'rotate(32deg)', background: 'linear-gradient(90deg,#262C2A 0%,#4F585A 42%,#2A302E 70%,#1C2120 100%)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.05),0 20px 30px rgba(0,0,0,.35)' }}></span>
            <span aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '230px', background: 'linear-gradient(180deg,rgba(28,33,32,0) 35%,#1C2120 92%)' }}></span>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span aria-hidden="true" style={{ fontFamily: "Michroma, Arial, sans-serif", fontSize: '40px', lineHeight: 1 }}>03</span>
              <span aria-hidden="true" style={{ flex: '0 0 auto', width: '48px', height: '48px', borderRadius: '16px', background: '#F5F7F8', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.18),0 10px 20px rgba(12,14,13,.18)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg className="k-spin" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#0C0E0D" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6z M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"></path></svg>
              </span>
            </div>
            <div style={{ position: 'relative', marginTop: 'auto', paddingTop: '150px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ alignSelf: 'flex-start', fontSize: '12.5px', fontWeight: 600, padding: '5px 11px', borderRadius: '999px', background: '#2A302E', color: '#C6F23A' }}>Semanas 7–10</span>
              <h3 style={{ margin: 0, fontSize: '23px', fontWeight: 600, letterSpacing: '-.02em' }}>Producción & CI/CD</h3>
              <p style={{ margin: 0, fontSize: '14.5px', lineHeight: 1.45, color: '#B4BABF' }}>Pruebas automatizadas, auditoría Lighthouse 100/100, seguridad y despliegue en Edge global.</p>
              <div style={{ marginTop: '6px', borderRadius: '18px', background: '#262C2A', padding: '13px 15px' }}>
                <p style={{ margin: '0 0 3px', fontSize: '12px', fontWeight: 600, color: '#B4BABF' }}>Entregable</p>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.4 }}>Lanzamiento en producción con monitorización y panel analítico.</p>
              </div>
            </div>
          </li>

          {/* Step 4: Evolución & Escala */}
          <li className="k-card" data-rv="scale" data-d="4" style={{ position: 'relative', minHeight: '470px', boxSizing: 'border-box', borderRadius: '50% 50% 28px 28px / 21% 21% 28px 28px', background: '#A9C1F5', color: '#0C0E0D', overflow: 'hidden', padding: '66px 30px 22px', display: 'flex', flexDirection: 'column' }}>
            <svg aria-hidden="true" viewBox="0 0 240 120" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', left: 0, top: '112px', width: '100%', height: '130px', overflow: 'visible' }}>
              <path className="k-wave2" d="M-10 92 C 20 92, 20 32, 50 32 S 80 92, 110 92 S 140 32, 170 32 S 200 92, 230 92 S 260 32, 290 32 S 320 92, 350 92 S 380 32, 410 32" fill="none" stroke="#F5F7F8" style={{ strokeWidth: 24, strokeLinecap: 'round', opacity: 0.6 }}></path>
              <path className="k-wave2" d="M-10 92 C 20 92, 20 32, 50 32 S 80 92, 110 92 S 140 32, 170 32 S 200 92, 230 92 S 260 32, 290 32 S 320 92, 350 92 S 380 32, 410 32" fill="none" stroke="#FFFFFF" style={{ strokeWidth: 6, strokeLinecap: 'round', opacity: 0.55, translate: '-3px -6px' }}></path>
            </svg>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span aria-hidden="true" style={{ fontFamily: "Michroma, Arial, sans-serif", fontSize: '40px', lineHeight: 1 }}>04</span>
              <span aria-hidden="true" style={{ flex: '0 0 auto', width: '48px', height: '48px', borderRadius: '16px', background: '#0C0E0D', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.18),0 10px 20px rgba(12,14,13,.18)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#C6F23A" style={{ strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}><path d="M3 17l6-6 4 4 8-8 M15 7h6v6"></path></svg>
              </span>
            </div>
            <div style={{ position: 'relative', marginTop: 'auto', paddingTop: '150px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ alignSelf: 'flex-start', fontSize: '12.5px', fontWeight: 600, padding: '5px 11px', borderRadius: '999px', background: 'rgba(255,255,255,.5)', color: '#0C0E0D' }}>Continuo</span>
              <h3 style={{ margin: 0, fontSize: '23px', fontWeight: 600, letterSpacing: '-.02em' }}>Evolución & Escala</h3>
              <p style={{ margin: 0, fontSize: '14.5px', lineHeight: 1.45, color: '#243A6B' }}>Métricas en tiempo real, optimización continua de conversión y nuevos sprints de desarrollo.</p>
              <div style={{ marginTop: '6px', borderRadius: '18px', background: 'rgba(255,255,255,.45)', padding: '13px 15px' }}>
                <p style={{ margin: '0 0 3px', fontSize: '12px', fontWeight: 600, color: '#243A6B' }}>Entregable</p>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.4 }}>Sprints periódicos, soporte técnico garantizado y cero deuda.</p>
              </div>
            </div>
          </li>

        </ol>
      </div>
    </section>
  );
};
