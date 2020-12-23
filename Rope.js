class Rope{
    constructor(body1, point2){
        var options={
            bodyA: body1,
            pointB: point2,
            stiffness: 0.08,
            length:300
        }
        this.pointB=point2;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA= this.rope.bodyA.position;
        var pointB = this.pointB;      
        strokeWeight(3);
        stroke("red");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}