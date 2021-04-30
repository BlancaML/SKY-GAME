class Finish {

     constructor(ctx) {
         this.ctx = ctx;
         this.tick = 0;

         this.x = 0;
         this.y = 0;

         this.w = this.ctx.canvas.width / 2,
         this.h = this.ctx.canvas.height / 2,



         this.vy = 0;

         this.img = new Image();
         this.img.src = './images/gameover.png';
         this.img.frames = 3;
         this.img.frameIndex = 0;

     }

     draw() {
         this.animate()
         this.ctx.drawImage(
             this.img,
             0,
             this.img.frameIndex * this.img.height / this.img.frames,
             this.img.width,
             this.img.heigth / 3,

             this.x,
             this.y,
             this.w,
             this.h
         )

     }

     animate() {
         return this.img.frameIndex++;
     }
}