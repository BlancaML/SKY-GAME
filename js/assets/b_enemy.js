
class Black {
    constructor(ctx) {
     

      this.ctx = ctx;
      
      this.x = this.ctx.canvas.width - 10;

      this.dist = Math.random() * 100 + 80
      this.y = Math.random() > 1 ? 0.2 - this.dist : this.dist;

      this.w = 40;
      this.h = 50;
      this.vx = -1;



      
    }
  
    draw() {
      this.ctx.fillRect(
        this.x,
        this.y,
        this.w,
        this.h
      )
    }
  
    move() {
      this.x += this.vx;
      
    }
  
    isVisible() {
      return (
        this.y < this.ctx.canvas.height &&
        this.y > 0 - this.h
      )
    }
  }




/*const enemyTypes = [];
const enemy1 = new Image();
enemy1.src = './images/Enemies/b_bullets.png';
enemyTypes.push(enemy1);*/


/*class Black {
    constructor (ctx) {
        this.ctx = ctx; 

        
        this.y = this.ctx.canvas.height;
        this.dist = Math.random() * 100 + 300;
        this.x = Math.random() > 0.5 ? 0 - this.dist : this.dist;

        this.w = Math.random() * 40 + 50
        this.h = this.ctx.canvas.height
        this.vx = -3


        this.img = new Image()
        this.tick = 0;
        this.img.src = './images/Enemies/b_bullets.png';
        this.img.onload = () => {

            this.img.frames = 16;
            this.img.horizontalFrames = 8;
            this.img.horizontalFrameIndex = 0;

            this.img.verticalFrameIndex = 0;
            this.img.verticalFrames = 8;

            this.img.frameWidth = Math.floor(this.img.width / this.img.horizontalFrames);
            this.img.frameHeight = Math.floor(this.img.height / this.img.verticalFrames);

            this.img.width = this.img.frameWidth;
            this.img.height = this.img.frameHeight;

            this.w = this.img.width / 8;
            this.h = this.img.height / 8;

        }

    }

    animate() {
        this.img.horizontalFrameIndex++;
        this.img.verticalFrameIndex = 0; 
        if (this.img.horizontalFrameIndex >= 8) {
            this.img.horizontalFrameIndex = 0;
        }
    }
    

    draw() {
        //this.ctx.drawImage( img, sx, sy, sw, sh, dx, dy, dw, dh); //
        this.ctx.drawImage(
            this.img,
            this.img.frameWidth * this.img.horizontalFrameIndex,
            this.img.frameHeight * this.img.verticalFrameIndex,
            this.img.frameWidth,
            this.img.frameHeight,

            this.x,
            this.y,
            this.w,
            this.h
        
            )
    }

    isVisible(){
        return (
            this.x < this.ctx.canvas.width &&
            this.x > 0 - this.w
        )
    }
}*/