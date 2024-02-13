// Header.tsx
import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleConnect = (walletType: string) => {
    if (walletType === 'metamask') {
      // Logic to connect with Metamask
      console.log('Connecting with Metamask...');
    } else if (walletType === 'walletconnect') {
      // Logic to connect with WalletConnect
      console.log('Connecting with WalletConnect...');
    }
    // Close the popup after connecting
    setShowPopup(false);
  };

  return (
    <header className="header holographic">
      <h1 className="header-title">Futuristic Holographic Display</h1>
      <button className="connect-button" onClick={() => setShowPopup(true)}>Connect Wallet</button>
      {showPopup && (
        <div className="popup">
          <button onClick={() => handleConnect('metamask')}>Connect with Metamask</button>
          <button onClick={() => handleConnect('walletconnect')}>Connect with WalletConnect</button>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </header>
  );
};

export default Header;
