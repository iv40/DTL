function Block(x, y, w, h, speed) {
  
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.speed = speed;
  this.bool = false;
  this.timer = 400;
  this.flip = "off";
  
  this.display = function(){
    
    stroke(0);
    if (this.bool) {
      
      this.width = 10;
      this.height = 10;
      fill(255, 0, 50);
      stroke(0);
      if (this.timer-- <= 0) {
        this.bool = false;
        this.flip = "off";
      }
    } 
    else { 
      this.width = w;
      this.height = h;
      fill(255);
    }
    strokeWeight(1);
    rect(this.x, this.y, this.width, this.height);
  }
  this.move = function() {

    if (keyIsDown(UP_ARROW)) {
    	if (!(block.y <= 0) ) {

        this.y = this.y - this.speed;
      }
    }
    if (keyIsDown(DOWN_ARROW)) {
      if (!(block.y + block.height >= height) ) {

        this.y = this.y + this.speed; 
      }
    }
    if (keyIsDown(LEFT_ARROW)) {
      if (!(block.x <= 0) ) {

        this.x = this.x - this.speed*1.5;
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      if (!(block.x + block.width >= width + 5) ) {

        this.x = this.x + this.speed*1.5;
      }
    }
  }
}