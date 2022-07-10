export default function createKeyboardListener(document){
    const state = {
        observers: []
    }
    function subscribe(observerFunction){
        state.observers.push(observerFunction)
    }

    function notifyAll(command) {
        console.log(`Notifyng ${state.observers.length} observers`)
        for(const observerFunction of state.observers){
            observerFunction(command)
        }
    }

    window.addEventListener("keydown", handleKeyDown)
   
   function handleKeyDown(event){
    const keyPressed = event.key

    const command ={
        playerID: 'player1',
        keyPressed
    }

    notifyAll(command)
}
    return {
        subscribe
    
    }
}