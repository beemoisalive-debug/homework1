
let stars = [];
let meteors = [];

function setup() {
  createCanvas(5000, 5000);

  for (let i = 0; i < 120; i++) {
    stars.push(new Walker());
  }
}

function draw() {
  background(8, 10, 28);

  for (let star of stars) {
    star.move();
    star.show();
  }

  for (let i = meteors.length - 1; i >= 0; i--) {
    meteors[i].move();
    meteors[i].show();

    if (meteors[i].pos.x > width ||
        meteors[i].pos.y > height ||
        meteors[i].pos.y < 0) {
      meteors.splice(i, 1);
    }
  }
}

function mouseClicked() {
  meteors.push(new Meteor());
}
