import { GenerateAlphabet } from './_generateAlphabet.js';
import { GenerateWords } from './_generateWords.js';
import { CheckForLetters } from './_checkForLetters.js';
import { GenerateHangman} from './_generateHangman.js';
import { CheckIfGameIsLost } from './_checkIfGameIsLost.js';


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

    startNewGameIfLost(){
        this.lostButton.addEventListener('click', () => {
            this.gameNoticeLost.style.display = 'none;'
            this.generateWords.generateEnglishWords();
            this.generateAlphabet.generateAlphabetButtons();
            this.generateHangman.hideBodyParts();
            this.checkForLetters.checkForLetterMatch(); 
            this.removeGameNoticeLost();
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
        });
    }

    removeGameNoticeWon(){
        this.gameNoticeWon.removeAttribute('style');
        this.gameNoticeWon.setAttribute('display', 'none')
    }



}