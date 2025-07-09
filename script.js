document.getElementById("toGalleryBtn").addEventListener("click", () => {
  document.getElementById("home-page").classList.add("hidden");
  document.getElementById("gallery-page").classList.remove("hidden");

  document.querySelectorAll('.photo').forEach((img, i) => {
    img.style.animationDelay = `${i * 0.3}s`;
    img.classList.add("animate");
  });
});

const emojis = ['🎊','✨','💖','🌸','🎉','💫'];
function popEmojis() {
  const e = document.createElement("div");
  e.className = "popper";
  e.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  e.style.left = Math.random() * 100 + "vw";
  e.style.top = "100vh";
  document.getElementById("emoji-poppers").appendChild(e);
  setTimeout(() => e.remove(), 4000);
}
setInterval(popEmojis, 300);

function twinkleStars() {
  const s = document.createElement("div");
  s.className = "twinkle";
  s.innerText = "✦";
  s.style.left = Math.random() * 100 + "vw";
  s.style.top = Math.random() * 100 + "vh";
  s.style.fontSize = (1 + Math.random() * 1.5) + "rem";
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 5000);
}
setInterval(twinkleStars, 700);

function dropConfetti() {
  const c = document.createElement("div");
  c.className = "confetti";
  c.innerText = "🎊";
  c.style.left = Math.random() * 100 + "vw";
  document.getElementById("home-page").appendChild(c);
  setTimeout(() => c.remove(), 3000);
}
setInterval(dropConfetti, 800);
