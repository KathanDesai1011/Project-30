class Polygon{
    constructor(x, y, r) {
        var options = {
            isStatic : false,
            'restitution':0.5,
            'friction':1,
            'density':5,         
        }
        this.body = Bodies.circle(x, y, 20, options);
        this.r = r
        World.add(world, this.body);
        this.image = loadImage("polygon.png")
    }
    display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
        
    }
}