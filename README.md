# Galaga: Rebubbled

### Game Overview and Logic

Rebubbled is a clone of the classic Bubble Trouble game, in which the character attempts to destroy all the perilous bubbles by shooting them with a dividing them into smaller components and eventually destroying them all together. If the character is touched by a bubble, the character loses a life (out of three).

### Functionality & MVP  

- [ ] There will be a control modal describing the rules.
- [ ] Destroying bubbles of various sizes by shooting them with a harpoon.
- [ ] Upon contact with the harpoon, the bubble will split into smaller components until completely destroyed.
- [ ] If the main character is touched by a bouncing bubble, the character loses a life.
- [ ] Controls on the bottom of the game's window will allow the user to quit the game.

### Wireframes

Rebubbled will be a single-window game. The user will be able to move left and right with the keyboard's arrows. Pressing on the spacebar will allow the user to shoot at the bubbles. The user can only shoot another harpoon after the previous harpoon has hit the top of the game's window.

![rebubbled_wireframe](https://github.com/as6730/Bubble-Trouble-Rebubbled/blob/master/wireframes/rebubbled_wireframe.png)

### Timeline

**Weekend**:
- [x] Setup the foundational framework and have a character and bubbles in the screen (basic functionality).
- [x] Look into collisions in JS and begin implementing how larger bubbles will split into smaller ones.

**Day 1**:
- [x] Apply basic styling to the background and user controls (including the modal to describe the functionality).
- [x] Have the bubbles split into smaller bubbles when hit by an arrow from the character.
- [x] Flesh out the different sizes of bubbles.

**Day 2**:
- [x] If a bubble hits the character, have the character lose a life.
- [x] Check that the controls are smooth and the speed of the bubbles is a good pace.
- [x] Style Level One.
- [x] Add Level Two - create bubbles of different sizes and speeds.

**Day 3**:
- [x] Allow the user to accrue points based off the bubble and the level.
- [x] Build multiple levels.

**Day 4**:
- [x] Style the display and make sure that the everything is running smoothly. A day to make sure the code, interface, and functionality is clean.

### Bonus Features

- [ ] Set a timer for each level.
- [ ] Have a variety of different weapons that drop down from popped bubbles that the character can pick up and utilize.
