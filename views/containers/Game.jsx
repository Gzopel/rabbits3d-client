import { connect } from 'react-redux';
import GameComponent from '../components/Game';

const mapStateToProps = (state) => {
  return {
    size: state.Browser.size,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};


const Game = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameComponent);

export default Game;
