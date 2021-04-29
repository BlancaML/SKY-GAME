window.addEventListener('load', () => {
    const game = new Game('canvas');
    console.log('hello');


    document.getElementById("start-button").onclick = () => {
        game.start();
        console.log('start');

    };

});
   

    
    
    
    
    
