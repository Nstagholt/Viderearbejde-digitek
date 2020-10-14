class Fruit {
    //class med frugt samt konstruktor nedenunder.
    constructor(x, y, radius, ys, xs, c) {
        this.x = x;
        this.y = y;
        this.sy = y;
        this.sx = x;
        this.syspeed = ys;
        this.sxspeed = xs;
        this.radius = radius;
        this.yspeed = ys;
        this.xspeed = xs;
        this.col = c;
        this.rad = 20;
        const grav = 0.3


    }

    // Her tegnes frugten
    tegnball = function () {
        ellipse(this.x, this.y, 45, 45);
    }



    moveball = function () {
        if (tid >= 0) {
            this.x += this.xspeed;
            this.y += this.yspeed;
            this.yspeed += grav;
        }
        if (this.x > width || this.y > height) {
            this.x = this.sx;
            this.y = this.sy;
            this.yspeed = this.syspeed;
            this.xspeed = this.sxspeed;
            liv -= 1;
        }
        if (this.yspeed >= 0 && turban.grebet(this.x, this.y, rad)) {
            this.x = this.sx;
            this.y = this.sy;
            this.yspeed = this.syspeed;
            this.xspeed = this.sxspeed;
                score += 1;
                //Her kaldes funktionen for at skifte baggrundsfarve    
                backgroundcolor();
        }
    }

}