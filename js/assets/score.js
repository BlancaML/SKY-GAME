class Score {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 30;
        this.y = 50;
        this.value = 0;

        this.img = new Image()
        this.img.src = './images/bonus.png';
        this.img.tick = 0;
        this.img.frames = 9;
        this.img.frameIndex = 0;

    }

    draw() {
        this.img.tick++;
        //console.log(this.img, "heart?"); //
        if(this.img.tick >= 10) {
            this.img.tick = 0;
            this.animate();
        }
        this.ctx.drawImage(
            this.img,
            this.img.frameIndex * this.img.width / this.img.frames,
            0,
            this.img.width / 9,
            this.img.height,
            this.x,
            this.y,
            this.w,
            this.h
        )


        this.ctx.font = "30px Arial";
        this.ctx.strokeStyle = "red";
        this.ctx.strokeText(`Score: ${this.value}!`, this.x, this.y);
    }
    
    animate() {
        if (this.img.frameIndex >= this.img.frames){
            this.img.frameIndex = 0;
        }

     }
}

