
const readlineSync = require('readline-sync');
let numberOfGuesses = 6;
let guessesRemaining = numberOfGuesses;
let rightNumber = '';
let numberLength = 4;
let bull;
let cow;
let guess = '';
let newGuess = '';
let result;
let genDigits = [3, 4, 5, 6];

let boleanBull = [];
let boleanGuess = []; //3,4,5,6
let isUnique = false;
let isInRange = false;
let isCorrect

function checkGuess() {
	bull = 0;
	cow = 0;
	boleanBull = [0, 0, 0, 0];
	for (let i = 0; i < numberLength; i++) {
		if (rightNumber[i] == guess[i]) {
			bull++;
			boleanBull[i] = 1;
		}
	}
	return [bull, numberLength-bull];
}

function initGuessingNumber() {
	let genMass = genDigits;
	let index;
	while (genMass.length > 0) {
		index = (Math.floor(Math.random() * (genMass.length - 1)));
		rightNumber += String(genMass[index]);
		genMass.splice(index, 1);
	}	
};

function playerInput() {
	do{
		newGuess = String(readlineSync.questionInt('Enter your guess (7-digit NUMBER, valid digits: 3..6): '));
		if (newGuess.length != numberLength) {
			console.log('Wrong length, try again');
			continue;
		}
			
		if ((new Set(newGuess)).size == numberLength) { 
			isUnique = true; 			
		} else {
			isUnique = false;
			console.log('Repeating digits in your guess, try again');
			continue;
		}
		
		isInRange = true;
		for (let i = 0; i < numberLength; i++) {
			if (newGuess[i] > 6 || newGuess[i] < 3) {
				isInRange = false;
				console.log('Every digit must be in range 3..6');
				break;
			} 
		}
		
	} while (newGuess.length !== numberLength || !isUnique || !isInRange )
	guess = newGuess;
	newGuess = '';
};

function initGame() {
    initGuessingNumber();
    console.log('Game Init');
    for (let i = 0; i < numberOfGuesses; i++) {
        console.log('Guesses left: ', numberOfGuesses - i);
		playerInput()
		result = checkGuess();
		
		console.log('Bulls: %d and cows: %d', result[0], result[1]);
		if (result[0] ==  4) {
			if (i == 0) {
				console.log('You won in %d try! Gratz! OMEGALUL', i + 1);
			} else { 
				console.log('You won in %d tries! Gratz!', i + 1);
				continue;
			}
		}		
    }
	console.log('It seems you dont have any tries left, looser');

}
initGame();