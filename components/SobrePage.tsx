import React from 'react';
import { useReveal } from './useReveal';

const WA = 'https://wa.me/5547997667963';

const values = [
  { icon: '◈', title: 'Estratégia antes de tudo', desc: 'Nenhuma ação sem propósito. Entendemos o negócio, o mercado e o público antes de executar.' },
  { icon: '◉', title: 'Dados no comando', desc: 'Decisões guiadas por métricas reais. Sem achismo, sem desperdício de verba.' },
  { icon: '◐', title: 'Criatividade que converte', desc: 'Design e copy feitos para gerar resultado — não só para impressionar.' },
  { icon: '◆', title: 'Parceria de verdade', desc: 'Somos uma extensão do seu time. Seu crescimento é a nossa métrica de sucesso.' },
];

const stats = [
  { n: '120+', l: 'Clientes atendidos' },
  { n: '5x', l: 'ROI médio' },
  { n: '4', l: 'Anos de estrada' },
  { n: '98%', l: 'Satisfação' },
];

const SobrePage: React.FC = () => {
  useReveal();

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <div className="reveal reveal-up text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] font-black mb-6 block" style={{ color: '#848cf7' }}>Quem Somos</span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Uma agência que pensa<br />
            <span style={{ background: 'linear-gradient(135deg,#fff 0%,#848cf7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>como sócia do seu negócio</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A Elevarte nasceu da crença de que marketing eficaz exige estratégia sólida, execução precisa e visão de negócio. Somos mais que uma agência — somos parceiros de crescimento.
          </p>
        </div>

        {/* Story */}
        <div className="reveal reveal-up glass rounded-3xl p-8 md:p-12 border border-white/8 mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-6">Nossa história</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Começamos atendendo negócios locais que estavam cansados de "postar por postar" sem ver retorno. Percebemos que faltava o principal: <strong className="text-white">estratégia</strong>. A partir daí, estruturamos um método que une inteligência de dados, criatividade e execução consistente.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Hoje atendemos desde startups em fase de tração até empresas consolidadas que precisam reposicionar a marca. Cada projeto começa com um diagnóstico honesto e termina com resultado medível — do primeiro post ao fechamento da venda.
          </p>
        </div>

        {/* Stats */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((s) => (
            <div key={s.l} className="text-center glass rounded-2xl p-6 border border-white/8">
              <div className="text-3xl md:text-4xl font-black" style={{ background: 'linear-gradient(135deg,#fff 0%,#848cf7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.n}</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-2 font-semibold">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="reveal reveal-up text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white">No que a gente acredita</h2>
        </div>
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {values.map((v) => (
            <div key={v.title} className="glass rounded-2xl p-8 border border-white/8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg mb-5" style={{ background: 'rgba(132,140,247,0.12)', border: '1px solid rgba(132,140,247,0.3)', color: '#848cf7' }}>{v.icon}</div>
              <h3 className="text-xl font-black text-white mb-3">{v.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal reveal-scale text-center glass rounded-3xl p-10 md:p-14 border border-[#848cf7]/20" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(132,140,247,0.04))' }}>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Vamos crescer juntos?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">Conte pra gente o momento do seu negócio. O primeiro diagnóstico é uma conversa sem compromisso.</p>
          <a href={`${WA}?text=${encodeURIComponent('Olá! Conheci a Elevarte e quero conversar sobre o meu negócio.')}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_40px_rgba(132,140,247,0.5)]"
            style={{ background: 'linear-gradient(135deg, #6366f1, #848cf7)' }}>
            Falar com a Elevarte
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </main>
  );
};

export default SobrePage;
