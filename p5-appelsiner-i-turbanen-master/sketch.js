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
    // Nedenunder er koden for den knap der skal genstarte spillet. når man taber.
    // Den fungerer ved at skabe en knap, der ved et tryk genstarter spillet. Hide og show bliver brugt til at fortælle hvornår knappen skal vises på skærmen
    button = createButton("genstart spil");
    button.position (width/2 -35, height/2 +100);
    button.mousePressed(restart);
    button.hide();

    //orange = new fruit(20, 550, 20, 4, 10, [220, 110, 0])
    
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
        //orange.display();
        fill(col);
        ellipse(x, y, rad * 2, rad * 2);
    }

    // Her vises turbanen - foreløbig blot en firkant
    turban.tegn();
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

/*
OPGAVER
 Opgave 1 - undersøg hvad variablerne  grav  og  tid  bruges til, og hvor.
            Skriv det i kommentarer, prøv at se hvad der sker, når
            I laver dem om. 
            - Grav ændre tyngdekraften og påvirker hvor hurtigt objektet falder ned igen. 
            - Tid fortæller hvornår spillet går igang efter man har åbnet siden. Har umiddelbart ingen påvirkning på tiden mellem boldene.

 Opgave 2 - lav programmet om så det er tilfældigt hvor højt oppe 
            på venstre kan appelsinerne starter. Overvej om man kan 
            sikre, at appelsinen ikke ryger ud af skærmens top men 
            stadig har en "pæn" bane.
            //y = random(500);

 Opgave 3 - ret programmet til, så det også angives hvor mange 
            appelsiner man IKKE greb med turbanen

 Opgave 4 - Undersøg hvad scriptet  kurv.js  er og gør, og forklar 
            lidt mere detaljeret end det er gjort nu hvad sammenhængen 
            mellem dette script og turbanen i  sketch.js  er. 
            Skriv det som kommentarer i toppen af  kurv.js
            Prøv jer frem med forskellige løsninger for hvor hurtigt 
            turbanen skal rykke. 

 Opgave 5 - Find et billede af en turban og sæt det ind i stedet 
            for firkanten. Find eventuelt også en lyd, der kan afspilles, 
            når appelsinen gribes. Se gerne i "p5 Reference" hvordan, 
            hvis ikke I kan huske det:   https://p5js.org/reference/
            
 Opgave 6 - Lav en Appelsin-klasse, lige som der er en Kurv-klasse. 
            Flyt koden til appelsinen ud i et selvstændigt script.
            Overvej hvad det skal hedde, og hvilke variabler og funktioner, 
            der skal lægges over i det nye script, herunder hvordan det 
            kommer til at berøre turbanen. Skriv jeres overvejelser i 
            kommentarerne

 Opgave 7 - Ret programmet til, så der kan være flere appelsiner i 
            luften på en gang, dvs. at der kan skydes en ny appelsin
            afsted før den foregående er forsvundet. Overvej hvordan 
            og hvor hurtigt de skal skydes af, for at det kan gøre spillet
            sjovere og mere udfordrende, og forklar jeres tanker
            i kommentarerne

 Opgave 8 - Ret programmet til, så det kan vindes og/eller tabes ved
            at man griber eller misser et antal appelsiner. Sørg for 
            at der vises en "Game Over"-skærm, som fortæller om man 
            vandt eller tabte, og som giver mulighed for at starte et
            nyt spil. Se evt. om I kan lave en løsning så turbanens
            bevægelseshastighed, skydetempoet med appelsinerne og andre
            ting kan justeres mens man spiller. Lav evt. programmet om, 
            så man kan flytte turbanen med musen


*/