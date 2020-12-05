
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine,world;
var ground1;
var dustbin1,paper;
var dustbin_img,paperImg;

function preload()
{
  dustbin_img=loadImage("dustbinImage.png")
  paperImg = loadImage("paperImage.png")
 // this.image=loadImage("paperImage.png")
}


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
  world = engine.world;
  
 

	//Create the Bodies Here.
 

  paper=new Paper(150,320,70);

 dustbin1=new Dustbin(815,325,15,220);
 dustbin2=new Dustbin(890,392,180,15);
 dustbin3=new Dustbin(970,325,15,220);
  ground1=new Ground(600,392.5,1200,15);

  //Render.run(render);
}


function draw() {
  
  background("skyblue");

  Engine.update(engine);

  paper.display();

 image(dustbin_img,800,200,180,190);
 //image(paperImg,220,20);

 dustbin3.display();
 dustbin1.display();
 dustbin2.display();
  
  ground1.display();


}
function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Body.applyForce(paper.body,paper.body.position,{x:125,y:-125});
  }
}


