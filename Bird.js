class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
 this.image1=loadImage("sprites/smoke.png")
this.path=[]  
this.Visiblity = 255;
}

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

   push()
    super.display();
  if(this.body.position.x>200 && this.body.velocity.x>10){

  
    var position=[this.body.position.x,this.body.position.y]
    this.path.push(position)
  }
  this.Visiblity = this.Visiblity -1;
  tint(255,this.Visiblity);
  for(var i=0;i<this.path.length;i++){

  image(this.image1,this.path[i][0],this.path[i][1])
}
pop()
}
}
