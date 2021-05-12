window.addEventListener('load', () => {
    let game = new Game('canvas', onGameOver);
    console.log('hello');


    document.getElementById("start-button").onclick = () => {
        game.start();
        
        document.getElementById("canvas-intro").style.display = 'none';
        
    };

    document.getElementById("instructions-div").onclick = () => {
        document.getElementById("instructions").style.display = "block";
    }

    document.getElementById("close-instructions").onclick = () => {
        document.getElementById("instructions").style.display = "none";
    }

    document.getElementById("scores-div").onclick = () => {
        document.getElementById("ranking-div").style.display = "block";
    }

    document.getElementById("close-ranking").onclick = () => {
        document.getElementById("ranking-div").style.display = "none";
    }

    document.querySelector(".max-score").innerText =
    `TOP SCORE: ${localStorage.maxScore}`;



    document.addEventListener('keydown', e => {
        game.onKeyEvent(e)
    });

    document.addEventListener('keyup', e => {
        game.onKeyEvent(e)
    });

    function onGameOver() {
        document.getElementById("div-game-over").style.display = "block";
        document.getElementById("box-you-win").style.display = "block"; 
        document.querySelector(".try-again").style.display = "block";
    }

    const tryAgain = document.querySelector(".try-again");

    tryAgain.addEventListener('click', () => {
        game = new Game('canvas', onGameOver);
        game.start();
        tryAgain.style.display = "none";
        document.getElementById("box-you-win").style.display = "none";

    })

});
   

    
    
    
    
    
