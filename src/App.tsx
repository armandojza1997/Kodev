import React from 'react';
import { Hero } from './components/Hero';
import { Trust } from './components/Trust';
import { Services } from './components/Services';
import { Agents } from './components/Agents';
import { Method } from './components/Method';
import { Integrations } from './components/Integrations';
import { Flow } from './components/Flow';
import { Plans } from './components/Plans';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useKortexDriver } from './lib/useKortexDriver';

export default function App() {
  useKortexDriver();

  return (
    <div style={{ fontFamily: "Geist, 'Helvetica Neue', Arial, sans-serif", color: '#0C0E0D', background: '#F1F2F0', WebkitFontSmoothing: 'antialiased' }}>
      {/* PART 1: .k-progress + .k-sticky + header#top.hero */}
      <Hero />

      {/* PART 2: section[aria-labelledby="trust-h"] (Con quién trabajamos) */}
      <Trust />

      {/* PART 3: section#servicios (Lo que construimos) */}
      <Services />

      {/* PART 4 + 5: section#agentes (Un agente para cada área + flip cards) */}
      <Agents />

      {/* PART 2: section#metodo (De la idea a producción) */}
      <Method />

      {/* PART 6: section[aria-labelledby="int-h"] (Integraciones) */}
      <Integrations />

      {/* PART 7: section#flujo.k-flowsec (Mira a un agente trabajar) */}
      <Flow />

      {/* PART 6: section#planes (Por dónde empezar) */}
      <Plans />

      {/* PART 8: section#contacto (Contacto, seeds, FAQ, booking) */}
      <Contact />

      {/* PART 2: footer */}
      <Footer />
    </div>
  );
}
