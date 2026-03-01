const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

// starting coordinates
let x = 100;
let y = 200; 
let speed = 2;
let direction = 1; // 1 is right, -1 is left
let width = 50;

function update() {
    // update fish pos, hunger, hp
    // check collisions, breeding timers
    x += (speed * direction);

    if (x + width > canvas.width) {
        direction = -1;
    }

    if (x < 0) {
        direction = 1;
    }
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "pink";
    context.fillRect(x, y, 50, 30);
}

// game loop continuously plays the 'scene' displayed on screen so that there is animation
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();