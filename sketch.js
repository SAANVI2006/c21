function setup() {
  createCanvas(800,400);
  fixed = createSprite(200,80,50,50);
  fixed.shapeColor = "pink";
  moving = createSprite(400, 80, 50, 50);
  moving.shapeColor  = "pink";
displacement = createSprite(600, 80, 50, 50);
displacement.shapeColor = "violet";
mars = createSprite(700, 80, 50, 50);
mars.shapeColor = "violet";
}

function draw() {
  background(255,255,255);
  moving.x = World.mouseX;
  moving.y = World.mouseY;
 /* if(moving.x-fixed.x < moving.width/2 + fixed.width/2 && fixed.x - moving.x < moving.width/2 + fixed.width/2 && fixed.y - moving.y < moving.height/2 + fixed.height/2 && moving.y - fixed.y < moving.height/2 + fixed.height/2)  {
    
  fixed.shapeColor = "red";
    moving.shapeColor = "red";
  }
  else{
fixed.shapeColor = "pink";
moving.shapeColor ="pink";
  }*/
 if( isTouching(mars, moving)) {
  mars.shapeColor = "red";
  moving.shapeColor = "red";

 }
 else {
  mars.shapeColor = "violet";
  moving.shapeColor ="pink";

 }
  drawSprites();
}
function isTouching(object1, object2) {
  if(object1.x-object2.x < object1.width/2 + object2.width/2 && object2.x - object1.x < object1.width/2 + object2.width/2 &&  object2.y - object1.y < object1.height/2 + object2.height/2 && object1.y - object2.y < object1.height/2 + object2.height/2)  {
return  true ;



  }
  else {
return false;

  }
}