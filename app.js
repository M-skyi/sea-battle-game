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
            let ship = this.ships[i];
            let indexGuess = ship.locations.indexOf(guess);
            if (indexGuess >= 0) {
                ship.hits[indexGuess] = "hit";
                view.displayHit(guess);
                view.displayMessage("hit")
                if (this.isSunk(ship)) {
                    this.shipsSunk++
                    if (this.shipsSunk === 1) {
                        view.displayMessage(`You sank ${this.shipsSunk} my ship !`)
                    }
                    if (this.shipsSunk > 1) {
                        view.displayMessage(`You sank ${this.shipsSunk} of my ships !`)
                    }
                    if (this.shipsSunk === 3) {
                        view.displayMessage(`You sank ${this.shipsSunk} of my ships! GAME OVER`)
                    }
                }
                return true
            }if (indexGuess < 0 && indexGuess !== 0 ) {
                view.displayMiss(guess)
                view.displayMessage("miss")
            }
        }
        return false
    },
    isSunk: function (ship) {
        for (let i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false
            }
        }
        return true
    }
}
model.fire("30")
model.fire("31")
model.fire("32")
model.fire("33")




