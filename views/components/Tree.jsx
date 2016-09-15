import React from 'react';
const ReactTHREE = require('react-three');
const THREE =require('three');
const Mesh = ReactTHREE.Mesh;
const Object3D = ReactTHREE.Object3D;

const Tree = ({x,z})=>{
  const topMaterial = new THREE.MeshBasicMaterial({color: 0x004f00});
  const trunkMaterial = new THREE.MeshBasicMaterial({color: 0x5c2500});
  const topGeometry = new THREE.SphereGeometry(20, 32, 32);
  const trunkGeometry = new THREE.CylinderGeometry( 6, 6, 30, 32 );
  const topPosition = new THREE.Vector3(x,45,z);
  const trunkPosition = new THREE.Vector3(x,15,z);
  return (
    <Object3D>
      <Mesh position={topPosition} geometry={topGeometry} material={topMaterial} />
      <Mesh position={trunkPosition} geometry={trunkGeometry} material={trunkMaterial} />
    </Object3D>
  );
}

Tree.propTypes = {
  x: React.PropTypes.number.isRequired,
  z: React.PropTypes.number.isRequired
};

export default Tree
