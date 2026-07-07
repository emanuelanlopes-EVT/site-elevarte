import React, { useState, useEffect, useRef } from 'react';

interface NavbarProps {
  onLogoUpload: (url: string) => void;
  logoUrl: string | null;
}

const links = [
  { href: '#about', label: 'Quem Somos' },
  { href: '#services', label: 'Serviços' },
  { href: '#cases', label: 'Cases' },
  { href: '#ai-planner', label: 'IA Planner' },
  { href: '#contact', label: 'Contato' },
];

const Navbar: React.FC<NavbarProps> = ({ onLogoUpload, logoUrl }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onLogoUpload(URL.createObjectURL(file));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'glass py-3' : 'py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => fileRef.current?.click()}
          className="flex items-center gap-2 group"
          title="Clique para trocar o logo"
        >
          <img
            src={logoUrl || '/imagens/logo_branca_fundo_transparente.png'}
            alt="Elevarte"
            className="h-9 w-auto object-contain transition-opacity group-hover:opacity-70"
            onError={(e) => {
              const t = e.currentTarget;
              t.style.display = 'none';
              const span = document.createElement('span');
              span.className = 'text-white font-black text-xl tracking-widest';
              span.textContent = 'ELEVARTE';
              t.parentElement?.appendChild(span);
            }}
          />
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[11px] uppercase tracking-[0.2em] font-semibold text-gray-400 hover:text-white transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-400 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] uppercase tracking-widest font-bold transition-all duration-300 shimmer-effect"
        >
          Fale Conosco
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-4 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden glass border-t border-white/5 transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-80 py-6' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-4 px-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[11px] uppercase tracking-widest font-semibold text-gray-300 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="inline-block mt-2 px-5 py-2.5 rounded-full bg-indigo-600 text-white text-[11px] uppercase tracking-widest font-bold"
              onClick={() => setMenuOpen(false)}
            >
              Fale Conosco
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
