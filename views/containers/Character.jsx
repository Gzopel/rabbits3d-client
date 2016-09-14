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
      keyEmitter.on(keys, this.characterMove)
  };

  componentWillUnmount = () => {
      keyEmitter.off(keys, this.characterMove)
  };

  characterMove = (event) => {
    this.props.dispatch(characterMove(event));
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
  position: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    position: state.Character.position,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};


const Character = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovingCharacter);

export default Character;
