import React, { PropTypes } from 'react';
var ReactTHREE = require('react-three')
import { cameraRotation } from '../actions/Camera';
var PerspectiveCamera = ReactTHREE.PerspectiveCamera;

let dispatcher;
document.onkeypress = (oPEvt) => { //shouldnt this be on the container? =/
  if (!dispatcher)
    return;
  var oEvent = oPEvt || window.event, charCode = oEvent.charCode;
  if (charCode == 105 || charCode == 106 || charCode == 107 || charCode == 108 || charCode == 13)
    dispatcher(cameraRotation(charCode))
};


const MovingCamera = (config, dispatch) => {
  dispatcher = dispatch;
  return (<PerspectiveCamera name="maincamera" {...config} />)
}

MovingCamera.propTypes = {
  config: PropTypes.shape({
    fov: PropTypes.number.isRequired,
    aspect: PropTypes.number.isRequired,
    near: PropTypes.number.isRequired,
    far: PropTypes.number.isRequired,
    position: PropTypes.object.isRequired,
    lookat: PropTypes.object.isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired
}

export default MovingCamera