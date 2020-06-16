                                                                                           var ball,img,paddle;

function preload() {
  
  ballimg = loadImage("ball.png");
  
  paddleimg = loadImage("paddle.png");
  
}
function setup() {
  createCanvas(400, 400);
  
  ball = createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX = 9;  
  ball.scale = 0.5;
  
  paddle = createSprite(350,200,20,100);
  paddle.addImage(paddleimg);
  paddle.scale = 0.6;
  
}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  
  //Bounce Off the Left Edge only
  
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  
  ball.bounceOff(edges[3]);
  
  ball.bounceOff(paddle,explosion);
  
  paddle.collide(edges);
  
  paddle.y = mouseY;
  
  if(keyDown(UP_ARROW))
  {paddle.velocityX = 0;
    paddle.velocityY = -2;
    
  }
  
  if(keyDown(DOWN_ARROW))
  { paddle.velocityX = 0; 
    paddle.velocityY = 2;
    
  }
  drawSprites();
  
}

function explosion()
{
  ball.velocityY=random(-8,8);
}

