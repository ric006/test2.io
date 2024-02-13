// Home.tsx
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container holographic">
      <div className="home-content">
        <h1>Welcome to the Future</h1>
        <p>This is a holographic 3D display.</p>
      </div>
      <div className="holographic-world">
        {/* Add your rotating 3D holographic world here */}
      </div>
    </div>
  );
};

export default Home;
