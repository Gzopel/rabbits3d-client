import React from 'react';
import GameScene from '../components/GameScene';

//const ReactTHREE = require('react-three');
const THREE = require('three');

const Mesh = ReactTHREE.Mesh;

class LoadingScreen extends React.Component {
  constructor() {
    super();
    this.font = null;
  }
  componentWillMount() {
    this.loadFont();
  }

  // TODO: create actions for loading resources.
  loadFont() {
    const loader = new THREE.XHRLoader(THREE.DefaultLoadingManager);
    loader.load('fonts/helvetiker_regular.typeface.json', (font) => {
      this.font = new THREE.Font(JSON.parse(font));
      this.forceUpdate();
    });
  }

  render() {
    if (!this.font) {
      return false;
    }

    const geometry = new THREE.TextGeometry('Loading...', {
      font: this.font,
      size: 20,
      height: 10,
      curveSegments: 2,
    });
    geometry.rotateY(Math.PI);
    const material = new THREE.MultiMaterial([
      new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff, overdraw: 0.5 }),
      new THREE.MeshBasicMaterial({ color: 0x000000, overdraw: 0.5 }),
    ]);
    const position = new THREE.Vector3(50, 0, 0);
    return (
      <GameScene width={this.props.size.width} height={this.props.size.height}>
        <Mesh position={position} geometry={geometry} material={material} />
      </GameScene>);
  }
}

LoadingScreen.propTypes = {
  size: React.PropTypes.shape({
    width: React.PropTypes.number,
    height: React.PropTypes.number,
  }),
};

export default LoadingScreen;
