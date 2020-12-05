var score = 0;

var gameState = "serve";
function preload()
{
	spaceRangerImg = loadImage("1NOYbJA.png");
	spaceBackgroundImg = loadImage("depositphotos_3846803-Space-background.jpg");
	enemyImg = loadImage("cw3-enemyship7-3.png");
	enemyGroup = new Group();
	bulletGroup = new Group();
	bullet1Group = new Group();
}

function setup() {
	createCanvas(800, 700);

	spaceRanger = createSprite(400,550,50,50);
	spaceRanger.addImage(spaceRangerImg);
	spaceRanger.scale = 0.4;

}


function draw() {

  background(spaceBackgroundImg);
  drawSprites();
  
  	enemyship();

	if(keyDown("LEFT_ARROW")){
		spaceRanger.x-=5;
	}

	if(keyDown("RIGHT_ARROW")){
		spaceRanger.x+=5;
	}

	if(keyDown("space")){
		bullet();
	}

	for(var i = 0;i<enemyGroup.length;i++){
		if(enemyGroup.get(i).isTouching(bulletGroup)||enemyGroup.get(i).isTouching(bullet1Group)){
			enemyGroup.get(i).destroy();
			bulletGroup.destroyEach();
			bullet1Group.destroyEach();
			score = score+1;
		}
 	}
  	
	 

  	textSize(20);
  	fill("white");
	  text("Score: "+score,400,20);
	  
	
	
}

function bullet(){
	if(frameCount%9===0){
		var bullet = createSprite(spaceRanger.x-30,spaceRanger.y,10,30);
		bullet.velocityY = -6;
		bullet.shapeColor = "yellow";
		bullet.lifetime = 116.67;
		bulletGroup.add(bullet);

		var bullet1 = createSprite(spaceRanger.x+30,spaceRanger.y,10,30);
		bullet1.velocityY = -6;
		bullet1.shapeColor = "yellow";
		bullet1.lifetime = 116.67;
		bullet1Group.add(bullet1)
	}

	
}

function enemyship(){
	if(frameCount%20===0){
		enemy = createSprite(Math.round(random(10,700)),0,50,50);
		enemy.addImage(enemyImg);
		enemy.scale = 0.5;
		enemy.velocityY = 4;
		enemy.lifetime = 175;
		enemyGroup.add(enemy);
	}
   
}



