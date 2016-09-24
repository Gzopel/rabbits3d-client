import { connect } from 'react-redux';
import React from 'react';
import keyEmitter from '../KeyEventEmitter';
import KEYS from '../keys';

const ReactTHREE = require('react-three');
const THREE = require('three');

const Object3D = ReactTHREE.Object3D;
const Mesh = ReactTHREE.Mesh;

const keys = [KEYS.Q, KEYS.W, KEYS.E, KEYS.R, KEYS.T];

class MovingCharacter extends React.Component {
  componentDidMount = () => {
    keyEmitter.on(keys, this.onKeyPressed);
  };

  componentWillUnmount = () => {
    keyEmitter.off(keys, this.onKeyPressed);
  };

  onKeyPressed = (event) => {
    // TODO bindings for actions Q,W,E,R,T items 1,2,3,4,5
    // keydrown doesn't have support for numeric keys,
    // at least until https://github.com/jeremyckahn/keydrown/pull/12 gets merged :)
  };

  render() {
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });
    const eyeMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
    });
    const innerEarMaterial = new THREE.MeshBasicMaterial({
      color: 0xFF44FF,
    });
    const headGeometry = new THREE.SphereGeometry(6, 32, 32);
    const bodyGeometry = new THREE.CylinderGeometry(7, 7, 10, 32);
    const legGeometry = new THREE.CylinderGeometry(4, 4, 10, 32);
    const earGeometry = new THREE.CylinderGeometry(2, 2, 15, 32);
    const innerEarGeometry = new THREE.CylinderGeometry(1, 1, 10, 32);
    const eyeGeometry = new THREE.SphereGeometry(2.5, 32, 32);
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
      <Object3D rotation={this.props.rotation} position={this.props.position}>
        <Mesh position={headPosition} geometry={headGeometry} material={material} />
        <Mesh position={bodyPosition} geometry={bodyGeometry} material={material} />
        <Mesh position={legPosition} geometry={legGeometry} material={material} />
        <Mesh position={leftEarPosition} geometry={earGeometry} material={material} />
        <Mesh position={rightEarPosition} geometry={earGeometry} material={material} />
        <Mesh position={leftInnerEarPosition} geometry={innerEarGeometry} material={innerEarMaterial} />
        <Mesh position={rightInnerEarPosition} geometry={innerEarGeometry} material={innerEarMaterial} />
        <Mesh position={leftEyePosition} geometry={eyeGeometry} material={eyeMaterial} />
        <Mesh position={rightEyePosition} geometry={eyeGeometry} material={eyeMaterial} />
      </Object3D>
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

export default Character;
