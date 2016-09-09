import React from 'react';
import GameScene from './GameScene';
import Map from './Map';
import Character from './Character';

const Game = () => {
  return (
    <GameScene width={window.innerWidth} height={window.innerHeight}>
      <Map>
        <Character />
      </Map>
    </GameScene>
  );
};

export default Game;
