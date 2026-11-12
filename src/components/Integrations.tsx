import React, { useState } from 'react';

interface ToolItem {
  id: string;
  name: string;
  category: string;
  catKey: string;
  desc: string;
  logo: string;
  bg: string;
  color: string;
  border?: string;
  tag: string;
}

const TOOLS: ToolItem[] = [
  { id: 'shopify', name: 'Shopify Headless', category: 'E-commerce & Pagos', catKey: 'ecommerce', desc: 'Tiendas ultrarrápidas con Storefront API', logo: 'https://media.kolpusites.com/logos/logo-shopify.webp', bg: '#96BF48', color: '#0C0E0D', tag: 'Storefront API' },
  { id: 'woocommerce', name: 'WooCommerce', category: 'E-commerce & Pagos', catKey: 'ecommerce', desc: 'Desacoplado con GraphQL y frontend React', logo: 'https://media.kolpusites.com/logos/logo-woocommerce.webp', bg: '#96588A', color: '#FFFFFF', tag: 'Headless' },
  { id: 'prestashop', name: 'PrestaShop', category: 'E-commerce & Pagos', catKey: 'ecommerce', desc: 'Migración moderna a arquitectura headless', logo: 'https://media.kolpusites.com/logos/logo-prestashop.webp', bg: '#DF0067', color: '#FFFFFF', tag: 'Webservices' },
  { id: 'holded', name: 'Holded', category: 'E-commerce & Pagos', catKey: 'ecommerce', desc: 'Facturación automática desde checkout', logo: 'https://media.kolpusites.com/logos/logo-holded.webp', bg: '#FF5722', color: '#FFFFFF', tag: 'API Nativa' },
  { id: 'hubspot', name: 'HubSpot', category: 'CRM & Marketing', catKey: 'crm', desc: 'Captura y sincronización de leads web', logo: 'https://media.kolpusites.com/logos/logo-hubspot.webp', bg: '#FF7A59', color: '#FFFFFF', tag: 'API Nativa' },
  { id: 'salesforce', name: 'Salesforce', category: 'CRM & Marketing', catKey: 'crm', desc: 'Portales de clientes B2B conectados al CRM', logo: 'https://media.kolpusites.com/logos/logo-salesforce.webp', bg: '#00A1E0', color: '#FFFFFF', tag: 'OAuth 2.0' },
  { id: 'pipedrive', name: 'Pipedrive', category: 'CRM & Marketing', catKey: 'crm', desc: 'Canalización directa de formularios web', logo: 'https://media.kolpusites.com/logos/logo-pipedrive.webp', bg: '#000000', color: '#FFFFFF', tag: 'Webhooks' },
  { id: 'odoo', name: 'Odoo ERP', category: 'E-commerce & Pagos', catKey: 'ecommerce', desc: 'Control de inventario sincronizado con la web', logo: 'https://media.kolpusites.com/logos/logo-odoo.webp', bg: '#714B67', color: '#FFFFFF', tag: 'REST / JSON' },
  
  { id: 'slack', name: 'Slack', category: 'DevOps & Alertas', catKey: 'devops', desc: 'Notificaciones de ventas y alertas de uptime', logo: 'https://media.kolpusites.com/logos/logo-slack.webp', bg: '#4A154B', color: '#FFFFFF', tag: 'Webhooks' },
  { id: 'teams', name: 'Microsoft Teams', category: 'DevOps & Alertas', catKey: 'devops', desc: 'Alertas de incidencias y monitoreo web', logo: 'https://media.kolpusites.com/logos/logo-teams.webp', bg: '#6264A7', color: '#FFFFFF', tag: 'Graph API' },
  { id: 'whatsapp', name: 'WhatsApp Web', category: 'DevOps & Alertas', catKey: 'devops', desc: 'Widget de chat con trazabilidad analítica', logo: 'https://media.kolpusites.com/logos/logo-whatsapp.webp', bg: '#25D366', color: '#0C0E0D', tag: 'Cloud API' },
  { id: 'zendesk', name: 'Zendesk', category: 'DevOps & Alertas', catKey: 'devops', desc: 'Widget de soporte sin penalizar el rendimiento', logo: 'https://media.kolpusites.com/logos/logo-zendesk.webp', bg: '#03363D', color: '#FFFFFF', tag: 'REST API' },
  { id: 'gmail', name: 'Google Workspace', category: 'CMS & Contenido', catKey: 'cms', desc: 'Emails transaccionales de confirmación', logo: 'https://media.kolpusites.com/logos/logo-gmail.webp', bg: '#FFFFFF', color: '#EA4335', border: '#E2E8F0', tag: 'SMTP / API' },
  { id: 'outlook', name: 'Microsoft 365', category: 'CMS & Contenido', catKey: 'cms', desc: 'Integración corporativa de correo y cuentas', logo: 'https://media.kolpusites.com/logos/logo-outlook.webp', bg: '#0078D4', color: '#FFFFFF', tag: 'Microsoft Graph' },

  { id: 'gdrive', name: 'Google Drive', category: 'CMS & Contenido', catKey: 'cms', desc: 'Gestión de assets y documentación técnica', logo: 'https://media.kolpusites.com/logos/logo-gdrive.webp', bg: '#FFFFFF', color: '#0C0E0D', border: '#E2E8F0', tag: 'Google Cloud' },
  { id: 'gsheets', name: 'Google Sheets', category: 'CMS & Contenido', catKey: 'cms', desc: 'Micro-CMS ligero para páginas de aterrizaje', logo: 'https://media.kolpusites.com/logos/logo-gsheets.webp', bg: '#0F9D58', color: '#FFFFFF', tag: 'Sheets API' },
  { id: 'gcal', name: 'Google Calendar', category: 'CRM & Marketing', catKey: 'crm', desc: 'Agendador de reuniones y reservas online', logo: 'https://media.kolpusites.com/logos/logo-gcal.webp', bg: '#FFFFFF', color: '#4285F4', border: '#E2E8F0', tag: 'Calendar API' },
  { id: 'excel', name: 'Excel Online', category: 'CMS & Contenido', catKey: 'cms', desc: 'Exportación de pedidos y analítica web', logo: 'https://media.kolpusites.com/logos/logo-excel.webp', bg: '#107C41', color: '#FFFFFF', tag: 'Office 365' },
  { id: 'notion', name: 'Notion CMS', category: 'CMS & Contenido', catKey: 'cms', desc: 'Blog y documentación con carga instantánea', logo: 'https://media.kolpusites.com/logos/logo-notion.webp', bg: '#FFFFFF', color: '#000000', border: '#E2E8F0', tag: 'API Oficial' },
  { id: 'make', name: 'Make', category: 'DevOps & Alertas', catKey: 'devops', desc: 'Orquestación de webhooks y flujos de datos', logo: 'https://media.kolpusites.com/logos/logo-make.webp', bg: '#6D28D9', color: '#FFFFFF', tag: 'Webhooks' },
  { id: 'n8n', name: 'n8n', category: 'DevOps & Alertas', catKey: 'devops', desc: 'Pipelines backend privados y autogestionados', logo: 'https://media.kolpusites.com/logos/logo-n8n.webp', bg: '#FF6D5A', color: '#FFFFFF', tag: 'Self-Hosted' },

  { id: 'postgres', name: 'PostgreSQL', category: 'Datos & Cloud', catKey: 'data', desc: 'Base de datos relacional para aplicaciones SaaS', logo: 'https://media.kolpusites.com/logos/logo-postgres.webp', bg: '#336791', color: '#FFFFFF', tag: 'SQL Directo' },
  { id: 'sqlserver', name: 'SQL Server', category: 'Datos & Cloud', catKey: 'data', desc: 'Conexión segura para modernizar sistemas legacy', logo: 'https://media.kolpusites.com/logos/logo-sqlserver.webp', bg: '#CC292B', color: '#FFFFFF', tag: 'T-SQL' },
  { id: 'bigquery', name: 'Google BigQuery', category: 'Datos & Cloud', catKey: 'data', desc: 'Almacén analítico para tracking de comportamiento', logo: 'https://media.kolpusites.com/logos/logo-bigquery.webp', bg: '#FFFFFF', color: '#4285F4', border: '#E2E8F0', tag: 'Google Cloud' },
];

const CATEGORIES = [
  { key: 'all', label: 'Todo el stack' },
  { key: 'ecommerce', label: 'E-commerce & Pagos' },
  { key: 'crm', label: 'CRM & Marketing' },
  { key: 'cms', label: 'CMS & Contenido' },
  { key: 'data', label: 'Datos & Cloud' },
  { key: 'devops', label: 'DevOps & Alertas' }
];

export const Integrations: React.FC = () => {
  const [activeCat, setActiveCat] = useState('all');
  const [search, setSearch] = useState('');

  const filteredTools = TOOLS.filter((t) => {
    const matchesCat = activeCat === 'all' || t.catKey === activeCat;
    const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase()) || t.desc.toLowerCase().includes(search.toLowerCase()) || t.category.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section aria-labelledby="int-h" style={{ position: 'relative', overflow: 'hidden', background: '#F1F2F0', padding: 'clamp(64px,7vw,104px) 0' }}>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1352px', margin: '0 auto', padding: '0 clamp(16px,3vw,44px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px 48px', flexWrap: 'wrap', marginBottom: '40px' }}>
          <div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, letterSpacing: '.05em', textTransform: 'uppercase', color: '#5B6168', marginBottom: '8px' }}>
              <span className="k-pulse" style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#8DBA0A' }}></span>
              Stack & Ecosistema
            </span>
            <h2 id="int-h" data-rv="clip" style={{ margin: 0, fontFamily: "Michroma, Arial, sans-serif", fontWeight: 400, fontSize: 'clamp(24px,2.8vw,40px)', lineHeight: 1.15, letterSpacing: '-.02em' }}>
              Se integra con todo<br />tu ecosistema
            </h2>
          </div>
          <p data-rv="" data-d="2" style={{ margin: 0, maxWidth: '460px', fontSize: '17px', lineHeight: 1.5, color: '#3E4348' }}>
            Construimos sobre la infraestructura que tu empresa ya domina o seleccionamos el stack óptimo: pasarelas de pago, headless CMS, bases de datos y nubes globales.
          </p>
        </div>

        {/* 3-Row Bobbing Logo Arc Marquee with Floor Reflections */}
        <div style={{ position: 'relative', padding: '32px 0 44px', overflow: 'hidden', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)', maskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)', marginBottom: '48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Row 1 */}
            <div style={{ display: 'flex', gap: '16px', width: 'max-content', animation: 'k-slide 32s linear infinite' }}>
              {[...TOOLS.slice(0, 8), ...TOOLS.slice(0, 8)].map((item, idx) => (
                <div key={'r1-' + idx} className="k-tbob" style={{ width: '130px', height: '90px', borderRadius: '18px', background: '#FFFFFF', border: '1px solid #D6D9DE', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 8px 18px rgba(0,0,0,.04)', flexShrink: 0 }}>
                  <img src={item.logo} alt={item.name} style={{ width: '34px', height: '34px', objectFit: 'contain' }} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#0C0E0D' }}>{item.name}</span>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div style={{ display: 'flex', gap: '16px', width: 'max-content', animation: 'k-slide 38s linear infinite reverse' }}>
              {[...TOOLS.slice(8, 16), ...TOOLS.slice(8, 16)].map((item, idx) => (
                <div key={'r2-' + idx} className="k-tbobr" style={{ width: '130px', height: '90px', borderRadius: '18px', background: '#FFFFFF', border: '1px solid #D6D9DE', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 8px 18px rgba(0,0,0,.04)', flexShrink: 0 }}>
                  <img src={item.logo} alt={item.name} style={{ width: '34px', height: '34px', objectFit: 'contain' }} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#0C0E0D' }}>{item.name}</span>
                </div>
              ))}
            </div>

            {/* Row 3 */}
            <div style={{ display: 'flex', gap: '16px', width: 'max-content', animation: 'k-slide 34s linear infinite' }}>
              {[...TOOLS.slice(16, 24), ...TOOLS.slice(16, 24)].map((item, idx) => (
                <div key={'r3-' + idx} className="k-tbob" style={{ width: '130px', height: '90px', borderRadius: '18px', background: '#FFFFFF', border: '1px solid #D6D9DE', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 8px 18px rgba(0,0,0,.04)', flexShrink: 0 }}>
                  <img src={item.logo} alt={item.name} style={{ width: '34px', height: '34px', objectFit: 'contain' }} />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#0C0E0D' }}>{item.name}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Filter Toolbar: Categories + Live Search */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '28px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCat(cat.key)}
                aria-pressed={activeCat === cat.key}
                style={{
                  height: '40px',
                  padding: '0 16px',
                  borderRadius: '999px',
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  border: activeCat === cat.key ? '1px solid #0C0E0D' : '1px solid #C9CDD2',
                  background: activeCat === cat.key ? '#0C0E0D' : '#FFFFFF',
                  color: activeCat === cat.key ? '#F5F7F8' : '#0C0E0D',
                  transition: 'all .25s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div style={{ position: 'relative', minWidth: '260px' }}>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar integración..."
              aria-label="Buscar integración"
              style={{
                width: '100%',
                height: '42px',
                padding: '0 16px 0 40px',
                borderRadius: '999px',
                background: '#FFFFFF',
                border: '1px solid #C9CDD2',
                fontSize: '14px',
                color: '#0C0E0D',
                boxSizing: 'border-box'
              }}
            />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8E959B" style={{ position: 'absolute', left: '16px', top: '13px', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }} aria-hidden="true">
              <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>

        {/* 24 Tools Catalog Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))', gap: '16px' }}>
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="k-int"
              style={{
                background: '#FFFFFF',
                borderRadius: '22px',
                border: '1px solid #D6D9DE',
                padding: '18px 20px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                boxShadow: '0 6px 16px rgba(0,0,0,.03)'
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  background: tool.bg,
                  border: tool.border ? `1px solid ${tool.border}` : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 4px 10px rgba(0,0,0,.08)'
                }}
              >
                <img src={tool.logo} alt={tool.name} style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <h3 style={{ margin: 0, fontSize: '15.5px', fontWeight: 600, color: '#0C0E0D' }}>{tool.name}</h3>
                  <span style={{ fontSize: '10.5px', fontWeight: 600, padding: '2px 8px', borderRadius: '999px', background: '#F1F2F0', color: '#5B6168' }}>{tool.tag}</span>
                </div>
                <p style={{ margin: 0, fontSize: '12.5px', lineHeight: 1.4, color: '#6A7076' }}>{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
