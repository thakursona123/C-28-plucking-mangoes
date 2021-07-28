
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var tree, stone,ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;


 function preload(){
  treeimg=loadImage("images/tree.png");
	boy=loadImage("images/boy.png");
}

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(); 
  stones= new Stone(100,460,23);
	mango1 = new Mango(1100,100,30);
  mango2 = new Mango(1170,130,30);
	mango3 = new Mango(1010,140,30);
	mango4 = new Mango(1000,70,30);
	mango5 = new Mango(1100,70,30);
	mango6 = new Mango(1000,230,30);
	mango7 = new Mango(900,230,40);
	mango8 = new Mango(1140,150,40);
	mango9 = new Mango(1100,230,40);
	mango10 = new Mango(1200,200,40);
	
  attach=new Throw(stones.body,{x:100,y:465});

	tree=createSprite(775,368);
  tree.addImage(treeimg);
  tree.scale=0.42;

  boy=createSprite(160,550);
  boy.addImage(boyimg);
  boy.scale=0.125;

	Engine.run(engine);
}

function draw() {

  rectMode(CENTER);
  background(255);

  fill("black");
  textSize(18);
  

  tree.display();
  stone.display();


  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  

  stone.display();
  ground.display();
  


  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
 
}

function mouseDragged()
{
 
	Matter.Body.setPosition(stones.body, {x:mouseX, y:mouseY});
}

function mouseReleased()
{
	attach.fly();
}



function detectollision(lstone,lmango){
  if(1stone.body.position.x- 1mango.body.positio.x<1mango.diameter+1stone.diametre 
    && 1mango.body.position.x-1stone.body.position.x< 1mango.diameter+1stone.diameter 
    && 1stone.body.position.y-1mango.body.position.y<1mango.diameter+1stone.diameter
    && 1mango.body.position.y-1stone.body.position.y<1mango.diameter+1stone.diameter){
      Matter.body.setStatics(1mango.body,false);
    }
}

function KeyPressed(){
  if(keyCode===32){
    Matter.body.setPosition(stones.body,{x:100,y:465});
    attach.launch(stones.body);
  }
}


  