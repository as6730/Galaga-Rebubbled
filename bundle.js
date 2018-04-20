/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bubbles_bubbleFive_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bubbles_bubbleFour_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bubbles_bubbleThree_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__levels_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__laser_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__spaceship_js__ = __webpack_require__(9);









let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// characters
let initialBubbleHeight = 100;
let laser = null;
let character = new __WEBPACK_IMPORTED_MODULE_7__spaceship_js__["a" /* default */](canvas);
let score = 0;
let lives = 3;
let isGamePaused = true;

// user controllers
let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.keyCode == 39) {
      rightPressed = true;
  }
  else if (e.keyCode == 37) {
      leftPressed = true;
  }
  else if (e.keyCode == 32) {
    if (isGamePaused === true) {
      character = new __WEBPACK_IMPORTED_MODULE_7__spaceship_js__["a" /* default */](canvas);
      isGamePaused = false;
      bubbles = Object(__WEBPACK_IMPORTED_MODULE_5__levels_js__["a" /* default */])()[level]
      document.getElementById("instructions").remove();
    } else if (laser === null) {
      laser = new __WEBPACK_IMPORTED_MODULE_6__laser_js__["a" /* default */](character.currX + (character.width / 2), canvas.height);
    }
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  }
  else if (e.keyCode == 37) {
    leftPressed = false;
  }
}

// score
function drawScore(ctx) {
  ctx.font = '20px courier';
  ctx.fillStyle= '#17ffd3';
  ctx.shadowBlur = 15;
  ctx.shadowColor = '#17ffd3';
  ctx.strokeStyle= '#17ffd3';
  ctx.lineWidth = 1;
  ctx.fillText(`Score: ${score}`, 8, 20);
}

// lives
function drawLives(ctx) {
  ctx.font = '20px courier';
  ctx.fillStyle= '#17ffd3';
  ctx.shadowBlur = 15;
  ctx.shadowColor = '#17ffd3';
  ctx.strokeStyle= '#17ffd3';
  ctx.lineWidth = 1;
  ctx.fillText(`Lives: ${lives}`, 8, 40);
}

// game over
function drawGameOver(ctx) {
  ctx.font = '20px courier';
  ctx.fillStyle = '#FFFAFA';
  ctx.shadowBlur = 20;
  ctx.shadowColor = '#FFFAFA';
  ctx.lineWidth = 1;
  ctx.fillText(`Game over. Your final score was: ${score}`, canvas.width / 2 - 200, canvas.height / 2);
}

// level fail
function drawLevelFail(ctx) {
  ctx.font = '35px courier';
  ctx.fillStyle = '#FFD700';
  ctx.shadowBlur = 20;
  ctx.shadowColor = '#FFD700';
  ctx.lineWidth = 1;
  ctx.fillText(`Retry`, canvas.width / 2 - 45, canvas.height / 2);
}

// next level
function drawLevel(ctx) {
  ctx.font = '20px courier';
  ctx.fillStyle = '#17ffd3';
  ctx.shadowBlur = 20;
  ctx.shadowColor = '#17ffd3';
  ctx.lineWidth = 1;
  ctx.fillText(`Level ${level}`, canvas.width - 90, 20);
}

let level = 0;
let bubbles = Object(__WEBPACK_IMPORTED_MODULE_5__levels_js__["a" /* default */])()[level];
// level arrays
function loadNextLevelIfFinished(ctx) {
  if (bubbles.length === 0) {
    level += 1;
    bubbles = Object(__WEBPACK_IMPORTED_MODULE_5__levels_js__["a" /* default */])()[level];
  }
}

function draw() {
  if (!isGamePaused) {
    if (rightPressed && character.currX < canvas.width - character.width) {
      character.moveToNextPos(ctx, 1.25);
    }
    else if (leftPressed && character.currX > 0) {
      character.moveToNextPos(ctx, -1.25);
    }

    // check bubble collision with character
    let gameOver = false;
    if (bubbles.length > 0) {
      bubbles.forEach(bubble => {
        if (character.checkCollisionWithBubble(bubble)) {
          gameOver = true;
        }
      });
    }

    if (gameOver) {
      isGamePaused = true;
      if (lives === 0) {
        drawGameOver(ctx);
        level = 0;
        lives = 3;
      } else {
        drawLevelFail(ctx);
        lives--;
      }

      laser = null;
      bubbles = [];
      return;
    } else {
      loadNextLevelIfFinished(ctx);
    }

    // check bubble collision with laser
    if (laser !== null) {
      // newBubbles are the bubbles that did not experience a collision
      let newBubbles = bubbles.filter(bubble => !bubble.checkCollision(laser.currX, laser.currY));
      // Check for a collision
      if (newBubbles.length < bubbles.length) {
        // find the collision bubble
        let collidedBubble = bubbles.filter(bubble => bubble.checkCollision(laser.currX, laser.currY))[0];
        bubbles = newBubbles;
        if (collidedBubble instanceof __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__["a" /* default */]) {
          score += 2;
        }
        else if (collidedBubble instanceof __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */]) {
          bubbles.push(new __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__["a" /* default */](collidedBubble.currX, collidedBubble.currY, 0.8, -1.5));
          bubbles.push(new __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__["a" /* default */](collidedBubble.currX, collidedBubble.currY, -0.8, -1.5));
          score += 5;
        }
        else if (collidedBubble instanceof __WEBPACK_IMPORTED_MODULE_2__bubbles_bubbleThree_js__["a" /* default */]) {
          bubbles.push(new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](collidedBubble.currX, collidedBubble.currY, 0.35, -1.5));
          bubbles.push(new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](collidedBubble.currX, collidedBubble.currY, -0.35, -1.5));
          score += 7;
        }
        else if (collidedBubble instanceof __WEBPACK_IMPORTED_MODULE_1__bubbles_bubbleFour_js__["a" /* default */]) {
          bubbles.push(new __WEBPACK_IMPORTED_MODULE_2__bubbles_bubbleThree_js__["a" /* default */](collidedBubble.currX, collidedBubble.currY, 0.35, -1.5));
          bubbles.push(new __WEBPACK_IMPORTED_MODULE_2__bubbles_bubbleThree_js__["a" /* default */](collidedBubble.currX, collidedBubble.currY, -0.35, -1.5));
          score += 7;
        }
        else if (collidedBubble instanceof __WEBPACK_IMPORTED_MODULE_0__bubbles_bubbleFive_js__["a" /* default */]) {
          bubbles.push(new __WEBPACK_IMPORTED_MODULE_1__bubbles_bubbleFour_js__["a" /* default */](collidedBubble.currX, collidedBubble.currY, 0.35, -1.5));
          bubbles.push(new __WEBPACK_IMPORTED_MODULE_1__bubbles_bubbleFour_js__["a" /* default */](collidedBubble.currX, collidedBubble.currY, -0.35, -1.5));
          score += 9;
        }
        // remove the laser
        laser = null;
      }
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bubbles.map(bubble => bubble.moveToNextPos(ctx, canvas));
    if (laser !== null) {
      if (laser.isInBounds()) {
        laser.moveToNextPos(ctx, canvas);
      }
      else {
        laser = null;
      }
    }

    character.drawSpaceship(ctx);
    drawScore(ctx);
    drawLives(ctx);
    drawLevel(ctx);
  }
}

setInterval(draw, 5);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Laser {
  constructor(currX, currY) {
    this.radius = 5;
    this.color = '#FFD700';
    this.currY = currY;
    this.currDY = 3;
    this.currX = currX;
    this.initialX = currX;
    this.initialY = currY;
  }

  drawLaser(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.initialX, this.initialY);
    ctx.lineTo(this.currX, this.currY);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 2;
    ctx.shadowColor = '#DAA520';
    ctx.shadowBlur = 2;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.closePath();
  }

  moveToNextPos(ctx, canvas) {
    this.currY -= this.currDY;
    this.drawLaser(ctx);
  }

  isInBounds() {
    return this.currY > 10;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Laser);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Bubble {
  constructor(radius, initialVelocityY, accelarationFactor, currX, currY, currDX, currDY, color) {
    this.radius = radius;
    this.initialVelocityY = initialVelocityY;
    this.accelarationFactor = accelarationFactor;
    this.currX = currX;
    this.currY = currY;
    this.currDX = currDX;
    this.currDY = currDY;
    this.color = color;
  }

  drawBubble(ctx) {
    ctx.beginPath();
    ctx.arc(this.currX, this.currY, this.radius, 0, Math.PI*2);
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#17ffd3';
    ctx.fill();
    ctx.closePath();
  }

  moveToNextPos(ctx, canvas) {
    this.currDY += this.accelarationFactor;

    if (this.currX + this.currDX > canvas.width - this.radius || this.currX + this.currDX < this.radius) {
      this.currDX = -this.currDX;
    }

    if (this.currY + this.currDY > canvas.height - this.radius || this.currY + this.currDY < this.radius) {
      if (this.currDY > 0) {
        this.currDY = -this.initialVelocityY;
      } else {
        this.currDY = this.initialVelocityY;
      }
    }

    this.currX += this.currDX;
    this.currY += this.currDY;

    this.drawBubble(ctx);
  }

  distanceBetween(x1, y1, x2, y2) {
    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);

    return Math.sqrt(a * a + b * b);
  }

  checkHorizontalCollision(x, y) {
    // check that the line's height is greater than (remember the axis
    // are inversed) the center of the bubble height
    // check if the line's horizontal distance from the bubble's center is
    // less than the radius

    return (Math.abs(x - this.currX) < this.radius) && (y < this.currY);
  }

  checkEdgeCollision(x, y) {
    return this.distanceBetween(x, y, this.currX, this.currY) < this.radius;
  }

  checkCollision(x, y) {
    return  this.checkEdgeCollision(x, y) || this.checkHorizontalCollision(x, y);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Bubble);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bubble__ = __webpack_require__(2);


class BubbleFive extends __WEBPACK_IMPORTED_MODULE_0__bubble__["a" /* default */] {
  constructor(currX, currY, currDX = 0.3, currDY = 0) {
    super(50, 3.9, 0.02, currX, currY, currDX, currDY, "teal");
  }
};

/* harmony default export */ __webpack_exports__["a"] = (BubbleFive);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bubble__ = __webpack_require__(2);


class BubbleFour extends __WEBPACK_IMPORTED_MODULE_0__bubble__["a" /* default */] {
  constructor(currX, currY, currDX = 0.3, currDY = 0) {
    super(45, 3.7, 0.02, currX, currY, currDX, currDY, "pink");
  }
};

/* harmony default export */ __webpack_exports__["a"] = (BubbleFour);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bubble__ = __webpack_require__(2);


class BubbleThree extends __WEBPACK_IMPORTED_MODULE_0__bubble__["a" /* default */] {
  constructor(currX, currY, currDX = 0.3, currDY = 0) {
    super(30, 3.5, 0.02, currX, currY, currDX, currDY, "green");
  }
};

/* harmony default export */ __webpack_exports__["a"] = (BubbleThree);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bubble__ = __webpack_require__(2);


class BubbleTwo extends __WEBPACK_IMPORTED_MODULE_0__bubble__["a" /* default */] {
  constructor(currX, currY, currDX = 0.35, currDY = 0) {
    super(20, 3, 0.02, currX, currY, currDX, currDY, "red");
  }
};

/* harmony default export */ __webpack_exports__["a"] = (BubbleTwo);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bubble__ = __webpack_require__(2);


class BubbleOne extends __WEBPACK_IMPORTED_MODULE_0__bubble__["a" /* default */] {
  constructor(currX, currY, currDX = 0.8, currDY = 0) {
    super(5, 2.0, 0.02, currX, currY, currDX, currDY, "yellow");
  }
};

/* harmony default export */ __webpack_exports__["a"] = (BubbleOne);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getAllLevels;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bubbles_bubbleFive_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bubbles_bubbleFour_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bubbles_bubbleThree_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__ = __webpack_require__(7);






let levelOne = [
              new __WEBPACK_IMPORTED_MODULE_2__bubbles_bubbleThree_js__["a" /* default */](canvas.width/2 + 100, canvas.height - 130, 0),
              new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](canvas.width/2 - 180, canvas.height - 30 - 70, 0),
              new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](canvas.width/2 + 180, canvas.height - 30 - 70, 0)
              ];

let levelTwo = [
              new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](canvas.width/2 - 180, canvas.height - 70 - 100,  -0.5),
              new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](canvas.width/2 - 130, canvas.height - 70 - 100, -0.5),
              new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](canvas.width/2 - 80, canvas.height - 70 - 100, -0.5),
              new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](canvas.width/2 + 80, canvas.height - 70 - 100, 0.5),
              new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](canvas.width/2 + 130, canvas.height - 70 - 100, 0.5),
              new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](canvas.width/2 + 180, canvas.height - 70 - 100, 0.5)
              ];

let levelThree = [
              new __WEBPACK_IMPORTED_MODULE_1__bubbles_bubbleFour_js__["a" /* default */](canvas.width/2 - 180, canvas.height - 70 - 100, -1),
              new __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__["a" /* default */](canvas.width/2 - 300, canvas.height - 160, 0.5),
              new __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__["a" /* default */](canvas.width/2 - 260, canvas.height - 160, 0.5),
              new __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__["a" /* default */](canvas.width/2 + 260, canvas.height - 160, -0.7),
              ];

let levelFour = [
              new __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__["a" /* default */](canvas.width/2 - 300, canvas.height - 160, 0.1),
              new __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__["a" /* default */](canvas.width/2 - 260, canvas.height - 160, 0.1),
              new __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__["a" /* default */](canvas.width/2 - 220, canvas.height - 160, 0.1),
              new __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__["a" /* default */](canvas.width/2 + 220, canvas.height - 160, -0.1),
              new __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__["a" /* default */](canvas.width/2 + 260, canvas.height - 160, -0.1),
              new __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__["a" /* default */](canvas.width/2 + 300, canvas.height - 160, -0.1),
              new __WEBPACK_IMPORTED_MODULE_2__bubbles_bubbleThree_js__["a" /* default */](canvas.width/2 + 100, canvas.height - 200, 1),
              new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](canvas.width/2 - 130, canvas.height - 160, -0.5),
              ];

let levelFive = [
              new __WEBPACK_IMPORTED_MODULE_1__bubbles_bubbleFour_js__["a" /* default */](canvas.width/2 - 180, canvas.height - 70 - 100, -0.5),
              new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](canvas.width/2 - 80, canvas.height - 70 - 100,-0.1),
              new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](canvas.width/2 + 80, canvas.height - 70 - 100, 0.5),
              new __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__["a" /* default */](canvas.width/2 + 260, canvas.height - 160, -0.5),
              new __WEBPACK_IMPORTED_MODULE_2__bubbles_bubbleThree_js__["a" /* default */](canvas.width/2 + 100, canvas.height - 130, 0),
              ];

function getAllLevels() {
  return [
    [
      new __WEBPACK_IMPORTED_MODULE_2__bubbles_bubbleThree_js__["a" /* default */](canvas.width/2 + 100, canvas.height - 130, 0),
      new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](canvas.width/2 - 180, canvas.height - 30 - 70, 0),
      new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](canvas.width/2 + 180, canvas.height - 30 - 70, 0)
    ], [
      new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](canvas.width/2 - 180, canvas.height - 70 - 100,  -0.5),
      new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](canvas.width/2 - 130, canvas.height - 70 - 100, -0.5),
      new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](canvas.width/2 - 80, canvas.height - 70 - 100, -0.5),
      new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](canvas.width/2 + 80, canvas.height - 70 - 100, 0.5),
      new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](canvas.width/2 + 130, canvas.height - 70 - 100, 0.5),
      new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](canvas.width/2 + 180, canvas.height - 70 - 100, 0.5)
    ], [
      new __WEBPACK_IMPORTED_MODULE_1__bubbles_bubbleFour_js__["a" /* default */](canvas.width/2 - 180, canvas.height - 70 - 100, -1),
      new __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__["a" /* default */](canvas.width/2 - 300, canvas.height - 160, 0.5),
      new __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__["a" /* default */](canvas.width/2 - 260, canvas.height - 160, 0.5),
      new __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__["a" /* default */](canvas.width/2 + 260, canvas.height - 160, -0.7),
    ],[
      new __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__["a" /* default */](canvas.width/2 - 300, canvas.height - 160, 0.1),
      new __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__["a" /* default */](canvas.width/2 - 260, canvas.height - 160, 0.1),
      new __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__["a" /* default */](canvas.width/2 - 220, canvas.height - 160, 0.1),
      new __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__["a" /* default */](canvas.width/2 + 220, canvas.height - 160, -0.1),
      new __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__["a" /* default */](canvas.width/2 + 260, canvas.height - 160, -0.1),
      new __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__["a" /* default */](canvas.width/2 + 300, canvas.height - 160, -0.1),
      new __WEBPACK_IMPORTED_MODULE_2__bubbles_bubbleThree_js__["a" /* default */](canvas.width/2 + 100, canvas.height - 200, 1),
      new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](canvas.width/2 - 130, canvas.height - 160, -0.5),
    ], [
      new __WEBPACK_IMPORTED_MODULE_1__bubbles_bubbleFour_js__["a" /* default */](canvas.width/2 - 180, canvas.height - 70 - 100, -0.5),
      new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](canvas.width/2 - 80, canvas.height - 70 - 100,-0.1),
      new __WEBPACK_IMPORTED_MODULE_3__bubbles_bubbleTwo_js__["a" /* default */](canvas.width/2 + 80, canvas.height - 70 - 100, 0.5),
      new __WEBPACK_IMPORTED_MODULE_4__bubbles_bubbleOne_js__["a" /* default */](canvas.width/2 + 260, canvas.height - 160, -0.5),
      new __WEBPACK_IMPORTED_MODULE_2__bubbles_bubbleThree_js__["a" /* default */](canvas.width/2 + 100, canvas.height - 130, 0),
    ]
  ];
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class spaceship {
  // height: 30, width: 24;
  constructor(canvas) {
    this.extraLives = 3;
    this.height = 38;
    this.width = 42;
    this.currX = (canvas.width - this.width) / 2;
    this.currY = canvas.height - this.height;
    this.img = new Image();
    this.img.src = "/Users/alexandrasavramis/Desktop/bubble_trouble_rebubbled/assets/spaceship.png";
  }

  drawSpaceship(ctx) {
    ctx.shadowBlur = 0;
    ctx.drawImage(this.img, this.currX, this.currY, this.width, this.height);
  }


  moveToNextPos(ctx, dx) {
    this.currX += dx;
    this.drawSpaceship(ctx);
  }

  checkCollisionWithBubble(bubble) {
    // check for top collision
    for (let x = this.currX; x < this.currX + this.width; x++) {
      if (bubble.checkEdgeCollision(x, this.currY)) {
        return true;
      }
    }

    // check for side collision
    for (let y = this.currY; y < this.currY + this.height; y++) {
      if (bubble.checkEdgeCollision(this.currX, y) || bubble.checkEdgeCollision(this.currX + this.width, y)) {
        return true;
      }
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (spaceship);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map