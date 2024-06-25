import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MatchDetails from './MatchDetails';
import styles from './MatchInfo.module.css';

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

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>Error: {error.message}</p>;

  return (
    <div className={styles.matchInfoContainer}>
      <h1>Match Info</h1>
      <MatchDetails matchData={matchData} />
    </div>
  );
};

export default MatchInfo;
