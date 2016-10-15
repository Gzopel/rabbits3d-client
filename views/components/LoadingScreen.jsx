import React from 'react';
import React3 from 'react-three-renderer';

import GameScene from '../components/GameScene';

const THREE = require('three');

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.font = null;
  }

  componentWillMount() {
    this.loadFont();
  }

  // TODO: create actions for loading resources.
  loadFont() {
    const loader = new THREE.XHRLoader(THREE.DefaultLoadingManager);
    loader.load('fonts/helvetiker_regular.typeface.json', (font) => {
      try {
        this.font = new THREE.Font(
          JSON.parse(font)
        );
      } catch (error) {
        console.log(error);
      }

      this.forceUpdate();
    });
  }

  render() {
    if (!this.font) {
      return false;
    }

    const loadingTextStyle = {
      font: this.font,
      size: 20,
      height: 10,
      curveSegments: 2,
    };

    return (
      <GameScene width={this.props.size.width} height={this.props.size.height}>
        <object3D rotation={new THREE.Euler(0, Math.PI, 0)}>
          <mesh position={new THREE.Vector3(-50, 0, 0)}>
            <textGeometry text="Loading..." {...loadingTextStyle} />
            <meshBasicMaterial color={Math.random() * 0xffffff} side={THREE.DoubleSide} />
          </mesh>
        </object3D>
      </GameScene>
    );
  }
}

LoadingScreen.propTypes = {
  size: React.PropTypes.shape({
    width: React.PropTypes.number,
    height: React.PropTypes.number,
  }),
};

export default LoadingScreen;
