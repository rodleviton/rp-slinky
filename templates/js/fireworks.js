
import anime from "animejs";

const fireworks = document.getElementById("fireworksContainer");
const ctx = fireworks.getContext("2d");
const animations = [];
const circles = [];

let canvasHeight;
let canvasWidth;
let bgColor = "#FF6138";

function Circle(opts) {
  extend(this, opts);
}

Circle.prototype.draw = function() {
  ctx.globalAlpha = this.opacity || 1;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);

  if (this.stroke) {
    ctx.strokeStyle = this.stroke.color;
    ctx.lineWidth = this.stroke.width;
    ctx.stroke();
  }
  if (this.fill) {
    ctx.fillStyle = this.fill;
    ctx.fill();
  }

  ctx.closePath();
  ctx.globalAlpha = 1;
};

function extend(a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }

  return a;
}

function calcPageFillRadius(x, y) {
  const l = Math.max(x - 0, canvasWidth - x);
  const h = Math.max(y - 0, canvasHeight - y);

  return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
}

function removeAnimation(animation) {
  const index = animations.indexOf(animation);
  if (index > -1) animations.splice(index, 1);
}

function fire() {
  bgColor = "#FFBD00";

  const currentColor = "#FFBD00";
  const nextColor = "#FFFFFF";
  const xPos = window.innerWidth / 2;
  const yPos = window.innerHeight / 2 + 300;
  const targetR = calcPageFillRadius(xPos, yPos);
  const rippleSize = Math.min(200, canvasWidth * 0.4);
  const minCoverDuration = 750;

  const pageFill = new Circle({
    x: xPos,
    y: yPos,
    r: 0,
    fill: nextColor
  });

  const fillAnimation = anime({
    targets: pageFill,
    r: targetR,
    duration: Math.max(targetR / 2, minCoverDuration),
    easing: "easeOutQuart",
    complete: function() {
      bgColor = pageFill.fill;
      removeAnimation(fillAnimation);
    }
  });

  const ripple = new Circle({
    x: xPos,
    y: yPos,
    r: 0,
    fill: currentColor,
    stroke: {
      width: 3,
      color: currentColor
    },
    opacity: 1
  });

  const rippleAnimation = anime({
    targets: ripple,
    r: rippleSize,
    opacity: 0,
    easing: "easeOutExpo",
    duration: 900,
    complete: removeAnimation
  });

  const particles = [];

  for (var i = 0; i < 32; i++) {
    const particle = new Circle({
      x: xPos,
      y: yPos,
      fill: currentColor,
      r: anime.random(24, 48)
    });

    particles.push(particle);
  }

  const particlesAnimation = anime({
    targets: particles,
    x: particle => {
      return particle.x + anime.random(rippleSize, -rippleSize);
    },
    y: particle => {
      return particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15);
    },
    r: 0,
    easing: "easeOutExpo",
    duration: anime.random(1000, 1300),
    complete: removeAnimation
  });

  animations.push(fillAnimation, rippleAnimation, particlesAnimation);
}

const animate = anime({
  duration: Infinity,
  update: function() {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    animations.forEach(function(anim) {
      anim.animatables.forEach(function(animatable) {
        animatable.target.draw();
      });
    });
  }
});

function resizeCanvas() {
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  fireworks.width = canvasWidth * devicePixelRatio;
  fireworks.height = canvasHeight * devicePixelRatio;
  ctx.scale(devicePixelRatio, devicePixelRatio);
}

function init() {
  bgColor = "#FFFFFF";

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
}

export default { init, fire };
