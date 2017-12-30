function Iblock(x, y, w, h) {

	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;

	this.display = function() {

		stroke(0);
		fill(255, 0 , 40);
		rect(this.x, this.y, this.width, this.height);
	}
}