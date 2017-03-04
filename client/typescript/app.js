"use strict";
var _generateAlphabet_js_1 = require('./_generateAlphabet.js');
var _generateWords_js_1 = require('./_generateWords.js');
var _checkForLetters_js_1 = require('./_checkForLetters.js');
var _generateHangman_js_1 = require('./_generateHangman.js');
var _startNewGame_js_1 = require('./_startNewGame.js');
var generateAlphabet = new _generateAlphabet_js_1.GenerateAlphabet();
generateAlphabet.generateAlphabetButtons();
var generateWords = new _generateWords_js_1.GenerateWords();
generateWords.generateEnglishWords();
var checkForLetters = new _checkForLetters_js_1.CheckForLetters();
checkForLetters.checkForLetterMatch();
var generateHangman = new _generateHangman_js_1.GenerateHangman();
var startNewGame = new _startNewGame_js_1.StartNewGame();
startNewGame.startNewGameIfLost();
startNewGame.startNewGameIfWon();
