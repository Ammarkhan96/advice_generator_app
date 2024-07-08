import React from 'react';
import './App.css';
import useFetchAdvice from './hooks/useFetchAdvice';

function App() {
  const { advice, error, isLoading, fetchAdvice } = useFetchAdvice();

  return (
    <div className="container">
      <div className="advice-container">
        {isLoading && <p>Loading advice...</p>}
        {error && <p>Error: {error}</p>}
        {advice && (
          <>
            <h1 className="title">Advice #{advice.id}</h1>
            <p className="advice">"{advice.advice}"</p>
            <div>
              <img src="../assets/pattern-divider-desktop.svg" alt="" />
            </div>
          </>
        )}
        {!isLoading && !advice && !error && (
          <p className="placeholder">Press the button to get advice.</p>
        )}
        <hr />
        <button className="btn" onClick={fetchAdvice}>
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/wired/64/restart.png"
            alt="restart"
          />
        </button>
      </div>
    </div>
  );
}

export default App;
