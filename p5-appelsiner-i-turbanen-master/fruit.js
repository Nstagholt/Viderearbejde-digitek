
class fruit {   
    //class med frugt samt konstruktor nedenunder.
    constructor(x, y, radius, speed, ys, xs, c) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.yspeed = ys;
        this.xspeed = xs;
        this.col = c;
        const grav = 0.2
    
    // Her tegnes frugten
    }
    tegnball = function() {
        fill(this.col);
        ellipse(x, y, rad * 2, rad * 2);
    }

    moveball = function() {
        //Her skal vi sørge for at appelsinen bevæger sig, hvis den er startet
        x += this.xspeed;
        y += this.yspeed;
        yspeed += grav;
 }
}
