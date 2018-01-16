var angle = 0;
var slider;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight-40);
  slider = createSlider(0, PI/2, PI/4, 0.01)
}

function draw() {
	background(51);
	stroke(255);
	angle = slider.value();
	translate(width / 2,height);
	branch(200);
}

function branch(len){
	line(0,0,0,-len);
	translate(0,-len);
	if(len > 4){
		push();
		//stroke('red');
		rotate(angle);
		branch(len * 0.67);
		pop();
		push();
		//stroke('blue');
		rotate(-angle);
		branch(len * 0.67);
		pop();
	}



}
