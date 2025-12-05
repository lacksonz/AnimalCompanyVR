// Splash fade-out + start background animation
window.addEventListener("load", () => {
  const splash = document.getElementById("splash-screen");
  const main = document.getElementById("main-screen");

  setTimeout(() => {
    splash.style.opacity = 0;
    setTimeout(() => {
      splash.style.display = "none";
      main.style.display = "block";
      startBackground();
    }, 1000);
  }, 2500);
});

// Smooth scrolling for navbar
document.querySelectorAll(".nav-tabs a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if(target){
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: "smooth"
      });
    }
  });
});

// PARTICLE BACKGROUND  
function startBackground() {
  const c = document.getElementById("bg-canvas");
  const ctx = c.getContext("2d");

  let width = c.width = window.innerWidth;
  let height = c.height = window.innerHeight;

  const particles = [];
  const count = 90;

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 1;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.25 + 0.1;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) 
        this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < count; i++) particles.push(new Particle());

  function animate() {
    ctx.fillStyle = "#0b0b0c";
    ctx.fillRect(0,0,width,height);

    particles.forEach(p => { p.update(); p.draw(); });

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener("resize", () => {
    width = c.width = window.innerWidth;
    height = c.height = window.innerHeight;
  });
}
