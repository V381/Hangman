"use strict";
var GenerateAlphabet = (function () {
    function GenerateAlphabet() {
        this.getAlphabetEl = document.querySelector('.alphabet');
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
    }
    GenerateAlphabet.prototype.generateAlphabetButtons = function () {
        this.getAlphabetEl.innerHTML = "";
        for (var i = 0; i < this.alphabet.length; i++) {
            var button = document.createElement('button');
            button.innerHTML = this.alphabet[i];
            this.getAlphabetEl.appendChild(button);
        }
    };
    return GenerateAlphabet;
}());
exports.GenerateAlphabet = GenerateAlphabet;
