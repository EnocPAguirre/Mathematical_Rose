	var k = 5/8; 
	var slider;

function setup() {
  createCanvas(400, 400);
	slider = createSlider(1,10,4,0.1);
}

function draw() {
	k = slider.value();
  background(51);
	translate(width/2, height/2);
	
	beginShape();
	stroke(255);
	noFill();
	strokeWeight(1);
	
	for (var a = 0; a < TWO_PI * 10; a+= 0.02){
	var r = 200 * cos(k * a);
	var x = r * cos(a);
	var y = r * sin(a);
	
	vertex(x,y);
}
	endShape(CLOSE);
}