import Bubble from './bubble';

class BubbleFour extends Bubble {
  constructor(currX, currY, currDX = 0.3, currDY = 0) {
    super(45, 3.7, 0.02, currX, currY, currDX, currDY, "pink");
  }
};

export default BubbleFour;
