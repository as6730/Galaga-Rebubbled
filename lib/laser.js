class Laser {
  constructor(currX, currY) {
    this.radius = 5;
    this.color = 'red';
    this.currY = currY;
    this.currDY = 1.5;
    this.currX = currX;
  }

  drawLaser(ctx) {
    ctx.beginPath();
    ctx.arc(this.currX, this.currY, this.radius, 0, Math.PI*2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();

    // ctx.beginPath();
    // ctx.moveTo(50,20);
    // ctx.lineTo(50,100);
    // ctx.stroke();
    // ctx.fillStyle = this.color;
    // ctx.closePath();
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
