class Score {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 30;
        this.y = 50;
        this.value = 0;

        this.img = new Image()
        this.img.src = './images/bonus.png';

        this.img.tick = 0;

        this.img.onload = () => {

            this.img.frames = 9;
            this.img.horizontalFrameIndex = 0;

            this.img.verticalFrameIndex = 0;
            this.img.verticalFrames = 1;

            this.img.frameWidth = Math.floor(this.img.width / this.img.horizontalFrames);
            this.img.frameHeight = Math.floor(this.img.height / this.img.verticalFrames);

            this.img.width = this.img.frameWidth;
            this.img.height = this.img.frameHeight;

            this.w = this.img.width / 9;
            this.h = this.img.height / 9;
        }
        

    }

    draw() {
        this.img.tick++;
        if(this.img.tick >= 9) {
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
        );


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

