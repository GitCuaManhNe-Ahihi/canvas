export default function Particles() {
  const canvas = document.getElementById('canvas')! as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // eslint-disable-next-line no-use-before-define
  let particlesArray: Particle[];

  type Tmouse = {
    x: number | null;
    y: number | null;
    radius: number;
  };

  const mouse: Tmouse = {
    x: null,
    y: null,
    radius: (canvas.height / 80) * (canvas.width / 80),
  };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  class Particle {
    x: number;

    y: number;

    directionX: number;

    directionY: number;

    size: number;

    color: string;

    constructor(
      x: number,
      y: number,
      directionX: number,
      directionY: number,
      size: number,
      color: string
    ) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.color = color;
    }

    draw() {
      if (ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = `rbga(12,222,123,1)`;
        ctx.fill();
      }
    }

    update() {
      if (this.x > canvas.width || this.x < 0) {
        this.directionX = -this.directionX;
      }
      if (this.y > canvas.height || this.y < 0) {
        this.directionY = -this.directionY;
      }
      if (mouse.x && mouse.y) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + this.size) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
            this.x += 10;
          }
          if (mouse.x > this.x && this.x > this.size * 10) {
            this.x -= 10;
          }
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
            this.y += 10;
          }
          if (mouse.y > this.y && this.y > this.size * 10) {
            this.y -= 10;
          }
        }
      }
      this.x += this.directionX;
      this.y += this.directionY;
      this.draw();
    }
  }
  function connect() {
    let opacity = 1;
    for (let i = 0; i < particlesArray.length; i += 1) {
      // eslint-disable-next-line no-plusplus
      for (let j = 0; j < particlesArray.length; j++) {
        const distance =
          (particlesArray[i].x - particlesArray[j].x) *
            (particlesArray[i].x - particlesArray[j].x) +
          (particlesArray[i].y - particlesArray[j].y) *
            (particlesArray[i].y - particlesArray[j].y);
        if (Math.abs(distance) < (canvas.width / 7) * (canvas.height / 7)) {
          if (ctx) {
            opacity = 1 - distance / 20000;
            ctx.strokeStyle = `rbga(112,45,223,${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }
    }
  }

  function init() {
    particlesArray = [];
    const numberOfParticles = (canvas.height * canvas.width) / 5000;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < numberOfParticles; i++) {
      const size = Math.random() * 5 + 1;
      const x =
        Math.random() * (window.innerWidth - size * 2 - size * 2 + size * 2);
      const y =
        Math.random() * (window.innerHeight - size * 2 - size * 2 + size * 2);
      const directionX = Math.random() * 5 - 2.5;
      const directionY = Math.random() * 5 - 2.5;
      const color = '#8c5523';
      particlesArray.push(
        new Particle(x, y, directionX, directionY, size, color)
      );
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx?.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = 0; i < particlesArray.length; i += 1) {
      particlesArray[i].update();
    }
    connect();
  }

  init();
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
  });
  animate();
}
