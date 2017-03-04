"use strict";
var _generateAlphabet_js_1 = require('./_generateAlphabet.js');
var _generateWords_js_1 = require('./_generateWords.js');
var _checkForLetters_js_1 = require('./_checkForLetters.js');
var _generateHangman_js_1 = require('./_generateHangman.js');
var _checkIfGameIsLost_js_1 = require('./_checkIfGameIsLost.js');
var StartNewGame = (function () {
    function StartNewGame() {
        this.lostButton = document.querySelector('.lost__button');
        this.winButton = document.querySelector('.win__button');
        this.gameNoticeLost = document.querySelector('.gameNotice__lost');
        this.gameNoticeWon = document.querySelector('.gameNotice__win');
        this.generateWords = new _generateWords_js_1.GenerateWords();
        this.generateAlphabet = new _generateAlphabet_js_1.GenerateAlphabet();
        this.generateHangman = new _generateHangman_js_1.GenerateHangman();
        this.checkForLetters = new _checkForLetters_js_1.CheckForLetters();
        this.checkIfGameLost = new _checkIfGameIsLost_js_1.CheckIfGameIsLost();
    }
    StartNewGame.prototype.startNewGameIfLost = function () {
        var _this = this;
        this.lostButton.addEventListener('click', function () {
            _this.gameNoticeLost.style.display = 'none;';
            _this.generateWords.generateEnglishWords();
            _this.generateAlphabet.generateAlphabetButtons();
            _this.generateHangman.hideBodyParts();
            _this.checkForLetters.checkForLetterMatch();
            _this.removeGameNoticeLost();
        });
    };
    StartNewGame.prototype.removeGameNoticeLost = function () {
        this.gameNoticeLost.removeAttribute('style');
        this.gameNoticeLost.setAttribute('display', 'none');
    };
    StartNewGame.prototype.startNewGameIfWon = function () {
        var _this = this;
        this.winButton.addEventListener('click', function () {
            _this.gameNoticeWon.style.display = 'none;';
            _this.generateWords.generateEnglishWords();
            _this.generateAlphabet.generateAlphabetButtons();
            _this.generateHangman.hideBodyParts();
            _this.checkForLetters.checkForLetterMatch();
            _this.removeGameNoticeWon();
        });
    };
    StartNewGame.prototype.removeGameNoticeWon = function () {
        this.gameNoticeWon.removeAttribute('style');
        this.gameNoticeWon.setAttribute('display', 'none');
    };
    return StartNewGame;
}());
exports.StartNewGame = StartNewGame;
