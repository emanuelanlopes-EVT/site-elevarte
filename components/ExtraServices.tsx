import React from 'react';
import RevealText from './RevealText';
import { useReveal } from './useReveal';

const WA = 'https://wa.me/5547997667963';

const services = [
  {
    icon: '◎',
    title: 'Tráfego Pago',
    tag: 'Meta + Google Ads',
    description: 'Campanhas de performance no Instagram, Facebook e Google. Gestão de verba, criativos e otimização diária para o menor custo por resultado.',
    waMsg: 'Olá! Quero saber mais sobre o serviço de Tráfego Pago (Meta + Google Ads) da Elevarte.',
  },
  {
    icon: '◈',
    title: 'Assessoria de Marketing',
    tag: 'Acompanhamento contínuo',
    description: 'Seu time de marketing terceirizado. Planejamento, execução e acompanhamento mensal para manter sua marca sempre à frente.',
    waMsg: 'Olá! Quero saber mais sobre a Assessoria de Marketing da Elevarte.',
  },
  {
    icon: '◆',
    title: 'Consultoria Estratégica',
    tag: 'Diagnóstico + plano',
    description: 'Análise profunda do seu negócio, concorrência e mercado, com um plano de crescimento claro e acionável para você executar.',
    waMsg: 'Olá! Quero saber mais sobre a Consultoria Estratégica da Elevarte.',
  },
  {
    icon: '◐',
    title: 'Branding & Design',
    tag: 'Identidade visual',
    description: 'Criação e reposicionamento de marca: logotipo, identidade visual, paleta e manual de marca para transmitir autoridade.',
    waMsg: 'Olá! Quero saber mais sobre o serviço de Branding & Design da Elevarte.',
  },
  {
    icon: '◉',
    title: 'Produção Audiovisual',
    tag: 'Vídeos & fotos',
    description: 'Gravação e edição de vídeos, reels e fotos profissionais para redes sociais e anúncios que realmente convertem.',
    waMsg: 'Olá! Quero saber mais sobre a Produção Audiovisual da Elevarte.',
  },
  {
    icon: '◇',
    title: 'Sites & Landing Pages',
    tag: 'Presença digital',
    description: 'Sites institucionais e páginas de conversão rápidas, responsivas e otimizadas para transformar visitantes em clientes.',
    waMsg: 'Olá! Quero saber mais sobre a criação de Sites & Landing Pages da Elevarte.',
  },
];

const ExtraServices: React.FC = () => {
  useReveal();

  return (
    <section id="extra-services" className="py-16 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-indigo-600/8 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="reveal reveal-up text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] font-black mb-6 block" style={{ color: '#848cf7' }}>Serviços Avulsos</span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            <RevealText text="Precisa de algo" /><br />
            <span style={{ background: 'linear-gradient(135deg,#fff 0%,#848cf7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              mais específico?
            </span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Além dos planos, oferecemos serviços sob demanda. Contrate exatamente o que o seu negócio precisa agora.
          </p>
        </div>

        {/* Cards grid */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <a
              key={s.title}
              href={`${WA}?text=${encodeURIComponent(s.waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group glass rounded-3xl p-8 border border-white/8 hover:border-[#848cf7]/40 transition-all duration-300 flex flex-col"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-lg mb-6"
                style={{ background: 'rgba(132,140,247,0.12)', border: '1px solid rgba(132,140,247,0.3)', color: '#848cf7' }}
              >
                {s.icon}
              </div>
              <div className="text-[9px] uppercase tracking-[0.2em] font-black mb-2" style={{ color: '#848cf7' }}>{s.tag}</div>
              <h3 className="text-xl font-black text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{s.description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest transition-transform group-hover:translate-x-1" style={{ color: '#848cf7' }}>
                Quero saber mais
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraServices;
