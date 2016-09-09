import React from 'react';

const ReactTHREE = require('react-three');

const THREE = require('three');

const Object3D = ReactTHREE.Object3D;
const Mesh = ReactTHREE.Mesh;

const Map = ({ children }) => {
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    side: THREE.DoubleSide,
  });

  const geometry = new THREE.PlaneGeometry(800, 800, 1, 1);
  const vFrom = new THREE.Vector3(800, 800, 0).normalize();
  const vTo = new THREE.Vector3(800, 0, 800).normalize();
  const quaternion = new THREE.Quaternion().setFromUnitVectors(vFrom, vTo);
  geometry.applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(quaternion));


  const vFrom2 = new THREE.Vector3(0, 800, 0).normalize();
  const vTo2 = new THREE.Vector3(0, 0, 800).normalize();
  const quaternion2 = new THREE.Quaternion().setFromUnitVectors(vFrom2, vTo2);
  geometry.applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(quaternion2));

  const quaternion0 = new THREE.Quaternion(0, 0, 0, 0);
  const position = new THREE.Vector3(0, 0, 0);

  return (
    <Object3D quaternion={quaternion0} position={position}>
      <Mesh position={position} geometry={geometry} material={material} />
      { children }
    </Object3D>
  );
};

Map.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default Map;
