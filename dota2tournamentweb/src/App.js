import React from 'react';
import MatchInfo from './components/MatchInfo';

const App = () => {
  const matchId = '7812854715';

  return (
    <div>
      <h1>Dota 2 Match Info</h1>
      <MatchInfo matchId={matchId} />
    </div>
  );
};

export default App;
