class Stone {
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.stone = Bodies.rectangle(x,y,20,20);
        World.add(world,this.stone);
        this.image = loadImage("stone.png");
    }
    display(){
        image(this.image,this.stone.position.x,this.stone.position.y,25,25);
    }
}