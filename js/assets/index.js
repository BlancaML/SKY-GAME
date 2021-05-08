window.addEventListener('load', () => {
    const game = new Game('canvas');
    console.log('hello');


    document.getElementById("start-button").onclick = () => {
        game.start();
        
        document.getElementById("canvas-intro").remove();
        

    };

    document.getElementById("instructions-div").onclick = () => {
        document.getElementById("instructions").style.display = "block";
    }

    document.getElementById("close-instructions").onclick = () => {
        document.getElementById("instructions").style.display = "none";
    }

    document.addEventListener('keydown', e => {
        game.onKeyEvent(e)
    });

    document.addEventListener('keyup', e => {
        game.onKeyEvent(e)
    });

});
   

    
    
    
    
    
