import React from 'react'

import { Canvas } from './Canvas';

export const App = () => {
    

    const PIPE BOTTOM WIDTH = 30;
    const PIPE BOTTOM HEIGHT = 250;
    const PIPE TOP WIDTH = 40;
    const PIPE TOP HEIGHT = 20;
    const PIPE SPACE = 60;
    const SPACE KEY = 32;
    const WIDTH = 600;
    const HEIGHT = 400;

    let pipes = [];
    // Define gravity: 1 (True) means down, 0 (False) means up
    let gravity = 1;
    let gameOver = true;
    
    return (
        <div>

            <Canvas canvasWidth = {WIDTH} canvasHeight = {HEIGHT}></Canvas>

        </div>
    )
}



// var chair = {
//     "legs": 4,
//     "material": "wood",
//     "shape": "square",
//     "adjustHeight": function () { },
//     "adjustPosture": function () { }
//   }

// Arrow functions are normal functions that look weird. No difference, just fancy typing.

// return() defines what is to be put up on screen.