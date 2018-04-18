import Bubble from './bubble';

class BubbleOne extends Bubble {
  constructor(currX, currY, currDX = 0.8, currDY = 0) {
    super(5, 2.0, 0.02, currX, currY, currDX, currDY, "yellow");
  }
};

export default BubbleOne;
