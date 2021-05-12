
class Black {
    constructor(ctx) {
     

      this.ctx = ctx;
      this.isVisible = true;
      this.x = this.ctx.canvas.width - 10;

      this.dist = Math.random() * this.ctx.canvas.height + 70;
      this.y = Math.random() > 1 ? 0.2 - this.dist : this.dist;

      this.w = 50;
      this.h = 30;
      this.vx = -1;

      this.img = new Image();
      this.img.tick = 0;
      this.img.frames = 16;
      this.img.frameIndex = 0;
      this.img.src = './images/Enemies/blacks.png';

      
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
        this.img.width / 16,
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

  


