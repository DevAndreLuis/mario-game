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
    }, 700);
  }
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
  console.log(marioPosition);

  if (pipePosition <= 70 && pipePosition > 0 && marioPosition < 84) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;
    mario.src = "./assets/images/game-over.png";
    mario.style.width = "50px";
    mario.style.marginLeft = "25px";

    clearInterval(loop);
  }
}, 25);
