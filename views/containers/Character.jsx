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
    return (
      <object3D rotation={this.props.rotation} position={this.props.position}>

        <mesh name="head" key={THREE.Math.generateUUID()} position={this.props.config.positions.head}>
          <sphereGeometry
            radius={this.props.config.sizes.head.radius}
            widthSegments={this.props.config.segments}
            heightSegments={this.props.config.segments}
          />
          <meshBasicMaterial color={this.props.config.colors.body} />
        </mesh>

        <mesh name="body" key={THREE.Math.generateUUID()} position={this.props.config.positions.body}>
          <cylinderGeometry
            radiusTop={this.props.config.sizes.body.radius}
            radiusBottom={this.props.config.sizes.body.radius}
            height={this.props.config.sizes.body.height}
            radialSegments={this.props.config.segments}
          />
          <meshBasicMaterial color={this.props.config.colors.body} />
        </mesh>

        <mesh name="legs" key={THREE.Math.generateUUID()} position={this.props.config.positions.legs}>
          <cylinderGeometry
            radiusTop={this.props.config.sizes.legs.radius}
            radiusBottom={this.props.config.sizes.legs.radius}
            height={this.props.config.sizes.legs.height}
            radialSegments={this.props.config.segments}
          />
          <meshBasicMaterial color={this.props.config.colors.body} />
        </mesh>

        <mesh name="left-ear" key={THREE.Math.generateUUID()} position={this.props.config.positions.ears.left}>
          <cylinderGeometry
            radiusTop={this.props.config.sizes.ears.radius}
            radiusBottom={this.props.config.sizes.ears.radius}
            height={this.props.config.sizes.ears.height}
            radialSegments={this.props.config.segments}
          />
          <meshBasicMaterial color={this.props.config.colors.body} />
        </mesh>

        <mesh name="right-ear" key={THREE.Math.generateUUID()} position={this.props.config.positions.ears.right}>
          <cylinderGeometry
            radiusTop={this.props.config.sizes.ears.radius}
            radiusBottom={this.props.config.sizes.ears.radius}
            height={this.props.config.sizes.ears.height}
            radialSegments={this.props.config.segments}
          />
          <meshBasicMaterial color={this.props.config.colors.body} />
        </mesh>

        <mesh name="left-inner-ear" key={THREE.Math.generateUUID()} position={this.props.config.positions.innerEars.left}>
          <cylinderGeometry
            radiusTop={this.props.config.sizes.innerEars.radius}
            radiusBottom={this.props.config.sizes.innerEars.radius}
            height={this.props.config.sizes.innerEars.height}
            radialSegments={this.props.config.segments}
          />
          <meshBasicMaterial color={this.props.config.colors.innerEars} />
        </mesh>

        <mesh name="right-inner-ear" key={THREE.Math.generateUUID()} position={this.props.config.positions.innerEars.right}>
          <cylinderGeometry
            radiusTop={this.props.config.sizes.innerEars.radius}
            radiusBottom={this.props.config.sizes.innerEars.radius}
            height={this.props.config.sizes.innerEars.height}
            radialSegments={this.props.config.segments}
          />
          <meshBasicMaterial color={this.props.config.colors.innerEars} />
        </mesh>

        <mesh name="left-eye-position" key={THREE.Math.generateUUID()} position={this.props.config.positions.eyes.left}>
          <sphereGeometry
            radius={this.props.config.sizes.eyes.radius}
            widthSegments={this.props.config.segments}
            heightSegments={this.props.config.segments}
          />
          <meshBasicMaterial color={this.props.config.colors.eyes} />
        </mesh>

        <mesh name="right-eye-position" key={THREE.Math.generateUUID()} position={this.props.config.positions.eyes.right}>
          <sphereGeometry
            radius={this.props.config.sizes.eyes.radius}
            widthSegments={this.props.config.segments}
            heightSegments={this.props.config.segments}
          />
          <meshBasicMaterial color={this.props.config.colors.eyes} />
        </mesh>

      </object3D>
    );
  }
}

MovingCharacter.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  position: React.PropTypes.object.isRequired,
  rotation: React.PropTypes.object.isRequired,
  config: React.PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  config: state.Character.config,
  position: state.Character.characterPosition,
  rotation: state.Character.characterRotation,
});

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
});

const Character = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovingCharacter);

export default storeWrapper(Character);
