"use strict";
var _checkIfGameIsLost_js_1 = require('./_checkIfGameIsLost.js');
var GenerateHangman = (function () {
    function GenerateHangman() {
        this.getHangman = document.querySelector('.hang-rope__hangman').children;
        this.checkIfGameLost = new _checkIfGameIsLost_js_1.CheckIfGameIsLost();
    }
    GenerateHangman.prototype.hideBodyParts = function () {
        for (var i = 0; i < this.getHangman.length; i++) {
            this.getHangman[i].setAttribute('style', 'opacity: 0');
        }
    };
    GenerateHangman.prototype.showBodyParts = function (buttons) {
        // Wait for style to change
        var _this = this;
        setTimeout(function () {
            _this.preventNoticeOnWrongButton();
            if (buttons.style.backgroundColor === 'red') {
                _this.preventNoticeOnWrongButton();
                _this.getHangman[_this.checkIfGameLost.hangManBodyParts].setAttribute('style', 'opacity: 1');
                _this.checkIfGameLost.hangManBodyParts++;
            }
            if (_this.checkIfGameLost.hangManBodyParts === 6) {
                _this.checkIfGameLost.showLoseNotice();
            }
        }, 100);
    };
    GenerateHangman.prototype.preventNoticeOnWrongButton = function () {
        if (this.checkIfGameLost.hangManBodyParts === 6) {
            this.checkIfGameLost.hangManBodyParts = 0;
        }
    };
    return GenerateHangman;
}());
exports.GenerateHangman = GenerateHangman;
