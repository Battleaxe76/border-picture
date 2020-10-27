function preload(){

}
function setup(){
    canvas=createCanvas(600,600);
    canvas.center() 
    video=createCapture(VIDEO)
    video.hide()
}
function draw(){
image(video,0,0,600,600);
fill("blue");
rect(5,40,55,540,20);
rect(5,15,540,55,20);
rect(530,40,55,540,20);
rect(5,530,540,55,20);
fill("aqua")
circle(35,40,60);
circle(560 ,40,60);
circle(560,560,60);
circle(30,560,60);
}
function take_snapshot(){
save("MyFilterPhoto");
}
