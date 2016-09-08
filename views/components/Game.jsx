import React from 'react'
import GameScene from './GameScene'
import Map from './Map'
import Character from './Character.jsx'

const Game = () => {
    return (
        <GameScene width={window.innerWidth} height={window.innerHeight}>
            <div>
                <Map/>
                <Character/>
            </div>
        </GameScene>
    )
}


export default Game