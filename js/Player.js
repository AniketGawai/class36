class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

 
  addPlayer(){
    if(this.index === 1){
      this.positionX = (width/2 - 100);
      }

      else{
        this.positionX = (width/2 + 100);

     }
     var playerIndex = "players/player" + this.index


          database.ref(playerIndex).set
     (
       {
         name: this.name,
         positionX : this.positionX,
         positionY : this.positionY
       }
     )


    }

}
