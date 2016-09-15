import { connect } from 'react-redux';
import React from 'react';
import { characterMove } from '../actions/Character';
import * as BrowserActions from '../actions/Browser';
import keyEmitter from '../KeyEventEmitter';

const ReactTHREE = require('react-three');
const THREE = require('three');

const Object3D = ReactTHREE.Object3D;
const Mesh = ReactTHREE.Mesh;
const keys = ['W','A','S','D'];

class MovingCharacter extends React.Component {
  componentDidMount = () => {
      this.props.onMount()
  };

  componentWillUnmount = () => {
      this.props.onUnmount()
  };

  render() {
    const material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
    });
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const quaternion = new THREE.Quaternion(0, 0, 0, 0);
    return (
      <Object3D quaternion={quaternion} position={this.props.position}>
        <Mesh position={this.props.position} geometry={geometry} material={material} />
      </Object3D>
    );
  }
}

MovingCharacter.propTypes = {
  onUnmount: React.PropTypes.func.isRequired,
  onMount: React.PropTypes.func.isRequired,
  position: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    position: state.CharacterCamera.characterPosition,
  };
};

const mapDispatchToProps = (dispatch) => {
  const onKeyPressed = (event)=>{dispatch(characterMove(event))};
  return {
    onMount: () => { keyEmitter.on(keys,onKeyPressed)},
    onUnmount: () => { keyEmitter.off(keys,onKeyPressed)}
  };
};


const Character = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovingCharacter);

export default Character;
