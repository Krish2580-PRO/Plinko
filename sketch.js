const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground
var particles = []
var plinkos = []
var divisions = []
var divisionheight = 300

function setup() {
  var canvas = createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(300,590,600,20)


}
function draw() {
  background(0);  
  Engine.update(engine);



  ground.display()

}