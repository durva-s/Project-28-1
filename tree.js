class Tree {
    constructor(x,y) {
        this.tree = Bodies.rectangle(x,y);
        World.add(world,this.tree);
        this.image = loadImage("tree.png");
    }
    display(){
        image(this.image,this.tree.position.x,this.tree.position.y,180,50);
    }
}