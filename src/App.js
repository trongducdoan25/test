import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hahahahahahahahaha</h1>
      
      {/* GIF */}
      <img 
        src="https://media.tenor.com/cNnsPB7dYfYAAAAM/dancing-dog.gif" 
        alt="Running GIF" 
        className="gif-image"
      />
      
      {/* Scrolling Text */}
      <div className="scrolling-text-container">
        <div className="scrolling-text">
          Bạn là con chó hahahahaha
        </div>
      </div>
    </div>
  );
}

export default App;
