const canvas = document.querySelector('canvas'),
      ctx = canvas.getContext('2d'),
      width = canvas.width = "1240",
      height = canvas.height = window.innerHeight;

let w;            
let dx;               
let totalPointsXArray;	
let theta = 0.0;  

const xspacing = 16;        
const amplitude = 55.0; 
const period = 500.0;   
const numberLines = 5;
const alpha = 0.8;

w = width + 16;
dx = (Math.PI*2 / period) * 16 ;
totalPointsXArray = new Array(Math.floor(w/xspacing));

function draw() {
      ctx.fillStyle = 'white';
      ctx.strokeStyle = "rgba(255,255,255,"+alpha+")";
      for(let i = 0; i < numberLines; i++) {
        for (let n = 0; n < totalPointsXArray.length; n++) {
          ctx.beginPath();
          ctx.ellipse(n*xspacing - i*10, height/2 + totalPointsXArray[n] - i*10, 1.2, 1.2, 0, 0, 2 * Math.PI);
          ctx.closePath();
          ctx.fill();
        }
      }
}

function animate() {

	requestAnimationFrame(animate);
	ctx.clearRect(0,0,canvas.width, canvas.height);

	theta += 0.06;

	let x = theta;
	for (let i = 0; i < totalPointsXArray.length; i++) {
		totalPointsXArray[i] = Math.sin(x)*amplitude;
		x += dx;
	}

	draw();
}

animate();