class Boy {
    constructor(x,y) {
        this.boy = Bodies.rectangle(x,y);
        World.add(world,this.boy);
        this.image = loadImage("boy.png");
    }
    display(){
        image(this.image,x,y,100,50);
    }
}