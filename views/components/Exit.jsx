import React from 'react';
const ReactTHREE = require('react-three');
const THREE =require('three');
const Mesh = ReactTHREE.Mesh;

const Exit = ({x,z})=>{
    const geometry = new THREE.CircleGeometry( 20, 32 );
    geometry.rotateX(Math.PI/2)
    const material = new THREE.MeshBasicMaterial( { color: 0x0000ff, side: THREE.DoubleSide } );
    const position = new THREE.Vector3(x,1,z);
    return (<Mesh position={position} geometry={geometry} material={material} />)
}

Exit.propTypes = {
  x: React.PropTypes.number.isRequired,
  z: React.PropTypes.number.isRequired
};

export default Exit
