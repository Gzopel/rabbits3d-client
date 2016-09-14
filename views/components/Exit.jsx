import React from 'react'
const ReactTHREE = require('react-three')
const THREE =require('three')
const Object3D = ReactTHREE.Object3D;
const Mesh = ReactTHREE.Mesh;

const Exit = ({x,z})=>{
    const geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );// new THREE.CircleGeometry( 5, 32 );
    const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    const quaternion = new THREE.Quaternion(0,0,0,0)
    const position = new THREE.Vector3(x,1,z);
    return (<Object3D quaternion={quaternion} position={position}>
        <Mesh position={position} geometry={geometry} material={material} />
    </Object3D>)
}

Exit.propTypes = {
  x: React.PropTypes.number.isRequired,
  z: React.PropTypes.number.isRequired
};

export default Exit
