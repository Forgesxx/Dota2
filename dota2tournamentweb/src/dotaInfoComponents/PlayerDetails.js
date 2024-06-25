import React from 'react';

const PlayerDetails = ({ player }) => {
  return (
    <div>
      <p><strong>Player Name:</strong> {player.personaname}</p>
      <p><strong>Hero ID:</strong> {player.hero_id}</p>
      <p><strong>Kills:</strong> {player.kills}</p>
      <p><strong>Deaths:</strong> {player.deaths}</p>
      <p><strong>Assists:</strong> {player.assists}</p>
    </div>
  );
};

export default PlayerDetails;
