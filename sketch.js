var bgImage;
var sam, samImage;
var ground
var stone, stoneImg;
var stoneGroup;
var num = 0.05;


function preload(){
  gameOverimage = loadImage("gameOver.png");
  bgImage = loadImage("road.jpg");
  samImage = loadAnimation("X5Nj.gif");
  stoneImg = loadImage("rocks.png");
}

// setup is for tings which only run once
function setup() {
  createCanvas(displayWidth - 17, displayHeight - 143);
  sam = createSprite(displayWidth/2, displayHeight - 450);
  
  ground = createSprite(displayWidth/2, displayHeight - 100, displayWidth, 5);
  ground.visible = false;

  stoneGroup = new Group();
}

// to make certain things permanent
function draw() {
  background(bgImage);

  if (keyDown(RIGHT_ARROW)) {
   sam.x = sam.x + 3;
  }

  if (keyDown(LEFT_ARROW)) {
   sam.x = sam.x - 3;
  }

  if (keyDown("space")&& sam.y >= 615){
   sam.velocityY = -10;
  }

  sam.velocityY = sam.velocityY + 0.2;

  sam.collide(ground);

  console.log(sam.y);

  num = num + 0.003;

  spawnStones();
  stoneGroup.setScaleEach(num);
  drawSprites();
}

function spawnStones() {
  //write code here to spawn the clouds
  if (frameCount % 160 === 0) {
    var stone = createSprite(displayWidth/2, 175);
    stone.x = Math.round(random(displayWidth/2 - 20, displayWidth/2 + 20));
    stone.addImage(stoneImg);
    stone.scale = 0.05;
    stone.velocityY = 4;

    stone.lifetime = 160;

    //add each cloud to the group
    stoneGroup.add(stone);
  }
  
}