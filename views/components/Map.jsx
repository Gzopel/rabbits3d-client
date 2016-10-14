import React from 'react';
import React3 from 'react-three-renderer';

const Three = require('three');

const Map = ({ children, onClick }) => {
  return (
    <object3D rotation={new Three.Euler(-Math.PI / 2, 0, 0)}>
      <axisHelper size={800} />
      <mesh key="map" position={new Three.Vector3(0, 0, 0)} onClick={() => { console.info('clicked!')}}>
        <planeGeometry
          width={1600}
          height={1600}
          widthSegments={1}
          heightSegments={1}
        />
        <meshBasicMaterial
          color={0x00ff00}
          side={Three.DoubleSide}
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
