const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stick1;
var ground
var stick2
var stick3
var stick4
var stick5
var stick6
var stick7
var stick8
var stick9
var stick10
var stick11
var stick12
var stick13
var stick14
var stick15


var stick5
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    stick1= new stick(190,120,20,60);
    stick2= new stick(200,120,20,60)
    stick3= new stick (195,100,70,20)
    stick4=new stick(190,40,10,30);
    stick5=new stick(190,140,20,60);
    stick6=new stick(190,120,20,60);
    stick7=new stick(190,120,50,30);
    stick8=new stick(120,120,20,10);
    stick9=new stick(130,122,20,61);
    stick10=new stick(210,133,34,20);
    stick11=new stick(130,120,60,20);   
    stick12=new stick(160,130,32,20);
    stick13=new stick(190,120,80,62);
    stick14=new stick(190,120,200,20);
    stick15=new stick(190,180,10,1.0); 
    ground= new Ground(200,390,400,10);
}

function draw(){
    background(100);
    Engine.update(engine);
    stick1.display();
    stick2.display();
    stick3.display();
    stick4.display();
    stick5.display();
    stick6.display();
    stick7.display();
    stick8.display();
    stick9.display();
    stick10.display();
    stick11.display();
    stick12.display();
    stick13.display();
    stick14.display();
    stick15.display();
    ground.display();
   
}