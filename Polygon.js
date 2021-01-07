class Polygon{
    constructor(x, y, radius){
        var options = {
            isStatic:false,
            density : 20
            
        }

        this.x =x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("polygon.png")
        this.body = Bodies.circle(x, y, radius/2, options);
        
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius*3, this.radius*3);
        pop();
    }
}