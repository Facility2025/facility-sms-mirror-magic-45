
import React, { useState } from 'react';
import LoginPage from './LoginPage';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import ClientsPage from './ClientsPage';

const SMSFacilityApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'clients':
        return <ClientsPage />;
      default:
        return <Dashboard />;
    }
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      {renderContent()}
    </div>
  );
};

export default SMSFacilityApp;
