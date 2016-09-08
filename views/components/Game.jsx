import React from 'react';
import Map from './Map';
import GameScene from './GameScene';
import Character from './Character';

const Game = () => {
  return (
    <GameScene width={window.innerWidth} height={window.innerHeight}>
      <div>
        <Map />
        <Character />
      </div>
    </GameScene>
  );
};

export default Game;
