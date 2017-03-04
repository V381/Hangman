"use strict";
var _generateHangman_js_1 = require('./_generateHangman.js');
var _checkIfGameWon_js_1 = require('./_checkIfGameWon.js');
var CheckForLetters = (function () {
    function CheckForLetters() {
        this.getButtons = document.querySelector('.alphabet').children;
        this.getLetters = document.querySelector('.word-letters__letters').children;
        this.generateHangman = new _generateHangman_js_1.GenerateHangman();
        this.checkIfGameWon = new _checkIfGameWon_js_1.CheckIfGameWon();
    }
    CheckForLetters.prototype.checkForLetterMatch = function () {
        /**
         * Add click to all buttons.
         * Convert node list of 'LI' to Array
         * If button letter matches with 'LI' add letter to the lines and set background-color green
         * If don`t set it red
         *
         *
         */
        var _this = this;
        for (var i = 0; i < this.getButtons.length; i++) {
            (function (i) {
                _this.getButtons[i].addEventListener('click', function () {
                    _this.generateHangman.showBodyParts(_this.getButtons[i]);
                    var nodeList = Array.prototype.slice.call(_this.getLetters);
                    for (var j = 0; j < nodeList.length; j++) {
                        if (_this.getButtons[i].innerHTML === nodeList[j].innerHTML) {
                            nodeList[j].style.textIndent = 0;
                            _this.getButtons[i].style.backgroundColor = 'green';
                            _this.checkIfGameWon.checkIfAllLetersAreOnLines(nodeList[j]);
                        }
                        else {
                            if (_this.getButtons[i].style.backgroundColor === 'green') {
                                continue;
                            }
                            _this.getButtons[i].style.backgroundColor = 'red';
                            _this.getButtons[i].setAttribute('disabled', 'true');
                        }
                    }
                });
            })(i);
        }
    };
    return CheckForLetters;
}());
exports.CheckForLetters = CheckForLetters;
