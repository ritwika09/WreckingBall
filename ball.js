class ball {
    constructor(x,y,radius){
        this.radius = radius;
        var options={
            restitution:0.8,
            density:1.0,
            frictionAir:0.005
        }
        this.body= Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        //pos.x = mouseX;
        //pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS);
        stroke("black");
        fill("grey")
        ellipse(0,0,this.radius,this.radius);
        pop ();
    }
}