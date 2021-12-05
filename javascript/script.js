let playerScore = 0;
let computerScore = 0;



const playerScoreElement = document.querySelector('.results .left.number');
const computerScoreElement = document.querySelector('.results .right.number');
const resultText = document.querySelector('.results p');

const buttons = document.querySelectorAll('button[data-choice]');
buttons.forEach(button =>
	{
		button.addEventListener('click', e =>
		{
			let result = playRound(e.target.getAttribute('data-choice')
					, computerPlay());

			playerScoreElement.textContent = playerScore;
			computerScoreElement.textContent = computerScore;
			resultText.textContent = result;

			if(playerScore >= 5 || computerScore >= 5)
			{
				if(playerScore >= 5)
				{
					alert("You Won the Series!");
				}
				else if(computerScore >= 5)
				{
					alert("You Lost the Series!");
				}
				playerScore = 0;
				computerScore = 0;
				playerScoreElement.textContent = playerScore;
				computerScoreElement.textContent = computerScore;
				resultText.textContent = 'Click a button to play!';
			}
			

		})
	})

function computerPlay()
{
	let choice = "";
	let rand = Math.floor(Math.random() * 3);
	switch(rand)
	{
		case 0:
			choice = "Rock";
			break;
		case 1:
			choice = "Paper";
			break;
		case 2:
			choice = "Scissors";
			break;
		default:
			choice = "???";
			break;
	}

	return choice;
}

function capitalizeString(string)
{
	string = string.toLowerCase();
	return string[0].toUpperCase() + string.substr(1, string.length-1);
}

function playRound(playerSelection, computerSelection)
{
	playerSelection = capitalizeString(playerSelection);
	let playerWin = (playerSelection == "Rock" && computerSelection == "Scissors")
					 || (playerSelection == "Paper" && computerSelection == "Rock")
					 || (playerSelection == "Scissors" && computerSelection == "Paper");
	let computerWin = (playerSelection == "Rock" && computerSelection == "Paper")
					 || (playerSelection == "Paper" && computerSelection == "Scissors")
					 || (playerSelection == "Scissors" && computerSelection == "Rock");
	
	if(playerWin)
	{
		++playerScore;
		return `You Win! ${playerSelection} beats ${computerSelection}`;
	}
	else if(computerWin)
	{
		++computerScore;
		return `You Lose! ${computerSelection} beats ${playerSelection}`;
	}
	else
	{
		return `It's a tie! ${playerSelection} is the same as ${computerSelection}`;
	}
}

function game()
{
	
}
