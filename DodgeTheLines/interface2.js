function SpecialBar(x, y) {
  
  this.x = 50;
  this.y = y-50;
  this.height = 20;
  this.width = 100;
  
  
  this.display = function (other) {
    
    stroke(0);
    fill(255, 0, 0);
    this.width = map(other.timer, 200, 0, 100, 0);
    rect(this.x, this.y, this.width, this.height);
  }
}