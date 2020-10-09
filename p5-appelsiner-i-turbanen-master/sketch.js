/*
Først laver vi nogle variable til at lave en appelsin:
 - en kugle som vi vil skyde afsted og fange i en turban
*/

// Appelsinen
let x = 0;
let y = 550;
const rad = 20;
let xspeed = 4;
let yspeed = -10;
let newspeed;
const grav = 0.1;
const col = [220, 110, 0];

//Ens HP
let liv = 3;

// Turbanen
let turban;

let fruit;

//knap
let button;


// Øvrige
let tid = 100;
let score = 0;
// Variabel der bliver brugt til at skifte baggrundsfarve når bolden gribes
let bcol = [0, 0, 0];
/* 
 * 
 */
function setup() {
    createCanvas(750, 600);
    newspeed = yspeed;
    x = rad;
    // parametrene til konstruktøren er (x, y, bredde, dybde, speed)
    turban = new Kurv(670, 100, 70, 50, 10);
    newfruit = new Fruit(x, y, 20, -10, 4, 255);
    // Nedenunder er koden for den knap der skal genstarte spillet. når man taber.
    // Den fungerer ved at skabe en knap, der ved et tryk genstarter spillet. Hide og show bliver brugt til at fortælle hvornår knappen skal vises på skærmen
    button = createButton("genstart spil");
    button.position (width/2 -35, height/2 +100);
    button.mousePressed(restart);
    button.hide();

    
}
// Denne function skifter baggrundsfarven. Den bliver kaldt længere nede, så det passer med at baggrundsfarven skifter når bolden gribs
function backgroundcolor() {
    bcol = [random(255), random(255), random(255)];
}

function draw() {
    background(bcol);
    // Nedenuner er der et if-statement der fortæller hvad der skal ske, hvis ens liv er større end 0, og hvad der skal ske, hvis ens liv er mindre end 0
    if (liv > 0) {
    move();
    newfruit.moveball();
    checkScore();
    textAlign(LEFT);
    textSize(12);
    display();
    if (keyIsDown(UP_ARROW)) {
        turban.moveY(-5);
    }
    if (keyIsDown(DOWN_ARROW)) {
        turban.moveY(5);
    }
    if (keyIsDown(LEFT_ARROW)) {
        turban.moveX(-5);
    }
    if (keyIsDown(RIGHT_ARROW)) {
        turban.moveX(5);
    }
    } else {
        fill(255,0,0);
        textAlign(CENTER,CENTER);
        text ("Game over", width/2, height/2);
        text ("score = " + score, width/2, height /2 +50);
        textSize (40);
        button.show();
    }
    
}


function display() {
    fill(255);
    text("Score: " + score, width - 80, 30);
    text("health: " + liv, width - 80, 50);
    //Her skal vi sørge for at appelsinen bliver vist, hvis den skal vises
    if (tid > 0) {
        tid -= 1;
    }
    if (tid < 100) {
        fill(col);
        ellipse(x, y, rad * 2, rad * 2);
    }

    // Her vises turbanen - foreløbig blot en firkant
    turban.tegn();
    // her tegnes den nye frugtbold
    newfruit.tegnball();

}


function move() {
    //Her skal vi sørge for at appelsinen bevæger sig, hvis den er startet
    if (tid <= 0) {
        x += xspeed;
        y += yspeed;
        yspeed += grav;
    }
    if (x > width || y > height) {
        shootNew();
        liv -= 1;
        
    }

}

function checkScore() {
    // Her checkes om turbanen har fanget appelsinen. Hvis ja, skydes en ny appelsin afsted
    if (yspeed > 0) {
        if (turban.grebet(x, y, rad)) {
            score += 1;
            shootNew();
            //Her kaldes funktionen for at skifte baggrundsfarve    
            backgroundcolor();
        }
    }
}

function shootNew() {
     //Her skal vi sørge for at en ny appelsin skydes afsted 
     x = rad;
     y = 550;
     yspeed = newspeed;
     xspeed = random(4);
     tid = random(400);
}


function restart() {
    liv = 3;
    missed = 0;
    score = 0;
    spiligang = true;
    // Her bliver knappen som genstarter spillet vist.
    button.hide();
}



function keyPressed() {
    // Funktionen gør ingenting lige nu
    return false; // Forebygger evt. browser default behaviour
}
