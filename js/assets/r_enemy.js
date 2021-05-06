
class Red {
    constructor(ctx) {
     

      this.ctx = ctx;
      this.isVisible = true;
      this.x = this.ctx.canvas.width - 10;

      this.dist = Math.random() * this.ctx.canvas.height + 50;
      this.y = Math.random() > 0.8 ? 0.1 - this.dist : this.dist;

      this.w = 30;
      this.h = 20;
      this.vx = -3;

      this.img = new Image();
      this.img.tick = 0;
      this.img.frames = 14;
      this.img.frameIndex = 0;
      this.img.src = './images/Enemies/reds.png';

      
    }

    collideWith(bullet) {
      const colX = (
        this.x + this.w >= bullet.x &&
        this.x <= bullet.x + bullet.w
      )

      const colY = (
        this.y + this.h >= bullet.y &&
        this.y <= bullet.y + bullet.h

      )

      return colY && colX
    }
  
    draw() {
      this.img.tick++;

      if (this.img.tick >= 1) {
        this.img.tick = 0;
        this.animate();
      } 
      

      this.ctx.drawImage(
        //this.ctx.drawImage( img, sx, sy, sw, sh, dx, dy, dw, dh); //
        this.img,
        this.img.frameIndex * this.img.width / this.img.frames,
        0,
        this.img.width / 14,
        this.img.height,
        this.x,
        this.y,
        this.w,
        this.h
      );
    }
  
    move() {
      this.x += this.vx;
      
    }
  
    isVisible() {
      return (
        this.y < this.ctx.canvas.height &&
        this.y > 0 - this.h
      );
    }

    animate() {
        this.img.frameIndex++;
        if (this.img.frameIndex >= this.img.frames) {
          this.img.frameIndex = 0
        }
      }
    
  }



