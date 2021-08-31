import React, { useRef, useEffect} from 'react'

export const Canvas = (props) => {
    
    const canvasRef = useRef(null);

    const { draw } = props;
    
    let canvas;

    let context;
    
    
    function canvasInit () {
        const canvas = canvasRef.current;

        const context = canvas.getContext("2d")
    }

    useEffect(function(){
        canvasInit();

        props.draw(context);

    }, [props.draw]);
    
    return (
        <Canvas id="canvas" height ={props.canvasHeight} width={props.canvasWidth}></Canvas>
    )
}
