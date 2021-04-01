class Box{
  constructor(x,y,width,height){
    this.visibility = 225
      this.body = Bodies.rectangle(x,y,width,height)
      this.width = width
      this.height = height
      this.Image = loadImage("block.png")
      World.add(world,this.body)
      
  }
  display(){
    
  var pos = this.body.position
if(this.body.speed<3){
imageMode(CENTER)
image(this.Image,pos.x,pos.y,this.width,this.height)
}
else{
  world.remove(world,this.body)
  push()
  this.visibility = this.visibility-5
  tint(255,this.visibility)
  image(this.Image,pos.x,pos.y,this.width,this.height)
 pop()
}
  }
}