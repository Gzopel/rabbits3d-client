import { connect } from 'react-redux';
import React from 'react';
import { characterMove } from '../actions/Character';
import keyEmitter from '../KeyEventEmitter';
import KEYS from '../keys';

const ReactTHREE = require('react-three');
const THREE = require('three');

const Object3D = ReactTHREE.Object3D;
const Mesh = ReactTHREE.Mesh;

const keys = [KEYS.W, KEYS.A, KEYS.S, KEYS.D];

class MovingCharacter extends React.Component {
  componentDidMount = () => {
    keyEmitter.on(keys, this.onKeyPressed);
  };

  componentWillUnmount = () => {
    keyEmitter.off(keys, this.onKeyPressed);
  };

  onKeyPressed = (event) => {
    this.props.dispatch(characterMove(event));
  };

  render() {
    const material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
    });
    const headGeometry = new THREE.SphereGeometry(5, 32, 32);
    const bodyGeometry = new THREE.CylinderGeometry(6, 6, 10, 32);
    const legGeometry = new THREE.CylinderGeometry(3, 3, 10, 32);
    const headPosition = new THREE.Vector3(0, 25, 0).add(this.props.position);
    const bodyPosition = new THREE.Vector3(0, 15, 0).add(this.props.position);
    const legPosition = new THREE.Vector3(0, 5, 0).add(this.props.position);
    return (
      <Object3D lookAt={this.props.orientation}>
        <Mesh position={headPosition} geometry={headGeometry} material={material} />
        <Mesh position={bodyPosition} geometry={bodyGeometry} material={material} />
        <Mesh position={legPosition} geometry={legGeometry} material={material} />
      </Object3D>
    );
  }
}

MovingCharacter.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  position: React.PropTypes.object.isRequired,
  orientation: React.PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};


const Character = connect(
  mapDispatchToProps
)(MovingCharacter);

export default Character;
