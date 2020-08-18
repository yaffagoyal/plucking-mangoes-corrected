class Tree{
    constructor(x,y,width,height) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(570,400,20,350,options);
      this.width = width;
      this.height = height;
      this.x=x;
      this.y=y;
      this.image=loadImage("tree.png");
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.width, this.height);

        //rectMode(CENTER)
       // rect(pos.x,pos.y,this.width,this.height)

}
}//tree1= new Tree(550,400,300,400);