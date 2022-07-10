export default function createGame () {
        
    const state = {
    players:{}, 
    fruits:{},
    screen:{
        width:10,
        height:10
    }

    }

    function addPlayer(command){
        const playerID = command.playerID
        const playerX = command.playerX
        const playerY = command.playerY

        state.players[playerID] ={
            x:playerX,
            y:playerY
        }
  }

     function removePlayer(command){
         const playerID = command.playerID
        delete state.players[playerID]
   }

     function addFruits(command){
        const fruitID = command.fruitID
        const fruitX = command.fruitX
        const fruitY = command.fruitY

        state.fruits[fruitID] ={
            x:fruitX,
            y:fruitY
        }
    }

    function removeFruit(command){
        const fruitID = command.fruitID
        delete state.fruits[fruitID]
    }

    function checkForFruitColision(){
        for (const PlayerID in state.players) {
            const player = state.players[PlayerID]
            
        
         for (const fruitID in state.fruits) {
            const fruit = state.fruits[fruitID]
            
            if (fruit.x === player.x && fruit.y === player.y) {
            console.log(`COLLISION between ${PlayerID} and ${fruitID}`)
                removeFruit({fruitID: fruitID})
        }
      } 
     }   
         
 }
    

    function movePlayer(command){
        const acceptedMoves ={
            ArrowUp(player){
               if (player.y-1 >= 0) {
                player.y = player.y - 1
             }
         },

            ArrowRight(player){
                if (player.x+1 < state.screen.width) {
                player.x = player.x + 1
                }
            },
    
        ArrowDown(player){
            if (player.y+1 < state.screen.width) {
            player.y = player.y + 1
            }
        },
    
      ArrowLeft(player){
            if (player.x-1 >= 0) {
            player.x = player.x - 1
           }
       }
    
 }

    const keyPressed = command.keyPressed
    const player = state.players[command.playerID]
    const moveFunction = acceptedMoves[keyPressed]

   if(player && moveFunction){
      moveFunction(player)
      checkForFruitColision()
     } 
   }

    return{
       movePlayer,
      addPlayer,
      removePlayer,
      addFruits,
      removeFruit,
      state
    }

}