let levelOne = [
              new BubbleThree(canvas.width/2 + 100, canvas.height - 30 - initialBubbleHeight, 0),
              new BubbleTwo(canvas.width/2 - 180, canvas.height - 30 - 70, 0),
              new BubbleTwo(canvas.width/2 + 180, canvas.height - 30 - 70, 0)
              ];

let levelTwo = [
              new BubbleTwo(canvas.width/2 - 180, canvas.height - 70 - 100, -1),
              new BubbleTwo(canvas.width/2 - 130, canvas.height - 70 - 100,-1),
              new BubbleTwo(canvas.width/2 - 80, canvas.height - 70 - 100,-1),
              new BubbleTwo(canvas.width/2 + 80, canvas.height - 70 - 100, 1),
              new BubbleTwo(canvas.width/2 + 130, canvas.height - 70 - 100, 1),
              new BubbleTwo(canvas.width/2 + 180, canvas.height - 70 - 100, 1)
              ];

let levelThree = [
              new BubbleFour(canvas.width/2 - 180, canvas.height - 70 - 100, -1),
              new BubbleOne(canvas.width/2 - 300, canvas.height - 160, 1),
              new BubbleOne(canvas.width/2 - 260, canvas.height - 160, 1),
              new BubbleOne(canvas.width/2 + 260, canvas.height - 160, -1),
              ];

let levelFour = [
              new BubbleOne(canvas.width/2 - 300, canvas.height - 160, 1),
              new BubbleOne(canvas.width/2 - 260, canvas.height - 160, 1),
              new BubbleOne(canvas.width/2 - 220, canvas.height - 160, 1),
              new BubbleOne(canvas.width/2 + 220, canvas.height - 160, -1),
              new BubbleOne(canvas.width/2 + 260, canvas.height - 160, -1),
              new BubbleOne(canvas.width/2 + 300, canvas.height - 160, -1),
              new BubbleThree(canvas.width/2 + 100, canvas.height - 200, 1),
              new BubbleTwo(canvas.width/2 - 130, canvas.height - 160, -1),
              ];

let levelFive = [
              new BubbleFour(canvas.width/2 - 180, canvas.height - 70 - 100, -1),
              new BubbleTwo(canvas.width/2 - 80, canvas.height - 70 - 100,-1),
              new BubbleTwo(canvas.width/2 + 80, canvas.height - 70 - 100, 1),
              new BubbleOne(canvas.width/2 + 260, canvas.height - 160, -1),
              new BubbleThree(canvas.width/2 + 100, canvas.height - 30 - initialBubbleHeight, 0),
              ];

let levels = [levelOne, levelTwo, levelThree, levelFour, levelFive];

export default levels;
