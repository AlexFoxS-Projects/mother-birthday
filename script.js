let step = 1;
const audio = document.getElementById("bgMusic");

let fireworks;
setTimeout(() => {
  if (window.Fireworks) {
    const canvas = document.getElementById("fireworks-canvas");
    fireworks = new window.Fireworks(canvas, {
      hue: { min: 35, max: 55 },
      acceleration: 1.02,
      brightness: { min: 74, max: 100 },
      decay: { min: 0.02, max: 0.035 },
      delay: { min: 44.52, max: 74.52 },
      explosion: 4,
      flickering: 50,
      intensity: 16,
      friction: 0.97,
      gravity: 1.5,
      opacity: 0.7,
      particles: 30,
      traceLength: 3,
      traceSpeed: 10,
      rocketsPoint: { min: 50, max: 50 },
      lineWidth: {
        explosion: { min: 3.23, max: 5.29 },
        trace: { min: 0.1, max: 1 },
      },
      lineStyle: "round",
      mouse: { click: false, move: false, max: 1 },
    });
    fireworks.start();
  }
}, 500);

function openGift() {
  if (step !== 1) return;

  setTimeout(() => {
    audio.play().catch((err) => {
      console.log("Audio autoplay prevented:", err);
    });
  }, 300);

  setTimeout(() => {
    document.getElementById("giftBox").style.display = "none";
    document.getElementById("letter").classList.remove("is-hidden");

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: [
        "#9d7cbf",
        "#e8dff5",
        "#fef9f3",
        "#FFD700",
        "#FF6347",
        "#FF1493",
      ],
    });
  }, 600);

  step = 2;
}

function openLetter() {
  if (step !== 2) return;

  const letter = document.getElementById("letter");
  const poem = document.getElementById("poem");
  letter.classList.add("is-opening");

  setTimeout(() => {
    letter.classList.add("is-hidden");
    letter.classList.remove("is-opening");
    poem.classList.add("is-active");
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: [
        "#9d7cbf",
        "#e8dff5",
        "#fef9f3",
        "#FFD700",
        "#FF6347",
        "#FF1493",
      ],
    });
  }, 500);

  step = 3;
}

setInterval(() => {
  if (Math.random() > 0.7) {
    confetti({
      particleCount: 3,
      spread: 40,
      origin: { y: 0, x: Math.random() },
      colors: ["#9d7cbf", "#e8dff5", "#FFD700", "#FF6347"],
      gravity: 0.5,
      drift: Math.random() - 0.5,
    });
  }
}, 4000);
