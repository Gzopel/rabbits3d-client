import React from 'react';
import { characterMove } from '../actions/Character';
import * as BrowserActions from '../actions/Browser';

const ReactTHREE = require('react-three');
const THREE = require('three');

const Object3D = ReactTHREE.Object3D;
const Mesh = ReactTHREE.Mesh;

class Character extends React.Component {
  componentDidMount = () => {
    this.props.dispatch(
      BrowserActions.addEventListener('Character', 'keypress', this.characterMove)
    );
  };

  componentWillUnmount = () => {
    this.props.dispatch(
      BrowserActions.removeEventListener('Character', 'keypress', this.characterMove)
    );
  };

  characterMove = (event) => {
    this.props.dispatch(characterMove(event.charCode));
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

Character.propTypes = {
  position: React.PropTypes.object.isRequired
};

export default Character;
