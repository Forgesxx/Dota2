import React from 'react';
import PlayerDetails from './PlayerDetails';
import styles from './TeamDetails.module.css';

const TeamDetails = ({ players, name }) => {
  return (
    <div>
      <h3>{name} Team</h3>
      <div className={styles.teamContainer}>
        {players.map(player => (
          <div className={styles.playerDetails} key={player.account_id}>
            <PlayerDetails player={player} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamDetails;
