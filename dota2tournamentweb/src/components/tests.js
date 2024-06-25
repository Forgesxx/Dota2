import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MatchInfo = ({ matchId }) => {
  const [matchData, setMatchData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://api.opendota.com/api/matches/${7812854715}`)
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

  const getMatchDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${seconds} seconds (${minutes} minutes and ${remainingSeconds} seconds)`;
  };

  const renderPlayerInfo = (player, index) => (
    <div key={index}>
      <h3>Player {index + 1} (Hero: {player.hero ? player.hero.localized_name : 'Unknown'})</h3>
      <ul>
        <li>Hero: {player.hero ? `${player.hero.localized_name} (Hero ID: ${player.hero_id})` : 'Unknown'}</li>
        <li>KDA: {player.kills}/{player.deaths}/{player.assists} ({((player.kills + player.assists) / Math.max(1, player.deaths)).toFixed(2)})</li>
        <li>Gold Per Minute: {player.gold_per_min}</li>
        <li>XP Per Minute: {player.xp_per_min}</li>
        <li>Last Hits: {player.last_hits}</li>
        <li>Hero Damage: {player.hero_damage}</li>
        <li>Tower Damage: {player.tower_damage}</li>
        {player.hero_healing > 0 && <li>Hero Healing: {player.hero_healing}</li>}
        <li>Items: {player.item_0 ? `${player.item_0.localized_name}, ` : ''}{player.item_1 ? `${player.item_1.localized_name}, ` : ''}{player.item_2 ? `${player.item_2.localized_name}, ` : ''}{player.item_3 ? `${player.item_3.localized_name}, ` : ''}{player.item_4 ? `${player.item_4.localized_name}, ` : ''}{player.item_5 ? `${player.item_5.localized_name}, ` : ''}</li>
        <li>Abilities: Maxed {player.ability_upgrades_arr.map(ability => ability.localized_name).join(', ')}</li>
      </ul>
    </div>
  );

  return (
    <div>
      <h1>Match Overview:</h1>
      <h2>Match Duration: {matchData && getMatchDuration(matchData.duration)}</h2>
      <h2>Radiant Win: {matchData && (matchData.radiant_win ? 'Yes' : 'No')} ({matchData && (matchData.radiant_win ? 'Radiant' : 'Dire')} Victory)</h2>
      <div>
        <h2>Player Summaries:</h2>
        {matchData && matchData.players.map((player, index) => renderPlayerInfo(player, index))}
      </div>
    </div>
  );
};

export default MatchInfo;
