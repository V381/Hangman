
// import { GenerateAlphabet } from './_generateAlphabet.js';
// import { GenerateWords } from './_generateWords.js';
// import { CheckForLetters } from './_checkForLetters.js';
// import { GenerateHangman} from './_generateHangman.js';
// import { CheckIfGameIsLost } from './_checkIfGameIsLost.js';
// import { CheckIfGameWon } from './_checkIfGameWon.js';
// import { StartNewGame } from './_startNewGame.js';

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



import { GenerateAlphabet } from './_generateAlphabet.js';
import { GenerateWords } from './_generateWords.js';
import { CheckForLetters } from './_checkForLetters.js';
import { GenerateHangman} from './_generateHangman.js';
import { CheckIfGameIsLost } from './_checkIfGameIsLost.js';
import { CheckIfGameWon } from './_checkIfGameWon.js';


export class StartNewGame{
    lostButton = document.querySelector('.lost__button');
    winButton = document.querySelector('.win__button');
    gameNoticeLost = document.querySelector('.gameNotice__lost');
    gameNoticeWon = document.querySelector('.gameNotice__win');

    generateWords = new GenerateWords();
    generateAlphabet = new GenerateAlphabet();
    generateHangman = new GenerateHangman();
    checkForLetters  = new CheckForLetters();
    checkIfGameLost = new CheckIfGameIsLost();
    checkIfGameWon = new CheckIfGameWon();

    startNewGameIfLost(){
        this.lostButton.addEventListener('click', () => {
            this.gameNoticeLost.style.display = 'none;'
            this.generateAlphabet.generateAlphabetButtons();
            this.generateWords.generateEnglishWords();
            this.generateHangman.hideBodyParts();
            this.checkForLetters.checkForLetterMatch(); 
            this.removeGameNoticeLost();
            letterCounter = 0;
            hangManBodyCounter = 0;
        });
    }



    removeGameNoticeLost(){
        this.gameNoticeLost.removeAttribute('style');
        this.gameNoticeLost.setAttribute('display', 'none')
    }

    startNewGameIfWon(){
        this.winButton.addEventListener('click', () => {
            this.gameNoticeWon.style.display = 'none;'
            this.generateWords.generateEnglishWords();
            this.generateAlphabet.generateAlphabetButtons();
            this.generateHangman.hideBodyParts();
            this.checkForLetters.checkForLetterMatch(); 
            this.removeGameNoticeWon();
            letterCounter = 0;
            hangManBodyCounter = 0;
        });
    }

    removeGameNoticeWon(){
        this.gameNoticeWon.removeAttribute('style');
        this.gameNoticeWon.setAttribute('display', 'none')
    }

    generateGame():void{
        this.generateAlphabet.generateAlphabetButtons();
        this.generateWords.generateEnglishWords();
        this.generateHangman.hideBodyParts();
        this.checkForLetters.checkForLetterMatch(); 
        this.removeGameNoticeLost();
    }

}


let startNewGame = new StartNewGame();
startNewGame.generateGame();
startNewGame.startNewGameIfLost();
startNewGame.startNewGameIfWon();
