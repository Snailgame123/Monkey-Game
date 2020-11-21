var PLAY = 1;
var END = 0;
var gameState = PLAY;

var ground,gruond2
var monkey , monkey_running
var banana ,bananaImage,bananaGroup,obstacleImage
var obstacleGroup,obstacle
var score=0

var  survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)

  ground = createSprite(100,480,400,10);
  ground.x = ground.width /2;
  
  ground2=createSprite(200,480,800,10)
  
  monkey=createSprite(50,460,30,40)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.18
  
  monkey.setCollider("rectangle",0,0,400,monkey.height);
  
  monkey.velocityY = monkey.velocityY + 0.7
  obstacleGroup=new Group()
  bananaGroup=new Group()
  
  score=0
  
}


function draw() {
  background("pink")
  text("Score: "+score,5,10)
  
  ground.velocityX=-3;
  
  if(keyDown("space")) {
        monkey.velocityY = -14;
  }
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  monkey.collide(ground)
  
  
  if(gameState === PLAY){
     
    if(keyDown("space")){
     monkey.velocityY=-14
     }
    
    monkey.velocityY=monkey.velocityY+0.8
    
    if(monkey.isTouching(bananaGroup)){
       bananaGroup.destroyEach()
       score=score+1
       }
    
    if(monkey.isTouching(obstacleGroup)){
    obstacleGroup.destroyEach()
    gameState=END
     }
    
    
     }
  
  if(gameState===END){
    
    bananaGroup.destroyEach()
    obstacleGroup.destroyEach()
    monkey.destroy()
    ground.destroy()
    ground2.destroy()
    
    
    textSize(50)
     fill("red")
     text("Game Over",205,300)
  }

  
  
  Obstacles()
  spawnBanana()
  
 drawSprites()
}


function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 160 === 0) {
    banana = createSprite(800,300,40,10);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(250,300))
    banana.scale = 0.12;
    banana.velocityX = -5;
    
    
    //giving lifetime to the variable
    banana.lifetime = 300
    bananaGroup.add(banana)
    }
  

}

function Obstacles(){
 if (frameCount % 180 === 0) {
    obstacle = createSprite(650,440,40,10);
    
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -8;
    
     //giving lifetime to the variable
    obstacle.lifetime = 230;
    obstacleGroup.add(obstacle)
    
    
    
  }

}





