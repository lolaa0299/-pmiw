let img;
let fondoNegro = false;

function preload() {
  
  img = loadImage('assets/F_10.jpg');
}

function setup() {
  createCanvas(800, 400);
  background(255);
  noStroke();
}

function draw() {
  if (fondoNegro)
    background(0);
  else
    background(255);

  image(img, 0, 0, width / 2, height);

  let columnas = 30;
  let filas = 15;

  let tamañoMax = width / columnas + 2;

  for (let i = columnas / 2; i < columnas; i++) {
    for (let j = 0; j < filas; j++) {
      let distMouse = dist(i * tamañoMax, j * tamañoMax, mouseX, mouseY);
      let tamañoCirculo = calcularTamañoCirculo(distMouse, tamañoMax);

      if (fondoNegro)
        fill(255);
      else
        fill(0);

      dibujarCirculo(i * tamañoMax, j * tamañoMax, tamañoCirculo);
    }
  }
}

function mousePressed() {
  fondoNegro = !fondoNegro;
}

function dibujarCirculo(x, y, tamaño) {
  ellipse(x, y, tamaño, tamaño);
}

function calcularTamañoCirculo(distMouse, tamañoMax) {
  return map(distMouse, 0, dist(0, 0, width, height), 0, tamañoMax) * 5;
}
