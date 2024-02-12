const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
let isJumping = false;
document.addEventListener("keydown", jump);

function jump() {
  if (!isJumping) {
    mario.classList.add("pulo");
    isJumping = true;

    setTimeout(function () {
      mario.classList.remove("pulo");
      isJumping = false;
    }, 800);
  }
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;

  if (pipePosition <= 65) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;
  }
}, 15);
