function Line() {

	this.x1 = width + 10;
	this.x2 = this.x1 + random(20, width/2);
	this.y = random(5, height-5);
	this.speed = random (2, 7);

	this.display = function() {

		stroke(255);
		line(this.x1, this.y, this.x2, this.y);
	}
	this.move = function() {

		this.x1 -= this.speed;
		this.x2 -= this.speed;
	}
}