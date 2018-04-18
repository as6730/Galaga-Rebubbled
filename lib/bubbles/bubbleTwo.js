import Bubble from './bubble';

class BubbleTwo extends Bubble {
  constructor(currX, currY, currDX = 0.35, currDY = 0) {
    super(20, 3, 0.02, currX, currY, currDX, currDY, "red");
  }
};

export default BubbleTwo;
