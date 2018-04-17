class Laser {
  constructor() {
    this.radius = 5;
    // this.initialVelocityX = 2.3;
    this.accelarationFactor = 1.25;
    // this.color = #008080;
    this.currY = 30;
    this.currDY = 30;
  }

  drawLaser(ctx) {
    ctx.beginPath();
    ctx.arc(10, 2.3, 0.03, 0, Math.PI*2);
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
  shoot(ctx, canvas) {
    if (this.currY + this.currDY > canvas.width - this.radius || this.currY + this.currDY < this.radius) {
      this.currDY += this.accelarationFactor;
    }

    this.currY += this.currDY;
    this.drawLaser(ctx);
  }
};

export default Laser;
