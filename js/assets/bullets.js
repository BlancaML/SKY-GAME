class Bullet {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 100;
        this.y = 0;
        this.vx = 15;
       
        

        this.img = new Image()
        this.tick = 0;
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