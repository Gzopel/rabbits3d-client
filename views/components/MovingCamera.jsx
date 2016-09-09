import React from 'react';

const ReactTHREE = require('react-three');

import { cameraRotation } from '../actions/Camera';

var PerspectiveCamera = ReactTHREE.PerspectiveCamera;

let dispatcher;
//document.onkeypress = (oPEvt) => { //shouldnt this be on the container? =/
//  if (!dispatcher)
//    return;
//  var oEvent = oPEvt || window.event, charCode = oEvent.charCode;
//  if (charCode == 105 || charCode == 106 || charCode == 107 || charCode == 108 || charCode == 13)
//    dispatcher(cameraRotation(charCode))
//};

const MovingCamera = ({ config, dispatch }) => {
  return (
    <PerspectiveCamera name="maincamera" {...config} />
  );
};

MovingCamera.propTypes = {
  config: React.PropTypes.shape({
    fov: React.PropTypes.number.isRequired,
    aspect: React.PropTypes.number.isRequired,
    near: React.PropTypes.number.isRequired,
    far: React.PropTypes.number.isRequired,
    position: React.PropTypes.object.isRequired,
    lookat: React.PropTypes.object.isRequired,
  }).isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

export default MovingCamera;
