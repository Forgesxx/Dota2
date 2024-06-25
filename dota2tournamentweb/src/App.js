import React from 'react';
import MatchInfo from './components/tests';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>OpenDota Match Info</h1>
        <MatchInfo matchId="7812854715" />
      </header>
    </div>
  );
}

export default App;
