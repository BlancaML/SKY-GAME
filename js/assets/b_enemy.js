/*const enemyTypes = [];
const enemy1 = new Image();
enemy1.src = './images/Enemies/b_bullets.png';
enemyTypes.push(enemy1);*/


class Enemy {
    constructor (ctx) {
        this.ctx = ctx; 

        this.x = 100;
        this.y = 10;


        this.img = new Image()
        this.tick = 0;
        this.img.src = './images/Enemies/b_bullets.png';

        this.img.frames = 16;
        this.img.frameIndex = 0;
        

        this.img.frameIndexY= 0;
        this.img.framesY= 2;

        this.img.frameIndexX= 0; 
        this.img.framesX= 8;
    }

    /*animate() {
        this.x -= this.vx;
        if (this.img.frameIndex < this.img.frames) this.img.frames++; 
        else this.img.frameIndex = this.img.frames;
    }*/

    draw() {
        //this.ctx.drawImage( img, sx, sy, sw, sh, dx, dy, dw, dh); //
        this.ctx.drawImage(
            this.img,
            this.img.frameIndexX * this.img.width / this.img.framesX,
            this.img.frameIndexY * this.img.height / this.img.framesY,
            this.img.width / this.img.framesX,
            this.img.height / this.img.framesY,
    
            this.x,
            this.y,
            this.w,
            this.h,
        
            )
    }

    /*isVisible(){
        return (
            this.x < this.canvas.width && this.x > 0 - this.w
        )
    }*/
}