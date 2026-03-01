const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

// canvas dimensions
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// fish dimensions relative to canvas dimensions
const fishWidth = canvasWidth * 0.1;
const fishHeight = canvasHeight * 0.05;

// starting vars
let x = canvasWidth * 0.1;
let baseY = canvasHeight * 0.3;
let y = baseY; 

let speed = 0.2;
let direction = 1; // 1 is right, -1 is left
let time = 0;
let swayAmplitude = canvasHeight * 0.03;
let swayFrequency = 0.005;


function update() {
    let verticalMvmt = baseY + Math.sin(time) * swayAmplitude;
    let horizontalMvmt = speed * direction;

    //horizontal mvmt
    x += horizontalMvmt;

    // vertical mvmt
    time += swayFrequency;
    y = verticalMvmt;

    // horizontal boundaries
    if (x + fishWidth > canvasWidth) {
        x = canvasWidth - fishWidth;
        direction = -1;
    }

    if (x <= 0) {
        x = 0;
        direction = 1;
    }
}

function draw() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.fillStyle = "pink";
    context.fillRect(x, y, fishWidth, fishHeight);
}

// game loop continuously plays the 'scene' displayed on screen so that there is animation
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();