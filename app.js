


let view = {
    displayMessage: function (message) {
        let gameMessage = document.querySelector(".text-result")
       return gameMessage.innerHTML = message
    },
    displayHit: function (location) {
        let gameHit = document.getElementById(location)
        gameHit.classList.add("hit")
    },
    displayMiss: function (location) {
        let gameMiss = document.getElementById(location)
        gameMiss.classList.add("miss")
    },

}
view.displayMessage("START GAME")
view.displayHit("33")
view.displayMiss("34")

