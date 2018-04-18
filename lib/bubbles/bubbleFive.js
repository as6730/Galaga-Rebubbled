import Bubble from './bubble';

class BubbleFive extends Bubble {
  constructor(currX, currY, currDX = 0.3, currDY = 0) {
    super(50, 3.9, 0.02, currX, currY, currDX, currDY, "teal");
  }
};

export default BubbleFive;
