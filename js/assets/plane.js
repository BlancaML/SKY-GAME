class Plane {
    constructor (ctx) {
        this.ctx = ctx;
        
        this.x = 100;
        this.y = 10;

        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.ay = 0;
        this.ax = 0;
        this.g = 0.1;

        this.img = new Image()
        this.img.tick = 0;
        this.img.src = './images/Plane/plane.png';
        this.img.onload = () => {

            this.img.frames = 4;
            this.img.horizontalFrames = 4;
            this.img.horizontalFrameIndex = 0;

            this.img.verticalFrameIndex = 0;
            this.img.verticalFrames = 3;

            this.img.frameWidth = Math.floor(this.img.width / this.img.horizontalFrames);
            this.img.frameHeight = Math.floor(this.img.height / this.img.verticalFrames);

            this.img.width = this.img.frameWidth;
            this.img.height = this.img.frameHeight;

            this.w = this.img.width / 4;
            this.h = this.img.height / 4;

        };
        
        this.movements = {
            up: false,
            right: false,
            left: false,
            isShooting: false,
        }

        ///this.weapon = new Weapon(this) //
        

    }

    draw() {
        this.img.tick++;

        if (this.img.tick >= 4) {
            
            this.img.tick = 0;
            this.animate()
        }
        //this.ctx.drawImage( img, sx, sy, sw, sh, dx, dy, dw, dh); //
        console.log('entro')
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



                

            );

             /*this.ctx.drawImage(
                this.img,
                this.img.frameIndex * this.img.width / this.img.totalFrames,
                this.img.height / 3,
                this.img.width / 4,
                this.img.height / 3,
          
                this.x,
                this.y,
                this.w,
                this.h
              );*/
          

        //this.weapon.draw() //
    }

    animate() {
        if (this.movements.isShooting) {
            this.animateShooting();
        } else {
            this.animateFlying();
        }
        
    };


    animateFlying(){
        this.img.horizontalFrameIndex++;
        this.img.verticalFrameIndex = 0;
        if (this.img.horizontalFrameIndex >= 2){
            this.img.horizontalFrameIndex = 0;
        }
    }

    animateShooting(){
        this.img.horizontalFrameIndex++;
        this.img.verticalFrameIndex = 1;
        if (this.img.horizontalFrameIndex >= 4) {
            this.img.horizontalFrameIndex = 0;
        }


    }

   isFloor() {
        
        return this.y + this.h >= this.ctx.canvas.height;
        
    }

    isTop() {
       
        return this.y < 0;
    }

    move() {
        console.log(this.movements)
        if (this.movements.up) {
            this.ay = -0.2;
        } else {
            this.ay = 0;
        }

        if (this.movements.right) {
            this.ax = 0.2;
        } else if  (this.movements.left) {
            this.ax = -0.2;
        } else {
            this.ax = 0;
        }




        this.vy += this.ay;
        this.vy += this.g;
        this.vx += this.ax;
    
        this.y += this.vy;
        this.x += this.vx;

        //this.weapon.move() //
    }

    onKeyEvent(event) {
        const isPressed = event.type === "keydown";
        switch (event.keyCode) {
            case UP:
                this.movements.up = isPressed;
                break;
            case RIGHT: 
                this.movements.right = isPressed;
                console.log( "right?")
                break;
            case LEFT:
                this.movements.left = isPressed;
                console.log( "right?")
                break;
            case SPACE:
                this.movements.isShooting = isPressed;
                //this.weapon.shoot();//
                break;
              
        }
    
    }

    


}