import Bubble from './bubble.js';

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let initialBubbleHeight = 100;
let smallBubble = new Bubble(
  10,
  2.3,
  0.03,
  canvas.width/2,
  canvas.height-30 -initialBubbleHeight,
  0.4,
  0,
  "#FFFF00",
);
let bigBubble = new Bubble(
  20,
  4.0,
  0.03,
  canvas.width/2 - 20,
  canvas.height-30 -initialBubbleHeight,
  0.4,
  0,
  "green",
);

let bubbles = [];

bubbles.push(smallBubble, bigBubble);

// character
let characterHeight = 30;
let characterWidth = 25;
let characterX = (canvas.width-characterWidth)/2;

// user controllers
let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

function drawCharacter() {
    ctx.beginPath();
    ctx.rect(characterX, canvas.height-characterHeight, characterWidth, characterHeight);
    ctx.fillStyle = "#FF4500";
    ctx.fill();
    ctx.closePath();
}

function draw() {
  if(rightPressed && characterX < canvas.width-characterWidth) {
      characterX += 1.25;
  }
  else if(leftPressed && characterX > 0) {
      characterX -= 1.25;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCharacter();
  // bubbles.map(x => x.moveToNextPos(ctx, canvas));
}


setInterval(draw, 3);
