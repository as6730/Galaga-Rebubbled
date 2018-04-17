import Bubble from './bubble';

class BubbleOne extends Bubble {
  constructor(currX, currY) {
    super(5, 2.0, 0.02, currX, currY, 0.8, 0, "purple");
  }
};

export default BubbleOne;
