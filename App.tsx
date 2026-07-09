
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Cursor from './components/Cursor';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AIPlanner from './components/AIPlanner';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import ExtraServices from './components/ExtraServices';
import Logo from './components/Logo';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress((scrolled / total) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Cursor />
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-indigo-600 via-indigo-400 to-white z-[9998] transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
      <Navbar onLogoUpload={setLogoUrl} logoUrl={logoUrl} />

      <main>
        <Hero />

        <About />

        <div className="bg-[#050505]">
          <Services />
        </div>

        <Portfolio />

        <HowItWorks />

        <Pricing />

        <ExtraServices />

        <div className="relative">
          <div className="absolute inset-0 bg-indigo-600/5 blur-[100px] -z-10 pointer-events-none"></div>
          <AIPlanner />
        </div>

        <Contact />
      </main>

      <footer className="py-20 border-t border-white/5 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Logo className="h-10 w-auto" color="#848cf7" />
                <span className="text-xl font-black tracking-tight text-white">ELEVARTE</span>
              </div>
              <p className="text-gray-500 text-sm max-w-sm leading-relaxed font-light">
                Agência 360º focada em posicionamento, crescimento e vendas. A estratégia vem antes da execução.
              </p>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-white mb-6">Institucional</h4>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li><a href="#about" className="hover:text-indigo-400 transition-colors">Quem Somos</a></li>
                <li><a href="#services" className="hover:text-indigo-400 transition-colors">Serviços</a></li>
                <li><a href="#cases" className="hover:text-indigo-400 transition-colors">Cases</a></li>
                <li><a href="#ai-planner" className="hover:text-indigo-400 transition-colors">IA Planner</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-white mb-6">Suporte</h4>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Consultoria</a></li>
                <li><a href="https://wa.me/5511999999999" className="hover:text-indigo-400 transition-colors">WhatsApp</a></li>
                <li><a href="#" className="hover:text-indigo-400 transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-[10px] uppercase tracking-widest font-bold text-gray-600">
            <div>© {new Date().getFullYear()} ELEVARTE AGÊNCIA 360. Todos os direitos reservados. Feito por Elevarte.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Privacidade</a>
              <a href="#" className="hover:text-white">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
