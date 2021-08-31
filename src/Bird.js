import React from 'react'

export const Bird = () => {
    
    let x = 50;
    let y = props.canvasHeight / 2;
    let size = 30;
    let context = props.context;
    let gravity = props.gravity;
    
    function draw() {
        context.fillStyle = "Yellow"
        context.fillRect(x, y, size, size);
    }
    

    function update() {
        y += gravity;

        let newGravity = gravity + 0.05;

        props.updateGravity(newGravity);

        y = math.min(props.canvasHeight - size, y);

        if(y === props.canvasHeight - size) {
            setGameOver(true);
        }

        props.checkCollision();
    


    }
    
    return (
        <div>
            
        </div>
    )
}
