const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var rain ,drops = [];
var maxDrops = 500;
var dropSound;
var thunder1,thunder2,thunder3,thunder4;
var thunderCreatedFrame = 0;
var backgroundI

function preload(){
    backgroundI=loadImage("bg.jpg")
    dropSound=loadSound("rain.mp3")
    thunder1=loadImage("1.png")
    thunder2=loadImage("2.png")
    thunder3=loadImage("3.png")
    thunder4=loadImage("4.png")
    
}

function setup(){
   dropSound.loop()
    var canvas = createCanvas(1525,790);
    engine = Engine.create();
    world = engine.world;

    man = new Man(200,550,50,0);

    for(var i =0 ; i< maxDrops ; i++){ 
    drops.push(new Drop(random(0,1500),random(0,1500)))
    }
    
}

function draw(){
    Engine.update(engine);
    background(backgroundI);
    if(frameCount > 5)
   { 
       for(var i =0 ; i < drops.length ; i++)
       { 
         drops[i].display();
         drops[i].update()
       } 
    
    }   
    rand = Math.round(random(1,4));
      if(frameCount%300===0){
          thunderCreatedFrame=frameCount;
          var thun = createSprite(random(1000,370), random(10,20), 10, 10);
          
          thun.lifetime=10
          switch(rand){
              case 1: thun.addImage(thunder1);
              break;
              case 2: thun.addImage(thunder2);
              break; 
              case 3: thun.addImage(thunder3);
              break;
              case 4: thun.addImage(thunder4);
              break;
              default: break;
          }
          thun.scale = random(0.3,0.5)
      }
  

  man.display();
  drawSprites()

}

