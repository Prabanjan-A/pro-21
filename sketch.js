var canvas;
var music;
var box;
var surface1,surface2,surface3,surface4;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(1200,800);

    box = createSprite(600,600,50,50)
    box.shapeColor = "blue"
    box.velocityX = 10;
    box.velocityY = 10;


    //create 4 different surfaces
    surface1 = createSprite(90,750,300,30);
    surface1.shapeColor = "red"

    surface2 = createSprite(410,750,300,30);
    surface2.shapeColor = rgb(250,128,0);

    surface3 = createSprite(725,750,300,30);
    surface3.shapeColor = "white"

    surface4 = createSprite(1045,750,300,30);
    surface4.shapeColor = "yellow"

    //create box sprite and give velocity

}
 
function draw() {
    background(0,0,0);
    createEdgeSprites();
    box.bounceOff("edges");
    
if (surface1.isTouching(box) && box.bounceOff(surface1)) {
    box.shapeColor;
    music.play();   
}

if (surface2.isTouching(box) && box.bounceOff(surface2)) {
 box.shapeColor = rgb(250,128,0);
 
}

if (surface3.isTouching(box) && box.bounceOff(surface3)) {
 box.shapeColor = "white";
 music.stop();
    
}

if (surface4.isTouching(box) && box.bounceOff(surface4)) {
 box.shapeColor = "yellow";
 music.stop().Rest;
}
    drawSprites();

}