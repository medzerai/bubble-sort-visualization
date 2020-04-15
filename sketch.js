var nb;
var t = [];
var i;
var j;
var slider;
var vit;
function setup() {
	createCanvas(900,500);
	slider=createSlider(1 ,25,2);
    nb = Math.floor(width / 5);
	for (i = 0; i < nb; i++) {
			t[i] = Math.floor(Math.random() * height) + 1;//prompt("donner t["+i+"]:");
	}
	frameRate(50);
	i=0;
  	j=0;
}

function draw() {
	background(0);
	vit = slider.value();
	var n;
	for( n = 0; n < vit ; n++){
		stroke(255);
  		translate(1 ,height);

		if(j == nb){
			if(i == 0){
				noLoop();
			}else{
				j = 0;
				i = 0;
			}
		}else{
			if (t[j] > t[j + 1]){
				var aux = t[j + 1];
				t[j + 1] = t[j];
				t[j] = aux;
				i++;
			}
		j++;
		}
	
  		for (i = 0; i < nb; i++) {
			bar(t[i]);
		}
	}
}

function bar(lon){
	 strokeWeight(3);
 	 line(0 ,0 ,0 ,-lon );
  	 translate(5 ,0 );
}

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}