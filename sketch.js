var hero
var redArrow
var evil
var fail
var wall1
var wall2
var wall3
var wall4
var wall5
var wall6
var wall7
var wall8
var wall9
var wall10
var wall11
var wall12
var wall13
var wall14
var wall15
var wall16
var wall17
var wall18
var wall19
var wall20
var wall21
var wall22
var wall23
var wall24 
var wall25
var wall26
var wall27
var wall28
var wall29
var wall30
var wall31
var wall32
var wall33
var wall34
var wall35
var wall36
var wall37
var wall38
var wall39
var wall40
var coin1,coin2,coin3,coin4,coin5
var score = 0
var gameState= 0



function preload() {
 coinimg=loadImage("image/10coin.png");
 evilimg=loadImage("image/evil.png");
 failimg=loadImage("image/fail.png");
 heroimg=loadImage("image/hero.png");
 redArrowimg=loadImage("image/redArrow.png");
}
function setup() {
  createCanvas(400,400);
 

  wall1= createSprite(366,52,10,100);
  wall2= createSprite(100,200,10,100);
  wall3= createSprite(100,130,10,100);
  wall4= createSprite(390,49,10,100);
  wall5= createSprite(190,200,10,100);
  wall6= createSprite(206,352,10,100);
  wall7= createSprite(10,45,0,10);
  wall8= createSprite(348,98,45,10);
  wall9= createSprite(249,300,96,10);
  wall10= createSprite(300,250,110,10);
  wall11= createSprite(250,200,10,99);
  wall12= createSprite(349,349,10,135);
  wall13= createSprite(299,152,10,100);
  wall14= createSprite(99,300,110,10);
  wall15= createSprite(149,250,10,105);
  wall16= createSprite(148,50,10,100);
  wall17= createSprite(246,100,115,10);
  wall18= createSprite(3,150,120,10);
  wall19= createSprite(61,150,10,100);
  wall20= createSprite(350,150,100,10);
  wall21= createSprite(264,202,18,10);
  wall22= createSprite(250,350,98,10);
  wall23= createSprite(50,350,100,10);
  wall24= createSprite(250,50,100,10);
  wall25= createSprite(220,249,10,100);
  wall26= createSprite(125,150,50,10);
  wall27= createSprite(70,249,70,10);
  wall28= createSprite(27,76,10,100);
  wall29= createSprite(150,365,10,45);
  wall30= createSprite(380,192,10,80);
  wall31= createSprite(181,125,100,10);
  wall32= createSprite(192,274,40,10);
  wall33= createSprite(93,33,33,10);
  wall34= createSprite(200,20,100,10);
  wall35= createSprite(324,23,10,60);
  wall36= createSprite(388,318,30,10);
  wall37= createSprite(336,186,10,60);
  wall38= createSprite(24,185,10,60);
  wall39= createSprite(30,379,60,10);
  wall40= createSprite(266,285,10,20);
  redArrow= createSprite(388,318,30,10)
  redArrow.scale=0.075
  coin1 = createSprite(28,366,10,10);
  coin1.addImage(coinimg);
  coin1.scale=0.075

  coin2 = createSprite(210,150,10,10);
  coin2.addImage(coinimg);
  coin2.scale=0.075

  coin3=createSprite(200,285,10,10);
  coin3.addImage(coinimg);
  coin3.scale=0.075

  coin4=createSprite(366,280,10,10)
  coin4.addImage(coinimg);
  coin4.scale=0.075

  coin5=createSprite(380,120,10,10)
  coin5.addImage(coinimg);
  coin5.scale=0.075
 // evil = createSprite()
  redArrow.addImage(redArrowimg);
  hero = createSprite(10,20,20,20);
  hero.addImage(heroimg);
  hero.scale=0.075

}
 
function draw() {
 background(0)

 text("score:"+score,220,390)
 
 if (gameState === 0){
  if(keyDown(UP_ARROW))
  {hero.y=hero.y-2}; 
 
  if(keyDown(DOWN_ARROW))
  {hero.y=hero.y+2};
 
  if(keyDown(RIGHT_ARROW))
  {hero.x=hero.x+2};
  
  if(keyDown(LEFT_ARROW))
  {hero.x=hero.x-2};
  
    if(hero.isTouching(wall1)|| hero.isTouching(wall2)||  hero.isTouching(wall3)||  hero.isTouching(wall4 )||  hero.isTouching(wall5) || hero.isTouching(wall6)|| hero.isTouching(wall7)
    || hero.isTouching(wall8)|| hero.isTouching(wall9)|| hero.isTouching(wall10)|| hero.isTouching(wall11)|| hero.isTouching(wall12)|| hero.isTouching(wall13)|| hero.isTouching(wall14)
    || hero.isTouching(wall15)|| hero.isTouching(wall16)|| hero.isTouching(wall17)|| hero.isTouching(wall18)|| hero.isTouching(wall19)|| hero.isTouching(wall20)|| hero.isTouching(wall21)|| hero.isTouching(wall22)
    || hero.isTouching(wall23)) 
  {
      hero.x=10;
      hero.y=10;
     }

     if(hero.isTouching(coin1)|| hero.isTouching(coin2)||hero.isTouching(coin3)||hero.isTouching(coin4)|| hero.isTouching(coin5))
     {
       score  = score+1;
     }


     
     drawSprites();
  }

 
}

