
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Edit, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const ClientsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const clients = [
    { id: 1, name: 'Weber WX', email: 'webercosta@live.com', status: 'Ativo' },
    { id: 2, name: 'otavio g', email: 'otaviog@gmail.com', status: 'Ativo' },
    { id: 3, name: 'otavio', email: 'otavio@gmail.com', status: 'Ativo' },
    { id: 4, name: 'Claudia', email: 'clau@gmauil.com', status: 'Ativo' },
    { id: 5, name: 'otavio', email: 'otaviogg@gmail.com', status: 'Ativo' },
    { id: 6, name: 'João Silva', email: 'joao@email.com', status: 'Ativo' },
    { id: 7, name: 'Maria Santos', email: 'maria@email.com', status: 'Ativo' },
    { id: 8, name: 'Pedro Costa', email: 'pedro@email.com', status: 'Ativo' },
  ];

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredClients.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedClients = filteredClients.slice(startIndex, endIndex);

  return (
    <div className="flex-1 bg-gray-900 text-white p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span>Dashboard</span>
          <span className="mx-2">•</span>
          <span className="text-cyan-400">Clientes</span>
        </div>
        <h1 className="text-2xl font-bold text-cyan-400">Clientes</h1>
      </div>

      {/* Search and Add Button */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <Input
            placeholder="Pesquisar usuários"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-800 border-gray-600 text-white w-64"
          />
        </div>
        <Button className="bg-cyan-600 hover:bg-cyan-700 px-8">
          ADICIONAR USUÁRIO
        </Button>
      </div>

      {/* Table */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="text-left p-4 text-cyan-400 font-medium">Nome</th>
              <th className="text-left p-4 text-cyan-400 font-medium">Email</th>
              <th className="text-left p-4 text-cyan-400 font-medium">Status</th>
              <th className="text-left p-4 text-cyan-400 font-medium">Ação</th>
            </tr>
          </thead>
          <tbody>
            {paginatedClients.map((client, index) => (
              <tr key={client.id} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-750'}>
                <td className="p-4 text-white">{client.name}</td>
                <td className="p-4 text-white">{client.email}</td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-green-600 text-white text-xs rounded-full">
                    {client.status}
                  </span>
                </td>
                <td className="p-4">
                  <button className="text-yellow-400 hover:text-yellow-300">
                    <Edit className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center space-x-2">
          <span className="text-gray-400">Items per page:</span>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="bg-gray-800 border-gray-600 text-white rounded px-2 py-1"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-gray-400">
            {startIndex + 1} - {Math.min(endIndex, filteredClients.length)} of {filteredClients.length}
          </span>
          <div className="flex space-x-1">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="p-1 text-gray-400 hover:text-white disabled:opacity-50"
            >
              <ChevronsLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-1 text-gray-400 hover:text-white disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-1 text-gray-400 hover:text-white disabled:opacity-50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              className="p-1 text-gray-400 hover:text-white disabled:opacity-50"
            >
              <ChevronsRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;
