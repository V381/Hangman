"use strict";
var CheckIfGameWon = (function () {
    function CheckIfGameWon() {
        this.gameWinNotice = document.querySelector('.gameNotice__win');
        this.letters = document.querySelector('.word-letters').children[1].children;
        this.letterCounter = 0;
    }
    CheckIfGameWon.prototype.checkIfAllLetersAreOnLines = function (letters) {
        // Wait for letter to come to lines
        // If textIndent is on 0, that means that letter is on line, then increase letterCounter
        // If letterCounter matches the lenght of length, we show winning notice!
        // We reset letterCounter to 0 everytime winning notice is shown to prevent Bug
        setTimeout(function () {
            if (letters.style.textIndent === "0px") {
                this.letterCounter++;
                this.showWinNotice();
            }
        }.bind(this), 100);
    };
    CheckIfGameWon.prototype.showWinNotice = function () {
        if (this.letterCounter === this.letters.length) {
            this.gameWinNotice.style.display = "block";
            this.letterCounter = 0;
        }
    };
    return CheckIfGameWon;
}());
exports.CheckIfGameWon = CheckIfGameWon;
