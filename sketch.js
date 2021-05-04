const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var platform;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
    platform = new Platform(840,200,400,20);

    box1 = new Box(800,180,50,50);
    box2 = new Box(800,130,50,50);
    box3 = new Box(800,80,50,50);

    ball = new Ball(200,100);

    sling = new Slingshot(ball.body,{x : 200,y : 100});
}

function draw(){
    background("grey");
    Engine.update(engine);
    strokeWeight(4);

    fill(225,225,225);
    ground.display();
    
    platform.display();

    box1.display();
    box2.display();
    box3.display();

    ball.display();
    sling.display();    
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x : mouseX, y : mouseY});
}
function mouseReleased(){
    sling.fly();
}
