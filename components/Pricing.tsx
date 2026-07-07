import React, { useRef, useState } from 'react';
import { useReveal } from './useReveal';

const WA = 'https://wa.me/5547997667963';

const plans = [
  {
    name: 'Essencial',
    price: 'R$ 1.500',
    period: '/mês',
    description: 'Ideal para negócios que estão começando a investir em presença digital.',
    color: '#4ade80',
    colorDim: 'rgba(74,222,128,0.12)',
    border: 'rgba(74,222,128,0.25)',
    icon: '◎',
    popular: false,
    features: [
      'Gestão de 1 rede social',
      '12 posts/mês (feed + stories)',
      'Tráfego pago até R$ 500 de verba',
      'Relatório mensal de performance',
      'Atendimento via WhatsApp',
      'Identidade visual básica',
    ],
    cta: 'Começar agora',
    waMsg: 'Olá! Tenho interesse no plano Essencial da Elevarte.',
  },
  {
    name: 'Crescimento',
    price: 'R$ 3.500',
    period: '/mês',
    description: 'Para marcas que querem escalar com consistência e resultados reais.',
    color: '#848cf7',
    colorDim: 'rgba(132,140,247,0.12)',
    border: 'rgba(132,140,247,0.35)',
    icon: '◈',
    popular: true,
    features: [
      'Gestão de 2 redes sociais',
      '20 posts/mês + reels e stories',
      'Tráfego pago até R$ 2.000 de verba',
      'Criação de criativos premium',
      'Reunião quinzenal de estratégia',
      'Funil de vendas estruturado',
      'Relatório semanal com KPIs',
    ],
    cta: 'Quero crescer',
    waMsg: 'Olá! Tenho interesse no plano Crescimento da Elevarte.',
  },
  {
    name: 'Premium 360°',
    price: 'R$ 6.500',
    period: '/mês',
    description: 'Solução completa para marcas que exigem o melhor em cada detalhe.',
    color: '#c084fc',
    colorDim: 'rgba(192,132,252,0.12)',
    border: 'rgba(192,132,252,0.25)',
    icon: '◆',
    popular: false,
    features: [
      'Gestão de 3+ redes sociais',
      'Conteúdo ilimitado + vídeos',
      'Tráfego pago até R$ 5.000 de verba',
      'Estratégia full-funnel completa',
      'Account manager dedicado',
      'Produção de vídeo mensal',
      'Reunião semanal de performance',
      'SEO + automações de marketing',
    ],
    cta: 'Falar com estrategista',
    waMsg: 'Olá! Tenho interesse no plano Premium 360° da Elevarte.',
  },
];

const enterprise = {
  waMsg: 'Olá! Minha empresa fatura mais de R$ 500k/mês e quero conhecer a proposta exclusiva da Elevarte.',
};

function TiltCard({ children, color, border, colorDim, popular }: {
  children: React.ReactNode;
  color: string;
  border: string;
  colorDim: string;
  popular: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setStyle({
      transform: `perspective(800px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.03)`,
      transition: 'transform 0.1s ease',
    });
  };

  const handleMouseLeave = () => {
    setStyle({ transform: 'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)', transition: 'transform 0.5s ease' });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        background: popular ? colorDim : 'rgba(255,255,255,0.02)',
        border: `1px solid ${border}`,
        borderTop: popular ? `3px solid ${color}` : `1px solid ${border}`,
        borderRadius: '24px',
        padding: '2rem',
        position: 'relative',
        backdropFilter: 'blur(20px)',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}

const Pricing: React.FC = () => {
  useReveal();

  return (
    <section id="pricing" className="py-16 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-indigo-600/8 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="reveal reveal-up text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] font-black mb-6 block" style={{ color: '#848cf7' }}>Planos</span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Investimento que<br />
            <span style={{ background: 'linear-gradient(135deg,#fff 0%,#848cf7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              gera retorno real
            </span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Social media estratégico + tráfego pago integrados. Escolha o plano ideal para o seu momento.
          </p>
        </div>

        {/* Cards */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {plans.map((plan) => (
            <div key={plan.name} className="relative">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1.5 rounded-full text-[9px] uppercase tracking-[0.25em] font-black text-white"
                    style={{ background: `linear-gradient(135deg, #6366f1, #848cf7)` }}>
                    Mais Popular
                  </span>
                </div>
              )}
              <TiltCard color={plan.color} border={plan.border} colorDim={plan.colorDim} popular={plan.popular}>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg mb-6"
                  style={{ background: plan.colorDim, border: `1px solid ${plan.border}`, color: plan.color }}>
                  {plan.icon}
                </div>

                {/* Name & desc */}
                <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-2">
                  <span className="text-4xl font-black" style={{ color: plan.color }}>{plan.price}</span>
                  <span className="text-gray-500 text-sm ml-1">{plan.period}</span>
                </div>
                <div className="h-px mb-6" style={{ background: plan.border }} />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="mt-0.5 text-xs" style={{ color: plan.color }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`${WA}?text=${encodeURIComponent(plan.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3.5 rounded-xl text-sm font-black uppercase tracking-widest transition-all duration-300"
                  style={{
                    background: plan.popular ? `linear-gradient(135deg, #6366f1, #848cf7)` : 'transparent',
                    border: `1px solid ${plan.border}`,
                    color: plan.popular ? '#fff' : plan.color,
                  }}
                  onMouseEnter={e => {
                    if (!plan.popular) (e.currentTarget as HTMLElement).style.background = plan.colorDim;
                  }}
                  onMouseLeave={e => {
                    if (!plan.popular) (e.currentTarget as HTMLElement).style.background = 'transparent';
                  }}
                >
                  {plan.cta}
                </a>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* Enterprise card */}
        <div className="reveal reveal-up">
          <div
            className="relative rounded-3xl p-8 md:p-10 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(132,140,247,0.05) 100%)', border: '1px solid rgba(132,140,247,0.2)' }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute right-0 top-0 w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[80px]" />
            </div>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] font-black mb-3 block" style={{ color: '#848cf7' }}>
                  ✦ Empresas +R$ 500k/mês
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Proposta <span style={{ background: 'linear-gradient(135deg,#fff 0%,#848cf7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Exclusiva</span>
                </h3>
                <p className="text-gray-400 text-base max-w-lg leading-relaxed">
                  Para empresas de alto volume, criamos uma estratégia 360° sob medida com time dedicado, metas personalizadas e investimento proporcional ao seu potencial de crescimento.
                </p>
                <div className="flex flex-wrap gap-4 mt-5">
                  {['Account manager exclusivo', 'Estratégia personalizada', 'SLA garantido', 'Reunião executiva mensal'].map(f => (
                    <span key={f} className="flex items-center gap-1.5 text-xs text-gray-400">
                      <span style={{ color: '#848cf7' }}>✓</span> {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 text-center">
                <div className="text-[10px] uppercase tracking-[0.25em] font-black text-gray-500 mb-2">Investimento</div>
                <div className="text-4xl font-black text-white mb-1">Sob consulta</div>
                <div className="text-xs text-gray-600 mb-6">Proporcional ao seu faturamento</div>
                <a
                  href={`${WA}?text=${encodeURIComponent(enterprise.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white text-sm font-black uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_30px_rgba(132,140,247,0.4)]"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #848cf7)' }}
                >
                  Solicitar proposta
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-[10px] text-gray-700 uppercase tracking-widest font-semibold mt-8">
          Todos os planos incluem contrato sem fidelidade mínima · Cancele quando quiser
        </p>
      </div>
    </section>
  );
};

export default Pricing;
