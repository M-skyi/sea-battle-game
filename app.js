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

// view.displayMessage("START GAME")
// view.displayHit("33")
// view.displayMiss("34")
view.displayHit("31")
view.displayHit("32")
view.displayHit("33")

let model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    ships: [{
            locations: ["31", "32", "33", ],
            hits: ["", "", "", ],
        },
        {
            locations: ["51", "52", "53", ],
            hits: ["", "", "", ],
        },
        {
            locations: ["13", "14", "15", ],
            hits: ["", "", "", ],
        },
    ],
    fire: function (guess) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i]
            let locations = ship.locations
            let hits = ship.hits
            let indexGuess = locations.indexOf(guess)
            if (locations.includes(guess) == true) {
                hits.splice(indexGuess, 1, 'hit');
            }
            console.log(hits)
        }
    }
}
model.fire("52")