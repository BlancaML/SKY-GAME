class Bullet {
    constructor(ctx, x, y) {
        this.ctx = ctx;

        this.x = x;
        this.y = y; 
        this.w = 30;
        this.h = 30;
        this.g = 0.05;
        this.gv = 0;

        this.vx = 10;
        this.vy = 0;
       
    
        this.img = new Image()
        this.img.tick = 0;
        this.img.frames = 6;
        this.img.frameIndex = 0;
        this.img.src = './images/Bullet/plane_bullets.png';
       
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