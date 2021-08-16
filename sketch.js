var boy,leftBoundary,rightboundary
var coin,coin_img
var path,path_img


function preload(){
  //pre-load images
boyImage=loadAnimation("Runner-1.png","Runner-2.png")
pathImage=loadImage("path.png")

}


function setup(){
  createCanvas(400, 400);

  //create sprites here
  path=createSprite(200,200)
  path.addImage("path.png",pathImage)
  path.scale=1.3
  path.velocityY=5
  boy=createSprite(180,340,30,30);
  boy.addAnimation("boy",boyImage)
  boy.scale=0.050
leftBoundary=createSprite(0,0,100,800)
leftBoundary.visible=false;
rightboundary=createSprite(400,0,100,800)
rightboundary.visible=false;


}
function draw() {
  background("black"); 
  path.velocityY=5

  if(keyDown("left")){
    boy.x=boy.x-5
  }
  if(keyDown("right")){
    boy.x=boy.x+5
  }

  boy.x=World.mouseX
if(path.y>400){
path.y=height/2
}


  drawSprites()
}