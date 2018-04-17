import Bubble from './bubble';

class BubbleThree extends Bubble {
  constructor(currX, currY) {
    super(30, 3.5, 0.02, currX, currY, 0.3, 0, "green");
  }
};

export default BubbleThree;
