import React from 'react';
import React3 from 'react-three-renderer';
import { connect } from 'react-redux';
import Camera from '../containers/Camera';
import { setSceneReference, setMouseInputReference } from '../actions/References';
import MouseInput from '../inputs/MouseInput';


class GameScene extends React.Component {
  componentDidMount = () => {
    this.props.dispatch(setSceneReference(this.scene));
    this.props.dispatch(setMouseInputReference(this.mouseInput));
  }

  onAnimate = () => {
    if (this.props.elements.scene && this.props.elements.camera) {
      this.setMouseInput();
    }
  }

  setMouseInput = () => {
    if (!this.props.elements.mouseInput.isReady()) {
      this.props.elements.mouseInput.ready(
        this.props.elements.scene, this.container, this.props.elements.camera
      );
      this.props.elements.mouseInput.setActive(false);
    }
  }

  render() {
    return (
      <div ref={e => this.container = e}>
        <React3
          mainCamera="maincamera"
          width={this.props.width}
          height={this.props.height}
          antialias
          shadowMapEnabled={true}
          clearColor={0x000000}
          forceManualRender={false}
          onAnimate={this.onAnimate}
        >
          <module ref={c => this.mouseInput = c} descriptor={MouseInput} />
          <scene ref={c => this.scene = c}>
            <Camera />
            {this.props.children}
          </scene>
        </React3>
      </div>
    );
  }
}

GameScene.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  children: React.PropTypes.element.isRequired,
  elements: React.PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  elements: state.References.elements,
});

export default connect(
  mapStateToProps
)(GameScene);
