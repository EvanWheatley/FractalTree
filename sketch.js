var angle = PI / 4;

function setup(){
  createCanvas(500, 500);
}

function draw(){
  background(46);
  stroke(255);
  translate(250, height)
  branch(100);

}

function branch(leng){
  line(0, 0, 0, -leng),
  translate(0, -leng);
  if (leng >3){
    push();
    rotate(angle);
    branch(leng * 0.75);
    pop();
    push();
    rotate(-angle);
    branch(leng * 0.75);
    pop();
}
