var fixrect,movingrect;


function setup() {



  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);
fixrect = createSprite(200,200,50,100);
movingrect = createSprite(300,200,100,50);
fixrect.shapeColor = "blue";
movingrect.shapeColor = "yellow";

}

function draw() {
  background(255,255,255);  
  rectMode(CENTER);
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
if(movingrect.x-fixrect.x<movingrect.width/2+fixrect.width/2 && 
  fixrect.x-movingrect.x<movingrect.width/2+fixrect.width/2 && 
  movingrect.y-fixrect.y<movingrect.height/2+fixrect.height/2 && 
  fixrect.y-movingrect.y<movingrect.height/2+fixrect.height/2 ){
  fixrect.shapeColor = "green";

}
else {
  fixrect.shapeColor = "black";
}
  drawSprites();
}