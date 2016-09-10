import { connect } from 'react-redux';
import MovingCamera from '../components/MovingCamera';

const mapStateToProps = (state) => {
  return {
    config: state.Camera.config,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};


const Camera = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovingCamera);

export default Camera;
