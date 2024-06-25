import React from 'react';
import PlayerDetails from './PlayerDetails';
import styles from './TeamDetails.module.css';

const TeamDetails = ({ players, name }) => {
  // Вычисляем количество игроков, которые будут в одной строке
  const playersPerRow = 5;

  // Делим массив игроков на части, каждая из которых будет отображаться в одной строке
  const rows = [];
  for (let i = 0; i < players.length; i += playersPerRow) {
    rows.push(players.slice(i, i + playersPerRow));
  }

  return (
    <div>
      <h2>{name} Team</h2>
      {rows.map((row, index) => (
        <div key={index} className={styles.teamContainer}>
          {row.map(player => (
            <PlayerDetails key={player.player_slot} player={player} />
          ))}
          {/* Добавляем пустые элементы для заполнения строки */}
          {row.length < playersPerRow &&
            Array(playersPerRow - row.length)
              .fill()
              .map((_, index) => (
                <div key={index} className={styles.playerDetails}></div>
              ))}
        </div>
      ))}
    </div>
  );
};

export default TeamDetails;
