
import React from 'react';
import { BarChart3, Users, User } from 'lucide-react';

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
    <div className="w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen flex flex-col shadow-2xl border-r border-gray-700/50 backdrop-blur-sm">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700/50 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm shadow-lg">
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
                className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-sm border border-transparent hover:border-gray-600/30 shadow-lg hover:shadow-xl ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.3)] border-cyan-400/20'
                    : 'text-gray-300 hover:bg-gradient-to-r hover:from-gray-800/80 hover:to-gray-700/80 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3 filter drop-shadow-sm" />
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* User info */}
      <div className="p-4 border-t border-gray-700/50 bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm">
        <div className="flex items-center p-3 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg border border-gray-500/30">
            <User className="w-6 h-6 text-white filter drop-shadow-sm" />
          </div>
          <div className="ml-3">
            <p className="text-white font-medium filter drop-shadow-sm">Admin</p>
            <p className="text-cyan-400 text-sm filter drop-shadow-sm">MASTER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
