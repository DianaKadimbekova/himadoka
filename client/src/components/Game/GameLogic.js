const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGTH = 200;

let scaleRatio = null;
let previоusTime = null;

function setScreen() {
  scaleRatio = getScaleRatio();
  canvas.width = GAME_WIDTH * scaleRatio;
  canvas.heigth = GAME_HEIGTH * scaleRatio;
}

setScreen();

function getScaleRatio() {
  const screenHeigth = Math.min(
    window.innerHeight,
    document.documentElement.clientHeight
  );

  const screenWIdth = Math.min(
    window.innerWidth,
    document.documentElement.clientWidth
  );

  if (screenWIdth / screenHeigth < GAME_WIDTH / GAME_HEIGTH) {
    return screenWIdth / GAME_WIDTH;
  } else {
    return screenHeigth / GAME_HEIGTH;
  }
}

function clearGame() {
  ctx.fillStyle = "red";
  ctx.fillReact(0, 0, canvas.width, canvas.heigth);
}

function gameLoop() {
  console.log("game");

  if (previоusTime === null) {
    previоusTime = currentTime;
    requestAnimationFrame(gameLoop);
  }
  const frameTimeDelta = currentTime - previоusTime;
  previоusTime = cirruntTime;
  clearGame();
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
