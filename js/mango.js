class mango {
	constructor(x, y) {
		var options = {
			isStatic:true,
			restitution:0,
			friction:1
	
		} 
		
		this.body = Bodies.rectangle(x, y, this.width,this.height, options);
		this.image = loadImage("images/mango.png");
		 
		World.add(world, this.body);
	}
  
  display(){
  push();
  translate(this.body.position.x,this.body.position.y,)
  rotate(this.body.angle);
   imageMode(CENTER);
	image(this.image,0,0,60,60)
	pop();
  }
  
  
  
  }