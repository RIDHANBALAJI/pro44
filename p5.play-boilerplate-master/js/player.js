class Player {
    constructor() {
      this.name = null;
      this.index = null;
      this.positionX = 0
      this.positionY = 0;
    }
  
    addPlayer() {
      var playerIndex = "players/player" + this.index;
  
      if (this.index === 1) {
        this.positionY =height/2-250
        this.positionX=width/2+300
      } else {
        this.positionY= height/2+350
        this.positionx=50
      }
  
      database.ref(playerIndex).set({
        name: this.name,
        positionX: this.positionX,
        positionY: this.positionY
      });
    }
  
    getCount() {
      var playerCountRef = database.ref("playerCount");
      playerCountRef.on("value", data => {
        playerCount = data.val();
      });
    }
  
    updateCount(count) {
      database.ref("/").update({
        playerCount: count
      });
    }
  
    static getPlayersInfo() 
    {
      var playerInforef=database.ref("players")
      playerInforef.on("value",data=>{
        allPlayers=data.val()
      })
    }
    update() {
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).update({
        positionX: this.positionX,
        positionY: this.positionY,
       
      });
    }
  }
  