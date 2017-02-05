class GuessingGame {
    constructor() {}

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    	this.midpoint = Math.round((max + min) / 2);
    }

    guess() {
    	this.midpoint = Math.round((this.max + this.min) / 2);
    	return this.mid;
    }

    lower() {
    	this.max = this.midpoint;
        this.mid = Math.round((this.max + this.min) / 2);
    }

    greater() {
    	this.min = this.midpoint;
        this.mid = Math.round((this.max + this.min) / 2);
    }
}

module.exports = GuessingGame;