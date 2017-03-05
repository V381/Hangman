// import { GenerateAlphabet } from './_generateAlphabet.js';
// import { GenerateWords } from './_generateWords.js';
// import { CheckForLetters } from './_checkForLetters.js';
// import { GenerateHangman} from './_generateHangman.js';
// import { CheckIfGameIsLost } from './_checkIfGameIsLost.js';
// import { CheckIfGameWon } from './_checkIfGameWon.js';
// import { StartNewGame } from './_startNewGame.js';
"use strict";
// let generateAlphabet = new GenerateAlphabet();
// generateAlphabet.generateAlphabetButtons();
// let generateWords = new GenerateWords();
// generateWords.generateEnglishWords();
// let checkForLetters = new CheckForLetters();
// checkForLetters.checkForLetterMatch(); 
// let generateHangman = new GenerateHangman();
// let startNewGame = new StartNewGame();
// startNewGame.startNewGameIfLost();
// startNewGame.startNewGameIfWon();
var _generateAlphabet_js_1 = require('./_generateAlphabet.js');
var _generateWords_js_1 = require('./_generateWords.js');
var _checkForLetters_js_1 = require('./_checkForLetters.js');
var _generateHangman_js_1 = require('./_generateHangman.js');
var _checkIfGameIsLost_js_1 = require('./_checkIfGameIsLost.js');
var _checkIfGameWon_js_1 = require('./_checkIfGameWon.js');
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
        this.checkIfGameWon = new _checkIfGameWon_js_1.CheckIfGameWon();
    }
    StartNewGame.prototype.startNewGameIfLost = function () {
        var _this = this;
        this.lostButton.addEventListener('click', function () {
            _this.gameNoticeLost.style.display = 'none;';
            _this.generateAlphabet.generateAlphabetButtons();
            _this.generateWords.generateEnglishWords();
            _this.generateHangman.hideBodyParts();
            _this.checkForLetters.checkForLetterMatch();
            _this.removeGameNoticeLost();
            letterCounter = 0;
            hangManBodyCounter = 0;
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
            letterCounter = 0;
            hangManBodyCounter = 0;
        });
    };
    StartNewGame.prototype.removeGameNoticeWon = function () {
        this.gameNoticeWon.removeAttribute('style');
        this.gameNoticeWon.setAttribute('display', 'none');
    };
    StartNewGame.prototype.generateGame = function () {
        this.generateAlphabet.generateAlphabetButtons();
        this.generateWords.generateEnglishWords();
        this.generateHangman.hideBodyParts();
        this.checkForLetters.checkForLetterMatch();
        this.removeGameNoticeLost();
    };
    return StartNewGame;
}());
exports.StartNewGame = StartNewGame;
var startNewGame = new StartNewGame();
startNewGame.generateGame();
startNewGame.startNewGameIfLost();
startNewGame.startNewGameIfWon();
