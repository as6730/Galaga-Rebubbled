class mainChar {
  constructor(canvasWidth) {
    this.extraLives = 3;
    this.height = 30;
    this.width = 24;
    this.currX = (canvasWidth - this.width) / 2;
  }

  drawCharacter(ctx, canvas) {
    ctx.beginPath();
    ctx.rect(this.currX, canvas.height - this.height, this.width, this.height);
    ctx.fillStyle = "#FF4500";
    ctx.fill();
    ctx.closePath();
  }

  moveToNextPos(ctx, canvas, dx) {
    this.currX += dx;
    this.drawCharacter(ctx, canvas);
  }
};

export default mainChar;
