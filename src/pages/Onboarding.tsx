import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Briefcase, Car, Home, Train, Bike, Footprints, Check } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { cn } from '../lib/utils';
import { Logo } from '../components/ui/Logo';

export const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0); // 0: Welcome, 1: Home, 2: Work, 3: Mobility
  const [formData, setFormData] = useState({
    home: '',
    work: '',
    isRemote: false,
    transport: [] as string[],
    bufferTime: 10
  });

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
    else navigate('/app/dashboard');
  };

  const toggleTransport = (id: string) => {
    setFormData(prev => ({
      ...prev,
      transport: prev.transport.includes(id) 
        ? prev.transport.filter(t => t !== id)
        : [...prev.transport, id]
    }));
  };

  const transportOptions = [
    { id: 'driving', icon: Car, label: 'Carro Próprio' },
    { id: 'transit', icon: Train, label: 'Transporte Público' },
    { id: 'uber', icon: Car, label: 'Uber / 99' },
    { id: 'bicycling', icon: Bike, label: 'Bicicleta' },
    { id: 'walking', icon: Footprints, label: 'A Pé' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header Simple */}
      <div className="p-6 flex justify-center">
        <Logo />
      </div>

      {/* Progress Bar */}
      {step > 0 && (
        <div className="w-full max-w-md mx-auto px-6 mb-8">
            <div className="flex justify-between text-xs text-gray-400 mb-2 font-medium">
                <span>Passo {step} de 3</span>
                <span>{Math.round((step / 3) * 100)}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                className="h-full bg-secondary"
                initial={{ width: 0 }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.5 }}
                />
            </div>
        </div>
      )}

      <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-2xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {/* Step 0: Welcome */}
          {step === 0 && (
            <motion.div 
              key="step0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-8"
            >
               <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-primary mb-6">
                   <span className="text-4xl">👋</span>
               </div>
               <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Bem-vindo, Alexandre!</h2>
                <p className="text-lg text-text-secondary max-w-md mx-auto">
                    Vamos configurar seu Navi Life em 3 passos rápidos para garantir que você nunca mais se atrase.
                </p>
               </div>
               <Button size="lg" onClick={nextStep} className="px-12">
                   Começar
               </Button>
            </motion.div>
          )}

          {/* Step 1: Home */}
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-primary mb-2">Onde você mora?</h2>
                <p className="text-text-secondary">Usaremos isso como ponto de partida padrão.</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100 space-y-4">
                <Input 
                  label="Endereço Residencial" 
                  placeholder="Digite seu endereço..."
                  icon={<Home size={18} />}
                  value={formData.home}
                  onChange={(e) => setFormData({...formData, home: e.target.value})}
                  autoFocus
                />
              </div>
            </motion.div>
          )}

          {/* Step 2: Work */}
          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-primary mb-2">Onde você trabalha?</h2>
                <p className="text-text-secondary">Para calcular rotas nos dias úteis.</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100 space-y-6">
                {!formData.isRemote && (
                    <Input 
                    label="Endereço Comercial" 
                    placeholder="Digite o endereço do trabalho..."
                    icon={<Briefcase size={18} />}
                    value={formData.work}
                    onChange={(e) => setFormData({...formData, work: e.target.value})}
                    autoFocus
                    />
                )}

                <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                    <input 
                        type="checkbox" 
                        className="w-5 h-5 text-primary rounded focus:ring-primary"
                        checked={formData.isRemote}
                        onChange={(e) => setFormData({...formData, isRemote: e.target.checked})}
                    />
                    <span className="text-text-primary font-medium">Trabalho remoto (não tenho escritório fixo)</span>
                </label>
              </div>
            </motion.div>
          )}

          {/* Step 3: Mobility */}
          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full space-y-6"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-primary mb-2">Preferências de Mobilidade</h2>
                <p className="text-text-secondary">Como você costuma se locomover?</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-8">
                {transportOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => toggleTransport(option.id)}
                    className={cn(
                      "flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 h-28",
                      formData.transport.includes(option.id)
                        ? "border-primary bg-primary/5 text-primary" 
                        : "border-gray-100 bg-white text-gray-400 hover:border-primary/30"
                    )}
                  >
                    <option.icon size={24} className="mb-2" />
                    <span className="text-sm font-medium text-center">{option.label}</span>
                    {formData.transport.includes(option.id) && <div className="absolute top-2 right-2 text-primary"><Check size={14} /></div>}
                  </button>
                ))}
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                  <label className="block text-sm font-medium text-text-primary mb-4">
                      Quanto tempo extra (margem) você gosta de ter?
                  </label>
                  <div className="flex justify-between gap-2">
                      {[5, 10, 15, 20].map(time => (
                          <button
                            key={time}
                            onClick={() => setFormData({...formData, bufferTime: time})}
                            className={cn(
                                "flex-1 py-2 rounded-lg text-sm font-medium transition-colors",
                                formData.bufferTime === time
                                    ? "bg-secondary text-white"
                                    : "bg-gray-100 text-text-secondary hover:bg-gray-200"
                            )}
                          >
                              {time} min
                          </button>
                      ))}
                  </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-10 w-full flex justify-between items-center">
          {step > 0 ? (
            <Button variant="ghost" onClick={() => setStep(step - 1)}>
              Voltar
            </Button>
          ) : <div></div>}
          
          {step > 0 && (
            <Button onClick={nextStep} className="gap-2 px-8">
                {step === 3 ? 'Finalizar' : 'Próximo'} <ArrowRight size={18} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
