import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeamDetails from './TeamDetails';

const MatchInfo = ({ matchId }) => {
  const [matchData, setMatchData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://api.opendota.com/api/matches/${matchId}`)
      .then(response => {
        setMatchData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [matchId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const radiantPlayers = matchData.players.filter(player => player.isRadiant);
  const direPlayers = matchData.players.filter(player => !player.isRadiant);

  return (
    <div>
      <h1>Match Info</h1>
      <TeamDetails players={radiantPlayers} name="Radiant" />
      <TeamDetails players={direPlayers} name="Dire" />
    </div>
  );
};

export default MatchInfo;
