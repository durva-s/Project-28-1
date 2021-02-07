
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree, ground,launcher;
var stone,boy,boyimage,mango1,mango2,mango3,mango4,mango5,mango6;

function preload()
{
	boyimage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200, 600);
	boy.addImage("boy", boyimage);
	boy.scale = 0.1;

	//Create the Bodies Here.
	ground = new Ground(width / 2, height, width, 50);
	

	tree = new Tree(600, 400);
	

	stone = new Stone(150, 520);
	
	launcher = new Constraint(stone.body, { x: 150, y: 510 });
	

	mango1 = new Mango(670, 140);
	

	mango2 = new Mango(575, 315);


	mango3 = new Mango(640, 190);


	mango4 = new Mango(570, 200);


	mango5 = new Mango(675, 270);
	

	mango6 = new Mango(485, 310);


	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background("cyan");


	boy.display();
	ground.display();
	tree.display();
	stone.display();
	launcher.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();

	drawSprites();

	detectColission(stone, mango1);
	detectColission(stone, mango2);
	detectColission(stone, mango3);
	detectColission(stone, mango4);
	detectColission(stone, mango5);
	detectColission(stone, mango6);

}

function keyPressed() {
	if (key == ' ') {
		Body.setPosition(stone.body, { x: 150, y: 510 });
		launcher.attach(stone.body);
	}
}


function mouseDragged() {
	if (launcher.constraint.bodyA)
		Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
	launcher.fly();
}

function detectColission(stone, mango) {
	stoneBP = stone.body.position
	mangoBP = mango.body.position

	let distance = dist(stoneBP.x, stoneBP.y, mangoBP.x, mangoBP.y);
	console.log(stone.radius);
	if (distance <= stone.radius + mango.radius) {
		Body.setStatic(mango.body, false);
	}
}