
import React from 'react';
import { BarChart3, Users, User } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const menuItems = [
    { id: 'dashboard', label: 'Relatórios', icon: BarChart3 },
    { id: 'clients', label: 'Clientes', icon: Users },
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen flex flex-col shadow-2xl border-r border-gray-700/50 backdrop-blur-sm border-white/30 shadow-[0_0_2px_rgba(255,255,255,0.8)]" style={{
      animation: 'borderGlow 3s ease-in-out infinite'
    }}>
      {/* Logo */}
      <div className="p-6 border-b border-gray-700/50 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm shadow-lg border-white/30 shadow-[0_0_2px_rgba(255,255,255,0.8)]" style={{
        animation: 'borderGlow 3s ease-in-out infinite'
      }}>
        <h1 className="text-2xl font-bold text-white drop-shadow-lg">
          <span className="text-cyan-400 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">SMS</span>
          <span className="text-gray-300">WX Media Group</span>
        </h1>
        <p className="text-cyan-400 text-sm mt-1 filter drop-shadow-sm">PAINEL ADMIN</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSectionChange(item.id)}
                className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-sm border border-transparent hover:border-gray-600/30 shadow-lg hover:shadow-xl border-white/30 shadow-[0_0_2px_rgba(255,255,255,0.8)] ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.3)] border-cyan-400/20'
                    : 'text-gray-300 hover:bg-gradient-to-r hover:from-gray-800/80 hover:to-gray-700/80 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                }`}
                style={{
                  animation: 'borderGlow 3s ease-in-out infinite'
                }}
              >
                <item.icon className="w-5 h-5 mr-3 filter drop-shadow-sm" />
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* User info with enhanced matte black effect */}
      <div className="p-4 border-t border-gray-700/50 bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm border-white/30 shadow-[0_0_2px_rgba(255,255,255,0.8)]" style={{
        animation: 'borderGlow 3s ease-in-out infinite'
      }}>
        <div className="flex items-center p-4 rounded-xl bg-gradient-to-r from-black/90 to-gray-900/90 backdrop-blur-sm border border-gray-600/50 transition-all duration-300 hover:scale-[1.02] transform translate-y-[-4px] shadow-[0_20px_40px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]" style={{
          animation: 'borderGlow 3s ease-in-out infinite',
          background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(17,17,17,0.9) 50%, rgba(0,0,0,0.95) 100%)',
          filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.8))'
        }}>
          <Avatar className="w-12 h-12 border-2 border-white/20 shadow-lg">
            <AvatarImage 
              src="/lovable-uploads/b1c78590-cce8-4c98-9529-590db224ef5e.png" 
              alt="Admin Avatar"
              className="object-cover"
            />
            <AvatarFallback className="bg-gradient-to-br from-gray-600 to-gray-700 text-white">
              <User className="w-6 h-6" />
            </AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <p className="text-white font-bold filter drop-shadow-lg text-lg">Admin</p>
            <p className="text-cyan-400 text-sm filter drop-shadow-sm font-medium">MASTER</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes borderGlow {
          0%, 100% {
            border-color: rgba(255, 255, 255, 0.3);
            box-shadow: 0 0 2px rgba(255, 255, 255, 0.8);
          }
          50% {
            border-color: rgba(255, 255, 255, 0.6);
            box-shadow: 0 0 4px rgba(255, 255, 255, 1);
          }
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
