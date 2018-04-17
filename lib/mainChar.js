class mainChar {
  constructor(canvas) {
    this.extraLives = 3;
    this.height = 30;
    this.width = 24;
    this.currX = (canvas.width - this.width) / 2;
    this.currY = canvas.height - this.height;
  }

  drawCharacter(ctx) {
    ctx.beginPath();
    ctx.rect(this.currX, this.currY, this.width, this.height);
    ctx.fillStyle = "#FF4500";
    ctx.fill();
    ctx.closePath();
  }

  moveToNextPos(ctx, dx) {
    this.currX += dx;
    this.drawCharacter(ctx);
  }

  checkCollisionWithBubble(bubble) {
    // check for collision of top
    for (let x = this.currX; x < this.currX + this.width; x++) {
      if (bubble.checkEdgeCollision(x, this.currY)) {
        return true;
      }
    }

    // check for collision of sides
    for (let y = this.currY; y < this.currY + this.height; y++) {
      if (bubble.checkEdgeCollision(this.currX, y) || bubble.checkEdgeCollision(this.currX + this.width, y)) {
        return true;
      }
    }
  }
};

export default mainChar;
