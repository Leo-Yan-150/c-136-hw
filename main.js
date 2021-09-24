statuss = "";
boxox = "";

function setup(){
canvas = createCanvas(480,480);
canvas.center();

video = createCapture(VIDEO);
    video.size(500,500);
    video.position(175,275);
    video.hide();
}
function draw(){
    image(video, 0, 0, 480, 480);
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects...";
    boxox = document.getElementById("idkwhatthisis").value;
}
function modelLoaded(){
    console.log("console has been loaded");
    statuss = true;
}