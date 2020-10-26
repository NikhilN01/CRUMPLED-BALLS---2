
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,500,800,20)
	ball = new Ball(100,200,40,40)
	box1 = new Box(600,590,200,200)
	box2 = new Ground(500,390,20,200)
	box3 = new Ground(700,390,20,200)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
 box1.display();
 box2.display();
 box3.display();
 ball.display();

  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:70,y:-70})
	}
}



