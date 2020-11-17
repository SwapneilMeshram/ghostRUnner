var tower, towerImage;
var door, doorImage, doorGroup;
var ghost, ghostImage;
var mus_spooky;
var climber, climberImage, climberGroup;
var r;



function preload(){


  towerImage = loadImage("tower.png");
  doorImage = loadImage("door.png");
  ghostImage = loadAnimation("ghost-jumping.png", "ghost-standing.png");
  
  climberImage = loadImage("climber.png");
  
  mus_spooky = loadSound("spooky.wav");

  
  
}

function setup() {

  createCanvas(600, 600);
  
  doorGroup = new Group();
  climberGroup = new Group();
  
  
  tower = createSprite(300, 200);
  tower.addImage("tower", towerImage);
  
  ghost = createSprite(200, 200);
  ghost.addAnimation("ghost", ghostImage);
  ghost.scale = 0.4;
  
  mus_spooky.loop();

  
}

function draw() {
  background ("black");
  
  

  tower.velocityY = 6;

  if (tower.y > 600) {
    tower.y = 1;
  }
  
  
  
  if (keyDown("left_arrow")) {
    ghost.x -= 8;
    
  }
  if (keyDown("right_arrow")) {
    ghost.x += 8;
    
  }
  if (keyDown("space")) {
  ghost.velocityY = -5;
  }

  ghost.velocityY += 0.5;
  
  
  
  
  drawSprites();
  
  fdoor();
  
  if (ghost.isTouching(climberGroup)) {
    ghost.velocityY = 6;

  }
}





function fdoor() {

   r = Math.round(random(100, 500));

  if (frameCount%100==0){  
  door = createSprite(200, 10);
  door.x = r;  
  door.addImage(doorImage);
  door.velocityY = 6;
  
  door.lifetime = 100;
  doorGroup.add(door);
  
  climber = createSprite(door.x, 75);
  climber.addImage(climberImage);
  climber.velocityY = 6;
  climber.lifetime = 100;
  climberGroup.add(climber);
  
  
  
  
  door.depth = ghost.depth;
  climber.depth = ghost.depth;
  ghost.depth++;
  
  }
  
  
}