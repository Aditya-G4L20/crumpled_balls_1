class Dustbin{
    constructor(x,y){
        this.x = x
        this.y = y
        this.bottombody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic: true})
        this.rightbody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic: true})
        this.leftbody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic: true})
        Matter.Body.setAngle(this.rightbody,this.angle)
        Matter.Body.setAngle(this.leftbody,this.angle)
        World.add(world,this.bottombody)
        World.add(world,this.leftbody)
        World.add(world,this.rightbody)
    }
    display(){
        var posBottom = this.bottombody.position
        var posRight = this.rightbody.position
        var posLeft = this.leftbody.position
        push()
        translate(posLeft.x, posLeft.y)
        rectMode(CENTER)
        //strokeWeight(3)
        stroke(255)
        fill(255,0,255)
        rotate(this.angle)
        rect(0,0,this.wallThickness,this.dustbinHeight)
        pop()

        push()
        translate(posRight.x, posRight.y)
        rectMode(CENTER)
        //strokeWeight(3)
        stroke(255)
        fill(255,0,255)
        rotate(-1*this.angle)
        rect(0,0,this.wallThickness,this.dustbinHeight)
        pop()

        push()
        translate(posBottom.x, posBottom.y)
        rectMode(CENTER)
        //strokeWeight(3)
        stroke(255)
        fill(255,0,255)
        rect(0,0,this.dustbinWidth,this.wallThickness)
        pop()
    }

}