"use strict";
var _checkIfGameIsLost_js_1 = require('./_checkIfGameIsLost.js');
var GenerateHangman = (function () {
    function GenerateHangman() {
        this.getHangman = document.querySelector('.hang-rope__hangman').children;
        // hangManBodyParts : number = 0;
        this.checkIfGameIsLost = new _checkIfGameIsLost_js_1.CheckIfGameIsLost();
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
                _this.getHangman[hangManBodyCounter].setAttribute('style', 'opacity: 1');
                hangManBodyCounter++;
            }
            if (hangManBodyCounter === 6) {
                _this.checkIfGameIsLost.showLoseNotice();
            }
        }, 100);
    };
    GenerateHangman.prototype.preventNoticeOnWrongButton = function () {
        if (hangManBodyCounter === 6) {
            hangManBodyCounter = 0;
        }
    };
    return GenerateHangman;
}());
exports.GenerateHangman = GenerateHangman;
