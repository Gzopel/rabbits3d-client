import React from 'react'
var ReactTHREE = require('react-three')
var PerspectiveCamera = ReactTHREE.PerspectiveCamera;
var THREE =require('three')

const Camera = React.createClass({
    getInitialState() {
        return {
            fov: 75, aspect: this.props.aspect,
            near: 1, far: 800,
            position: new THREE.Vector3(400, 0, 400),
            lookat: new THREE.Vector3(0, 0, 0)
        };
    },
    componentDidMount(){
        document.onkeypress = (oPEvt)=> {
            var oEvent = oPEvt || window.event, nChr = oEvent.charCode;
            console.log("ON KEY PRESSED",nChr);
            var lookAt = this.state.lookat.clone();
            switch (oEvent.charCode) {
                case 105:
                    // (i)up
                    lookAt.add(new THREE.Vector3(0, 1, 0));
                    break;
                case 106:
                    // (j)left
                    lookAt.add(new THREE.Vector3(-1, 0, 0));
                    break;
                case 107:
                    // (k)down
                    lookAt.add(new THREE.Vector3(0,-1, 0));
                    break;
                case 108:
                    // (l)right
                    lookAt.add(new THREE.Vector3(1, 0, 0));
                    break;
                case 13:
                    // (enter)reset
                    lookAt = new THREE.Vector3(0, 0, 0);
                    break;
            }
            this.setState({
                fov: 75, aspect: this.props.aspect,
                near: 1, far: 800,
                position: new THREE.Vector3(400, 0, 400),
                lookat: lookAt
            })

            return true;
        };
    },
    render() {
        console.log("rendering camera",this.state)
        return <PerspectiveCamera name="maincamera" {...this.state} />

    }
})

export default Camera