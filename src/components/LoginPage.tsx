import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
interface LoginPageProps {
  onLogin: () => void;
}
const LoginPage = ({
  onLogin
}: LoginPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };
  return <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 2}s`
      }} />)}
      </div>

      {/* Interactive neural network with constant movement */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-40">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge> 
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Interactive neural nodes with constant movement */}
          {[...Array(12)].map((_, i) => {
          const baseX = i % 4 * 300 + 200;
          const baseY = Math.floor(i / 4) * 250 + 150;
          const mouseInfluence = 0.4;
          const targetX = baseX + (mousePosition.x - baseX) * mouseInfluence * 0.15;
          const targetY = baseY + (mousePosition.y - baseY) * mouseInfluence * 0.15;
          return <g key={i}>
                <circle cx={targetX} cy={targetY} r="3" fill="cyan" opacity="0.8" filter="url(#glow)">
                  <animate attributeName="r" values="2;4;2" dur={`${1.5 + Math.random()}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;1;0.6" dur={`${2 + Math.random()}s`} repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="translate" values={`0,0; ${Math.sin(i) * 10},${Math.cos(i) * 10}; 0,0`} dur={`${3 + Math.random() * 2}s`} repeatCount="indefinite" />
                </circle>
                
                {/* Neural connections to mouse position */}
                <line x1={targetX} y1={targetY} x2={mousePosition.x} y2={mousePosition.y} stroke="cyan" strokeWidth="1" opacity={Math.max(0, 0.7 - Math.sqrt(Math.pow(mousePosition.x - targetX, 2) + Math.pow(mousePosition.y - targetY, 2)) / 400)} filter="url(#glow)">
                  <animate attributeName="stroke-width" values="0.5;1.5;0.5" dur={`${1 + Math.random()}s`} repeatCount="indefinite" />
                </line>
                
                {/* Connections between nearby nodes */}
                {[...Array(12)].map((_, j) => {
              if (j <= i || j > i + 3) return null;
              const otherBaseX = j % 4 * 300 + 200;
              const otherBaseY = Math.floor(j / 4) * 250 + 150;
              const otherTargetX = otherBaseX + (mousePosition.x - otherBaseX) * mouseInfluence * 0.15;
              const otherTargetY = otherBaseY + (mousePosition.y - otherBaseY) * mouseInfluence * 0.15;
              const distance = Math.sqrt(Math.pow(targetX - otherTargetX, 2) + Math.pow(targetY - otherTargetY, 2));
              if (distance > 300) return null;
              return <line key={j} x1={targetX} y1={targetY} x2={otherTargetX} y2={otherTargetY} stroke="white" strokeWidth="0.5" opacity={Math.max(0, 0.6 - distance / 500)}>
                      <animate attributeName="opacity" values={`${Math.max(0, 0.3 - distance / 500)};${Math.max(0, 0.8 - distance / 500)};${Math.max(0, 0.3 - distance / 500)}`} dur={`${2 + Math.random() * 2}s`} repeatCount="indefinite" />
                    </line>;
            })}
              </g>;
        })}
        </svg>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden max-w-4xl w-full flex transform hover:scale-[1.02] transition-all duration-300 ease-out">
          {/* Left side - Logo */}
          <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-gray-800 via-gray-900 to-black items-center justify-center p-8 shadow-[20px_0_40px_rgba(0,0,0,0.8)] relative">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-2">
                <span className="text-cyan-400">SMS</span>
                <span className="text-gray-300">WX Media Group</span>
              </h1>
            </div>
          </div>

          {/* Right side - Login form */}
          <div className="w-full md:w-1/2 p-8">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">SMS - WX Media Group</h2>
                <p className="text-gray-600">PAINEL  ADMIN</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email" className="text-gray-700">Email</Label>
                  <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 w-full" required />
                </div>

                <div>
                  <Label htmlFor="password" className="text-gray-700">Senha</Label>
                  <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="mt-1 w-full" required />
                </div>

                <div className="flex justify-end text-sm">
                  <a href="#" className="text-gray-600 hover:text-gray-800">Esqueceu a senha?</a>
                </div>

                <Button type="submit" className="w-full bg-gray-700 hover:bg-gray-800 text-white py-3 rounded-md font-medium">
                  ENTRAR
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-20 bg-black bg-opacity-50 text-white text-center py-3">
        <p className="text-sm">
          WXMediaGroup - Todos os direitos reservados 2025© | É extremamente proibida a sua cópia
        </p>
      </footer>
    </div>;
};
export default LoginPage;