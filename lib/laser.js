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

export default Laser;
