class Game {

    constructor(canvasId) {
        this.intervalId = null;
        this.tick = 0;

        const canvas = document.getElementById(canvasId);
        this.ctx = canvas.getContext("2d");

        this.background = new Background(this.ctx);
        this.plane = new Plane (this.ctx);
        this.score = new Score(this.ctx);
        this.enemies = [
            new Enemy (this.ctx)
        ]; 
        this.audio = new Audio ('./audios/gameover.wav');
    }

    start() {
        console.log("entra metodo");
        this.intervalId = setInterval(() => {
            this.clear();
            this.move();
            this.draw();
            this.checkCollisions();
            this.updateScore();

        },1000 / 60);
    }

    updateScore() {
        this.score.value+= 1
    }

    onKeyEvent(event) {
        this.plane.onKeyEvent(event);
    }

    addEnemy() {
        const newEnemy = new Enemy(this.ctx)
        this.enemies.push(newEnemy)
    }


    clear() {
        this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    clearEnemies() {
        this.enemies = this.enemies.filter((enem) => {
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
        this.enemies.forEach(enem => enem.draw());
    }

    draw() {
        this.tick++;
        this.background.draw();
        this.plane.draw();
        this.score.draw();
        this.enemies.forEach(enem => enem.draw());
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
        this.ctx.strokeText(
        "GAME OVER",
        this.ctx.canvas.width / 2,
        this.ctx.canvas.height / 2
    );
        
    }

}