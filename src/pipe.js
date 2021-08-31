import React from 'react'

export const pipe = (props) => {
    
    let x = prop.pipeX; 
    let x = prop.pipeY;
    let PIPE_BOTTOM_HEIGHT = props.PIPE BOTTOM HEIGHT;
    let PIPE_TOP_HEIGHT = props.PIPE_TOP_HEIGHT;
    let PIPE_BOTTOM_WIDTH = props.PIPE_BOTTOM_WIDTH;
    let PIPE PIPE TOP WIDTH = props.PIPE BOTTOM HEIGHT;
    let PIPE_SPACE = props.PIPE_SPACE;

    let context = props.context;
    
    function draw(){


        let PipeX = x;
        let pipeYUp = PIPE_BOTTOM_HEIGHT - PIPE_TOP_HEIGHT - PIPE_SPACE
        let pipeYDown = y + PIPE_SPACE;
    
        context.fillStyle = "green";
        context.fillRect(PipeX, pipeYUp, PIPE_BOTTOM_WIDTH, PIPE_BOTTOM_HEIGHT);
        context.fillRect(PipeX - 5, pipeYDown + PIPE_TOP_HEIGHT, PIPE_TOP_WIDTH, PIPE_TOP_HEIGHT);

    }
    
    function update(){

        this.pipeX -= 1;

    }
    
    
    
    
    
    
    return (
        <div>
            
        
        </div>
    )
}
