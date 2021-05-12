class Finish {

     constructor(ctx) {
         this.ctx = ctx;
         

         this.x = this.ctx.canvas.width - 440;
         this.y = this.ctx.canvas.height - 370;

         this.w = 190,
         this.h = 190,


         this.img = new Image();
         this.tick = 0;
         this.img.frames = 1;
         this.img.frameIndex = 0;
         this.img.src = './images/gameover.png';

     }

     draw() {
        

        this.ctx.drawImage(
            //this.ctx.drawImage( img, sx, sy, sw, sh, dx, dy, dw, dh); //
            this.img,
            0,
            this.img.frameIndex * this.img.height / this.img.frames,
            this.img.width,
            this.img.height,
            this.x,
            this.y,
            this.w,
            this.h
          );


     }

    
}