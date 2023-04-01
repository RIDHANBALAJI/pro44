class Dart
{
    constructor(x,y,width,height,angle)
    {
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.angle=angle
        this.dart.loadImage("dart.png")
    }

    display()
    {
        console.log(this.angle)
        if(keyIsDown(RIGHT_ARROW))
        {
            this.angle+=1
        }
        if(keyIsDown(LEFT_ARROW))
        {
            this.angle-=1
        }
        
    }
}