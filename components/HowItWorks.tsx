import React, { useState } from 'react';
import { useReveal } from './useReveal';

const STEPS = [
  {
    number: '01',
    title: 'Diagnóstico Estratégico',
    description: 'Analisamos profundamente seu negócio, mercado e concorrência. Identificamos gaps e oportunidades que a maioria ignora.',
    includes: 'Entrevistas com stakeholders, análise de dados históricos, benchmarking e mapeamento de persona.',
    icon: '◎',
    color: 'indigo',
  },
  {
    number: '02',
    title: 'Plano de Crescimento',
    description: 'Criamos um roadmap personalizado com metas claras, canais prioritários e alocação inteligente de orçamento.',
    includes: 'Estratégia de canais, calendário editorial, funil de vendas e projeção de ROI por etapa.',
    icon: '◈',
    color: 'violet',
  },
  {
    number: '03',
    title: 'Execução',
    description: 'Colocamos o plano em prática com time especializado em cada canal, mantendo consistência e qualidade em tudo.',
    includes: 'Produção de conteúdo, gestão de mídia paga, SEO, automações e relatórios semanais.',
    icon: '◆',
    color: 'purple',
  },
  {
    number: '04',
    title: 'Resultado',
    description: 'Monitoramos os KPIs em tempo real e otimizamos continuamente para maximizar o retorno sobre cada real investido.',
    includes: 'Dashboard ao vivo, reuniões mensais de performance, otimização contínua e escala do que funciona.',
    icon: '◉',
    color: 'fuchsia',
  },
];

const colorMap: Record<string, { border: string; bg: string; text: string; num: string }> = {
  indigo:  { border: 'border-[#848cf7]/30', bg: 'bg-[#848cf7]/10', text: 'text-[#848cf7]', num: 'text-[#848cf7]/15' },
  violet:  { border: 'border-[#848cf7]/30', bg: 'bg-[#848cf7]/10', text: 'text-[#848cf7]', num: 'text-[#848cf7]/15' },
  purple:  { border: 'border-[#848cf7]/30', bg: 'bg-[#848cf7]/10', text: 'text-[#848cf7]', num: 'text-[#848cf7]/15' },
  fuchsia: { border: 'border-[#848cf7]/30', bg: 'bg-[#848cf7]/10', text: 'text-[#848cf7]', num: 'text-[#848cf7]/15' },
};

const HowItWorks: React.FC = () => {
  useReveal();
  const [active, setActive] = useState(0);

  return (
    <section id="how-it-works" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="reveal reveal-up text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] font-black text-indigo-400 mb-6 block">Como Funciona</span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Do diagnóstico ao<br />
            <span style={{ background: 'linear-gradient(135deg,#fff 0%,#848cf7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>resultado concreto</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Um processo estruturado em 4 etapas para transformar seu marketing em máquina de crescimento.
          </p>
        </div>

        {/* Step tabs */}
        <div className="reveal reveal-up flex flex-wrap justify-center gap-2 mb-12">
          {STEPS.map((step, i) => {
            const c = colorMap[step.color];
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-5 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
                  active === i
                    ? `${c.bg} ${c.border} ${c.text}`
                    : 'glass border-white/8 text-gray-500 hover:border-white/20 hover:text-gray-300'
                }`}
              >
                <span className="opacity-50 mr-2">STEP {step.number}</span>
                {step.title}
              </button>
            );
          })}
        </div>

        {/* Active step detail */}
        <div className="reveal reveal-scale">
          {STEPS.map((step, i) => {
            const c = colorMap[step.color];
            if (i !== active) return null;
            return (
              <div key={i} className={`glass rounded-3xl border ${c.border} p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center`}>
                {/* Left */}
                <div>
                  <div className={`text-[120px] font-black leading-none ${c.num} mb-4 select-none`}>{step.number}</div>
                  <div className={`text-[10px] uppercase tracking-[0.3em] font-black ${c.text} mb-3`}>{step.icon} Step {step.number}</div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed mb-6">{step.description}</p>
                  <div className={`rounded-xl ${c.bg} border ${c.border} p-4`}>
                    <div className={`text-[9px] uppercase tracking-[0.2em] font-black ${c.text} mb-2`}>O que incluímos</div>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.includes}</p>
                  </div>
                </div>

                {/* Right — mini dashboard */}
                <div className="glass rounded-2xl border border-white/8 p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-3 h-3 rounded-full bg-red-400/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                    <span className="w-3 h-3 rounded-full bg-green-400/70" />
                    <span className={`ml-auto text-[9px] uppercase tracking-widest font-black ${c.text}`}>Elevarte Dashboard</span>
                  </div>
                  <div className="space-y-3 mb-6">
                    {[
                      { label: 'Taxa de Conversão', value: '4.8%', delta: '+0.6%', positive: true },
                      { label: 'Custo por Lead',    value: 'R$ 18', delta: '-12%',  positive: true },
                      { label: 'ROI da Campanha',   value: '5.2x', delta: '+0.8x', positive: true },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between bg-white/3 rounded-lg px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${c.bg} border ${c.border}`} />
                          <span className="text-gray-400 text-xs">{row.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-white text-sm font-bold">{row.value}</span>
                          <span className="text-green-400 text-[10px] font-black">{row.delta}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="text-[9px] uppercase tracking-widest text-gray-600 font-semibold">Atualizado agora</span>
                    <span className="flex items-center gap-1 text-[9px] uppercase tracking-widest text-green-400 font-black">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Ao vivo
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="reveal reveal-up text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-full text-white text-sm font-bold uppercase tracking-widest shimmer-effect transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]"
          >
            Começar agora
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
