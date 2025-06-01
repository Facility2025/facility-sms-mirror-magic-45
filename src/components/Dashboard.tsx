
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Dashboard = () => {
  const chartData = [
    { name: 'Custo Envio', value: 2.4, color: '#00d4aa' },
    { name: 'Custo Respostas', value: 0.8, color: '#ff4081' },
    { name: 'Custo Total', value: 4.0, color: '#00bcd4' },
  ];

  return (
    <div className="flex-1 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 shadow-[0_20px_80px_rgba(0,0,0,1)]"></div>
        <div className="absolute top-0 right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animation-delay-2000 shadow-[0_20px_80px_rgba(0,0,0,1)]"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animation-delay-4000 shadow-[0_20px_80px_rgba(0,0,0,1)]"></div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-8 relative z-10">
        <div className="bg-gradient-to-r from-gray-800/40 to-gray-700/40 backdrop-blur-sm rounded-2xl p-6 border border-white/30 transition-all duration-300 hover:border-white/40 shadow-[0_0_20px_rgba(0,0,0,1),0_40px_120px_rgba(0,0,0,1),0_80px_200px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.1)]" style={{
          animation: 'borderGlow 3s ease-in-out infinite'
        }}>
          <h1 className="text-2xl font-bold text-cyan-400 mb-2 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">Relatório Financeiro e de Mensagens</h1>
        </div>
        <div className="flex items-center space-x-4 bg-gradient-to-r from-gray-800/40 to-gray-700/40 backdrop-blur-sm rounded-2xl p-4 border border-white/30 transition-all duration-300 hover:border-white/40 shadow-[0_0_20px_rgba(0,0,0,1),0_40px_120px_rgba(0,0,0,1),0_80px_200px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.1)]" style={{
          animation: 'borderGlow 3s ease-in-out infinite'
        }}>
          <div className="flex items-center space-x-2">
            <label className="text-sm text-gray-300 filter drop-shadow-sm">Data Inicial</label>
            <Input
              type="date"
              defaultValue="2021-05-31"
              className="bg-gray-800/80 border-white/30 text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 shadow-[0_15px_60px_rgba(0,0,0,1)]"
            />
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-sm text-gray-300 filter drop-shadow-sm">Data Final</label>
            <Input
              type="date"
              defaultValue="2021-05-31"
              className="bg-gray-800/80 border-white/30 text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 shadow-[0_15px_60px_rgba(0,0,0,1)]"
            />
          </div>
          <Button className="bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 border border-white/20 shadow-[0_20px_80px_rgba(0,0,0,1)]">Buscar</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        {/* Chart */}
        <div className="lg:col-span-2 shadow-[0_0_30px_rgba(0,0,0,1),0_50px_150px_rgba(0,0,0,0.98),0_100px_300px_rgba(0,0,0,0.96)]">
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 transition-all duration-500 hover:border-white/40 relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,1),0_50px_150px_rgba(0,0,0,0.98),0_100px_300px_rgba(0,0,0,0.96),inset_0_1px_0_rgba(255,255,255,0.1)]" style={{
            animation: 'borderGlow 3s ease-in-out infinite'
          }}>
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 rounded-2xl"></div>
            <div className="relative z-10">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData}>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#9ca3af', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#9ca3af', fontSize: 12 }}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-6 text-center">
                <p className="text-gray-300 font-medium filter drop-shadow-sm">MENSAGENS</p>
                <div className="flex justify-center space-x-6 mt-4">
                  <div className="flex items-center bg-gray-700/30 rounded-full px-3 py-1 backdrop-blur-sm border border-white/30 shadow-[0_0_15px_rgba(0,0,0,1),0_25px_80px_rgba(0,0,0,1),0_50px_150px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.1)]" style={{
                    animation: 'borderGlow 3s ease-in-out infinite'
                  }}>
                    <div className="w-4 h-4 bg-cyan-400 rounded mr-2"></div>
                    <span className="text-sm text-gray-300 filter drop-shadow-sm">Custo Total</span>
                  </div>
                  <div className="flex items-center bg-gray-700/30 rounded-full px-3 py-1 backdrop-blur-sm border border-white/30 shadow-[0_0_15px_rgba(0,0,0,1),0_25px_80px_rgba(0,0,0,1),0_50px_150px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.1)]" style={{
                    animation: 'borderGlow 3s ease-in-out infinite'
                  }}>
                    <div className="w-4 h-4 bg-pink-400 rounded mr-2"></div>
                    <span className="text-sm text-gray-300 filter drop-shadow-sm">Custo Respostas</span>
                  </div>
                  <div className="flex items-center bg-gray-700/30 rounded-full px-3 py-1 backdrop-blur-sm border border-white/30 shadow-[0_0_15px_rgba(0,0,0,1),0_25px_80px_rgba(0,0,0,1),0_50px_150px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.1)]" style={{
                    animation: 'borderGlow 3s ease-in-out infinite'
                  }}>
                    <div className="w-4 h-4 bg-green-400 rounded mr-2"></div>
                    <span className="text-sm text-gray-300 filter drop-shadow-sm">Custo Envio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-6">
          {/* Message Stats */}
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 transition-all duration-500 hover:border-white/40 relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,1),0_50px_150px_rgba(0,0,0,0.98),0_100px_300px_rgba(0,0,0,0.96),inset_0_1px_0_rgba(255,255,255,0.1)]" style={{
            animation: 'borderGlow 3s ease-in-out infinite'
          }}>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 rounded-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">• Quantidade de mensagens</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-gray-700/30 rounded-xl p-4 backdrop-blur-sm border border-white/30 hover:border-white/40 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,1),0_30px_100px_rgba(0,0,0,1),0_60px_200px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.1)]" style={{
                  animation: 'borderGlow 3s ease-in-out infinite'
                }}>
                  <div className="text-3xl font-bold text-yellow-400 filter drop-shadow-lg">15</div>
                  <div className="text-sm text-gray-400 filter drop-shadow-sm">ENVIADAS</div>
                </div>
                <div className="text-center bg-gray-700/30 rounded-xl p-4 backdrop-blur-sm border border-white/30 hover:border-white/40 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,1),0_30px_100px_rgba(0,0,0,1),0_60px_200px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.1)]" style={{
                  animation: 'borderGlow 3s ease-in-out infinite'
                }}>
                  <div className="text-3xl font-bold text-yellow-400 filter drop-shadow-lg">5</div>
                  <div className="text-sm text-gray-400 filter drop-shadow-sm">RECEBIDAS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Stats */}
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 transition-all duration-500 hover:border-white/40 relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,1),0_50px_150px_rgba(0,0,0,0.98),0_100px_300px_rgba(0,0,0,0.96),inset_0_1px_0_rgba(255,255,255,0.1)]" style={{
            animation: 'borderGlow 3s ease-in-out infinite'
          }}>
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-cyan-400/5 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="space-y-4">
                <div className="flex justify-between p-3 bg-gray-700/20 rounded-xl backdrop-blur-sm border border-white/30 hover:border-white/30 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,1),0_25px_80px_rgba(0,0,0,1),0_50px_150px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.1)]" style={{
                  animation: 'borderGlow 3s ease-in-out infinite'
                }}>
                  <span className="text-green-400 filter drop-shadow-sm">• Total gasto com envio</span>
                  <span className="text-yellow-400 font-bold filter drop-shadow-lg">R$ 2.40</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-700/20 rounded-xl backdrop-blur-sm border border-white/30 hover:border-white/30 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,1),0_25px_80px_rgba(0,0,0,1),0_50px_150px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.1)]" style={{
                  animation: 'borderGlow 3s ease-in-out infinite'
                }}>
                  <span className="text-green-400 filter drop-shadow-sm">• Total gasto com respostas</span>
                  <span className="text-yellow-400 font-bold filter drop-shadow-lg">R$ 0.80</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-700/20 rounded-xl backdrop-blur-sm border border-white/30 hover:border-white/30 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,1),0_25px_80px_rgba(0,0,0,1),0_50px_150px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.1)]" style={{
                  animation: 'borderGlow 3s ease-in-out infinite'
                }}>
                  <span className="text-cyan-400 filter drop-shadow-sm">• Total gastos Envio + Respostas</span>
                  <span className="text-yellow-400 font-bold filter drop-shadow-lg">R$ 3.20</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-700/20 rounded-xl backdrop-blur-sm border border-white/30 hover:border-white/30 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,1),0_25px_80px_rgba(0,0,0,1),0_50px_150px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.1)]" style={{
                  animation: 'borderGlow 3s ease-in-out infinite'
                }}>
                  <span className="text-cyan-400 filter drop-shadow-sm">• Total investido na plataforma</span>
                  <span className="text-yellow-400 font-bold filter drop-shadow-lg">R$ 18.80</span>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 font-bold transition-all duration-300 transform hover:scale-105 border border-white/20 shadow-[0_30px_120px_rgba(0,0,0,1)]">
                GERAR RELATÓRIO
              </Button>
            </div>
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

export default Dashboard;
