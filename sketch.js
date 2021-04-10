var starImg,bgImg;
var star, starBody,fairyBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	fairyImg = loadImage("fairyImage1.png","fairyImage2.png");
	//fairySound=loadSound("sound/JoyMusic.mp3")
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
//fairySound.play();
	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	star.lifeTime=-1;

	fairy = createSprite(110,470)
	fairy.addImage(fairyImg);
	fairy.scale=0.25

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	fairyBody = Bodies.circle(110 , 470 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, fairyBody);
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

 // console.log(starBody);
keyPressed();
  //write code to stop star in the hand of fairy
  if(star.y > fairy.y && starBody.position.y > fairy.position.y){
	Matter.Body.setStatic(starBody,true);
}
console.log(fairyBody)
if(fairy.x>650){
	Matter.Body.setStatic(fairy,true);
}
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	
	
	//writw code to move fairy left and right
	if(keyCode=== LEFT_ARROW){
		fairy.x= fairy.x - 2
}
if(keyCode=== RIGHT_ARROW){
fairy.x= fairy.x + 2
}
}