
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Interactive neural constellation lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-30">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Static constellation pattern */}
          <pattern id="constellation" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="1.5" fill="white" opacity="0.8" />
            <circle cx="150" cy="100" r="1.5" fill="white" opacity="0.8" />
            <circle cx="100" cy="150" r="1.5" fill="white" opacity="0.8" />
            <line x1="50" y1="50" x2="150" y2="100" stroke="white" strokeWidth="0.5" opacity="0.6" />
            <line x1="150" y1="100" x2="100" y2="150" stroke="white" strokeWidth="0.5" opacity="0.6" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#constellation)" />
          
          {/* Interactive neural connections that follow mouse */}
          {[...Array(8)].map((_, i) => {
            const baseX = (i % 4) * 300 + 150;
            const baseY = Math.floor(i / 4) * 300 + 150;
            const mouseInfluence = 0.3;
            const targetX = baseX + (mousePosition.x - baseX) * mouseInfluence * 0.1;
            const targetY = baseY + (mousePosition.y - baseY) * mouseInfluence * 0.1;
            
            return (
              <g key={i}>
                <circle 
                  cx={targetX} 
                  cy={targetY} 
                  r="2" 
                  fill="cyan" 
                  opacity="0.7"
                  filter="url(#glow)"
                >
                  <animate
                    attributeName="r"
                    values="2;3;2"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                
                {/* Neural connections to mouse position */}
                <line
                  x1={targetX}
                  y1={targetY}
                  x2={mousePosition.x}
                  y2={mousePosition.y}
                  stroke="cyan"
                  strokeWidth="0.5"
                  opacity={Math.max(0, 0.8 - Math.sqrt(Math.pow(mousePosition.x - targetX, 2) + Math.pow(mousePosition.y - targetY, 2)) / 500)}
                  filter="url(#glow)"
                />
                
                {/* Connections between nodes */}
                {i > 0 && (
                  <line
                    x1={targetX}
                    y1={targetY}
                    x2={(((i-1) % 4) * 300 + 150) + (mousePosition.x - (((i-1) % 4) * 300 + 150)) * mouseInfluence * 0.1}
                    y2={(Math.floor((i-1) / 4) * 300 + 150) + (mousePosition.y - (Math.floor((i-1) / 4) * 300 + 150)) * mouseInfluence * 0.1}
                    stroke="white"
                    strokeWidth="0.3"
                    opacity="0.4"
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-4xl w-full flex">
          {/* Left side - Logo */}
          <div className="hidden md:flex md:w-1/2 bg-gray-800 items-center justify-center p-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-2">
                <span className="text-cyan-400">SMS</span>
                <span className="text-gray-300">Facility</span>
              </h1>
            </div>
          </div>

          {/* Right side - Login form */}
          <div className="w-full md:w-1/2 p-8">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">SMS - Facility</h2>
                <p className="text-gray-600">PAINEL ADMIN</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email" className="text-gray-700">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="password" className="text-gray-700">Senha</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 w-full"
                    required
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <a href="#" className="text-cyan-600 hover:text-cyan-800">CRIAR MINHA CONTA</a>
                  <a href="#" className="text-gray-600 hover:text-gray-800">Esqueceu a senha?</a>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gray-700 hover:bg-gray-800 text-white py-3 rounded-md font-medium"
                >
                  ENTRAR
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
