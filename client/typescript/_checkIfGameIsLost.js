"use strict";
var CheckIfGameIsLost = (function () {
    function CheckIfGameIsLost() {
        this.hangManBodyParts = 0;
        this.gameNoticeLost = document.querySelector('.gameNotice__lost');
        this.letters = document.querySelector('.word-letters__letters').children;
    }
    CheckIfGameIsLost.prototype.showLoseNotice = function () {
        this.gameNoticeLost.style.display = "block";
        this.showMissingLetters();
    };
    CheckIfGameIsLost.prototype.showMissingLetters = function () {
        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].style.textIndent = '0px';
            this.letters[i].style.color = 'red';
        }
    };
    return CheckIfGameIsLost;
}());
exports.CheckIfGameIsLost = CheckIfGameIsLost;
