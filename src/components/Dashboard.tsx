
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Dashboard = () => {
  const chartData = [
    { name: 'Custo Envio', value: 2.4, color: '#00d4aa' },
    { name: 'Custo Respostas', value: 0.8, color: '#ff4081' },
    { name: 'Custo Total', value: 4.0, color: '#00bcd4' },
  ];

  return (
    <div className="flex-1 bg-gray-900 text-white p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-cyan-400 mb-2">Relatório Financeiro e de Mensagens</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label className="text-sm text-gray-300">Data Inicial</label>
            <Input
              type="date"
              defaultValue="2021-05-31"
              className="bg-gray-800 border-gray-600 text-white"
            />
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-sm text-gray-300">Data Final</label>
            <Input
              type="date"
              defaultValue="2021-05-31"
              className="bg-gray-800 border-gray-600 text-white"
            />
          </div>
          <Button className="bg-cyan-600 hover:bg-cyan-700">Buscar</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-lg p-6">
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
                <Bar 
                  dataKey="value" 
                  radius={[8, 8, 0, 0]}
                  fill={(entry) => entry.color}
                />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-6 text-center">
              <p className="text-gray-300 font-medium">MENSAGENS</p>
              <div className="flex justify-center space-x-6 mt-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-cyan-400 rounded mr-2"></div>
                  <span className="text-sm text-gray-300">Custo Total</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-pink-400 rounded mr-2"></div>
                  <span className="text-sm text-gray-300">Custo Respostas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-400 rounded mr-2"></div>
                  <span className="text-sm text-gray-300">Custo Envio</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-6">
          {/* Message Stats */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">• Quantidade de mensagens</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">15</div>
                <div className="text-sm text-gray-400">ENVIADAS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">5</div>
                <div className="text-sm text-gray-400">RECEBIDAS</div>
              </div>
            </div>
          </div>

          {/* Financial Stats */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-green-400">• Total gasto com envio</span>
                <span className="text-yellow-400 font-bold">R$ 2.40</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-400">• Total gasto com respostas</span>
                <span className="text-yellow-400 font-bold">R$ 0.80</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-400">• Total gastos Envio + Respostas</span>
                <span className="text-yellow-400 font-bold">R$ 3.20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-400">• Total investido na plataforma</span>
                <span className="text-yellow-400 font-bold">R$ 18.80</span>
              </div>
            </div>
            
            <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 font-bold">
              GERAR RELATÓRIO
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
