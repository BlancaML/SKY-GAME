class Game {

    constructor(canvasId) {
        this.intervalId = null;
        this.tick = 0;

        const canvas = document.getElementById(canvasId);
        this.ctx = canvas.getContext("2d");

        this.background = new Background(this.ctx);
        this.plane = new Plane (this.ctx);
        this.score = new Score(this.ctx);
        
        this.blacks = [
            new Black (this.ctx)
        ]; 
        this.audio = new Audio ('./audios/gameover.wav');
    }

    start() {
        this.intervalId = setInterval(() => {
            this.tick++;
            this.clear();
            this.move();
            this.draw();
            this.checkCollisions();
            this.updateScore();

            if (this.tick === 100) {
                this.tick = 0;
                this.addEnemy();
            }

        },1000 / 60);
    }

    updateScore() {
        this.score.value+= 1
    }

    onKeyEvent(event) {
        this.plane.onKeyEvent(event);
    }

    addEnemy() {
        const newBlack = new Black(this.ctx)
        this.blacks.push(newBlack)
    }


    clear() {
        this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    clearEnemies() {
        this.blacks = this.blacks.filter((enem) => {
            if (enem.isVisible()) {
                return true
            } else {
                this.updateScore()
            }
        });
    }

    move() {
        this.background.move();
        this.plane.move();
        

        this.blacks.forEach(enem => enem.move());
        

       
    }

    draw() {
        this.tick++;
        this.background.draw();
        this.plane.draw();
        this.score.draw();
        

        this.blacks.forEach(enem => enem.draw());


    }

    

    checkCollisions() {
        const crashFloor = this.plane.isFloor();
        const crashTop = this.plane.isTop();

        if (crashFloor || crashTop) {
            this.gameOver();
        }
    }

    gameOver() {
        
        clearInterval(this.intervalId); 
        
        this.audio.play()
        
        this.ctx.font = "70px Arial";
        this.ctx.textAlign = "center";
        this.ctx.strokeStyle = "red";

        this.plane.animateDead();

        this.ctx.strokeText(
        "GAME OVER",
        this.ctx.canvas.width / 2,
        this.ctx.canvas.height / 2
    );
        
    }

}