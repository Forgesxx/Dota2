import React from 'react';
import TeamDetails from './TeamDetails';
import styles from './MatchDetails.module.css';

const MatchDetails = ({ matchData }) => {
  const radiantPlayers = matchData.players.filter(player => player.isRadiant);
  const direPlayers = matchData.players.filter(player => !player.isRadiant);

  return (
    <div>
      <div className={styles.matchOverview}>
        <h2>Match Overview</h2>
        <p><strong>Match ID:</strong> {matchData.match_id}</p>
        <p><strong>Duration:</strong> {matchData.duration}</p>
        <p><strong>Radiant Win:</strong> {matchData.radiant_win ? 'Yes' : 'No'}</p>
      </div>
      <div className={styles.teamSection}>
        <h2>Teams</h2>
        <TeamDetails players={radiantPlayers} name="Radiant" />
        <TeamDetails players={direPlayers} name="Dire" />
      </div>
    </div>
  );
};

export default MatchDetails;
