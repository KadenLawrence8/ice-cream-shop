const tickRate = 1000 / 30; // 30 FPS
let clickStrength = 1;
let score = 100;

let machine = new Building('Machine', 0.1, 15);
let shop = new Building('Shop', 1, 100);
let flavor = new Building('Flavor', 5, 250)
let sprinkles = new Building('Sprinkles', 20, 1000)
let cashier = new Building('Cashier', 100, 5000)
let chocolate = new Building('Chocolate', 250, 15000)
let whippedcream = new Building('Whipped cream', 1000, 80000)
let milkshake = new Building('Milk shake', 2500, 150000 )
let softServe1 = new SoftServe('Soft Serve I', 100, machine);
let workers = new Workers('Workers I', 250, shop);



function scorePlusPlus() {
    score += clickStrength;
}

function incScore() {
    score += machine.cps;
    score += shop.cps;
    score += flavor.cps
    score += sprinkles.cps
    score += cashier.cps
    score += chocolate.cps
    score += whippedcream.cps
    score += milkshake.cps
}

function updateButtons() {
    machine.buttonState();
    shop.buttonState();
    softServe1.buttonState();
    workers.buttonState();
    flavor.buttonState();
    sprinkles.buttonState();
    cashier.buttonState();
    chocolate.buttonState();
    whippedcream.buttonState();
    milkshake.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);