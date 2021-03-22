var canvas;


var form;
var bg_Img;
var short, short_Img;
var big, big_Img;
var shark, shark_Img;
var small,small_img;
var balck,balck_img;
var tall,tall_img;
var equality,eq_img;

function preload(){
  bg_Img = loadImage("stage.jpg");
  short_Img = loadImage("small1.jpg");
  big_Img = loadImage("big1.jpg");
  shark_Img = loadImage("shark1.jpg");
  small_img = loadImage("short.jpg");
  balck_img = loadImage("balck.jpg");
  tall_img = loadImage("tall.jpg");
  eq_img = loadImage("equality.jpg");

}


function setup(){
  canvas = createCanvas(400,400);
  bg=  createSprite(200,200,100,200);
  bg.addImage("bg",bg_Img);
  bg.velocityX = -1;
  bg.x = bg.width/2;
  form = new Form();
}


function draw(){
  background(220);
  if(bg.x<120){
    bg.x = bg.width/2;
  }

  form.display();
  drawSprites();
}

function Mygame(){
  /*short = createSprite(50,90,10,30);
  short.addImage("short",short_Img);
  short.scale = 0.08;

  big = createSprite(50,140,10,30);
  big.addImage("big",big_Img);
  big.velocityX = 0.5;
  big.scale = 0.2;

  shark = createSprite(200,10,20,20);
  shark.addImage("shark",shark_Img);
  shark.velocityY = 0.7;
  shark.scale = 0.1;*/
  /*this.title.html("EQUALITY IS THE SOUL OF LIBERTY....");
  this.title.position(130,50);
  textSize (20);
  fill ("darkblue");
  strokeWeight(5);
  stroke("black");
  text ("EQUALLITY IS THE SOUL OF LIBERTY....",130,50);
  text("THERE IS,INFACT,NO LIBERTY",130,80);
  text("WITHOUT IT.....",150,100);*/
  equality = createSprite(200,80);
  equality.addImage("equal",eq_img);
  equality.scale = 0.8;



}
