class Game {
  // This class has two attributes, one main play button and one that keeps count of how many throws you've used
  constructor() {
    this.count = document.getElementById("antalSpel");
    this.knapp = document.getElementById("startGameButton");
  }

  // In this method we'll make sure that the checkboxes aren't visible when the document first loads (to prevent cheating).
  initializeCheckboxes() {
    let checkBox = Array.from(document.getElementsByClassName("check-input"));
    checkBox.map((element) => {
      element.style.display = "none";
    });
  }
  // This method checks how many throws the player has used. Max throws are three
  // You start with 3 throws and we'll count down from 3 -> 0
  // When you've used all your three throws we'll create a new button element (with ID, class, inner HTML and append it to the calculate button div) so the next player can start his turn.
  // When the new player starts he has 3 new throws to use. 
  counter() {
    let checkBox = Array.from(document.getElementsByClassName("check-input"));
    let counter = Number(document.getElementById("antalSpel").innerHTML);
    counter--;
    document.getElementById("antalSpel").innerHTML = counter;
    
    if (counter == 0) {
      this.knapp.style.display = "none";
      //checkBox
      let controlButton = document.createElement("button");
      controlButton.id = "controlButton";
      controlButton.innerHTML =
        "Write your points and click here when you are ready";
      controlButton.classList.add("calculate-button");
      document.getElementById("calculateButton").appendChild(controlButton);
      // Remove checkboxes when it's a new "round" (After 3 throws has been used).
      checkBox.forEach((element) => {
        element.style.display = "none";
      });
      // Call the method that starts a new round.
      this.newGame(controlButton);
    }
  }

  // Method that starts a new round that takes a parameter (controlButton)
  // When we press on the button it removes the "new" controlbutton which says "Write your points" 
  // We remove the checkboxes on the first round (to prevent cheating) and make sure that they're all unchecked (false)
  // We add three new throw counts and count down from 3 -> 0.
  newGame(controlButton) {
    let checkBox = Array.from(document.getElementsByClassName("check-input"));
    controlButton.addEventListener("click", () => {
      controlButton.remove();
      this.knapp.style.display = "block";
      this.count.innerHTML = 3;
      checkBox.forEach((element) => {
        element.style.display = "none";
      });
      checkBox.map((element) => {
        element.checked = false;
      });
    });
  }
}
