import React from 'react';

export const Trust: React.FC = () => {
  return (
    <section aria-labelledby="trust-h" style={{ position: 'relative', overflow: 'hidden', background: '#F1F2F0', padding: 'clamp(56px,6vw,88px) 0 clamp(40px,4vw,56px)' }}>
      <span className="k-f1" aria-hidden="true" style={{ position: 'absolute', zIndex: 0, pointerEvents: 'none', right: '-150px', top: '-170px', width: '420px', height: '420px', borderRadius: '50%', opacity: 0.32, background: 'radial-gradient(circle,transparent 0 33%,#F4FFC2 34%,#D9F861 43%,#A6D419 53%,#77A00B 60%,transparent 61%)' }}></span>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1352px', margin: '0 auto', padding: '0 clamp(16px,3vw,44px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px', flexWrap: 'wrap', marginBottom: '32px' }}>
          <h2 id="trust-h" data-rv="clip" style={{ margin: 0, fontFamily: "Michroma, Arial, sans-serif", fontWeight: 400, fontSize: 'clamp(22px,2.4vw,34px)', lineHeight: 1.2, letterSpacing: '-.02em', maxWidth: '520px' }}>Con quién trabajamos</h2>
          <div data-rv="" data-d="2" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button type="button" data-trust="clientes" aria-pressed="true" style={{ height: '44px', padding: '0 20px', borderRadius: '999px', font: 'inherit', fontSize: '14px', cursor: 'pointer', transition: 'background-color .3s ease, color .3s ease', background: '#0C0E0D', color: '#F5F7F8', border: '1px solid #0C0E0D' }}>Clientes</button>
            <button type="button" data-trust="partners" aria-pressed="false" style={{ height: '44px', padding: '0 20px', borderRadius: '999px', font: 'inherit', fontSize: '14px', cursor: 'pointer', transition: 'background-color .3s ease, color .3s ease', background: 'transparent', color: '#0C0E0D', border: '1px solid #9EA4AA' }}>Partners y alianzas</button>
          </div>
        </div>
        <div data-rv="" data-d="3">
          <div className="k-lgrid" data-grid="clientes">
            <div className="k-lcell" style={{ animationDelay: '0ms' }}>
              <span aria-hidden="true" style={{ position: 'absolute', left: '-7px', top: '-7px', width: '13px', height: '13px', zIndex: 1 }}><svg width="13" height="13" viewBox="0 0 13 13"><path d="M6.5 0v13M0 6.5h13" stroke="#0C0E0D" style={{ strokeWidth: 1.3 }}></path></svg></span>
              <svg role="img" aria-label="Quentra" width="150" height="75" viewBox="0 0 200 100" style={{ maxWidth: '74%', height: 'auto', overflow: 'visible' }}>
                <path d="M10 24.0 Q 17 23.0 24 24.0 T 38 24.0 T 52 24.0 T 66 24.0" fill="none" stroke="#1A1D1C" style={{ strokeWidth: 4.6 }}></path>
                <path d="M10 32.4 Q 17 30.0 24 32.4 T 38 32.4 T 52 32.4 T 66 32.4" fill="none" stroke="#1A1D1C" style={{ strokeWidth: 4.6 }}></path>
                <path d="M10 40.8 Q 17 37.0 24 40.8 T 38 40.8 T 52 40.8 T 66 40.8" fill="none" stroke="#1A1D1C" style={{ strokeWidth: 4.6 }}></path>
                <path d="M10 49.2 Q 17 44.0 24 49.2 T 38 49.2 T 52 49.2 T 66 49.2" fill="none" stroke="#1A1D1C" style={{ strokeWidth: 4.6 }}></path>
                <path d="M10 57.6 Q 17 51.0 24 57.6 T 38 57.6 T 52 57.6 T 66 57.6" fill="none" stroke="#1A1D1C" style={{ strokeWidth: 4.6 }}></path>
                <path d="M10 66.0 Q 17 58.0 24 66.0 T 38 66.0 T 52 66.0 T 66 66.0" fill="none" stroke="#1A1D1C" style={{ strokeWidth: 4.6 }}></path>
                <path d="M10 74.4 Q 17 65.0 24 74.4 T 38 74.4 T 52 74.4 T 66 74.4" fill="none" stroke="#1A1D1C" style={{ strokeWidth: 4.6 }}></path>
                <text x="80" y="60" style={{ fontFamily: "'Archivo Black', Arial, sans-serif", fill: '#1A1D1C', fontSize: '21px', letterSpacing: '1px' }}>QUENTRA</text>
              </svg>
              <span className="k-ltag" aria-hidden="true">Industria</span>
            </div>
            <div className="k-lcell" style={{ animationDelay: '55ms' }}>
              <span aria-hidden="true" style={{ position: 'absolute', left: '-7px', top: '-7px', width: '13px', height: '13px', zIndex: 1 }}><svg width="13" height="13" viewBox="0 0 13 13"><path d="M6.5 0v13M0 6.5h13" stroke="#0C0E0D" style={{ strokeWidth: 1.3 }}></path></svg></span>
              <svg role="img" aria-label="Grupo Brezo" width="150" height="75" viewBox="0 0 200 100" style={{ maxWidth: '74%', height: 'auto', overflow: 'visible' }}>
                <path d="M14 50a26 26 0 1 0 52 0a26 26 0 1 0 -52 0z M40 30 C 53 40 53 57 40 66 C 27 57 27 40 40 30z M39 62h2v10h-2z" fill="#1A1D1C" style={{ fillRule: 'evenodd' }}></path>
                <text x="76" y="52" style={{ fontFamily: "'DM Serif Display', Georgia, serif", fill: '#1A1D1C', fontSize: '32px' }}>Brezo</text>
                <text x="78" y="68" style={{ fontFamily: "Geist, Arial, sans-serif", fill: '#1A1D1C', fontSize: '8.5px', fontWeight: 600, letterSpacing: '3px' }}>GRUPO</text>
              </svg>
              <span className="k-ltag" aria-hidden="true">Agroalimentación</span>
            </div>
            <div className="k-lcell" style={{ animationDelay: '110ms' }}>
              <span aria-hidden="true" style={{ position: 'absolute', left: '-7px', top: '-7px', width: '13px', height: '13px', zIndex: 1 }}><svg width="13" height="13" viewBox="0 0 13 13"><path d="M6.5 0v13M0 6.5h13" stroke="#0C0E0D" style={{ strokeWidth: 1.3 }}></path></svg></span>
              <svg role="img" aria-label="Talvia" width="150" height="75" viewBox="0 0 200 100" style={{ maxWidth: '74%', height: 'auto', overflow: 'visible' }}>
                <path d="M12 30 L30 50 L12 70" fill="none" stroke="#1A1D1C" style={{ strokeWidth: 6, strokeLinejoin: 'miter', opacity: 1.0 }}></path>
                <path d="M23 30 L41 50 L23 70" fill="none" stroke="#1A1D1C" style={{ strokeWidth: 6, strokeLinejoin: 'miter', opacity: 0.72 }}></path>
                <path d="M34 30 L52 50 L34 70" fill="none" stroke="#1A1D1C" style={{ strokeWidth: 6, strokeLinejoin: 'miter', opacity: 0.44 }}></path>
                <text x="70" y="60" style={{ fontFamily: "Syne, Arial, sans-serif", fill: '#1A1D1C', fontSize: '32px', fontWeight: 700, letterSpacing: '-1px' }}>talvia</text>
              </svg>
              <span className="k-ltag" aria-hidden="true">Software</span>
            </div>
            <div className="k-lcell" style={{ animationDelay: '165ms' }}>
              <span aria-hidden="true" style={{ position: 'absolute', left: '-7px', top: '-7px', width: '13px', height: '13px', zIndex: 1 }}><svg width="13" height="13" viewBox="0 0 13 13"><path d="M6.5 0v13M0 6.5h13" stroke="#0C0E0D" style={{ strokeWidth: 1.3 }}></path></svg></span>
              <svg role="img" aria-label="Faro Norte" width="150" height="75" viewBox="0 0 200 100" style={{ maxWidth: '74%', height: 'auto', overflow: 'visible' }}>
                <g fill="#1A1D1C">
                  <circle cx="12.0" cy="50.0" r="0.40"></circle><circle cx="17.6" cy="33.2" r="0.40"></circle><circle cx="17.6" cy="38.8" r="0.59"></circle><circle cx="17.6" cy="44.4" r="0.75"></circle><circle cx="17.6" cy="50.0" r="0.81"></circle><circle cx="17.6" cy="55.6" r="0.75"></circle><circle cx="17.6" cy="61.2" r="0.59"></circle><circle cx="17.6" cy="66.8" r="0.40"></circle><circle cx="23.2" cy="27.6" r="0.40"></circle><circle cx="23.2" cy="33.2" r="0.70"></circle><circle cx="23.2" cy="38.8" r="1.00"></circle><circle cx="23.2" cy="44.4" r="1.21"></circle><circle cx="23.2" cy="50.0" r="1.28"></circle><circle cx="23.2" cy="55.6" r="1.21"></circle><circle cx="23.2" cy="61.2" r="1.00"></circle><circle cx="23.2" cy="66.8" r="0.70"></circle><circle cx="23.2" cy="72.4" r="0.40"></circle><circle cx="28.8" cy="27.6" r="0.59"></circle><circle cx="28.8" cy="33.2" r="1.00"></circle><circle cx="28.8" cy="38.8" r="1.36"></circle><circle cx="28.8" cy="44.4" r="1.64"></circle><circle cx="28.8" cy="50.0" r="1.76"></circle><circle cx="28.8" cy="55.6" r="1.64"></circle><circle cx="28.8" cy="61.2" r="1.36"></circle><circle cx="28.8" cy="66.8" r="1.00"></circle><circle cx="28.8" cy="72.4" r="0.59"></circle><circle cx="34.4" cy="27.6" r="0.75"></circle><circle cx="34.4" cy="33.2" r="1.21"></circle><circle cx="34.4" cy="38.8" r="1.64"></circle><circle cx="34.4" cy="44.4" r="2.03"></circle><circle cx="34.4" cy="50.0" r="2.23"></circle><circle cx="34.4" cy="55.6" r="2.03"></circle><circle cx="34.4" cy="61.2" r="1.64"></circle><circle cx="34.4" cy="66.8" r="1.21"></circle><circle cx="34.4" cy="72.4" r="0.75"></circle><circle cx="40.0" cy="22.0" r="0.40"></circle><circle cx="40.0" cy="27.6" r="0.81"></circle><circle cx="40.0" cy="33.2" r="1.28"></circle><circle cx="40.0" cy="38.8" r="1.76"></circle><circle cx="40.0" cy="44.4" r="2.23"></circle><circle cx="40.0" cy="50.0" r="2.70"></circle><circle cx="40.0" cy="55.6" r="2.23"></circle><circle cx="40.0" cy="61.2" r="1.76"></circle><circle cx="40.0" cy="66.8" r="1.28"></circle><circle cx="40.0" cy="72.4" r="0.81"></circle><circle cx="40.0" cy="78.0" r="0.40"></circle>
                </g>
                <text x="80" y="47" style={{ fontFamily: "'Space Grotesk', Arial, sans-serif", fill: '#1A1D1C', fontSize: '15px', fontWeight: 700, letterSpacing: '4px' }}>FARO</text>
                <text x="80" y="66" style={{ fontFamily: "'Space Grotesk', Arial, sans-serif", fill: '#1A1D1C', fontSize: '15px', fontWeight: 700, letterSpacing: '4px' }}>NORTE</text>
              </svg>
              <span className="k-ltag" aria-hidden="true">Energía</span>
            </div>
            <div className="k-lcell" style={{ animationDelay: '220ms' }}>
              <span aria-hidden="true" style={{ position: 'absolute', left: '-7px', top: '-7px', width: '13px', height: '13px', zIndex: 1 }}><svg width="13" height="13" viewBox="0 0 13 13"><path d="M6.5 0v13M0 6.5h13" stroke="#0C0E0D" style={{ strokeWidth: 1.3 }}></path></svg></span>
              <svg role="img" aria-label="Mirabel Seguros" width="150" height="75" viewBox="0 0 200 100" style={{ maxWidth: '74%', height: 'auto', overflow: 'visible' }}>
                <path d="M14 30a14 14 0 0 1 14-14h24a14 14 0 0 1 14 14v40a14 14 0 0 1-14 14H28a14 14 0 0 1-14-14z M24 68 V32 h8 l8 13 l8 -13 h8 v36 h-8 V47 l-8 12 l-8 -12 v21z" fill="#1A1D1C" style={{ fillRule: 'evenodd' }}></path>
                <text x="76" y="54" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fill: '#1A1D1C', fontSize: '34px', fontStyle: 'italic' }}>Mirabel</text>
                <text x="78" y="70" style={{ fontFamily: "Geist, Arial, sans-serif", fill: '#1A1D1C', fontSize: '8.5px', fontWeight: 600, letterSpacing: '3px' }}>SEGUROS</text>
              </svg>
              <span className="k-ltag" aria-hidden="true">Seguros</span>
            </div>
            <div className="k-lcell" style={{ animationDelay: '275ms' }}>
              <span aria-hidden="true" style={{ position: 'absolute', left: '-7px', top: '-7px', width: '13px', height: '13px', zIndex: 1 }}><svg width="13" height="13" viewBox="0 0 13 13"><path d="M6.5 0v13M0 6.5h13" stroke="#0C0E0D" style={{ strokeWidth: 1.3 }}></path></svg></span>
              <svg role="img" aria-label="Lince" width="150" height="75" viewBox="0 0 200 100" style={{ maxWidth: '74%', height: 'auto', overflow: 'visible' }}>
                <path d="M18 72 V40 L25 18 L35 34 H45 L55 18 L62 40 V72 L40 84 Z M27 54 L37 49 L37 57 Z M53 54 L43 49 L43 57 Z" fill="#1A1D1C" style={{ fillRule: 'evenodd' }}></path>
                <text x="74" y="60" style={{ fontFamily: "'Archivo Black', Arial, sans-serif", fill: '#1A1D1C', fontSize: '23px', letterSpacing: '3px' }}>LINCE</text>
              </svg>
              <span className="k-ltag" aria-hidden="true">Retail</span>
            </div>
            <div className="k-lcell" style={{ animationDelay: '330ms' }}>
              <span aria-hidden="true" style={{ position: 'absolute', left: '-7px', top: '-7px', width: '13px', height: '13px', zIndex: 1 }}><svg width="13" height="13" viewBox="0 0 13 13"><path d="M6.5 0v13M0 6.5h13" stroke="#0C0E0D" style={{ strokeWidth: 1.3 }}></path></svg></span>
              <svg role="img" aria-label="Ondara" width="150" height="75" viewBox="0 0 200 100" style={{ maxWidth: '74%', height: 'auto', overflow: 'visible' }}>
                <defs><path id="kp-ond" d="M100 50 m-34 0 a34 34 0 1 1 68 0 a34 34 0 1 1 -68 0"></path></defs>
                <g className="k-spinslow" style={{ transformOrigin: '100px 50px', transformBox: 'view-box' }}>
                  <text style={{ fontFamily: "'Space Grotesk', Arial, sans-serif", fontSize: '9.6px', fontWeight: 700, letterSpacing: '2.4px', fill: '#1A1D1C' }}><textPath href="#kp-ond">ONDARA · SEGUROS NÁUTICOS · </textPath></text>
                </g>
                <circle cx="100" cy="50" r="22" fill="#1A1D1C"></circle>
                <path d="M86 50 q4.5 -5 9 0 t9 0 t9 0 M86 57 q4.5 -5 9 0 t9 0 t9 0" fill="none" stroke="#F1F2F0" style={{ strokeWidth: 2.6, strokeLinecap: 'round' }}></path>
              </svg>
              <span className="k-ltag" aria-hidden="true">Náutica</span>
            </div>
            <div className="k-lcell" style={{ animationDelay: '385ms' }}>
              <span aria-hidden="true" style={{ position: 'absolute', left: '-7px', top: '-7px', width: '13px', height: '13px', zIndex: 1 }}><svg width="13" height="13" viewBox="0 0 13 13"><path d="M6.5 0v13M0 6.5h13" stroke="#0C0E0D" style={{ strokeWidth: 1.3 }}></path></svg></span>
              <svg role="img" aria-label="Cascabel" width="150" height="75" viewBox="0 0 200 100" style={{ maxWidth: '74%', height: 'auto', overflow: 'visible' }}>
                <path d="M40 50 V26 A24 24 0 0 1 64 50 Z" fill="#1A1D1C" transform="rotate(0 40 50) translate(3 -3)"></path>
                <path d="M40 50 V26 A24 24 0 0 1 64 50 Z" fill="#1A1D1C" transform="rotate(90 40 50) translate(3 -3)"></path>
                <path d="M40 50 V26 A24 24 0 0 1 64 50 Z" fill="#1A1D1C" transform="rotate(180 40 50) translate(3 -3)"></path>
                <path d="M40 50 V26 A24 24 0 0 1 64 50 Z" fill="#1A1D1C" transform="rotate(270 40 50) translate(3 -3)"></path>
                <text x="78" y="60" style={{ fontFamily: "Syne, Arial, sans-serif", fill: '#1A1D1C', fontSize: '27px', fontWeight: 700, letterSpacing: '-.5px' }}>cascabel</text>
              </svg>
              <span className="k-ltag" aria-hidden="true">Alimentación</span>
            </div>
            <div className="k-lcell" style={{ animationDelay: '440ms' }}>
              <span aria-hidden="true" style={{ position: 'absolute', left: '-7px', top: '-7px', width: '13px', height: '13px', zIndex: 1 }}><svg width="13" height="13" viewBox="0 0 13 13"><path d="M6.5 0v13M0 6.5h13" stroke="#0C0E0D" style={{ strokeWidth: 1.3 }}></path></svg></span>
              <svg role="img" aria-label="Vellora Hoteles" width="150" height="75" viewBox="0 0 200 100" style={{ maxWidth: '74%', height: 'auto', overflow: 'visible' }}>
                <path d="M16.0 76 V50.0 A24.0 24.0 0 0 1 64.0 50.0 V76" fill="none" stroke="#1A1D1C" style={{ strokeWidth: 3.2 }}></path>
                <path d="M21.0 76 V53.0 A19.0 19.0 0 0 1 59.0 53.0 V76" fill="none" stroke="#1A1D1C" style={{ strokeWidth: 3.2 }}></path>
                <path d="M26.0 76 V56.0 A14.0 14.0 0 0 1 54.0 56.0 V76" fill="none" stroke="#1A1D1C" style={{ strokeWidth: 3.2 }}></path>
                <path d="M31.0 76 V59.0 A9.0 9.0 0 0 1 49.0 59.0 V76" fill="none" stroke="#1A1D1C" style={{ strokeWidth: 3.2 }}></path>
                <path d="M36.0 76 V62.0 A4.0 4.0 0 0 1 44.0 62.0 V76" fill="none" stroke="#1A1D1C" style={{ strokeWidth: 3.2 }}></path>
                <text x="76" y="52" style={{ fontFamily: "'DM Serif Display', Georgia, serif", fill: '#1A1D1C', fontSize: '22px', letterSpacing: '4px' }}>VELLORA</text>
                <text x="78" y="69" style={{ fontFamily: "Geist, Arial, sans-serif", fill: '#1A1D1C', fontSize: '8.5px', fontWeight: 600, letterSpacing: '3px' }}>HOTELES</text>
              </svg>
              <span className="k-ltag" aria-hidden="true">Hostelería</span>
            </div>
            <div className="k-lcell" style={{ animationDelay: '495ms' }}>
              <span aria-hidden="true" style={{ position: 'absolute', left: '-7px', top: '-7px', width: '13px', height: '13px', zIndex: 1 }}><svg width="13" height="13" viewBox="0 0 13 13"><path d="M6.5 0v13M0 6.5h13" stroke="#0C0E0D" style={{ strokeWidth: 1.3 }}></path></svg></span>
              <svg role="img" aria-label="Rutaviva" width="150" height="75" viewBox="0 0 200 100" style={{ maxWidth: '74%', height: 'auto', overflow: 'visible' }}>
                <text x="22" y="48" style={{ fontFamily: "'Archivo Black', Arial, sans-serif", fill: '#1A1D1C', fontSize: '30px', letterSpacing: '-1px' }}>rutaviva</text>
                <path d="M14 66 H70 Q82 66 82 76 Q82 86 94 86 H178" fill="none" stroke="#1A1D1C" style={{ strokeWidth: 3 }}></path>
                <circle cx="14" cy="66" r="5" fill="#1A1D1C"></circle>
                <circle cx="182" cy="86" r="5" fill="none" stroke="#1A1D1C" style={{ strokeWidth: 3 }}></circle>
              </svg>
              <span className="k-ltag" aria-hidden="true">Logística</span>
            </div>
          </div>
          <div className="k-lgrid" data-grid="partners" hidden>
            <div className="k-lcell" style={{ animationDelay: '0ms' }}>
              <span aria-hidden="true" style={{ position: 'absolute', left: '-7px', top: '-7px', width: '13px', height: '13px', zIndex: 1 }}><svg width="13" height="13" viewBox="0 0 13 13"><path d="M6.5 0v13M0 6.5h13" stroke="#0C0E0D" style={{ strokeWidth: 1.3 }}></path></svg></span>
              <svg role="img" aria-label="Aurea Cloud" width="150" height="75" viewBox="0 0 200 100" style={{ maxWidth: '74%', height: 'auto', overflow: 'visible' }}>
                <path d="M40 22 L64 36 V64 L40 78 L16 64 V36 Z" fill="none" stroke="#1A1D1C" style={{ strokeWidth: 4 }}></path>
                <path d="M22 40 V60" stroke="#1A1D1C" style={{ strokeWidth: 3 }}></path><path d="M28 40 V60" stroke="#1A1D1C" style={{ strokeWidth: 3 }}></path><path d="M34 40 V60" stroke="#1A1D1C" style={{ strokeWidth: 3 }}></path><path d="M40 40 V60" stroke="#1A1D1C" style={{ strokeWidth: 3 }}></path><path d="M46 40 V60" stroke="#1A1D1C" style={{ strokeWidth: 3 }}></path><path d="M52 40 V60" stroke="#1A1D1C" style={{ strokeWidth: 3 }}></path><path d="M58 40 V60" stroke="#1A1D1C" style={{ strokeWidth: 3 }}></path>
                <text x="76" y="58" style={{ fontFamily: "Syne, Arial, sans-serif", fill: '#1A1D1C', fontSize: '30px', fontWeight: 700 }}>aurea</text>
              </svg>
              <span className="k-ltag" aria-hidden="true">Partner cloud</span>
            </div>
            <div className="k-lcell" style={{ animationDelay: '55ms' }}>
              <span aria-hidden="true" style={{ position: 'absolute', left: '-7px', top: '-7px', width: '13px', height: '13px', zIndex: 1 }}><svg width="13" height="13" viewBox="0 0 13 13"><path d="M6.5 0v13M0 6.5h13" stroke="#0C0E0D" style={{ strokeWidth: 1.3 }}></path></svg></span>
              <svg role="img" aria-label="Datanorte" width="150" height="75" viewBox="0 0 200 100" style={{ maxWidth: '74%', height: 'auto', overflow: 'visible' }}>
                <rect x="14" y="54" width="8" height="16" fill="#1A1D1C"></rect><rect x="26" y="42" width="8" height="28" fill="#1A1D1C"></rect><rect x="38" y="30" width="8" height="40" fill="#1A1D1C"></rect><rect x="50" y="18" width="8" height="52" fill="#1A1D1C"></rect>
                <text x="70" y="60" style={{ fontFamily: "Geist, Arial, sans-serif", fill: '#1A1D1C', fontSize: '26px', fontWeight: 600, letterSpacing: '-1px' }}>Datanorte</text>
              </svg>
              <span className="k-ltag" aria-hidden="true">Partner de datos</span>
            </div>
            <div className="k-lcell" style={{ animationDelay: '110ms' }}>
              <span aria-hidden="true" style={{ position: 'absolute', left: '-7px', top: '-7px', width: '13px', height: '13px', zIndex: 1 }}><svg width="13" height="13" viewBox="0 0 13 13"><path d="M6.5 0v13M0 6.5h13" stroke="#0C0E0D" style={{ strokeWidth: 1.3 }}></path></svg></span>
              <svg role="img" aria-label="Clúster IA Levante" width="150" height="75" viewBox="0 0 200 100" style={{ maxWidth: '74%', height: 'auto', overflow: 'visible' }}>
                <g fill="#1A1D1C">
                  <circle cx="12.0" cy="50.0" r="0.40"></circle><circle cx="17.6" cy="33.2" r="0.40"></circle><circle cx="17.6" cy="38.8" r="0.59"></circle><circle cx="17.6" cy="44.4" r="0.75"></circle><circle cx="17.6" cy="50.0" r="0.81"></circle><circle cx="17.6" cy="55.6" r="0.75"></circle><circle cx="17.6" cy="61.2" r="0.59"></circle><circle cx="17.6" cy="66.8" r="0.40"></circle><circle cx="23.2" cy="27.6" r="0.40"></circle><circle cx="23.2" cy="33.2" r="0.70"></circle><circle cx="23.2" cy="38.8" r="1.00"></circle><circle cx="23.2" cy="44.4" r="1.21"></circle><circle cx="23.2" cy="50.0" r="1.28"></circle><circle cx="23.2" cy="55.6" r="1.21"></circle><circle cx="23.2" cy="61.2" r="1.00"></circle><circle cx="23.2" cy="66.8" r="0.70"></circle><circle cx="23.2" cy="72.4" r="0.40"></circle><circle cx="28.8" cy="27.6" r="0.59"></circle><circle cx="28.8" cy="33.2" r="1.00"></circle><circle cx="28.8" cy="38.8" r="1.36"></circle><circle cx="28.8" cy="44.4" r="1.64"></circle><circle cx="28.8" cy="50.0" r="1.76"></circle><circle cx="28.8" cy="55.6" r="1.64"></circle><circle cx="28.8" cy="61.2" r="1.36"></circle><circle cx="28.8" cy="66.8" r="1.00"></circle><circle cx="28.8" cy="72.4" r="0.59"></circle><circle cx="34.4" cy="27.6" r="0.75"></circle><circle cx="34.4" cy="33.2" r="1.21"></circle><circle cx="34.4" cy="38.8" r="1.64"></circle><circle cx="34.4" cy="44.4" r="2.03"></circle><circle cx="34.4" cy="50.0" r="2.23"></circle><circle cx="34.4" cy="55.6" r="2.03"></circle><circle cx="34.4" cy="61.2" r="1.64"></circle><circle cx="34.4" cy="66.8" r="1.21"></circle><circle cx="34.4" cy="72.4" r="0.75"></circle><circle cx="40.0" cy="22.0" r="0.40"></circle><circle cx="40.0" cy="27.6" r="0.81"></circle><circle cx="40.0" cy="33.2" r="1.28"></circle><circle cx="40.0" cy="38.8" r="1.76"></circle><circle cx="40.0" cy="44.4" r="2.23"></circle><circle cx="40.0" cy="50.0" r="2.70"></circle><circle cx="40.0" cy="55.6" r="2.23"></circle><circle cx="40.0" cy="61.2" r="1.76"></circle><circle cx="40.0" cy="66.8" r="1.28"></circle><circle cx="40.0" cy="72.4" r="0.81"></circle><circle cx="40.0" cy="78.0" r="0.40"></circle>
                </g>
                <text x="80" y="50" style={{ fontFamily: "'DM Serif Display', Georgia, serif", fill: '#1A1D1C', fontSize: '21px' }}>Clúster IA</text>
                <text x="80" y="66" style={{ fontFamily: "Geist, Arial, sans-serif", fill: '#1A1D1C', fontSize: '8.5px', fontWeight: 600, letterSpacing: '3px' }}>LEVANTE</text>
              </svg>
              <span className="k-ltag" aria-hidden="true">Miembro</span>
            </div>
            <div className="k-lcell" style={{ animationDelay: '165ms' }}>
              <span aria-hidden="true" style={{ position: 'absolute', left: '-7px', top: '-7px', width: '13px', height: '13px', zIndex: 1 }}><svg width="13" height="13" viewBox="0 0 13 13"><path d="M6.5 0v13M0 6.5h13" stroke="#0C0E0D" style={{ strokeWidth: 1.3 }}></path></svg></span>
              <svg role="img" aria-label="SecurIA" width="150" height="75" viewBox="0 0 200 100" style={{ maxWidth: '74%', height: 'auto', overflow: 'visible' }}>
                <path d="M40 18 L64 28 V50 C64 66 54 76 40 82 C26 76 16 66 16 50 V28 Z" fill="#1A1D1C"></path>
                <path d="M22 40 H58" stroke="#F1F2F0" style={{ strokeWidth: 3 }}></path><path d="M22 48 H58" stroke="#F1F2F0" style={{ strokeWidth: 3 }}></path><path d="M22 56 H58" stroke="#F1F2F0" style={{ strokeWidth: 3 }}></path><path d="M22 64 H58" stroke="#F1F2F0" style={{ strokeWidth: 3 }}></path>
                <text x="74" y="60" style={{ fontFamily: "'Archivo Black', Arial, sans-serif", fill: '#1A1D1C', fontSize: '20px', letterSpacing: '2px' }}>SECURIA</text>
              </svg>
              <span className="k-ltag" aria-hidden="true">Auditoría de seguridad</span>
            </div>
            <div className="k-lcell" style={{ animationDelay: '220ms' }}>
              <span aria-hidden="true" style={{ position: 'absolute', left: '-7px', top: '-7px', width: '13px', height: '13px', zIndex: 1 }}><svg width="13" height="13" viewBox="0 0 13 13"><path d="M6.5 0v13M0 6.5h13" stroke="#0C0E0D" style={{ strokeWidth: 1.3 }}></path></svg></span>
              <svg role="img" aria-label="Escuela Kairós" width="150" height="75" viewBox="0 0 200 100" style={{ maxWidth: '74%', height: 'auto', overflow: 'visible' }}>
                <path d="M16.0 76 V50.0 A24.0 24.0 0 0 1 64.0 50.0 V76" fill="none" stroke="#1A1D1C" style={{ strokeWidth: 3.2 }}></path>
                <path d="M21.0 76 V53.0 A19.0 19.0 0 0 1 59.0 53.0 V76" fill="none" stroke="#1A1D1C" style={{ strokeWidth: 3.2 }}></path>
                <path d="M26.0 76 V56.0 A14.0 14.0 0 0 1 54.0 56.0 V76" fill="none" stroke="#1A1D1C" style={{ strokeWidth: 3.2 }}></path>
                <path d="M31.0 76 V59.0 A9.0 9.0 0 0 1 49.0 59.0 V76" fill="none" stroke="#1A1D1C" style={{ strokeWidth: 3.2 }}></path>
                <path d="M36.0 76 V62.0 A4.0 4.0 0 0 1 44.0 62.0 V76" fill="none" stroke="#1A1D1C" style={{ strokeWidth: 3.2 }}></path>
                <text x="76" y="54" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fill: '#1A1D1C', fontSize: '34px', fontStyle: 'italic' }}>Kairós</text>
                <text x="78" y="70" style={{ fontFamily: "Geist, Arial, sans-serif", fill: '#1A1D1C', fontSize: '8.5px', fontWeight: 600, letterSpacing: '3px' }}>ESCUELA</text>
              </svg>
              <span className="k-ltag" aria-hidden="true">Formación de equipos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
