nosex = 0;
nosey = 0;
difference = 0;
rwx = 0;
lwx = 0;

function setup(){
video = createCapture(VIDEO); 
video.size(550,500);
canvas=createCanvas(550,550);
canvas.position(580,150);
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotPoses);
}

function draw(){
background("gray");
fill("green");
stroke("gray");
square(nosex,nosey,difference)
document.getElementById("square_size").innerHTML="Length:"+difference+"px";
}

function modelloaded(){
console.log("Posenet is initialized!");
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
nosex = results[0].pose.nose.x;
nosey = results[0].pose.nose.y;
console.log("nosex="+nosex);
console.log("nosey="+nosey);
lwx = results[0].pose.leftWrist.x;
rwx = results[0].pose.rightWrist.x;
difference = floor(lwx-rwx);
console.log("leftwrist="+lwx);
console.log("rightwrist="+rwx);
console.log("diff="+difference);
}
}