import React, { useState } from 'react';
import MatchInfo from './components/MatchInfo';

const App = () => {
  const [matchId, setMatchId] = useState('');
  const [currentMatchId, setCurrentMatchId] = useState(null);

  const handleInputChange = (event) => {
    setMatchId(event.target.value);
  };

  const handleButtonClick = () => {
    setCurrentMatchId(matchId);
  };

  return (
    <div>
      <h1>Dota 2 Match Info</h1>
      <input
        type="text"
        value={matchId}
        onChange={handleInputChange}
        placeholder="Enter match ID"
      />
      <button onClick={handleButtonClick}>Fetch Match Info</button>
      {currentMatchId && <MatchInfo matchId={currentMatchId} />}
    </div>
  );
};

export default App;
