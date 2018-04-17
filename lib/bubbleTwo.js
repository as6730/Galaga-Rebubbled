import Bubble from './bubble';

class BubbleTwo extends Bubble {
  constructor(currX, currY) {
    super(20, 3, 0.02, currX, currY, 0.35, 0, "red");
  }
};

export default BubbleTwo;
