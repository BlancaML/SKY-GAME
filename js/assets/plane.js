class Plane {
    constructor (ctx) {
        this.ctx = ctx;
        

        this.x = 100;
        this.y = 10;

        this.w = 150;
        this.h = 90;

        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.ay = 0;
        this.ax = 0;
        this.g = 0.1;

        this.img = new Image()
        this.tick = 0;
        this.img.src = './images/Plane/plane.png';
        this.img.frames = 4;
        this.img.frameIndex = 0;
        this.img.framesY= 3;
        this.img.frameIndexY= 0;
        this.img.frameIndexX= 0;
        this.img.framesX= 2;

        this.weapon = new Weapon(this) 
        
    }

    draw() {
    
        this.animate()
        this.ctx.drawImage(
        this.img,
        this.img.frameIndexX * this.img.width / this.img.framesX,
        this.img.frameIndexY * this.img.height / this.img.framesY,
        this.img.width / this.img.frames,
        this.img.height / this.img.framesY,

        this.x,
        this.y,
        this.w,
        this.h
        )

        this.weapon.draw() 
    }

    animate() {
        if (this.ay !== 0) {
            this.img.framesX++;
            if (this.img.frameIndexX >= this.img.framesX) {
                this.img.framesX = 0;
            }
        }
    }

   isFloor() {
        this.img.frames = 4;
        this.img.framesIndex = 0;
        this.img.framesY = 3;
        this.img.framesIndexY = 2;
        return this.y + this.h >= this.ctx.canvas.height;
        
    }

    isTop() {
        this.img.frames = 4;
        this.img.framesIndex = 0;
        this.img.framesY = 3;
        this.img.framesIndexY = 2;
        return this.y < 0;
    }

    move() {
        this.vy += this.ay;
        this.vy += this.g;
        this.vx += this.ax;

        this.y += this.vy;
        this.x += this.vx;

        this.weapon.move()
    }

    onKeyEvent(event) {
        if (event.type === "keydown") {
            switch (event.keyCode) {
                case UP:
                    this.ay = -0.2;
                    break;
                case RIGHT: 
                    this.ax = 0.2;
                    break;
                case LEFT:
                    this.ax = -0.2;
                    break;
                case SPACE:
                    this.weapon.shoot();
                    break;
                  
            }
        
        } else {
            switch (event.keyCode) {
                case UP:
                    this.ay = 0;
                    break;
                case RIGHT: 
                    this.ax = 0;
                    break;
                case LEFT:
                    this.ax = 0;
                    break;
            }
        }
    }

    


}