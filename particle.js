class Particle {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.radius = 10;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(random(0,255),random(0,255),random(0,255));
      ellipse(0, 0, this.radius);
      pop();
    }
  };