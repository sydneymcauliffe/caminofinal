function setup(){
    createCanvas(800,800);
}

function draw(){
    fill(255,200,200);
    rect(400,400, 200, 200);
}

var teapot;

function setup() {
    createCanvas(100,100,WEBGL);

    teapot = loadModel('assets/teapot.obj');
}

function draw () {
    background (200);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01)
    model(teapot);
}

function setup () {
    createCanvas (800,800);
}
function draw(){
    fill (255,200,200)
    triangle (30, 75, 86, 20, 86, 75);
}
