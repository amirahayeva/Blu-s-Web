//The setup function only happens once
var diam1 = 0;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background("#e3d4ff"); //an RGB color for the canvas' background
  //circle
  stroke("#0863ff") // an RGB color for the circle's border
    strokeWeight(5);  //5px border
  fill("#b0d8ff"); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(250,250,30,20); // center of canvas, 20px dia

  ellipse(150,250,30,20)

  triangle(200,250,300,300,100,300);

  ellipse(mouseX,mouseY,50,50);

ellipse(50,100,diam1,diam1);
  diam1 = diam1+5;
    

  
}


