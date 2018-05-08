# Galaga: Rebubbled

[Live Demo][gitpages]

[gitpages]: https://as6730.github.io/Galaga-Rebubbled/

### Game Overview and Logic

Rebubbled is a clone of the classic Bubble Trouble game, in which the character attempts to destroy all the perilous bubbles by shooting them with a dividing them into smaller components and eventually destroying them all together. If the character is touched by a bubble, the character loses a life (out of three).

### Functionality & MVP  

  * There will be a control modal describing the rules.
  * Destroying bubbles of various sizes by shooting them with a harpoon.
  * Upon contact with the laser, the bubble will split into smaller components until completely destroyed.
  * If the main character is touched by a bouncing bubble, the character loses a life.

### Wireframes

Rebubbled will be a single-window game. The user will be able to move left and right with the keyboard's arrows. Pressing on the spacebar will allow the user to shoot at the bubbles. The user can only shoot another harpoon after the previous harpoon has hit the top of the game's window.

<p align="center">
  <img src="https://github.com/as6730/Galaga-Rebubbled/blob/master/assets/gif/galaga.gif" width=768 height=565 />
</p>

### Timeline

**Weekend**:
  * Setup the foundational framework and have a character and bubbles in the screen (basic functionality).
  * Look into collisions in JS and begin implementing how larger bubbles will split into smaller ones.

**Day 1**:
  * Apply basic styling to the background and user controls (including the modal to describe the functionality).
  * Have the bubbles split into smaller bubbles when hit by an arrow from the character.
  * Flesh out the different sizes of bubbles.

**Day 2**:
  * If a bubble hits the character, have the character lose a life.
  * Check that the controls are smooth and the speed of the bubbles is a good pace.
  * Style Level One.
  * Add Level Two - create bubbles of different sizes and speeds.

**Day 3**:
  * Allow the user to accrue points based off the bubble and the level.
  * Build multiple levels.

**Day 4**:
  * Style the display and make sure that the everything is running smoothly. A day to make sure the code, interface, and functionality is clean.

### Bonus Features

  *  Set a timer for each level.
  *  Have a variety of different weapons that drop down from popped bubbles that the character can pick up and utilize.
  *  Controls on the bottom of the game's window will allow the user to quit the game.
