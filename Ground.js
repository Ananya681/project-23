class ground {
    constructor (x,y) 
    {
var options = {
    isStatic: true
}
    }
   this.x =x
    this.y =y
    this.groundWidth =200;
    this.groundHeight =200;
    


this.leftWallBody = Bodies.rectangle(this.x-ground.width,this.groundThickness,options);
this.rightWallBody =Bodies.rectangle(this.x+ground.width,this.groundThickness,options);

World.add(World,this.leftWallBody)
World.add(World.this.rightWallBody)
}

display () {
    var posLeft = this.leftWallBody.position;
    var posRight = this.rightWallBody.position;
}
