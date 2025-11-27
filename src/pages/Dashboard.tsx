import React from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, MapPin, Navigation, ArrowRight } from 'lucide-react';
import { MOCK_EVENTS, MOCK_USER } from '../store/mockData';
import { formatTime } from '../lib/utils';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';

export const Dashboard = () => {
  // Sort events by start time
  const today = new Date();
  const sortedEvents = [...MOCK_EVENTS].sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
  
  // Filter logic (simplified for mock)
  const todayEvents = sortedEvents.filter(e => e.startTime.getDate() === today.getDate());
  const tomorrowEvents = sortedEvents.filter(e => e.startTime.getDate() !== today.getDate());
  
  const nextEvent = todayEvents[0];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-primary">Olá, {MOCK_USER.name.split(' ')[0]}</h1>
          <p className="text-text-secondary">
            {todayEvents.length > 0 
                ? `Você tem ${todayEvents.length} compromissos hoje.` 
                : "Você não tem compromissos hoje 🎉"}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="primary" size="sm" className="shadow-none">
            + Adicionar Evento
          </Button>
        </div>
      </div>

      {/* Hero Card - Next Event */}
      {nextEvent ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-8 -mt-8"></div>
          
          <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        Próximo Compromisso
                    </span>
                    <span className="text-text-secondary text-sm font-medium">
                        Hoje, {formatTime(nextEvent.startTime)}
                    </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-primary">{nextEvent.title}</h2>
                
                <div className="flex items-center gap-2 text-text-secondary text-lg">
                  <MapPin size={20} className="text-accent" />
                  <span>{nextEvent.location}</span>
                </div>

                <div className="flex gap-6 pt-4">
                    <div>
                        <p className="text-xs text-text-secondary uppercase font-bold mb-1">Duração</p>
                        <p className="font-semibold text-primary">{nextEvent.route.durationMinutes} min de carro</p>
                    </div>
                    <div>
                        <p className="text-xs text-text-secondary uppercase font-bold mb-1">Trânsito</p>
                        <div className="flex items-center gap-2">
                            <span className={cn(
                                "w-2 h-2 rounded-full",
                                nextEvent.route.trafficLevel === 'heavy' ? "bg-red-500" : "bg-green-500"
                            )}></span>
                            <p className="font-semibold text-primary capitalize">{nextEvent.route.trafficLevel}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:col-span-1">
                <div className={cn(
                    "rounded-2xl p-6 text-center border-2",
                    nextEvent.route.status === 'leaving_soon' ? "bg-accent/5 border-accent" : "bg-green-50 border-green-500"
                )}>
                    <p className={cn(
                        "text-sm font-bold uppercase mb-2",
                        nextEvent.route.status === 'leaving_soon' ? "text-accent" : "text-green-700"
                    )}>
                        {nextEvent.route.status === 'leaving_soon' ? "Atenção" : "No Prazo"}
                    </p>
                    <h3 className="text-3xl font-bold text-primary mb-1">
                        {nextEvent.route.status === 'leaving_soon' ? "Saia em 23 min" : "Saia às " + formatTime(nextEvent.route.departureTime)}
                    </h3>
                    <p className="text-xs text-text-secondary mb-6">
                        Para chegar às {formatTime(nextEvent.startTime)} com folga.
                    </p>
                    <Button className="w-full gap-2" variant={nextEvent.route.status === 'leaving_soon' ? 'accent' : 'primary'}>
                        <Navigation size={18} /> Ver Rota
                    </Button>
                </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                <CalendarIcon size={32} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Dia Livre!</h3>
            <p className="text-text-secondary">Aproveite seu tempo livre ou adicione um novo evento.</p>
        </div>
      )}

      {/* Today's List */}
      {todayEvents.length > 1 && (
        <div>
            <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
            <Clock size={20} />
            Restante do Dia
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
                {todayEvents.slice(1).map((event) => (
                    <div key={event.id} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex justify-between items-center">
                        <div>
                            <p className="text-sm font-bold text-accent mb-1">Saia às {formatTime(event.route.departureTime)}</p>
                            <h4 className="font-bold text-primary">{event.title}</h4>
                            <p className="text-sm text-text-secondary">{event.location}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-bold text-primary">{formatTime(event.startTime)}</p>
                            <p className="text-xs text-text-secondary">Início</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      )}

      {/* Tomorrow Section */}
      {tomorrowEvents.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-primary mb-4 text-opacity-60">
                Amanhã
            </h3>
            <div className="space-y-3">
                {tomorrowEvents.slice(0,3).map(event => (
                    <div key={event.id} className="flex items-center py-3 px-4 bg-white/60 rounded-lg border border-gray-100">
                        <div className="w-2 h-2 rounded-full bg-secondary mr-4"></div>
                        <span className="font-medium text-primary w-16">{formatTime(event.startTime)}</span>
                        <span className="text-text-primary flex-1">{event.title}</span>
                        <ArrowRight size={16} className="text-gray-300" />
                    </div>
                ))}
            </div>
          </div>
      )}
    </div>
  );
};
