import React, { useState } from 'react';
import { Plus, Home, Briefcase, MapPin, Trash2, Edit2, X } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { MOCK_LOCATIONS, Location } from '../store/mockData';
import { cn } from '../lib/utils';

export const Locations = () => {
  const [locations, setLocations] = useState<Location[]>(MOCK_LOCATIONS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLocation, setEditingLocation] = useState<Location | null>(null);

  // Form State
  const [formData, setFormData] = useState({ name: '', address: '' });

  const handleOpenModal = (loc?: Location) => {
    if (loc) {
      setEditingLocation(loc);
      setFormData({ name: loc.name, address: loc.address });
    } else {
      setEditingLocation(null);
      setFormData({ name: '', address: '' });
    }
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingLocation) {
      setLocations(locations.map(l => l.id === editingLocation.id ? { ...l, ...formData } : l));
    } else {
      const newLoc: Location = {
        id: Math.random().toString(),
        type: 'other',
        ...formData
      };
      setLocations([...locations, newLoc]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este local?')) {
      setLocations(locations.filter(l => l.id !== id));
    }
  };

  const getIcon = (type: string) => {
    switch(type) {
      case 'home': return <Home size={20} />;
      case 'work': return <Briefcase size={20} />;
      default: return <MapPin size={20} />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary">Meus Locais</h1>
          <p className="text-text-secondary">Gerencie seus endereços frequentes para rotas rápidas.</p>
        </div>
        <Button onClick={() => handleOpenModal()} className="gap-2 bg-accent hover:bg-accent-hover">
          <Plus size={18} /> Adicionar Local
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {locations.map((loc) => (
          <div key={loc.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="flex items-start justify-between mb-2">
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center mb-2",
                loc.type === 'home' ? "bg-blue-100 text-blue-600" :
                loc.type === 'work' ? "bg-orange-100 text-orange-600" :
                "bg-gray-100 text-gray-600"
              )}>
                {getIcon(loc.type)}
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => handleOpenModal(loc)} className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
                  <Edit2 size={16} />
                </button>
                {loc.type === 'other' && (
                  <button onClick={() => handleDelete(loc.id)} className="p-2 hover:bg-red-50 rounded-full text-red-500">
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            </div>
            <h3 className="font-bold text-lg text-primary">{loc.name}</h3>
            <p className="text-text-secondary text-sm mt-1">{loc.address}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
            
            <h2 className="text-xl font-bold text-primary mb-6">
              {editingLocation ? 'Editar Local' : 'Novo Local'}
            </h2>

            <form onSubmit={handleSave} className="space-y-4">
              <Input 
                label="Nome do Local" 
                placeholder="Ex: Academia, Casa da Mãe"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                required
              />
              <Input 
                label="Endereço Completo" 
                placeholder="Digite o endereço..."
                icon={<MapPin size={16} />}
                value={formData.address}
                onChange={e => setFormData({...formData, address: e.target.value})}
                required
              />
              
              <div className="flex gap-3 pt-4">
                <Button type="button" variant="ghost" className="flex-1" onClick={() => setIsModalOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit" className="flex-1">
                  Salvar
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
