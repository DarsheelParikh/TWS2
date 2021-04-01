const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload(){
var ground
polygonImage = loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
ground = new Ground(600,390,1200,20)
stand1 = new Ground(450,290,300,20)
stand2 = new Ground(950,200,300,20)
block1 = new Box(330,259,40,40)
block2 = new Box(370,259,40,40)
block3 = new Box(410,259,40,40)
block4 = new Box(450,259,40,40)
block5 = new Box(490,259,40,40)
block6 = new Box(530,259,40,40)
block7 = new Box(570,259,40,40)
block8 = new Box(370,219,40,40)
block9 = new Box(410,219,40,40)
block10 = new Box(450,219,40,40)
block11 = new Box(490,219,40,40)
block12 = new Box(530,219,40,40)
block13 = new Box(410,179,40,40)
block14 = new Box(450,179,40,40)
block15 = new Box(490,179,40,40)
block16 = new Box(450,139,40,40)
block17 = new Box(830,169,40,40)
block18 = new Box(870,169,40,40)
block19 = new Box(910,169,40,40)
block20 = new Box(950,169.40,40)
block21 = new Box(990,169,40,40)
block22 = new Box(1030,169,40,40)
block23 = new Box(1070,169,40,40)
block24 = new Box(870,129,40,40)
block25 = new Box(910,129,40,40)
block26 = new Box(950,129,40,40)
block27 = new Box(990,129,40,40)
block28 = new Box(1030,129.40,40)
block29 = new Box(910,89,40,40)
block30 = new Box(950,89,40,40)
block31 = new Box(990,89,40,40)
block32 = new Box(950,49,40,40)
polygon = Bodies.circle(50,200,20)
World.add(world,polygon)
slingShot = new SlingShot(this.polygon,{x:100,y:200})

}
function draw(){
    background("Blue")
    ground.display();
    stand1.display();
    stand2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    fill("yellow")
    imageMode(CENTER)
    image(polygonImage,polygon.position.x, polygon.position.y, 40,40)
    slingShot.display()
    
}
function mouseDragged(){
Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
slingShot.fly()
}
function reset(){
    if(keyCode===32){
        slingShot.attach(this.polygon)
    }
}