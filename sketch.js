const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
rubber=new Rubber(150,20,10,5,2)
rubber1=new Rubber(190,20,10,5,2)
rubber2=new Rubber(220,20,10,5,2)
rubber3=new Rubber(350,20,10,5,2)
square= new Square(200,200,50,50)
rect0=new Rect(250,200)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
rubber.display();
rubber1.display();
rubber2.display();
rubber3.display();  
square.display(); 
rect0.display();
 
}