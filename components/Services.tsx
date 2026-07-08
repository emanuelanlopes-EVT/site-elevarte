import React from 'react';
import RevealText from './RevealText';
import { useReveal } from './useReveal';

const services = [
  {
    number: '01',
    title: 'Tráfego Pago',
    desc: 'Campanhas estratégicas no Google, Meta, TikTok e LinkedIn com foco em conversão e ROI máximo.',
    tags: ['Google Ads', 'Meta Ads', 'TikTok Ads', 'LinkedIn'],
    icon: '↗',
  },
  {
    number: '02',
    title: 'Social Media',
    desc: 'Gestão completa das redes sociais com conteúdo relevante, consistente e orientado a engajamento.',
    tags: ['Instagram', 'LinkedIn', 'YouTube', 'TikTok'],
    icon: '◎',
  },
  {
    number: '03',
    title: 'Branding & Identidade',
    desc: 'Construção e reposicionamento de marca com design system, naming e estratégia de voz.',
    tags: ['Identidade Visual', 'Naming', 'Tom de Voz'],
    icon: '◈',
  },
  {
    number: '04',
    title: 'SEO & Conteúdo',
    desc: 'Estratégia editorial e otimização técnica para dominar o ranqueamento orgânico do seu nicho.',
    tags: ['On-Page', 'Off-Page', 'Blog', 'Link Building'],
    icon: '◐',
  },
  {
    number: '05',
    title: 'CRM & Automação',
    desc: 'Funis de venda, e-mail marketing e automação para nutrir leads e aumentar a taxa de fechamento.',
    tags: ['RD Station', 'HubSpot', 'ActiveCampaign'],
    icon: '⊕',
  },
  {
    number: '06',
    title: 'Analytics & BI',
    desc: 'Dashboards em tempo real, atribuição de receita e relatórios gerenciais para decisões estratégicas.',
    tags: ['GA4', 'Looker Studio', 'Power BI'],
    icon: '⊞',
  },
];

const Services: React.FC = () => {
  useReveal();

  return (
    <section id="services" className="py-16 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="reveal reveal-up mb-16 max-w-2xl">
          <span className="text-[10px] uppercase tracking-[0.3em] font-black text-indigo-400 mb-6 block">
            Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            <RevealText text="Tudo que sua marca precisa" /><br />
            <span className="gradient-text">em um só lugar</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <div
              key={s.number}
              className="reveal reveal-scale glass rounded-2xl p-7 card-hover border border-white/5 hover:border-indigo-500/20 group"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-[10px] font-black tracking-[0.3em] text-indigo-500/60">{s.number}</span>
                <span className="text-2xl text-indigo-400/60 group-hover:text-indigo-400 transition-colors icon-pop">{s.icon}</span>
              </div>
              <h3 className="text-lg font-black text-white mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-white/3 border border-white/8 text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal reveal-up mt-14 text-center" style={{ transitionDelay: '0.3s' }}>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass border border-indigo-500/30 text-indigo-300 text-sm font-bold uppercase tracking-widest hover:bg-indigo-600/10 transition-all duration-300"
          >
            Ver todos os serviços
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
