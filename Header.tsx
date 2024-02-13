// Header.tsx
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  const handleConnect = () => {
    // Logic to connect to Web3 wallet
    console.log('Connect button clicked');
  };

  return (
    <header className="header holographic">
      <h1 className="header-title">Futuristic Holographic Display</h1>
      <button className="connect-button" onClick={handleConnect}>Connect Wallet</button>
    </header>
  );
};

export default Header;
