class spaceship {
  // height: 30, width: 24;
  constructor(canvas) {
    this.extraLives = 3;
    this.height = 38;
    this.width = 42;
    this.currX = (canvas.width - this.width) / 2;
    this.currY = canvas.height - this.height;
  }

  drawSpaceship(ctx) {
    let img = new Image();
    img.src = "/Users/alexandrasavramis/Desktop/bubble_trouble_rebubbled/assets/spaceship.png";
    ctx.drawImage(img, this.currX, this.currY, this.width, this.height);
  }


  moveToNextPos(ctx, dx) {
    this.currX += dx;
    this.drawSpaceship(ctx);
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

export default spaceship;
