class Block{
    constructor(x, y, width, height) {
        var options = {
          isStatic: false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png")
        this.visibility = 255;
        World.add(world, this.body);
      }
      display(){
        push();
        var angle = this.body.angle;
        var pos= this.body.position;
        translate(pos.x,pos.y);
          rotate(angle);
       
        
        if(this.body.speed < 3){
          
        imageMode(CENTER);
        image(this.image,0,0,30,40);
        }
        else{
          World.remove(world, this.body)
          push();
          this.visibility = this.visibility - 5;
          tint(255,this.visibility);
          image(this.image, 0,0, 30, 40);
          pop();
        }
        pop();
      }
}
