class Game {
    constructor() {}
  
    getState() {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function(data) {
        gameState = data.val();
      });
    }
  
    update(state)
    {
      database.ref("/").update({
        gameState:state
      })
    }
  
    start() {
      player = new Player();
      playerCount = player.getCount();
  
      form = new Form();
      form.display();
  
     dart1=createSprite(width/2+700,height/2-250,100,100)
      dart1.addImage("dart",dartboard)
     // car1.scale=0.07
     dart1.shapeColor="blue"
  
      dart2=createSprite(width/2+700,height/2+350,100,100)
      dart2.addImage("dart",dartboard)
      //car2.scale=0.07
      dart2.shapeColor="red"
  
      player1=createSprite(50,height/2-250,50,50)
      player1.shapeColor="blue"

      player2=createSprite(50,height/2+350,50,50)
      player2.shapeColor="red"
      //cars=[car1,car2]
      players=[player1,player2]
      
    }
  
    handleElements() {
      form.hide();
     // form.titleImg.position(40, 50);
      //form.titleImg.class("gameTitleAfterEffect");
    }
  
    play() {
      this.handleElements();
      
      Player.getPlayersInfo();
     
      if (allPlayers !== undefined) {
        //image(track, 0, -height * 5, width, height * 6);
  
       
     
  
        //index of the array
        var index = 0;
        for (var plr in allPlayers) {
          //add 1 to the index for every loop
          index = index + 1;
  
          //use data form the database to display the cars in x and y direction
         var x = width-allPlayers[plr].positionX;
          var y = allPlayers[plr].positionY;
  
          /*cars[index - 1].position.x = x;
          cars[index - 1].position.y = y;*/
         // players[index-1].position.x=x
         // players[index-1].position.y=y
          
          if(index=== player.index)
          {
            fill("black")
            text(allPlayers[plr].name,x,y)
       
          }
        }
  
       
        // handling keyboard events
        this.handlePlayerControls();
  
        // Finshing Line
       
      }
  
        drawSprites();
      }

      handlePlayerControls()
      {
        console.log("hello")
        if(keyIsDown (RIGHT_ARROW))

        {
          console.log(player.positionX)
          player.positionX-=10
          player.update()

        }
      }
  }
