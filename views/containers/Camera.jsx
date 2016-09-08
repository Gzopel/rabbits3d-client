import { connect } from 'react-redux'
import MovingCamera from '../components/MovingCamera'
var THREE =require('three')

const mapStateToProps = (state) => {
    return {
        config: {
            fov: 75, aspect: window.innerWidth/window.innerHeight,
            near: 1, far: 800,
            position: new THREE.Vector3(400, 0, 400),
            //who needs an inital state?
            lookat: state.rotationVector ? new THREE.Vector3(0, 0, 0).add(state.rotationVector): new THREE.Vector3(0, 0, 0)
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch:dispatch
    }
}


const Camera = connect(
    mapStateToProps,
    mapDispatchToProps
)(MovingCamera)

export default Camera