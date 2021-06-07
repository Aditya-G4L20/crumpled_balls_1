
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper_obj
var dustbin_obj
var ground 

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin_obj = new Dustbin(1200, 650)
	paper_obj = new Paper(100,450, 40)
	ground = new Ground(width/2, 670, width, 20)
    var render = Render.create({
		element: document.body, 
		engine: engine,
		options: {
			width: 1200,
			height: 700,
			wireframes: false
		}
	})

	Engine.run(engine);
  Render.run(render)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper_obj.display();
  dustbin_obj.display();
  ground.display();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper_obj.body,paper_obj.body.position,{x:85, y:-85})
	}
}



