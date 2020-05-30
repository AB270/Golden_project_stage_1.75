var bg,button,pl,nt,vr;

var road,plr,hd;
var vaccine;
var boy,note;
var bullet;
var player,virus, bgc,bgc2,vc;
var bulletGroup;
var gameState=0;
var virusGroup;


function preload(){
  bg=loadImage('images/sp.jpg');
  pl=loadImage('images/welcome.png');
  nt=loadImage('images/image.jpg');
  road=loadImage('images/daytime.png');
  plr=loadImage('images/boyLeft.png');
  vr=loadImage('images/virus.png');
  hd=loadImage('images/image.png');
  vc=loadImage('images/vc.png');

}

function setup() {
  
  createCanvas(displayWidth,displayHeight);

  bulletGroup=createGroup();
  virusGroup=createGroup();
  button=createButton("tap to continue")
  button.position(600,500);
   button.mousePressed(()=>{
    gameState=1;
    button.hide();
   })
  
  
   


}

function draw() {
  background(bg);
  
 if(gameState===1){

  


   background("white")

    boy=createSprite(100,400,10,10);
    boy.addImage(pl);
    note =createSprite(800,400,10,10);
    note.addImage(nt);
   note.scale=1.5;

   if(keyCode === 32){
      gameState=2;
     
    
     }
     if(gameState === 2){
    
    
     
      bgc=createSprite(500,500,10,10);
      bgc.addImage(road);
      bgc.scale=5.5;
      // bgc2=createSprite(-1000,500,100,100);
      // bgc2.addImage(road);
      // bgc2.scale=5.5;
      player=createSprite(1000,630,100,100);
     vaccine=createSprite(900,600,100,100);
     vaccine.addImage(vc);
     vaccine.scale=0.7;
     var r=createSprite(1010,656,15,25);
     r.shapeColor=rgb(225,85,68);
     var r2=createSprite(1010,635,15,15);
     r2.shapeColor=rgb(49,42,107);
      var hand=createSprite(997,590,10,10);
      hand.addImage(hd);
      hand.scale=1.3;
      
      player.addImage(plr);
      player.scale=0.8;
      //player.velocityX=-3;

      
      
      
      
       
    }
    
    

   }
   if (keyDown("space")){
    createBullet(vaccine.x);
    
   }
   if (keyCode===37 ) {
    
    bgc.velocityX=3;
}
if (keyCode===39 ) {
 
  bgc.velocityX=0;
}

if(frameCount %200 === 0){
  virus=createSprite(-10,570,10,10);
  virus.velocityX=3;
  virus.y=random(540,590)
  virus.addImage(vr);
  virusGroup.add(virus);
}
if (bulletGroup.isTouching(virusGroup)) {
  virusGroup.destroyEach();
  bulletGroup.destroyEach();
 
}

// if(player.x === 100){
//   var x =630
//   camera.position.x=player.x;

// }
 

  
  drawSprites();
  
  if(gameState===1){
    
    textSize(35);
    fill("red");
    text("Beware",750,300);
     textSize(15)
     fill("black")
     strokeWeight(5)
     text("Your goal is to go to the store and buy groceries for your",640,315);
     text("grandparents.On your way, you will be attacked by corona monsters.",640,330);
     text("You have to defend yourselve from the monsters and reach your goal.",640,345)
     text("Remember to collect bullets,sanitizers and masks on your way.Press",640,360);
     text("space key to shoot.Control the player with the help of arrow keys.",640,375);
     text("Press space to continue to the game.",640,390);
     textSize(35);
     fill("red");
     text("Good luck!!",750,420);
     }
  
}
function createBullet(x) {
  bullet= createSprite(100, 100, 10, 5);
  bullet.y = 600;
  bullet.x = x;                                           
  bullet.shapeColor = "turquoise";
  bullet.velocityX = -5;
  bullet.lifetime = 100;
  bulletGroup.add(bullet);
}
