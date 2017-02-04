class GuessingGame {
    game(min, max, mid, number, guess) {
    	this.min = min;
    	this.max = max;
    	this.mid = mid = (min + max)/2;
    	this.number = number = 279;
    	this.guess = guess;
    }

    setRange(min, max) {
    	min = 0;
    	max = 3445;

    }

    guess() {
    	
    	var guess = prompt("Guess a number between 1 and 3445!");
    	if (guess < number) {
    		console.log("Too small!");
    	};
    	if (guess > number) {
    		console.log("Too big!");
    	};
      if (guess === number) { 
      	console.log("The number is found. Congratulations!");
      };
    }

    lower() {
    	if (guess < number) {
           return mid + 1;
    	}
   }
    greater() {
    	if (guess > number) {
    		return mid -1;
    	}

    }
}

module.exports = GuessingGame;
