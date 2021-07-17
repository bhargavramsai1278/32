const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "snow1.png";

function preload() {

    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;b

}

function draw(){
    
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);
    
    fill("black");
    textSize(30);

    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
       }else if(hour==0){
         text("Time : 12 AM",100,100);
       }else{
        text("Time : "+ hour%12 + " AM", 50,100);
       }

}

async function getBackgroundImg(){


    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    
    
    hour = datetime.slice(11,13);

  
    if(hour>=04 && hour<=06 ){
        debugger;
        bg = "snow1.png";
    }else if(hour>=06 && hour<=08 ){
        debugger;
        bg = "snow2.jpg";
    }else if(hour>=08 && hour<=11 ){
        debugger;
        bg = "snow3.jpg";
    }else if(hour>=11 && hour<=13){
        debugger;
        bg = "snow4.webp";
    }else if(hour>=13 && hour<=15){
        debugger;
        bg = "snow5.webp";
    }

    
    backgroundImg = loadImage(bg);
}