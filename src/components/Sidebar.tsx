
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
    <div className="w-64 bg-gray-900 min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-white">
          <span className="text-cyan-400">SMS</span>
          <span className="text-gray-300">WX Media Group</span>
        </h1>
        <p className="text-cyan-400 text-sm mt-1">PAINEL ADMIN</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSectionChange(item.id)}
                className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                  activeSection === item.id
                    ? 'bg-cyan-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* User info */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div className="ml-3">
            <p className="text-white font-medium">Admin</p>
            <p className="text-cyan-400 text-sm">MASTER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
