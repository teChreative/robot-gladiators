// This creates a function named "fight"


let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;


const hold = function(){
// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robot
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
/* START CODE I DID
let fight = function(enemyName){
    
    // repeat and execute as long as the enemy-robot is alive
while(playerHealth > 0 && enemyHealth > 0) {
    
    // Alert players that they are starting the round
        let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

// if player chooses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    let confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
  }
}//end while loop

}
END CODE I DID */
}

// START copied from course 3.2.7

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
      // ask player if they'd like to fight or run
      var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 10;
          console.log("playerMoney", playerMoney)
          endGame();
          break;
          endGame();
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerMoney = playerMoney + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );
  
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
    }
  };

// END copied from course 3.2.7

// function to start a new game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    
    for (var i = 0; i < enemyNames.length; i++) {
      if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
        var pickedEnemyName = enemyNames[i];
  
        enemyHealth = 50;
  
        fight(pickedEnemyName);
      }
      else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
    }
    // play again
    endGame();
  };

// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } 
    else {
      window.alert("You've lost your robot in battle.");
    }
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
    // restart the game
    startGame();
    } 
    else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
  }



// start the game when the page loads
startGame();

//fight();