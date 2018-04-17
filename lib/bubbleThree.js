import Bubble from './bubble';

class BubbleThree extends Bubble {
  constructor(currX, currY, currDX = 0.3, currDY = 0) {
    super(30, 3.5, 0.02, currX, currY, currDX, currDY, "green");
  }
};

export default BubbleThree;
