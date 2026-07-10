import React, { useEffect } from 'react';
import { useReveal } from './useReveal';
import RevealText from './RevealText';

const pillars = [
  {
    icon: '◈',
    title: 'Estratégia antes de tudo',
    desc: 'Entendemos profundamente o seu mercado, concorrência e público antes de executar qualquer ação.',
  },
  {
    icon: '◉',
    title: 'Dados que guiam decisões',
    desc: 'Cada campanha é orientada por métricas reais. Sem achismos, sem desperdício de verba.',
  },
  {
    icon: '◐',
    title: 'Criatividade com propósito',
    desc: 'Design e copy que convertem — não apenas impressionam. Beleza a serviço do resultado.',
  },
];

const About: React.FC = () => {
  useReveal();

  return (
    <section id="about" className="py-16 md:py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <div className="reveal reveal-up">
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-indigo-400 mb-6 block">
                Quem Somos
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white mb-6">
                <RevealText text="Agência 360°" /><br />
                <span className="gradient-text">que entrega resultado</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light mb-6">
                A Elevarte nasceu da crença de que marketing eficaz exige estratégia sólida, execução precisa e visão de negócio. Somos mais que uma agência — somos parceiros de crescimento.
              </p>
              <p className="text-gray-500 text-base leading-relaxed font-light">
                Com uma equipe multidisciplinar e tecnologia de ponta, atendemos desde startups em fase de tração até empresas consolidadas que precisam reposicionar sua marca.
              </p>
            </div>

            <div className="reveal reveal-up mt-10" style={{ transitionDelay: '0.2s' }}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-indigo-400 font-bold text-sm uppercase tracking-widest group"
              >
                Fale com um estrategista
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — Pillars */}
          <div className="space-y-4">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="reveal reveal-scale glass rounded-2xl p-6 card-hover border border-white/5 hover:border-indigo-500/20"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl icon-pop">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base mb-1">{p.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee bar */}
        <div className="mt-24 overflow-hidden border-y border-white/5 py-5">
          <div className="animate-marquee flex gap-16 text-[11px] uppercase tracking-[0.3em] font-black text-gray-700 whitespace-nowrap">
            {Array.from({ length: 2 }).flatMap(() =>
              ['Tráfego Pago', 'SEO', 'Social Media', 'Branding', 'CRM', 'Copy', 'Design', 'Analytics', 'Inbound', 'Outbound'].map((t) => (
                <span key={Math.random()} className="flex items-center gap-4">
                  {t} <span className="text-indigo-600">✦</span>
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
