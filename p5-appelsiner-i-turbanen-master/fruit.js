//fruit-class to create new oranges with more speed//


class fruit {
    /* Den første del er en "konstruktør".
     * Den tager parametrene og konstruerer et nyt objekt 
     * ud fra dem. Værdierne huskes som hørende til netop 
     * dette objekt ved hjælp af nøgleordet this
     */
    constructor(x, y, radius, speed, ys, xs, c) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.yspeed = ys;
        this.xspeed = xs;
        this.col = c;
    }


    display = function () {
        fill(this.col)
        ellipse(this.x, this.y, this.r * 2, this.r * 2)
    }

    move = function () {


    }

    checkScore = function () {


    }


    shootNew = function {
        //Her skal vi sørge for at en ny appelsin skydes afsted 
        this.x = this.r;
        y = 550;
        this.ys = newspeed;
        this.xs = random(4);
        tid = random(400);

    }
}