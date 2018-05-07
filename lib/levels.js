import BubbleFive from './bubbles/bubbleFive.js';
import BubbleFour from './bubbles/bubbleFour.js';
import BubbleThree from './bubbles/bubbleThree.js';
import BubbleTwo from './bubbles/bubbleTwo.js';
import BubbleOne from './bubbles/bubbleOne.js';

// let levelOne = [
//               new BubbleThree(canvas.width/2 + 100, canvas.height - 130, 0),
//               new BubbleTwo(canvas.width/2 - 180, canvas.height - 30 - 70, 0),
//               new BubbleTwo(canvas.width/2 + 180, canvas.height - 30 - 70, 0)
//               ];
//
// let levelTwo = [
//               new BubbleTwo(canvas.width/2 - 180, canvas.height - 70 - 100,  -0.5),
//               new BubbleTwo(canvas.width/2 - 130, canvas.height - 70 - 100, -0.5),
//               new BubbleTwo(canvas.width/2 - 80, canvas.height - 70 - 100, -0.5),
//               new BubbleTwo(canvas.width/2 + 80, canvas.height - 70 - 100, 0.5),
//               new BubbleTwo(canvas.width/2 + 130, canvas.height - 70 - 100, 0.5),
//               new BubbleTwo(canvas.width/2 + 180, canvas.height - 70 - 100, 0.5)
//               ];
//
// let levelThree = [
//               new BubbleFour(canvas.width/2 - 180, canvas.height - 70 - 100, -1),
//               new BubbleOne(canvas.width/2 - 300, canvas.height - 160, 0.5),
//               new BubbleOne(canvas.width/2 - 260, canvas.height - 160, 0.5),
//               new BubbleOne(canvas.width/2 + 260, canvas.height - 160, -0.7),
//               ];
//
// let levelFour = [
//               new BubbleOne(canvas.width/2 - 300, canvas.height - 160, 0.1),
//               new BubbleOne(canvas.width/2 - 260, canvas.height - 160, 0.1),
//               new BubbleOne(canvas.width/2 - 220, canvas.height - 160, 0.1),
//               new BubbleOne(canvas.width/2 + 220, canvas.height - 160, -0.1),
//               new BubbleOne(canvas.width/2 + 260, canvas.height - 160, -0.1),
//               new BubbleOne(canvas.width/2 + 300, canvas.height - 160, -0.1),
//               new BubbleThree(canvas.width/2 + 100, canvas.height - 200, 1),
//               new BubbleTwo(canvas.width/2 - 130, canvas.height - 160, -0.5),
//               ];
//
// let levelFive = [
//               new BubbleFour(canvas.width/2 - 180, canvas.height - 70 - 100, -0.5),
//               new BubbleTwo(canvas.width/2 - 80, canvas.height - 70 - 100,-0.1),
//               new BubbleTwo(canvas.width/2 + 80, canvas.height - 70 - 100, 0.5),
//               new BubbleOne(canvas.width/2 + 260, canvas.height - 160, -0.5),
//               new BubbleThree(canvas.width/2 + 100, canvas.height - 130, 0),
//               ];

export default function getAllLevels() {
  return [
    [
      new BubbleThree(canvas.width/2 + 100, canvas.height - 130, 0),
      new BubbleTwo(canvas.width/2 - 180, canvas.height - 30 - 70, 0),
      new BubbleTwo(canvas.width/2 + 180, canvas.height - 30 - 70, 0)
    ], [
      new BubbleTwo(canvas.width/2 - 180, canvas.height - 70 - 100,  -0.5),
      new BubbleTwo(canvas.width/2 - 130, canvas.height - 70 - 100, -0.5),
      new BubbleTwo(canvas.width/2 - 80, canvas.height - 70 - 100, -0.5),
      new BubbleTwo(canvas.width/2 + 80, canvas.height - 70 - 100, 0.5),
      new BubbleTwo(canvas.width/2 + 130, canvas.height - 70 - 100, 0.5),
      new BubbleTwo(canvas.width/2 + 180, canvas.height - 70 - 100, 0.5)
    ], [
      new BubbleFour(canvas.width/2 - 180, canvas.height - 70 - 100, -1),
      new BubbleOne(canvas.width/2 - 300, canvas.height - 160, 0.5),
      new BubbleOne(canvas.width/2 - 260, canvas.height - 160, 0.5),
      new BubbleOne(canvas.width/2 + 260, canvas.height - 160, -0.7),
    ],[
      new BubbleOne(canvas.width/2 - 300, canvas.height - 160, 0.1),
      new BubbleOne(canvas.width/2 - 260, canvas.height - 160, 0.1),
      new BubbleOne(canvas.width/2 - 220, canvas.height - 160, 0.1),
      new BubbleOne(canvas.width/2 + 220, canvas.height - 160, -0.1),
      new BubbleOne(canvas.width/2 + 260, canvas.height - 160, -0.1),
      new BubbleOne(canvas.width/2 + 300, canvas.height - 160, -0.1),
      new BubbleThree(canvas.width/2 + 100, canvas.height - 200, 1),
      new BubbleTwo(canvas.width/2 - 130, canvas.height - 160, -0.5),
    ], [
      new BubbleFour(canvas.width/2 - 180, canvas.height - 70 - 100, -0.5),
      new BubbleTwo(canvas.width/2 - 80, canvas.height - 70 - 100,-0.1),
      new BubbleTwo(canvas.width/2 + 80, canvas.height - 70 - 100, 0.5),
      new BubbleOne(canvas.width/2 + 260, canvas.height - 160, -0.5),
      new BubbleThree(canvas.width/2 + 100, canvas.height - 130, 0),
    ]
  ];
}
