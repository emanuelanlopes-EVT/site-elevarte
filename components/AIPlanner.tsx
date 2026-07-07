import React, { useState } from 'react';
import { useReveal } from './useReveal';
import { GoogleGenAI } from '@google/genai';
import { Niche } from '../types';

const niches = Object.values(Niche);

const AIPlanner: React.FC = () => {
  useReveal();
  const [niche, setNiche] = useState('');
  const [goal, setGoal] = useState('');
  const [budget, setBudget] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generate = async () => {
    if (!niche || !goal) return;
    setLoading(true);
    setError('');
    setResult('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const prompt = `Você é um estrategista sênior da Elevarte, agência 360° de marketing digital.

Crie uma estratégia de marketing personalizada e detalhada para:
- Nicho: ${niche}
- Objetivo principal: ${goal}
- Orçamento mensal estimado: ${budget || 'não informado'}

Responda em português com:
1. **Diagnóstico** (2-3 linhas sobre o contexto)
2. **Estratégia Principal** (canais prioritários e por quê)
3. **Plano de Ação** (4-5 ações concretas com prazo)
4. **KPIs para acompanhar** (métricas chave)
5. **Projeção de resultado** (estimativa realista em 90 dias)

Seja direto, específico e orientado a resultados.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: prompt,
      });

      setResult(response.text || '');
    } catch (e: any) {
      setError(`Erro: ${e?.message || String(e)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-planner" className="py-16 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="reveal reveal-up text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] font-black text-indigo-400 mb-6 block">
            IA Planner
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Sua estratégia de marketing<br />
            <span className="gradient-text">gerada por IA em segundos</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Combinamos inteligência artificial com o know-how da Elevarte para criar um plano personalizado para o seu negócio.
          </p>
        </div>

        <div className="reveal reveal-scale glass rounded-3xl p-8 md:p-10 border border-white/8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 mb-2">Nicho *</label>
              <select
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                className="w-full bg-gray-900/80 border border-white/8 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500/50 transition-colors appearance-none"
              >
                <option value="" className="bg-gray-900">Selecione...</option>
                {niches.map((n) => (
                  <option key={n} value={n} className="bg-gray-900">{n}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 mb-2">Objetivo Principal *</label>
              <input
                type="text"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="Ex: Aumentar vendas online"
                className="w-full bg-gray-900/80 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 mb-2">Orçamento Mensal</label>
              <input
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="Ex: R$ 5.000"
                className="w-full bg-gray-900/80 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
              />
            </div>
          </div>

          <button
            onClick={generate}
            disabled={!niche || !goal || loading}
            className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold uppercase tracking-widest text-sm transition-all duration-300 shimmer-effect hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-3">
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Gerando estratégia...
              </span>
            ) : (
              '✦ Gerar Estratégia com IA'
            )}
          </button>

          {error && (
            <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}

          {result && (
            <div className="mt-6 p-6 rounded-2xl bg-indigo-600/5 border border-indigo-500/15">
              <div className="text-[10px] uppercase tracking-[0.3em] font-black text-indigo-400 mb-4">
                ✦ Estratégia Gerada pela IA Elevarte
              </div>
              <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap prose-invert">
                {result.split('**').map((part, i) =>
                  i % 2 === 1
                    ? <strong key={i} className="text-white font-bold">{part}</strong>
                    : <span key={i}>{part}</span>
                )}
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="flex-1 text-center py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-widest transition-all duration-300"
                >
                  Falar com um Estrategista
                </a>
                <button
                  onClick={() => setResult('')}
                  className="flex-1 py-3 rounded-xl glass border border-white/8 text-gray-400 text-xs font-bold uppercase tracking-widest hover:border-white/20 transition-all duration-300"
                >
                  Nova Estratégia
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIPlanner;
