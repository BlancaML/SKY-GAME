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

        this.reds = [
            new Red (this.ctx)
        ]; 
        this.audio = new Audio ('./audios/gameover.wav');
        this.finish = new Finish(this.ctx);
    }

    start() {
        this.intervalId = setInterval(() => {
            this.tick++;
            this.clear();
            this.move();
            this.draw();
            this.checkCollisions();
            this.updateScore();

            if (this.tick === 300) {
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
        const newBlack = new Black (this.ctx)
        this.blacks.push(newBlack)

        const newRed = new Red (this.ctx)
        this.reds.push(newRed)
    }


    clear() {
        this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    clearEnemies() {
        this.blacks = this.blacks.filter((enem) => {
            if (enem.isVisible()) {
                return true;
            } else {
                this.updateScore();
            }
        })

        this.reds = this.reds.filter((enem) => {
            if (enem.isVisible()) {
                return true;
            } else {
                this.updateScore();
            }
        })
    }

    move() {
        this.background.move();
        this.plane.move();
        

        this.blacks.forEach(enem => enem.move());
        this.reds.forEach(enem => enem.move());
        

       
    }

    draw() {
        this.tick++;
        this.background.draw();
        this.plane.draw();
        this.score.draw();

    

        this.blacks.forEach(enem => enem.draw());
        this.reds.forEach(enem => enem.draw());

    }

    

    checkCollisions() {

        const collisionBlacks = this.blacks.some( enem => {
            const colX = (
                this.plane.x + this.plane.w >= enem.x &&
                this.plane.x <= enem.x + enem.w
            )

            const colY = (
                this.plane.y + this.plane.h >= enem.y &&
                this.plane.y <= enem.y + enem.h
            )

            return colX && colY;
        })

        const collisionReds = this.reds.some( enem => {
            const colX = (
                this.plane.x + this.plane.w >= enem.x &&
                this.plane.x <= enem.x + enem.w
            )

            const colY = (
                this.plane.y + this.plane.h >= enem.y &&
                this.plane.y <= enem.y + enem.h
            )

            return colX && colY;
        })

        const crashFloor = this.plane.isFloor();
        const crashTop = this.plane.isTop();

        if (collisionBlacks || collisionReds || crashFloor || crashTop) {
            this.gameOver();
        }
    }

    gameOver() {
        this.finish.draw();
        // this.finish.animate(); //

        this.plane.animateDead();
        clearInterval(this.intervalId); 
        
        this.audio.play()
        
        
        
    }

}