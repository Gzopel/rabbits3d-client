import React from 'react';
import Map from './Map';
import Character from './Character';
import Camera from '../containers/Camera';

const ReactTHREE = require('react-three');

const Renderer = ReactTHREE.Renderer;
const Scene = ReactTHREE.Scene;

const GameScene = ({ width, height }) => {
  return (
    <Renderer width={width} height={height}>
      <Scene width={width} height={height} camera="maincamera">
        <Camera />
        <Map />
        <Character />
      </Scene>
    </Renderer>
  );
};

GameScene.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
};

export default GameScene;
