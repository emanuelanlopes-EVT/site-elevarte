import React, { useState } from 'react';
import { useReveal } from './useReveal';

const cases = [
  {
    category: 'E-commerce',
    title: 'Marca de moda 3x o faturamento em 6 meses',
    result: '+312% Receita',
    detail: 'Reestruturação completa de funil: tráfego pago + CRM + social media com conteúdo de autoridade.',
    color: 'from-indigo-600/20 to-purple-600/10',
    badge: 'Tráfego + CRM',
  },
  {
    category: 'SaaS B2B',
    title: 'Redução de 68% no CAC e aumento no LTV',
    result: '-68% CAC',
    detail: 'Estratégia de inbound com SEO técnico + automação de nutrição + reposicionamento de marca.',
    color: 'from-blue-600/20 to-indigo-600/10',
    badge: 'SEO + Automação',
  },
  {
    category: 'Clínica de Saúde',
    title: '5.000 novos pacientes em 12 meses',
    result: '5k Pacientes',
    detail: 'Campanha local no Google + gestão de reputação + social media educacional para médicos.',
    color: 'from-teal-600/20 to-indigo-600/10',
    badge: 'Google + Social',
  },
  {
    category: 'Imobiliário',
    title: 'Lançamento de empreendimento 100% vendido',
    result: '100% Vendido',
    detail: 'Estratégia de lançamento digital com segmentação geográfica, anúncios e landing page de alta conversão.',
    color: 'from-amber-600/15 to-indigo-600/10',
    badge: 'Lançamento Digital',
  },
];

const Portfolio: React.FC = () => {
  useReveal();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="cases" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-[#040404] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="reveal reveal-up">
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-indigo-400 mb-6 block">Cases</span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Resultados que<br />
              <span className="gradient-text">falam por si</span>
            </h2>
          </div>
          <div className="reveal reveal-up" style={{ transitionDelay: '0.2s' }}>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Cada case é a prova de que estratégia + execução = crescimento real e mensurável.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <div
              key={i}
              className={`reveal reveal-scale group relative rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-all duration-500 cursor-pointer`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* BG gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${c.color} transition-opacity duration-500 ${hovered === i ? 'opacity-100' : 'opacity-60'}`} />
              <div className="absolute inset-0 glass" />

              <div className="relative p-8">
                <div className="flex items-start justify-between mb-8">
                  <span className="text-[9px] uppercase tracking-[0.3em] font-black text-gray-500">{c.category}</span>
                  <span className="text-[9px] uppercase tracking-widest font-black px-3 py-1 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-300">
                    {c.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white leading-snug mb-4">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{c.detail}</p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black gradient-text">{c.result}</span>
                  <div className="w-8 h-8 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-indigo-400/40 transition-colors">
                    <svg className="w-3 h-3 text-gray-400 group-hover:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second marquee */}
        <div className="mt-20 overflow-hidden">
          <div className="animate-marquee-reverse flex gap-12 text-[10px] uppercase tracking-[0.3em] font-black text-indigo-900 whitespace-nowrap">
            {Array.from({ length: 2 }).flatMap(() =>
              ['E-commerce', 'SaaS', 'Saúde', 'Educação', 'Imobiliário', 'Varejo', 'Indústria', 'Serviços'].map((t) => (
                <span key={Math.random()} className="flex items-center gap-8">
                  {t} <span className="text-indigo-800">◆</span>
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
