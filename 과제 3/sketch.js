let x, y;
let bg;

function setup() {
  createCanvas(600, 400);
  x = 0;
  y = 0;
  bg = false;
}

function draw() {
  if (bg === 'day') {
    background('#87CEEB');
    noStroke();
    fill(255, 0, 0);
    ellipse(550, 50, 80, 80);
  } else if (bg === 'night') {
    background('#000033');
    noStroke();
    fill(255, 255, 0);
    ellipse(50, 50, 70, 70);
  } else {
    background(220);
  }

  
  stroke(0); 
  strokeWeight(1); 
  fill(255); 

  //몸통
  strokeWeight(0);
  quad(175,320,225,320,350,350,80,350);
  quad(85,348,350,348,435,400,0,400);
  strokeWeight(1);
  fill('#F4D9CD');
  quad(175,295,225,295,225,325,175,325);
  //얼굴형
  arc(200,150,230,300,radians(350),radians(190));
  arc(200,155,235,170,radians(190),radians(350));
  arc(100,200,40,40,radians(90),radians(230));
  arc(307,195,30,35,radians(270),radians(105));
  arc(95,200,15,20,radians(90),radians(230));
  arc(307,195,15,20,radians(270),radians(105));
  arc(200,323,51,30,radians(0),radians(180));

  fill(0);
  
  //머리카락
  bezier(220,60,250,140,90,180,90,180);
  bezier(220,60,40,30,90,180,90,180);
  bezier(200,60,250,150,300,160,320,160);
  bezier(200,60,320,30,310,160,320,160);
  noFill();
  strokeWeight(5);
  bezier(230,60,200,140,230,150,150,180);
  bezier(225,60,200,140,230,150,145,180);
  bezier(220,60,200,140,220,150,140,180);
  bezier(215,60,200,140,215,150,130,180);
  bezier(210,60,200,140,210,150,125,180);
  bezier(200,60,200,140,200,150,100,180);
  bezier(190,60,200,140,200,150,100,180);
  bezier(180,60,200,140,190,150,90,180);
  bezier(230,60,240,140,250,150,320,180);
  bezier(220,60,240,140,240,150,310,180);
  bezier(210,60,240,140,220,150,300,180);
  bezier(230,60,240,140,250,150,320,160);
  bezier(230,60,240,140,250,150,320,170);
  bezier(205,60,240,140,250,150,295,180);
  bezier(220,60,225,140,230,150,235,180);
  bezier(215,60,220,140,225,150,230,180);
  bezier(210,60,215,140,220,150,225,180);
  bezier(220,60,220,140,230,150,240,180);
  bezier(230,60,230,140,230,150,235,180);
  bezier(235,60,230,140,235,150,235,180);
  bezier(230,60,225,140,240,150,235,180);
  bezier(220,60,225,120,230,150,235,180);
  bezier(220,60,225,140,230,150,235,180);
  bezier(230,60,200,140,230,150,160,180);
  bezier(230,60,200,140,230,150,155,180);
  bezier(230,60,200,140,230,150,163,180);
  bezier(235,60,200,140,230,150,165,180);
  bezier(235,60,200,140,230,150,170,180);
  bezier(240,60,200,140,230,150,175,180);
  bezier(215,60,240,140,240,150,300,180);
  bezier(210,60,240,140,240,150,290,180);
  bezier(200,60,240,140,240,150,280,180);
  bezier(195,60,240,140,240,150,275,180);
  bezier(190,60,240,140,240,150,260,180);
  //코
  strokeWeight(3);
  line(220,190,225,215);
  bezier(225,215,230,220,220,230,210,220);
  bezier(215,225,205,230,200,225,200,220);
  
  //눈
  if (mouseIsPressed) {
    stroke(0);
    strokeWeight(2);
    noFill();
    arc(160, 190, 45, 15, 0, PI);
    arc(265, 190, 40, 15, 0, PI);
  } else {
    strokeWeight(2);
    fill(255);
    ellipse(160,190,45,15);
    ellipse(265,190,40,15);
    fill(0);
    ellipse(160 + x, 190 + y, 23, 15);
    ellipse(265 + x, 190 + y, 23, 15);
    fill(255);
    strokeWeight(1);
    ellipse(165 + x, 193 + y, 5, 3);
    ellipse(265 + x, 193 + y, 5, 3);
  }

  //입
  strokeWeight(2);
  noFill();
  bezier(140,200,155,205,165,205,180,200);
  bezier(250,200,260,205,265,205,285,200);
  bezier(195,255,200,260,215,260,225,255);
  
  //점
  fill(0);
  ellipse(295,190,3,3);
  ellipse(250,250,3,3);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    x -= 2;
  } else if (keyCode === RIGHT_ARROW) {
    x += 2;
  } else if (keyCode === UP_ARROW) {
    y -= 2;
  } else if (keyCode === DOWN_ARROW) {
    y += 2;
  }

  if (key === 'r' || key === 'R') {
    bg = 'day';
  } else if (key === 't' || key === 'T') {
    bg = 'night';
  }
  if (key === 'f') {
    saveGif('과제물', 10);
  }


  x = constrain(x, -8, 8);
  y = constrain(y, -2, 2);
}