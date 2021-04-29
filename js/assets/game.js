class Game {

    constructor(canvasId) {
        this.intervalId = null;

        const canvas = document.getElementById(canvasId);
        this.ctx = canvas.getContext("2d");

        this.background = new Background(this.ctx);
    }

    start() {
        console.log("entra metodo");
        this.intervalId = setInterval(() => {
            this.clear();
            this.move();
            this.draw();

        },1000 / 60);
    }

    onKeyEvent(event) {
        this.plane.onKeyEvent(event);
    }

    clear() {
        this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    move() {
        console.log("entra move");
        this.background.move();
    }

    draw() {
        this.background.draw();
    }


}