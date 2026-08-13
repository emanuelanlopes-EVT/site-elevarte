import React, { useState } from 'react';
import { useReveal } from './useReveal';

// EDITE / ADICIONE artigos aqui. 'body' aceita **negrito** e quebras de linha.
const posts = [
  {
    slug: 'estrategia-antes-execucao',
    title: 'Por que estratégia vem antes da execução',
    date: '2026',
    tag: 'Estratégia',
    excerpt: 'Postar todo dia não é estratégia. Entenda por que o planejamento é o que separa marca que cresce de marca que só aparece.',
    body: `A maioria dos negócios começa no marketing pela ponta errada: **execução sem direção**. Posta-se por postar, anuncia-se sem público definido, e no fim do mês a pergunta é sempre a mesma — "cadê o retorno?".

**Estratégia é o mapa.** Antes de qualquer post ou anúncio, é preciso responder: quem é o público, qual o diferencial, qual a jornada de compra e qual métrica realmente importa.

Quando a estratégia vem primeiro, a execução deixa de ser aposta e vira processo. Cada real investido tem um porquê, e cada resultado pode ser medido e otimizado.

Na Elevarte, todo projeto começa com um diagnóstico. Só depois a gente coloca a mão na massa.`,
  },
  {
    slug: 'trafego-pago-comecar',
    title: 'Tráfego pago: por onde começar sem queimar verba',
    date: '2026',
    tag: 'Tráfego Pago',
    excerpt: 'Meta e Google Ads podem ser uma máquina de vendas — ou um ralo de dinheiro. A diferença está na estrutura.',
    body: `Tráfego pago não é "impulsionar post". É construir uma **estrutura de campanhas** alinhada a um objetivo claro.

**1. Defina o objetivo real:** vendas, leads ou reconhecimento? Cada um pede uma configuração diferente.

**2. Conheça o público:** públicos amplos demais gastam à toa; segmentados demais limitam o alcance. O equilíbrio vem dos dados.

**3. Criativos testados:** o anúncio é 70% do resultado. Teste variações de imagem, vídeo e copy.

**4. Meça o que importa:** CPA, ROAS e taxa de conversão dizem mais que curtidas.

Começar bem estruturado evita o erro clássico de "gastei e não vendi".`,
  },
  {
    slug: 'kpis-que-importam',
    title: 'Os KPIs que realmente importam pro seu negócio',
    date: '2026',
    tag: 'Dados',
    excerpt: 'Curtida não paga boleto. Veja quais métricas acompanhar para saber se o marketing está dando resultado.',
    body: `Vaidade vende ilusão. **Curtidas e seguidores** são bons indicadores de alcance, mas não de negócio.

As métricas que importam de verdade:

**Custo por Lead (CPL):** quanto você paga para gerar um contato interessado.

**Custo de Aquisição (CAC):** quanto custa transformar esse contato em cliente.

**ROAS / ROI:** quanto retorna para cada real investido.

**Taxa de conversão:** de visitantes a leads, de leads a vendas.

Quando você acompanha os números certos, o marketing deixa de ser custo e vira investimento previsível.`,
  },
];

const renderBody = (body: string) =>
  body.split('\n').map((line, i) => (
    <p key={i} className={line.trim() === '' ? 'h-3' : 'text-gray-400 leading-relaxed mb-4'}>
      {line.split('**').map((part, j) => (j % 2 === 1 ? <strong key={j} className="text-white">{part}</strong> : <span key={j}>{part}</span>))}
    </p>
  ));

const BlogPage: React.FC = () => {
  useReveal();
  const [active, setActive] = useState<number | null>(null);

  if (active !== null) {
    const p = posts[active];
    return (
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <button onClick={() => setActive(null)} className="text-sm text-gray-400 hover:text-white mb-8 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Voltar para o blog
          </button>
          <span className="text-[10px] uppercase tracking-[0.25em] font-black" style={{ color: '#848cf7' }}>{p.tag} · {p.date}</span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mt-3 mb-8">{p.title}</h1>
          <div className="text-base">{renderBody(p.body)}</div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal reveal-up text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] font-black mb-6 block" style={{ color: '#848cf7' }}>Blog</span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Conteúdo que<br />
            <span style={{ background: 'linear-gradient(135deg,#fff 0%,#848cf7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>faz sua marca pensar</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Estratégia, tráfego pago, dados e crescimento — sem enrolação, direto ao ponto.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <button key={p.slug} onClick={() => { setActive(i); window.scrollTo(0, 0); }}
              className="card-hover text-left glass rounded-3xl p-8 border border-white/8 hover:border-[#848cf7]/40 transition-all duration-300 flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.2em] font-black mb-4" style={{ color: '#848cf7' }}>{p.tag} · {p.date}</span>
              <h3 className="text-xl font-black text-white mb-3">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{p.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest" style={{ color: '#848cf7' }}>
                Ler artigo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
