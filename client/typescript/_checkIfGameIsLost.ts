import { GenerateHangman } from './_generateHangman.js';

export class CheckIfGameIsLost{
    gameNoticeLost = document.querySelector('.gameNotice__lost');
    letters = document.querySelector('.word-letters__letters').children;

    showLoseNotice():void{
        this.gameNoticeLost.style.display = "block";
        this.showMissingLetters();
    }

    showMissingLetters(){
        for(let i = 0; i < this.letters.length; i++){
            this.letters[i].style.textIndent = '0px';
            this.letters[i].style.color = 'red';
        }
    }

}
