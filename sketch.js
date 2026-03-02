/*
Inspired by the classic Windows Mystify screensaver

Based on code translation from Chris DeLeon's Programming in 5 minutes: remaking “Mystify Your Mind” Windows 95-style screensaver effect
https://www.youtube.com/watch?v=-X_A1Hqj-qA
*/

let mystifies = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  strokeWeight(2);

  for (let i = 0; i < 10; i++) {
    mystify = new Mystify();
    mystifies.push(mystify);
  }
}

function draw() {
  background(0, 10);

  for (let i = 0; i < mystifies.length; i++) {
    mystifies[i].show();
    mystifies[i].move();
    mystifies[i].bounce();
  }
}

class Mystify {
  constructor() {
    this.x1 = random(width);
    this.y1 = random(height);
    this.x1speed = random(-10, 10);
    this.y1speed = random(-10, 10);
    this.x2 = random(width);
    this.y2 = random(height);
    this.x2speed = random(-10, 10);
    this.y2speed = random(-10, 10);
  }

  show() {
    line(this.x1, this.y1, this.x2, this.y2);
  }

  move() {
    this.x1 += this.x1speed;
    this.y1 += this.y1speed;
    this.x2 += this.x2speed;
    this.y2 += this.y2speed;
  }

  bounce() {
    if (this.x1 < 0 || this.x1 > width) this.x1speed *= -1;
    if (this.y1 < 0 || this.y1 > height) this.y1speed *= -1;
    if (this.x2 < 0 || this.x2 > width) this.x2speed *= -1;
    if (this.y2 < 0 || this.y2 > height) this.y2speed *= -1;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
