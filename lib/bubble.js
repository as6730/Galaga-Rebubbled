class Bubble {
  constructor(radius, initialVelocityY, accelarationFactor, currX, currY, currDX, currDY, color) {
    this.radius = radius;
    this.initialVelocityY = initialVelocityY;
    this.color = color;
    this.currX = currX;
    this.currY = currY;
    this.currDX = currDX;
    this.currDY = currDY;
    this.accelarationFactor = accelarationFactor;
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

    if(this.currX + this.currDX > canvas.width - this.radius || this.currX + this.currDX < this.radius) {
      this.currDX = -this.currDX;
    }
    if(this.currY + this.currDY > canvas.height - this.radius || this.currY + this.currDY < this.radius) {
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
};

export default Bubble;
