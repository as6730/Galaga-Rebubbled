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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
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

  checkCollison(x, y) {
    return  this.checkEdgeCollision(x, y) || this.checkHorizontalCollision(x, y);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Bubble);


/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bubble_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__laser_js__ = __webpack_require__(8);



let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let initialBubbleHeight = 100;
let smallBubble = new __WEBPACK_IMPORTED_MODULE_0__bubble_js__["a" /* default */](
  10,
  2.3,
  0.03,
  canvas.width/2,
  canvas.height - 30 - initialBubbleHeight,
  0.4,
  0,
  "#FFFF00",
);

let bigBubble = new __WEBPACK_IMPORTED_MODULE_0__bubble_js__["a" /* default */](
  20,
  4.0,
  0.03,
  canvas.width/2 - 20,
  canvas.height - 30 - initialBubbleHeight,
  0.4,
  0,
  "green",
);

let bubbles = [];

bubbles.push(smallBubble, bigBubble);

// character
let characterHeight = 30;
let characterWidth = 25;
let characterX = (canvas.width - characterWidth) / 2;

function drawCharacter() {
  ctx.beginPath();
  ctx.rect(characterX, canvas.height - characterHeight, characterWidth, characterHeight);
  ctx.fillStyle = "#FF4500";
  ctx.fill();
  ctx.closePath();
}

// user controllers
let rightPressed = false;
let leftPressed = false;
let spaceBarPressed = false;

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
    spaceBarPressed = true;
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

let laser = new __WEBPACK_IMPORTED_MODULE_1__laser_js__["a" /* default */]();

function draw() {
  if (rightPressed && characterX < canvas.width - characterWidth) {
    characterX += 1.25;
  }
  else if (leftPressed && characterX > 0) {
    characterX -= 1.25;
  }
  else if (spaceBarPressed) {
    console.log(spaceBarPressed);
    laser.shoot(ctx, canvas); // add character pos to know where to shoot from
    spaceBarPressed = false;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCharacter();
  // bubbles.map(x => x.moveToNextPos(ctx, canvas));
}


setInterval(draw, 3);


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Laser {
  constructor(currX, currY) {
    this.radius = 5;
    this.color = 'red';
    this.currY = currY;
    this.currDY = 1.5;
    this.currX = currX;
    this.initialX = currX;
    this.initialY = currY;
  }

  drawLaser(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.initialX, this.initialY);
    ctx.lineTo(this.currX, this.currY);
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.closePath();
  }

  // add characterPos, to shoot
  moveToNextPos(ctx, canvas) {
    this.currY -= this.currDY;
    this.drawLaser(ctx);
  }

  isInBounds() {
    return this.currY > 10;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Laser);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map