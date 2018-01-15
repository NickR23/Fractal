var angle = 0;
var slider;

function setup() {
  createCanvas(400,400);
  slider = createSlider(0, PI/2, PI/4, 0.1)
}

function draw() {
	background(51);
	stroke(255);
	angle = slider.value();
	translate(200,height);
	branch(100);
}

function branch(len){
	line(0,0,0,-len);
	translate(0,-len);
	if(len > 4){
		push();
		rotate(angle);
		branch(len * 0.67);
		pop();
		push();
		rotate(-angle);
		branch(len * 0.67);
		pop();
	}
}