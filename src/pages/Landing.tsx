import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, Bell, MapPin, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Logo } from '../components/ui/Logo';
import { motion } from 'framer-motion';

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
           <Button variant="ghost" onClick={() => navigate('/login')} className="hidden sm:flex">Entrar</Button>
           <Button variant="primary" onClick={() => navigate('/login')}>Começar Agora</Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-12 pb-20 md:pt-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary leading-[1.1] mb-6">
              Organize sua vida. <br/>
              <span className="text-secondary">Chegue no horário.</span>
            </h1>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed max-w-lg">
              O único app que te avisa exatamente quando sair para chegar no horário em cada compromisso, considerando o trânsito real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => navigate('/login')} className="gap-2 bg-accent hover:bg-accent-hover shadow-accent/20">
                Começar Agora <ArrowRight size={20} />
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-6 text-sm text-text-secondary">
               <div className="flex items-center gap-2">
                 <CheckCircle2 size={16} className="text-secondary" />
                 <span>Sincronia Google</span>
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle2 size={16} className="text-secondary" />
                 <span>Alertas em Tempo Real</span>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/20 to-primary/10 rounded-full blur-3xl opacity-70"></div>
            <img 
              src="https://images.unsplash.com/photo-1512428559087-560fa5ce7d25?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
              alt="App usage context" 
              className="relative rounded-2xl shadow-2xl border-4 border-white w-full object-cover h-[400px]"
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-xs animate-bounce-slow">
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                   <Bell size={16} />
                 </div>
                 <div>
                   <p className="font-bold text-primary text-sm">Saia em 15 min</p>
                   <p className="text-xs text-text-secondary">Para chegar às 14:30</p>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* How it Works */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-16">Como Funciona</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center text-primary mb-6">
                <Calendar size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Conecte seu calendário</h3>
              <p className="text-text-secondary">Sincronizamos automaticamente com seu Google Calendar.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center text-primary mb-6">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Cadastre seus locais</h3>
              <p className="text-text-secondary">Defina casa, trabalho e locais frequentes para rotas precisas.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center text-primary mb-6">
                <Bell size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Receba alertas</h3>
              <p className="text-text-secondary">Nós avisamos a hora exata de sair. Nem antes, nem depois.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo />
          <p className="text-text-secondary text-sm">© 2025 Navi Life. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};
