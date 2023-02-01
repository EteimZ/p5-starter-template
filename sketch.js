import "./style.css"
import p5 from 'p5';

const s = p => {
  let x = 100;
  let y = 100;

  p.setup = function() {
    p.createCanvas(400, 400);
    p.background(200);
  };

  p.draw = function() {
    if (p.mouseIsPressed) {
      p.fill(0);
    } else {
      p.fill(255);
    }
    p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };
};

const P5 = new p5(s, "app"); 