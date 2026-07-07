import React, { useEffect, useRef } from 'react';

const WORDS = ['POSICIONAMENTO.', 'CRESCIMENTO.', 'RESULTADO.', 'ESTRATÉGIA.'];

const Hero: React.FC = () => {
  const wordRef = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const type = () => {
      const word = WORDS[indexRef.current];
      if (!deletingRef.current) {
        charRef.current++;
        if (wordRef.current) wordRef.current.textContent = word.slice(0, charRef.current);
        if (charRef.current === word.length) {
          deletingRef.current = true;
          timerRef.current = setTimeout(type, 2200);
          return;
        }
        timerRef.current = setTimeout(type, 80);
      } else {
        charRef.current--;
        if (wordRef.current) wordRef.current.textContent = word.slice(0, charRef.current);
        if (charRef.current === 0) {
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % WORDS.length;
          timerRef.current = setTimeout(type, 400);
          return;
        }
        timerRef.current = setTimeout(type, 40);
      }
    };
    timerRef.current = setTimeout(type, 1000);
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="orb absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/8 blur-[100px]" style={{ animationDelay: '-9s' }} />
        <div className="orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-500/5 blur-[140px]" style={{ animationDelay: '-4s' }} />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 4}s`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              opacity: 0.3 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pb-28">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/20 mb-10 animate-fade-slide-up">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-indigo-300">Agência 360° de Marketing</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.08] tracking-tight mb-6">
          <div className="mask-wrapper"><span className="mask-text text-white">Elevamos o seu</span></div>
          <div className="mask-wrapper"><span className="mask-text text-white" style={{ animationDelay: '0.15s' }}>negócio com</span></div>
          <div className="mt-2">
            <span className="gradient-text italic">
              <span ref={wordRef} />
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </h1>

        <p className="animate-fade-slide-up text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light mt-8 mb-12" style={{ animationDelay: '0.8s' }}>
          A estratégia vem antes da execução. Combinamos inteligência de dados, criatividade e tecnologia para transformar sua marca.
        </p>

        <div className="animate-fade-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '1s' }}>
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-indigo-600 rounded-full text-white text-sm font-bold uppercase tracking-widest shimmer-effect hover:bg-indigo-500 transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]"
          >
            Quero Crescer
            <svg className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#cases"
            className="px-8 py-4 rounded-full glass border border-white/10 text-white text-sm font-bold uppercase tracking-widest hover:border-indigo-400/40 transition-all duration-300"
          >
            Ver Cases
          </a>
        </div>

        {/* Stats row */}
        <div className="animate-fade-slide-up mt-16 mb-4 grid grid-cols-3 gap-6 max-w-xl mx-auto" style={{ animationDelay: '1.2s' }}>
          {[
            { value: '120+', label: 'Clientes' },
            { value: '5x', label: 'ROI Médio' },
            { value: '4 anos', label: 'ativos' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black gradient-text">{s.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1 font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="absolute rounded-full border border-indigo-400/20"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              width: `${30 + i * 20}px`,
              height: `${30 + i * 20}px`,
              background: `radial-gradient(circle at 30% 30%, rgba(99,102,241,0.08), transparent)`,
              animation: `orbFloat ${12 + i * 3}s ease-in-out infinite`,
              animationDelay: `${i * -2}s`,
            }}
          />
        ))}
      </div>

      {/* Extra light beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[40%] bg-gradient-to-b from-indigo-400/30 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-[1px] h-[30%] bg-gradient-to-b from-purple-400/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-[1px] h-[25%] bg-gradient-to-b from-indigo-300/15 to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-slide-up" style={{ animationDelay: '1.5s' }}>
        <span className="text-[9px] uppercase tracking-[0.3em] text-gray-600 font-semibold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-indigo-400/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
