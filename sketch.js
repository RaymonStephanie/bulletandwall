var bullet, wall;

var thickness;

var speed, weight;

var deformation;

function setup() {
  createCanvas(1600,400);

  speed = Math.round(random(223,321));
  
  weight = Math.round(random(30,52));
  
  thickness = Math.round(random(22,83));
  
  bullet = createSprite(50,300,20,10);
    bullet.velocityX = speed;
    bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,windowHeight/2);
    wall.shapeColor = (80,80,80);
}

function draw() {
  background(0);
  isCollided(bullet,wall);
  drawSprites();
}