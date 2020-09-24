document.addEventListener("DOMContentLoaded", function (e) {
  let theTable = document.getElementById("main-table");

  // Create a player class that calculates the total/sum and bonus depending on what player.
  class Player {
    constructor(number) {
      this.number = number;
    }
    playerSumBonusTotal() {
      let playersSum = document.getElementById(`player-${this.number}-sum`);
      let playersBonus = document.getElementById(`player-${this.number}-bonus`);
      let playersTotal = document.getElementById(`player-${this.number}-total`);
      let playerArray = Array.from(
        document.getElementsByClassName(`player-${this.number}`)
      );
      let playerSecondArray = playerArray.map((element) => {
        return Number(element.value);
      });
      let sum = playerSecondArray.reduce((prevValue, currValue) => {
        return prevValue + currValue;
      }, 0);
      playersSum.innerHTML = sum;
      if (sum >= 63) {
        playersBonus.innerHTML = 50;
      } else {
        playersBonus.innerHTML = 0;
      }
      playersTotal.innerHTML =
        Number(playersSum.innerHTML) + Number(playersBonus.innerHTML);
    }
  }

  // Initialize a new player with the player class
  let player1 = new Player("1");
  let player2 = new Player("2");
  let player3 = new Player("3");
  let player4 = new Player("4");

  // Make sure to update the table points when a number is changed
  theTable.addEventListener("change", function (e) {
    player1.playerSumBonusTotal();
    player2.playerSumBonusTotal();
    player3.playerSumBonusTotal();
    player4.playerSumBonusTotal();
  });
});
