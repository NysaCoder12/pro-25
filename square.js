class Square{
	constructor(x, y) {
          var options = {
            restitution:0.3,
	friciton:1,
	density:0.5,
          };
          this.body = Bodies.rectangle(x, y, 50, 50, options);
          this.width = 70;
          this.height = 70;
          World.add(world, this.body);
        };
        display(){
            var squarepos=this.body.position;
            translate(squarepos.x,squarepos.y)
          push();
          strokeWeight(3);
          stroke('green')
          fill('yellow')
          rectMode(CENTER)
          rect(0, 0, this.width, this.height);
          pop();
        };
    }