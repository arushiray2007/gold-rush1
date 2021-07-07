var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var runners, player1, player2,player3,player4;
var player1Img,player2Img,player3Img,player4Img,track,ground;
function preload(){
 // track=loadImage("images/track.jpg");
  ground=loadImage("images/desert image.jpg");
  player1Img=loadAnimation("images/red1.png","images/red2.png","images/red3.png","images/red4.png");
  player2Img=loadAnimation("images/black1.png","images/black2.png","images/black3.png","images/black4.png");
  player3Img=loadAnimation("images/green1.png","images/green2.png","images/green3.png","images/green4.png");
  player4Img=loadImage("images/yellow1.png","images/yellow2.png","images/yellow3.png","images/yellow4.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
