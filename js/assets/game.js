class Game {

    constructor(canvasId) {
        this.intervalId = null;

        const canvas = document.getElementById(canvasId);
        this.ctx = canvas.getContext("2d");

        this.background = new Background(this.ctx);
        this.plane = new Plane (this.ctx);
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
        this.background.move();
    }

    draw() {
        this.background.draw();
        this.plane.draw();
    }


}