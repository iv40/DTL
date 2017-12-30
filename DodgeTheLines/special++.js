function SpecialUp() {

	this.x = width + 20;
	this.y = random(20, height-20);
	this.diameter = 10;
	this.speed = 5;

	this.display = function() {

		stroke(0);
		fill(255, 0 , 0);
		ellipse(this.x, this.y, this.diameter);
	}
	this.move = function () {

		this.x -= this.speed;
	}
	this.merger = function(other) {

		var buffer;
		if (other.height <= 10) {

			buffer = 10;
		} else buffer = 3;

		//height
		for (var i = this.y - this.diameter/2; i <= this.y + this.diameter/2; i++)
		if (i >= other.y - buffer && i <= other.y + other.height + buffer) {

			//width
			for (var j = this.x - this.diameter/2; j <= this.x + this.diameter/2; j++)
			if (j >= other.x - buffer && j <= other.x + other.width + buffer) {

				return true;
			}
		} else return false;
	}
}