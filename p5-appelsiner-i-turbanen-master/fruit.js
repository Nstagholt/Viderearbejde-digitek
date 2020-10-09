
class Fruit {   
    //class med frugt samt konstruktor nedenunder.
    constructor(x, y, radius, ys, xs, c) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.yspeed = ys;
        this.xspeed = xs;
        this.col = c;
        const grav = 0.3
    
   
    }

     // Her tegnes frugten
    tegnball = function() {
        ellipse(this.x, this.y, 45, 45);
    }


    

    moveball = function() {
    if (tid <= 0) {
       this.x += this.xspeed;
       this.y += this.yspeed;
       this.yspeed += grav; 
     }
     if (x > width || y > height) {
        Shootnewball();
        liv -= 1;
 }
}
}

function Shootnewball() {
    this.x = this.radius;
    this.y = y;
}
