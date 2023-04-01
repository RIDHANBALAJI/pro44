var dartboard,backgroundImage
var database, gameState;
var form, player, playerCount;
var dart1,dart2,allPlayers
var player1,player2
var arrows
var players
function preload()
{
  backgroundImage=loadImage("forest.png")
  dartboard=loadImage("dart.png")

}




function setup() {
  


  canvas = createCanvas(windowWidth, windowHeight);

  arrows=createSprite()
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  angleMode(DEGREES)
  angle=15
  //backgroundImage=createImg('background.gif')

}

function draw() {


image(backgroundImage,0,0,windowWidth,windowHeight)

  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

