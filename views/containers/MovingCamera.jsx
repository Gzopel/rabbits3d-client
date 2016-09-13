import { connect } from 'react-redux';
import Camera from '../components/Camera';

const mapStateToProps = (state) => {
  return {
    config: state.Camera.config,
    aspect: state.Browser.size.width / state.Browser.size.height,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};


const MovingCamera = connect(
  mapStateToProps,
  mapDispatchToProps
)(Camera);

export default MovingCamera;
