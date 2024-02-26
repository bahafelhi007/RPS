// Generate the computer's choice once outside the loop
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
      return 'paper';
    } else if (randomNumber === 2) {
      return 'rock';
    } else {
      return 'scissor';
    }
  }
const computerChoice = getComputerChoice();


function playRound(userChoice) {
  let result = '';

  // Compare user choice with computer choice
  if (userChoice === computerChoice) {
    result = 'Draw';
  } else if (
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'rock' && computerChoice === 'scissor') ||
    (userChoice === 'scissor' && computerChoice === 'paper')
  ) {
    result = 'You win!';
  } else {
    result = 'You lose!';
  }

  console.log(`You chose: ${userChoice}, Computer chose: ${computerChoice}`);
  console.log(result);

  // No return statement needed here, results are logged inside the function
}

// Add event listeners to buttons (replace selectors with your actual button IDs)
const buttons = document.querySelectorAll('.card');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.id; // Get user choice from button ID
    playRound(userChoice); // Call playRound with user's choice
  });
});
