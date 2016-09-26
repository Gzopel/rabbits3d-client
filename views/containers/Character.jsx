import React from 'react';
import React3 from 'react-three-renderer';
import { connect } from 'react-redux';
import keyEmitter from '../KeyEventEmitter';
import KEYS from '../keys';
import storeWrapper from './storeWrapper';

const THREE = require('three');

const keys = [KEYS.Q, KEYS.W, KEYS.E, KEYS.R, KEYS.T, KEYS.ONE, KEYS.TWO, KEYS.THREE, KEYS.FOUR, KEYS.FIVE];

class MovingCharacter extends React.Component {
  componentDidMount = () => {
    keyEmitter.on(keys, this.onKeyPressed);
  };

  componentWillUnmount = () => {
    keyEmitter.off(keys, this.onKeyPressed);
  };

  onKeyPressed = (event) => {
    // TODO actions Q,W,E,R,T items 1,2,3,4,5
  };

  render() {
    const material = {
      color: 0xffffff,
    };
    const eyeMaterial = {
      color: 0x000000,
    };
    const innerEarMaterial = {
      color: 0xFF44FF,
    };
    const headPosition = new THREE.Vector3(0, 26, 0);
    const bodyPosition = new THREE.Vector3(0, 15, 0);
    const legPosition = new THREE.Vector3(0, 5, 0);
    const leftEarPosition = new THREE.Vector3(-3, 32, 0);
    const rightEarPosition = new THREE.Vector3(3, 32, 0);
    const leftInnerEarPosition = new THREE.Vector3(-3, 32, -2);
    const rightInnerEarPosition = new THREE.Vector3(3, 32, -2);
    const leftEyePosition = new THREE.Vector3(-2.5, 27, -6);
    const rightEyePosition = new THREE.Vector3(2.5, 27, -6);
    return (
      <object3D rotation={this.props.rotation} position={this.props.position}>
        <mesh key={THREE.Math.generateUUID()} position={headPosition}>
          <sphereGeometry radius={6} widthSegments={32} heightSegments={32} />
          <meshBasicMaterial color={material.color} />
        </mesh>

        <mesh key={THREE.Math.generateUUID()} position={bodyPosition}>
          <cylinderGeometry radiusTop={7} radiusBottom={7} height={10} radialSegments={32} />
          <meshBasicMaterial color={material.color} />
        </mesh>

        <mesh key={THREE.Math.generateUUID()} position={legPosition}>
          <cylinderGeometry radiusTop={4} radiusBottom={4} height={10} radialSegments={32} />
          <meshBasicMaterial color={material.color} />
        </mesh>

        <mesh key={THREE.Math.generateUUID()} position={leftEarPosition}>
          <cylinderGeometry radiusTop={2} radiusBottom={2} height={15} radialSegments={32} />
          <meshBasicMaterial color={material.color} />
        </mesh>

        <mesh key={THREE.Math.generateUUID()} position={rightEarPosition}>
          <cylinderGeometry radiusTop={2} radiusBottom={2} height={10} radialSegments={32} />
          <meshBasicMaterial color={material.color} />
        </mesh>

        <mesh key={THREE.Math.generateUUID()} position={leftInnerEarPosition}>
          <cylinderGeometry radiusTop={1} radiusBottom={1} height={10} radialSegments={32} />
          <meshBasicMaterial color={innerEarMaterial.color} />
        </mesh>

        <mesh key={THREE.Math.generateUUID()} position={rightInnerEarPosition}>
          <cylinderGeometry radiusTop={1} radiusBottom={1} height={10} radialSegments={32} />
          <meshBasicMaterial color={innerEarMaterial.color} />
        </mesh>

        <mesh key={THREE.Math.generateUUID()} position={leftEyePosition}>
          <sphereGeometry radius={2.5} widthSegments={32} heightSegments={32} />
          <meshBasicMaterial color={eyeMaterial.color} />
        </mesh>

        <mesh key={THREE.Math.generateUUID()} position={rightEyePosition}>
          <sphereGeometry radius={2.5} widthSegments={32} heightSegments={32} />
          <meshBasicMaterial color={eyeMaterial.color} />
        </mesh>
      </object3D>
    );
  }
}

MovingCharacter.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  position: React.PropTypes.object.isRequired,
  rotation: React.PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
});


const Character = connect(
  mapDispatchToProps
)(MovingCharacter);

export default storeWrapper(Character);
