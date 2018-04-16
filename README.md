# Bubble Trouble: Rebubbled

### Game Overview and Logic

Rebubbled is a clone of the classic Bubble Trouble game, in which the character attempts to destroy all the perilous bubbles by shooting them with a dividing them into smaller components and eventually destroying them all together. If the character is touched by a bubble, the character loses a life (out of three). 

### Functionality & MVP  

- [ ] There will be a control modal describing the rules.
- [ ] Destroying bubbles of various sizes by shooting them with a harpoon.
- [ ] Upon contact with the harpoon, the bubble will split into smaller components until completely destroyed.
- [ ] If the main character is touched by a bouncing bubble, the character loses a life.
- [ ] Controls on the bottom of the game's window will allow the user to quit the game.

### Wireframes

Rebubbled will be a single-window game.

![wireframes](js_wireframes.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- `Vanilla JavaScript` for overall structure and game logic,
- `HTML5 Canvas` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

### Implementation Timeline

**Over the weekend**:
- [x] Setup the foundational framework and have a character and bubbles in the screen (basic functionality).
- [x] Look into collisions in JS and begin implementing how larger bubbles will split into smaller ones.

**Day 1**: Apply basic styling to the background and user controls (including the modal to describe the functionality).

**Day 2**: Dedicate this day to learning the `Web Audio` API.  First, build out the `AudioEvent` object to connect to the `Board` object.  Then, use `board.js` to create and render `Asteroid`s and `AudioEvent`s. Goals for the day:

- [x] Complete the `asteroids.js` module (constructor, update functions, colors)
- [x] Get sounds to play on collisions
- [x] Build first sound library
- [x] Get collision graphics working
- [x] Make the `Asteroid`s able to be created with mouse. Set vectors on mouse release.

**Day 3**: Create the logic backend. Build out modular functions for handling the different evolutions. Goals for the day:

- [x] Build Markov Matrix object and link it with collisions
- [x] Export an `AudioEvent` object with correct type and handling logic
- [x] Have a functional screen on the `Canvas` frontend that correctly handles creation and running of the simulation.
- [x] Make sure that starting, stopping, and resetting works.

**Day 4**: Install the controls for the user to interact with the game. Style the frontend, making it polished and professional. Goals for the day:

- [x] Create controls for game speed, stop, start, restart, reset
- [x] Build out list of instruments
- [x] Have a styled `Canvas`, nice looking controls and title


### Bonus features

- [ ] Build multiple levels.
- [ ] Set a timer for each level.
- [ ] Allow the user to accrue points based off the bubble and the level.
- [ ] Have a variety of different weapons that drop down from popped bubbles that the character can pick up and utilize.
