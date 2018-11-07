let s = Array(625).fill();

function draw() {
  for (let i = 0; i < 50; i++){
    for (let j = 0; j < 150; j++){
      const t = (j + frameCount*3) / 6;
      const x = i + floor(sin(t) * 4);
      s[i * 1920 + j] = j == 149 ? '\n' : x > 9 ? 'x' : '.'; 
    }
  }
  a.innerText = s.join("");
}