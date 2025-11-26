let startTime; 
let moving = 0; 

function setup(){
  
  createCanvas(400, 300);
  startTime = millis();
  
}

function draw() {
  let times = millis() - startTime;
  
  moving += int(random(-2, 2)); 
  moving = constrain(moving, -10, 10); 
  
  let cloud = map(times, 0, 3000, 1.0, 2.0); 
  cloud = constrain(cloud, 1.0, 2.0); 
  
  if (times > 3000){
    background('#343B62');
    fill('#FFEB3B');
    arc(0,0,100,100,radians(0),radians(90));
  } else {
    background('#03A9F4');
    fill('#FF3B3B');
    arc(0,0,100,100,radians(0),radians(90));
  }
  
  push();
  translate(moving, 0); 
  
  fill(0);
  rect(80,80,70,5);
  rect(75,85,80,35);
  rect(75,120,45,10);
  rect(68,130,73,6);
  rect(62,136,50,6);
  rect(56,142,56,6);
  rect(50,148,62,7);
  rect(30,154,82,12);
  rect(36,166,76,6);
  rect(42,172,64,6);
  rect(48,178,52,6);
  rect(53,184,20,6);
  rect(82,184,10,6);
  rect(53,190,10,7);
  rect(84,190,10,7);
  rect(53,197,15,5);
  rect(84,197,15,5);
  rect(112,148,13,6);
  rect(120,154,5,7); 
  arc(40,154,20,40,radians(90),radians(270));
  fill(255);
  arc(100,100,15,15,radians(0),radians(180));
  fill(0);
  triangle(85,85,78,98,92,98);
  arc(85,96,10,10,radians(0),radians(180));
  
  pop(); 
  
  strokeWeight(5);
  line(0,205,399,205); 
  
  fill(255);
  strokeWeight(3);
  stroke(0);
  
  arc(300, 50, 130 * cloud, 40 * cloud, radians(0), radians(180));
  arc(300, 65, 120 * cloud, 40 * cloud, radians(0), radians(180));
  arc(300, 80, 100 * cloud, 35 * cloud, radians(0), radians(180));
  arc(300, 90, 85 * cloud, 30 * cloud, radians(0), radians(180));
  arc(300, 105, 70 * cloud, 30 * cloud, radians(0), radians(180));
  arc(300, 120, 60 * cloud, 20 * cloud, radians(0), radians(180));
  arc(300, 130, 50 * cloud, 20 * cloud, radians(0), radians(180));
  arc(300, 140, 40 * cloud, 20 * cloud, radians(0), radians(180));
  arc(300, 150, 30 * cloud, 20 * cloud, radians(0), radians(180));
  arc(300, 160, 20 * cloud, 20 * cloud, radians(0), radians(180));
  triangle(85,85,78,98,92,98);

  arc(85,96,10,10,radians(0),radians(180));
  
  
  fill('#00ff00');
  triangle(200,190,180,220,220,220);
  triangle(180,190,160,220,200,220);
  triangle(160,190,140,220,180,220);
  triangle(140,190,120,220,160,220);
  triangle(220,190,200,220,240,220);
  triangle(240,190,220,220,260,220);
  triangle(260,190,240,220,280,220);
  triangle(280,190,260,220,300,220);
  triangle(300,190,280,220,320,220);
  triangle(320,190,300,220,340,220);
  triangle(340,190,320,220,360,220);
  
}
function keyPressed() {
  if (key === 'f') {
    saveGif('과제4', 10);
 }
}