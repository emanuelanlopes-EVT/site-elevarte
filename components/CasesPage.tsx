import React from 'react';
import { useReveal } from './useReveal';

const WA = 'https://wa.me/5547997667963';

// EDITE AQUI seus cases reais (segmento, cliente, desafio, resultado e métricas).
const cases = [
  {
    segment: 'Varejo · Moda',
    client: 'Loja Exemplo',
    challenge: 'Vendas online estagnadas e baixo reconhecimento de marca na região.',
    result: 'Reposicionamento + tráfego pago estruturado triplicaram o faturamento digital em 4 meses.',
    metrics: [ { n: '+212%', l: 'Faturamento online' }, { n: '4.8x', l: 'ROAS' } ],
    color: '#848cf7',
  },
  {
    segment: 'Serviços · Saúde',
    client: 'Clínica Exemplo',
    challenge: 'Agenda ociosa e dependência total do boca a boca para novos pacientes.',
    result: 'Funil de captação com Meta + Google Ads encheu a agenda e reduziu o custo por lead.',
    metrics: [ { n: '-38%', l: 'Custo por lead' }, { n: '+150', l: 'Agendamentos/mês' } ],
    color: '#4ade80',
  },
  {
    segment: 'B2B · Tecnologia',
    client: 'SaaS Exemplo',
    challenge: 'Time comercial sem previsibilidade de pipeline qualificado.',
    result: 'Estratégia full-funnel com conteúdo e mídia gerou fluxo constante de oportunidades quentes.',
    metrics: [ { n: '+3x', l: 'Leads qualificados' }, { n: '27%', l: 'Taxa de conversão' } ],
    color: '#c084fc',
  },
];

const CasesPage: React.FC = () => {
  useReveal();

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal reveal-up text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] font-black mb-6 block" style={{ color: '#848cf7' }}>Cases</span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Resultado não se promete,<br />
            <span style={{ background: 'linear-gradient(135deg,#fff 0%,#848cf7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>se comprova</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Alguns exemplos de como nossa estratégia se traduz em crescimento real. Cada número aqui veio de um plano bem executado.
          </p>
        </div>

        {/* Cases */}
        <div className="space-y-8 mb-20">
          {cases.map((c, i) => (
            <div key={i} className="reveal reveal-up glass rounded-3xl p-8 md:p-10 border border-white/8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <span className="text-[9px] uppercase tracking-[0.25em] font-black" style={{ color: c.color }}>{c.segment}</span>
                <h3 className="text-2xl font-black text-white mt-2 mb-4">{c.client}</h3>
                <p className="text-gray-500 text-sm mb-2"><strong className="text-gray-300">Desafio:</strong> {c.challenge}</p>
                <p className="text-gray-400 text-sm leading-relaxed"><strong className="text-gray-300">O que fizemos:</strong> {c.result}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {c.metrics.map((m) => (
                  <div key={m.l} className="text-center rounded-2xl p-5" style={{ background: 'rgba(132,140,247,0.08)', border: `1px solid ${c.color}33` }}>
                    <div className="text-2xl md:text-3xl font-black" style={{ color: c.color }}>{m.n}</div>
                    <div className="text-[9px] uppercase tracking-widest text-gray-500 mt-1 font-semibold">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-gray-600 uppercase tracking-widest font-semibold mb-16">
          * Cases ilustrativos — substituímos pelos seus resultados reais conforme os projetos avançam
        </p>

        {/* CTA */}
        <div className="reveal reveal-scale text-center glass rounded-3xl p-10 md:p-14 border border-[#848cf7]/20" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(132,140,247,0.04))' }}>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Quer ser o próximo case?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">Vamos montar a estratégia que leva o seu negócio pro próximo nível.</p>
          <a href={`${WA}?text=${encodeURIComponent('Olá! Vi os cases da Elevarte e quero resultados assim no meu negócio.')}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_40px_rgba(132,140,247,0.5)]"
            style={{ background: 'linear-gradient(135deg, #6366f1, #848cf7)' }}>
            Quero minha estratégia
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </main>
  );
};

export default CasesPage;
