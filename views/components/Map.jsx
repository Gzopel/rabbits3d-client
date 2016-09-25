import React from 'react';
import React3 from 'react-three-renderer';

const THREE = require('three');

const Map = ({ children, onClick }) => {
  return (
    <object3D>
      <axisHelper size={800} />
      <mesh key="map" position={new THREE.Vector3(0, 0, 0)}>
        <planeGeometry
          width={1600}
          height={1600}
        />
        <meshBasicMaterial
          color={0x00ff00}
          side={THREE.DoubleSide}
        />
      </mesh>
      { children }
    </object3D>
  );
};

Map.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  children: React.PropTypes.element.isRequired,
};


export default Map;
