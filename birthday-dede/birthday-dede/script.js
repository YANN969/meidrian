// Interactive Mouse Glow

document.addEventListener("mousemove", (e) => {

  const x = e.clientX;
  const y = e.clientY;

  document.body.style.background =
  `
  radial-gradient(
    circle at ${x}px ${y}px,
    rgba(255,255,255,0.4),
    transparent 30%
  ),
  linear-gradient(
    135deg,
    #ffd6e7,
    #fff6f1
  )
  `;
});

// Form Submit

const form = document.querySelector(".message-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Message sent successfully 💖");

});

// 3D TILT EFFECT

const cards = document.querySelectorAll(".card3d");

cards.forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    card.style.transform =
    `
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.05)
    `;
  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
    `
    rotateX(0)
    rotateY(0)
    scale(1)
    `;
  });

});

// MUSIC PLAYER

const music = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("musicToggle");

// autoplay saat user klik halaman

document.body.addEventListener("click", () => {

  if(music.paused){

    music.play();

    toggleBtn.classList.add("playing");
  }

}, { once:true });

toggleBtn.addEventListener("click", () => {

  if(music.paused){

    music.play();

    toggleBtn.classList.add("playing");

  } else {

    music.pause();

    toggleBtn.classList.remove("playing");
  }

});