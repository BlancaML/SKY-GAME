class Bullet {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 10;
        this.y = 50;
        this.vx = 2;
       
    
        this.img = new Image()
        this.img.tick = 0;
        this.img.frames = 6;
        this.img.frameIndex = 0;
        this.img.src = './images/Bullet/plane_bullets.png';
       
    }
    
    draw() {
        
        this.animate(); 

        this.ctx.drawImage(
            this.img,
            0,
            this.img.frameIndex * this.img.width / this.img.frames,
            this.img.width / 6,
            this.img.height,
      
            this.x,
            this.y,
            this.w,
            this.h
          );
          console.log(this.ctx.drawImage)
    }
    
    move() {
        this.x += this.vx;
    }

    animate() {
        this.img.frameIndex++;
        if (this.img.frameIndex >= this.img.frames) {
            this.img.frameIndex = 0;
        }

    }
}