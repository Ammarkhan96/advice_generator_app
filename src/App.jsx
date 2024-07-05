import React, { useState } from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = useState({});

  function fetchAdvice() {
    let randomNumber = Math.floor(Math.random() * 224); 
    let apiURL = `https://api.adviceslip.com/advice/${randomNumber}`;

    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        if (data && data.slip && data.slip.advice) {
          setAdvice(data.slip);
        } else {
          console.error('Error fetching advice: Invalid response structure');
        }
      })
      .catch(error => {
        console.error('Error fetching advice:', error);
      });
  }

  return (
    <div className="container">
      <div className="advice-container">
        <h1 className="title">Advice #{advice.id}</h1>
        {advice ? (
          <>
            <p className="advice">"{advice.advice}"</p>
            <div>
              <img src="../assets/pattern-divider-desktop.svg" alt="" />
            </div>
          </>
        ) : (
          <p className="placeholder">Press the button to get advice.</p>
        )}
        <hr/>
        <button className="btn" onClick={fetchAdvice}>
          <img width="64" height="64" src="https://img.icons8.com/wired/64/restart.png" alt="restart" />
        </button>
      </div>
    </div>
  );
}

export default App;