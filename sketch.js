const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png";

function preload() {
      getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);
    

    // write code to display time in correct format here
      

}


async function getBackgroundImg(){

    // write code to fetch time from API
    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON=await response.json();
    var datetime = responseJSON.datetime;
    
    //change the data in JSON format
    var datetime = responseJSON.datetime;
    
    // write code to slice the datetime
    var hour = datetime.slice(11,13);
      var time=datetime.slice(14,16);
    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06){
        bg="sunrise1.png";
    } else if(hour>=06 && hour<=08){
        bg="sunrise2.png";
    } else if(hour>=08 && hour==10){
        bg="sunrise3.png";
    } else if(hour==11 && hour<=12){
        bg="sunrise4.png";
    } 
      else if(hour>=12 && hour==13){
        bg="sunrise5.png";
    } else if(hour>=14 && hour==15){
        bg="sunrise6.png";
    } 
      else if(hour>=16 && hour==17){
        bg="sunset7.png";
    } else if(hour>=18 && hour==19){
        bg="sunset8.png";
    }else if(hour>=20 && hour==21){
        bg="sunset9.png";
    } else if(hour>=22 && hour==23){
        bg="sunset10.png";
    }  else {
        bg="sunset12.png";
    }
    
    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg);
}
