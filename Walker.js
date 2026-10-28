
class Walker {

  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.1, 0.5));
    this.w = random(2, 5);
  }

  move() {
    this.pos.add(this.vel);

    if (this.pos.x > width) {
      this.pos.x = 0;
    }

    if (this.pos.x < 0) {
      this.pos.x = width;
    }

    if (this.pos.y > height) {
      this.pos.y = 0;
    }

    if (this.pos.y < 0) {
      this.pos.y = height;
    }
  }

  show() {
    noStroke();
    fill(255, 220, 100);
    circle(this.pos.x, this.pos.y, this.w);
  }
}


class Meteor {

  constructor() {
    this.pos = createVector(0, random(height));
    this.vel = createVector(10, -3);
    this.acc = createVector(0, 0.25);
    this.w = 4;
  }

  move() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  show() {
    stroke(255, 200, 80, 180);
    strokeWeight(2);

    line(
      this.pos.x,
      this.pos.y,
      this.pos.x - this.vel.x * 3,
      this.pos.y - this.vel.y * 3
    );

    noStroke();
    fill(255, 245, 180);
    circle(this.pos.x, this.pos.y, this.w);
  }
}
