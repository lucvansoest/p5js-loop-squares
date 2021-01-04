let gridSize = 8;
let gridCelSize = 100;
let gridCelCounter = 0;

let beginColor;
let endColor;

function setup() {

    createCanvas(gridSize * gridCelSize, gridSize * gridCelSize);
    background(240);

    beginColor = color(random(255), random(255), random(255));
    endColor = color(random(255), random(255), random(255));

}
  
function draw() {

    rectMode(CENTER);
    angleMode(DEGREES)
    strokeWeight(2)

    for(let y = 0; y < gridSize; y++) {

        for(let x = 0; x < gridSize; x++) {

            let rectColorR = floor(map(gridCelCounter, 0, (gridSize * gridSize), red(beginColor), red(endColor)));
            let rectColorG = floor(map(gridCelCounter, 0, (gridSize * gridSize), green(beginColor), green(endColor)));
            let rectColorB = floor(map(gridCelCounter, 0, (gridSize * gridSize), blue(beginColor), blue(endColor)));

            let rectAngle = floor(map(gridCelCounter, 0, (gridSize * gridSize), 0, 45));
            console.log(rectAngle)

            let xRectCenter = (x * gridCelSize) + (gridCelSize / 2);
            let yRectCenter = (y * gridCelSize) + (gridCelSize / 2);
            let rectSize = gridCelSize / 8 * (x + 1) * 0.75;

            push();
            translate(xRectCenter, yRectCenter);
            for(let i = 0; i < 3; i++) {
                rotate(rectAngle + (i * 0.0001));
                rectSize = rectSize - (i * 5);
                if (i == 2) {
                    fill(rectColorR, rectColorG, rectColorB);
                }
                else{
                    fill(255);
                }
                rect(0, 0, rectSize, rectSize);
            }
            pop();

            gridCelCounter++;
        } 
    }

    noLoop();

}
  