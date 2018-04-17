import Bubble from './bubble';

class BubbleFour extends Bubble {
  constructor(currX, currY, currDX = 0.3, currDY = 0) {
    super(45, 3.5, 0.02, currX, currY, currDX, currDY, "yellow");
  }
};

export default BubbleFour;


// new BubbleFour(canvas.width/2 + 70, canvas.height - 40 - initialBubbleHeight, 0),
// import BubbleFour from './bubbleFour.js';

// else if (collidedBubble instanceof BubbleFour) {
//   bubbles.push(new BubbleThree(collidedBubble.currX, collidedBubble.currY, 0.35, -1.5));
//   bubbles.push(new BubbleThree(collidedBubble.currX, collidedBubble.currY, -0.35, -1.5));
//   // score += 15;
// }
