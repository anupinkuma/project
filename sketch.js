var Monkey_01,Monkey_02,Monkey_03,Monkey_04,Monkey_05,Monkey_06,
    Monkey_07,Monkey_08,Monkey_09,Monkey_10;
var bananaGroup,bananaImage;
var jungle,jungleImage;
var stoneGroup,stoneImage;

var score;

function preload(){
  jungleImage=loadImage("jungle.jpg");
  player_running=
loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png",
"Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png",
"Monkey_10.png")
  
  bananaImage=loadImage("banana.png");
  stoneImage=loadImage("stone.png");
  
}

   

function setup() {
  createCanvas(400, 400);
  monkey=createSprite(50,180,20,50);
  monkey.addAnimation("Monkey",player_running);
  monkey.scale=0.2;
  monkey.velocityY = monkey.velocityY + 0.8
  
 
  }
  
 
  
  jungle=createSprite(200,180,400,20);
  jungle.addImage("junge",jungleImage)


function draw() {
  background(220);
  if(keyDown("space")&&trex.y>160) {
    trex.velocityY = -10;

    function spawnObstacles() {
      if(frameCount % 60 === 0) {
        var obstacle = createSprite(600,165,10,40);
        obstacle.velocityX = -4;
        
        //generate random obstacles
        var rand = Math.round(random(1,6));
        switch(rand) {
          case 1: obstacle.addImage(obstacle1);
                  break;
          case 2: obstacle.addImage(obstacle2);
                  break;
          case 3: obstacle.addImage(obstacle3);
                  break;
          case 4: obstacle.addImage(obstacle4);
                  break;
          case 5: obstacle.addImage(obstacle5);
                  break;
          case 6: obstacle.addImage(obstacle6);
                  break;
          default: break;
        }
      }
    }
  }
}
  drawSprites();
 