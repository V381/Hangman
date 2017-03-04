"use strict";
var CheckIfGameWon = (function () {
    function CheckIfGameWon() {
        this.gameWinNotice = document.querySelector('.gameNotice__win');
        this.letters = document.querySelector('.word-letters').children[1].children;
        this.letterCounter = 0;
    }
    CheckIfGameWon.prototype.checkIfAllLetersAreOnLines = function (letters) {
        // Wait for letter to come to lines
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
        }
    };
    return CheckIfGameWon;
}());
exports.CheckIfGameWon = CheckIfGameWon;
