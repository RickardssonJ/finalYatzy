window.addEventListener("DOMContentLoaded", () => {
  let startGameBtn = document.getElementById("startGameButton");
  // Create an instance of the game object
  let game = new Game();

  // Call the initializecheckboxes method to prevent cheating
  game.initializeCheckboxes();

  // We create a first Dices class here which has 2 attribues
  // One attribute of an array in which we will push 5 Dice Objects (with a random value)
  // One attribute for the checkboxes below the dices
  class Dice {
    constructor(size = 5) {
      this.dice = [];
      // We create an array of the check-input class and use the map method to save the checked value of the checkboxes
      // We have a loop to push in the Die-objects into the this.dice array and we give each die-object an index and a checkbox
      this.checkbox = Array.from(
        document.getElementsByClassName("check-input")
      ).map((element) => element.checked);
      for (let i = 0; i < size; i++) {
        this.dice.push(new Die(i, this.checkbox[i]));
        this.showDiceImages(i);
      }
    }

    // Method that sets new dice image depending on value of the dice
    // If a checkbox is checked it doesn't change the image for the next roll.
    showDiceImages(i) {
      if (!this.checkbox[i]) {
        let updatefield = `<img src='./images/Alea_${this.dice[i].value}.png'><input id="save-input-${i + 1}" class="check-input" type="checkbox">`;
        document.getElementById("dice-show-" + (i + 1)).innerHTML = updatefield;
      }
    }
  }

  // Creating a new object with one property,
  // the property is a random value between 1-6.
  // If checkbox is checked we don't want to create a new dice with a new value but we read the information from the DOM
  // Else if it's not checked we want to create a new dice
  // i in this case is the index for the checkboxes
  class Die {
    constructor(i = 0, isCheckBoxChecked = false) {
      if (!isCheckBoxChecked) {
        this.value = this.new_value();
      } else {
        let imgstr = document.getElementById("dice-show-" + (i + 1)).firstChild.src;
        this.value = Number(imgstr.split("_")[1].slice(0, 1));
      }
    }
    new_value() {
      return Math.floor(Math.random() * 6) + 1;
    }
  }

  // The eventlistener for the startbutton that creates a new Dice class (array of Die's)
  // and starts the game when clicked and starts to count rounds.
  startGameBtn.addEventListener("click", () => {
    new Dice();
    game.counter();
  });
});