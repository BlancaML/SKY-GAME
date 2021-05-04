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
        this.isDead = false;


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
        this.fireballs = [];

    }

    shoot() {
        console.log("shooting?")
        const fireball = new Bullet(this.ctx);
        if (this.movements.isShooting) {
            this.fireballs.push(fireball);
        }
        
    }

    draw() {
        this.img.tick++;

        if (this.img.tick >= 4) {
            
            this.img.tick = 0;
            this.animate()
        }
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

            );

            this.fireballs.forEach(f => f.draw());
        
    }

    animate() {
        if (!this.movements.isShooting) {
            this.animateFlying();
        } else if (this.movements.isShooting) {
            this.animateShooting();
        } else {
            this.animateDead();
        }
      
    }
               

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


    animateDead() {
        this.img.horizontalFrameIndex= 0;
        this.img.verticalFrameIndex = 2;
        }
        

   isFloor() {
        
        return this.y + this.h >= this.ctx.canvas.height;
        
    }

    isTop() {
        
        return this.y < 0;
    }

    move() {
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

       
    }

    onKeyEvent(event) {
        const isPressed = event.type === "keydown";
        switch (event.keyCode) {
            case UP:
                this.movements.up = isPressed;
                break;
            case RIGHT: 
                this.movements.right = isPressed;
                break;
            case LEFT:
                this.movements.left = isPressed;
                break;
            case SPACE:
                this.movements.isShooting = isPressed;
                this.shoot();
                break;
              
        }
    
    }

    


}