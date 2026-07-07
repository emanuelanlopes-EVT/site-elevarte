import React, { useState } from 'react';
import { useReveal } from './useReveal';

const Contact: React.FC = () => {
  useReveal();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp redirect
    const msg = encodeURIComponent(
      `Olá! Sou ${form.name}.\nE-mail: ${form.email}\nTelefone: ${form.phone}\n\n${form.message}`
    );
    window.open(`https://wa.me/5547997667963?text=${msg}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const contacts = [
    { icon: '✆', label: 'WhatsApp', value: '+55 47 99766-7963', href: 'https://wa.me/5547997667963' },
    { icon: '✉', label: 'E-mail', value: 'elevarteitajai@gmail.com', href: 'mailto:elevarteitajai@gmail.com' },
    { icon: '◎', label: 'Instagram', value: '@elevartemkt', href: 'https://instagram.com/elevartemkt' },
  ];

  return (
    <section id="contact" className="py-16 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="reveal reveal-up">
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-indigo-400 mb-6 block">Contato</span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Pronto para<br />
                <span className="gradient-text">crescer de verdade?</span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed font-light max-w-md">
                Agende uma conversa com nossos estrategistas. Sem compromisso, sem pitch agressivo — só estratégia honesta.
              </p>
            </div>

            <div className="reveal reveal-up mt-10 space-y-4" style={{ transitionDelay: '0.2s' }}>
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass rounded-xl p-4 border border-white/5 hover:border-indigo-500/20 group transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm flex-shrink-0 group-hover:bg-indigo-600/20 transition-colors">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-widest font-black text-gray-600">{c.label}</div>
                    <div className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal reveal-scale">
            <form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8 border border-white/8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] uppercase tracking-widest font-black text-gray-600 mb-2">Nome</label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full bg-gray-900/80 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[9px] uppercase tracking-widest font-black text-gray-600 mb-2">Telefone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className="w-full bg-gray-900/80 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[9px] uppercase tracking-widest font-black text-gray-600 mb-2">E-mail</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seu@email.com.br"
                  className="w-full bg-gray-900/80 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[9px] uppercase tracking-widest font-black text-gray-600 mb-2">Conte sobre seu negócio</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Qual é o seu maior desafio de marketing hoje?"
                  className="w-full bg-gray-900/80 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black uppercase tracking-widest text-sm transition-all duration-300 shimmer-effect hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
              >
                {sent ? '✓ Redirecionando para WhatsApp...' : 'Iniciar Conversa →'}
              </button>

              <p className="text-center text-[9px] text-gray-700 uppercase tracking-widest font-semibold">
                Resposta em até 24h úteis · Sem compromisso
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
