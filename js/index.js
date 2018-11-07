var canvas = void 0;
var ctx = void 0;
var field = void 0;
var w = void 0,h = void 0;
var size = void 0;
var columns = void 0;
var rows = void 0;
var noiseZ = void 0;

function setup() {
  size = 20;
  noiseZ = 0;
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  reset();
  window.addEventListener("resize", reset);
}

function initField() {
  field = new Array(columns);
  for (var x = 0; x < columns; x++) {
    field[x] = new Array(columns);
    for (var y = 0; y < rows; y++) {
      field[x][y] = [0, 0];
    }
  }
}

function calculateField() {
  for (var x = 0; x < columns; x++) {
    for (var y = 0; y < rows; y++) {
      var angle = noise.simplex3(x / 50, y / 50, noiseZ) * Math.PI * 2;
      var length = noise.simplex3(x / 100 + 40000, y / 100 + 40000, noiseZ);
      field[x][y][0] = angle;
      field[x][y][1] = length;
    }
  }
}

function reset() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  noise.seed(Math.random());
  columns = Math.floor(w / size) + 1;
  rows = Math.floor(h / size) + 1;
  initField();
}

function draw() {
  requestAnimationFrame(draw);
  calculateField();
  noiseZ += 0.004;
  clear();
  drawField();
}

function clear() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, w, h);
}

function drawField() {
  for (var x = 0; x < columns; x++) {
    for (var y = 0; y < rows; y++) {
      var angle = field[x][y][0];
      var length = field[x][y][1];
      ctx.save();
      ctx.translate(x * size, y * size);
      ctx.rotate(angle);
      ctx.strokeStyle = "white";
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, size * length);
      ctx.stroke();
      ctx.restore();
    }
  }
}

setup();
draw();