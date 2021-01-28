class Man{
    constructor(x, y,width,height){
        var options = { 
        'isStatic': true
        }
        this.man= Bodies.circle(x, y,50,options);
        this.radius=50
        this.width=width
        this.height=height
        this.image = loadImage("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_9.png");
        World.add(world, this.man);
    }
 
      display(){
        var pos = this.man.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y+70,300,300);
       
      }



}