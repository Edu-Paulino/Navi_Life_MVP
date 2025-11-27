import React from 'react';
import { MOCK_USER } from '../store/mockData';
import { Button } from '../components/ui/Button';
import { Car, Train, Bike, Footprints, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export const Settings = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-primary">Configurações</h1>
        <p className="text-text-secondary">Gerencie suas preferências de conta e alertas.</p>
      </div>

      {/* Profile Section */}
      <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <h2 className="text-lg font-bold text-primary mb-6 pb-2 border-b border-gray-100">Perfil</h2>
        <div className="flex items-center gap-4 mb-6">
          <img 
            src={`https://ui-avatars.com/api/?name=${MOCK_USER.name}&background=8BA888&color=fff`} 
            alt={MOCK_USER.name}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h3 className="font-bold text-lg">{MOCK_USER.name}</h3>
            <p className="text-text-secondary">{MOCK_USER.email}</p>
          </div>
        </div>
        <Button variant="outline" className="text-red-500 border-red-200 hover:bg-red-50 hover:border-red-300">
          Sair da Conta
        </Button>
      </section>

      {/* Mobility Section */}
      <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <h2 className="text-lg font-bold text-primary mb-6 pb-2 border-b border-gray-100">Mobilidade</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-3">Meios de transporte preferidos</label>
            <div className="flex gap-3">
              {[
                { icon: Car, label: 'Carro' },
                { icon: Train, label: 'Metrô' },
                { icon: Bike, label: 'Bike' }
              ].map((mode, i) => (
                <div key={i} className={cn(
                  "flex flex-col items-center justify-center w-24 h-20 rounded-xl border-2 cursor-pointer transition-colors",
                  i === 0 ? "border-primary bg-primary/5 text-primary" : "border-gray-100 text-gray-400"
                )}>
                  <mode.icon size={20} className="mb-1" />
                  <span className="text-xs font-medium">{mode.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
             <label className="block text-sm font-medium text-text-primary mb-3">
               Margem de segurança (Buffer Time)
             </label>
             <div className="flex items-center gap-4">
               <input type="range" min="0" max="30" step="5" defaultValue="10" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
               <span className="font-bold text-primary w-16 text-right">10 min</span>
             </div>
             <p className="text-xs text-text-secondary mt-2">Adicionamos este tempo extra ao cálculo da sua rota.</p>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <h2 className="text-lg font-bold text-primary mb-6 pb-2 border-b border-gray-100">Integrações</h2>
        
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-primary">Google Calendar</h4>
              <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                <CheckCircle2 size={12} /> Conectado
              </div>
            </div>
          </div>
          <Button variant="outline" size="sm">Sincronizar</Button>
        </div>
      </section>

      {/* About */}
      <div className="text-center pt-8 border-t border-gray-200">
        <p className="text-sm text-text-secondary mb-2">Navi Life v1.0 (MVP)</p>
        <div className="flex justify-center gap-4 text-sm text-primary">
          <a href="#" className="hover:underline">Termos de Uso</a>
          <a href="#" className="hover:underline">Privacidade</a>
          <a href="#" className="hover:underline">Suporte</a>
        </div>
      </div>
    </div>
  );
};
