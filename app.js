/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

// initiaize the game
init()

document.querySelector(".btn-roll").addEventListener('click', function(){
	if(gamePlaying){
		//generating random number between 1 - 6 to roll the dice
		var dice = Math.floor(Math.random() * 6) + 1;

		//display the randomly generated dice
		var diceDOM = document.querySelector(".dice")
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';

		if(dice !== 1){
			// adding score
			roundScore += dice;
			document.querySelector("#current-" + activePlayer).textContent = roundScore;

		} else{
			nextPlayer()
		}
	}
});

function nextPlayer(){
	// next player
		activePlayer == 0 ? activePlayer = 1 : activePlayer =  0;
		roundScore = 0;
		document.getElementById('current-0').textContent = 0;
		document.getElementById('current-1').textContent = 0;

		// toggle class active 
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		// hide dice on player change
		document.querySelector(".dice").style.display = 'none';	
}

document.querySelector('.btn-hold').addEventListener('click', function(){
100		// add current round score to global score
		scores[activePlayer] += roundScore;

		// update the global score in DOM
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

100		// decalare winner if score > 100
		if(scores[activePlayer] >= 100){
				document.querySelector('#name-'+ activePlayer).textContent = 'Winner!';
				document.querySelector(".dice").style.display = 'none';
				document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
				document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
				gamePlaying = false;
			}
		else{
			nextPlayer();
		}
	}
});

document.querySelector('.btn-new').addEventListener('click', init)

function init() {
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;
	//hide the dice on new game
	document.querySelector(".dice").style.display = 'none';

	//setting scores to 0
	document.getElementById('score-0').textContent = 0;
	document.getElementById('score-1').textContent = 0;
	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;

	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}




