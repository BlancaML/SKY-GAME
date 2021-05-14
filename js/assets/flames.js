
class Flame {
    constructor(ctx) {
     

      this.ctx = ctx;
      this.isVisible = true;
      this.x = 0;

      // this.dist = this.ctx.canvas.height - 500; //
      this.y = 600;
      
      this.w = this.ctx.canvas.width;
      this.h = 200;
      this.vy = -1;

      this.img = new Image();
      this.img.tick = 0;
      this.img.frames = 3;
      this.img.frameIndex = 0;
      this.img.src = './images/Enemies/flames.png';

      
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
    
      if (this.img.tick >= 10) {
        this.img.tick = 0;
        this.animate();

      } 


      this.ctx.drawImage(
        //this.ctx.drawImage( img, sx, sy, sw, sh, dx, dy, dw, dh); //
        this.img,
        this.img.frameIndex * this.img.width / this.img.frames,
        0,
        this.img.width / 3,
        this.img.height,
        this.x,
        this.y,
        this.w,
        this.h
      );
    }
  
    move() {
      this.y += this.vy;
      
      
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

  