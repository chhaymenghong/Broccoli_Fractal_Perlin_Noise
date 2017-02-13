
var w = 2000;
var h = 1000;
var originalLen = 350;
var angle = 40;
var t = 0;
var offset = 0;
function setup() {
  createCanvas(w,h);
  stroke(83, 49, 24, 255);
  fill(0,255,0, 255);
}

function draw() {
  background(130, 212, 53);
  translate(w/2, h);
  offset = map( noise( t ), 0, 1, -20, 20 ); 
  t += 0.01;
  
  drawFractal(originalLen, 50);
}

function drawFractal(len, weight) {
  if ( len > 3 ) {
    // draw main branch
    strokeWeight(weight);
    line(0,0,0,-len);
    

    
    // move coordinate system to the top of the branch
    translate(0, -len);
    
    // draw left branch
    push();
      rotate(-radians(angle + offset));
      drawFractal(len * 0.6, weight * 0.7);
    pop();
    
    
    
    // draw right branch
    push();
      rotate(radians(angle + offset));
      drawFractal(len * 0.6, weight * 0.7);
    pop();  
    
    drawFractal(len * 0.5, weight * 0.4);
  }
  
}