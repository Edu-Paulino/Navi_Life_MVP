import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Home, MapPin, Settings, LogOut, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { Logo } from './ui/Logo';
import { MOCK_USER } from '../store/mockData';

export const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/app/dashboard' },
    { icon: MapPin, label: 'Meus Locais', path: '/app/locations' },
    { icon: Settings, label: 'Configurações', path: '/app/settings' },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 h-screen sticky top-0 p-6">
        <div className="mb-10 px-2">
          <Logo />
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                location.pathname === item.path
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-text-secondary hover:bg-gray-50 hover:text-primary"
              )}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-gray-100">
          <div className="flex items-center gap-3 px-2 mb-4">
            <img 
              src={`https://ui-avatars.com/api/?name=${MOCK_USER.name}&background=8BA888&color=fff`} 
              alt={MOCK_USER.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-semibold text-text-primary truncate">{MOCK_USER.name}</p>
              <p className="text-xs text-text-secondary truncate">{MOCK_USER.email}</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-2 text-sm text-red-500 hover:text-red-600 transition-colors"
          >
            <LogOut size={16} />
            Sair
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden bg-white p-4 flex items-center justify-between border-b sticky top-0 z-30">
        <Logo showText={false} className="scale-75 origin-left" />
        <div className="flex items-center gap-4">
          <img 
            src={`https://ui-avatars.com/api/?name=${MOCK_USER.name}&background=8BA888&color=fff`} 
            alt={MOCK_USER.name}
            className="w-8 h-8 rounded-full"
          />
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-20 pt-20 px-6">
          <nav className="space-y-4">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-4 p-4 rounded-xl text-lg font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-primary/5 text-primary"
                    : "text-text-secondary"
                )}
              >
                <item.icon size={24} />
                {item.label}
              </button>
            ))}
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-4 p-4 text-lg text-red-500"
            >
              <LogOut size={24} />
              Sair
            </button>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
