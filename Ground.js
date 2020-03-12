class Ground{
  constructor(x,y,width,height){

  var groundoptions = { 
      isStatic:true
  }

  this.groundbody= Bodies.rectangle(x,y,width,height,groundoptions)
  this.width=width;
  this.height=height;
 

  World.add(world,this.groundbody);
}
display(){
    var pos =this.groundbody.position;
    rectMode(CENTER);
    fill(249);
    rect(pos.x, pos.y, this.width, this.height);
}
}