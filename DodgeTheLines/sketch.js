//objects
var block;
var lines = [];
var iblocks = [];
var special_length = [];
var special = [];
var backcol_r;
var backcol_g;
var backcol_b;

var timer = 0;
var bool = true;
var boolio = false;
var countdown = 0;
var down = 0;
var slower = 0;





function contact(block, liner) {

  if ( (liner.y >= block.y) && (liner.y <= (block.y + block.height) ) ) {

    for (var i = 0; i <= block.width; i++) {

      if ( (block.x + i >= liner.x1) && (block.x + i <= liner.x2) ) {

        return true;
      }
    }
  }
}




function setup() {
  createCanvas(800, 500);
  block = new Block(100, 200, 25, 25, 3);
  var x_buff = 0;
  for (var i = 0; i < 3; i++) {

    iblocks[i] = new Iblock( (width - 80)+x_buff, height-50, 15, 30);
    x_buff += 20;
  }
}

function draw() {
  
  if (bool) {

    backcol_r = map(down, 0, 10000/height, 50, 150);
    backcol_g = 89;
    backcol_b = 100;
    background(backcol_r, backcol_g, backcol_b);

    
    //timer
    timer++;

    if (timer % 400 == 0) down++;
    
    //special refresh
    if (timer % 600-down*10 == 0) {
      special.push(new SpecialUp() );
    }
    if (special.length > 0) {
      
      special[0].display();
      special[0].move();

      if (special[0].merger(block) && iblocks.length < 3) {

        iblocks.push(new Iblock( (width-80) + 20*iblocks.length, height-50, 15, 30) );
      }

      if (special[0].x <= 0 || special[0].merger(block) ) {
        special.splice(0, 1);
      }
    }

    
    //lines
    if (timer % ( (10000/height) - down) == 0) {
      lines.push(new Line() );
    }
    for (var i = 0; i < lines.length; i++) {
      lines[i].display();
      lines[i].move();
      if (lines[i].x2 <= 0) {
        lines.splice(i, 1);
      }
      if ( contact(block, lines[i]) ) {
        
        bool = false;
      }
    }
    
    
    block.display();
    block.move();
    countDown(timer);
    
    //interface
    for (var i = 0; i < iblocks.length; i++) {

      iblocks[i].display();
    }
    if (boolio) {
      
      special_length[0].display(block);
      if (special_length[0].width <= 0) {
        special_length.splice(0, 1);
        boolio = false;
    }
    }

  } else {
    
      GameOver();
      if (slower++ % 3 == 0) YourPoints();
  }
}

function keyPressed() {

  if (keyCode == 32 && iblocks.length >= 1 && block.flip == "off") {

    block.bool = true;
    block.timer = 200;
    iblocks.splice(iblocks.length-1, 1);
    special_length.push(new SpecialBar(width, height) );
    boolio = true;
    block.flip = "on";
  }
}

function countDown(timer) {
    
    if (timer % 60 == 0) countdown++;
    fill(255);
    stroke(0);
    strokeWeight(2);
    textSize(28);
    text(countdown, width-50, 50);
    strokeWeight(1);
}

function GameOver() {
  
  fill(255);
  textSize(48);
  textAlign(CENTER);
  text("GAME OVER", width/2, height/2);
  bool = false;
}

function YourPoints() {
  
  fill(random(0,255), random(0, 255), random(0,255));
  textSize(36);
  textAlign(CENTER);
  text("You survived "+countdown+" seconds", width/2, height/2 + 100);
  bool = false;
}