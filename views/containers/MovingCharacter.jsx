import { connect } from 'react-redux';
import Character from '../components/Character';

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


const MovingCharacter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Character);

export default MovingCharacter;
