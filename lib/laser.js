class Laser {
  constructor(currX, currY) {
    this.radius = 5;
    this.color = 'red';
    this.currY = currY;
    this.currDY = 2.5;
    this.currX = currX;
    this.initialX = currX;
    this.initialY = currY;
  }

  drawLaser(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.initialX, this.initialY);
    ctx.lineTo(this.currX, this.currY);
    ctx.lineWidth = 2;
    ctx.shadowColor = '#00ff00';
    ctx.shadowBlur = 2;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
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
