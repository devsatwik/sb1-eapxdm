import React, { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import ProductManagement from './components/ProductManagement';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {isLoggedIn ? (
        <ProductManagement onLogout={handleLogout} />
      ) : showSignup ? (
        <Signup onToggle={toggleSignup} />
      ) : (
        <Login onLogin={handleLogin} onToggle={toggleSignup} />
      )}
    </div>
  );
}

export default App;