import React from 'react';
import React3 from 'react-three-renderer';
import Camera from '../containers/Camera';

const GameScene = ({ width, height, children }) => {
  return (
    <React3
      mainCamera="maincamera"
      width={width}
      height={height}
      antialias
      shadowMapEnabled={true}
      clearColor={0x000000}
      forceManualRender={false}
    >
      <scene>
        <Camera />
        {children}
      </scene>
    </React3>
  );
};

GameScene.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  children: React.PropTypes.element.isRequired,
};

export default GameScene;
