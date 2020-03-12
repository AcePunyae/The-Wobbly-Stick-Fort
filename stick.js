class stick {
  constructor(x, y, width, height) {
    var options = {
        restitution:0.01,
        friction:0.8,
        density:3.0,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle= this.body.angle;
    push();
    translate(pos.x,pos.y);
    this.body.angle=angle
rotate(angle)
    rectMode(CENTER);
    fill(210);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
