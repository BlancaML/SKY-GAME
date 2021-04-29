window.addEventListener('load', () => {
    const game = new Game('canvas');
    console.log('hello');


    document.getElementById("start-button").onclick = () => {
        game.start();
        console.log('start');

    };

    document.addEventListener('keydown', e => {
        game.onKeyEvent(e)
    });

    document.addEventListener('keyup', e => {
        game.onKeyEvent(e)
    });

});
   

    
    
    
    
    
