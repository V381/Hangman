import { CheckIfGameIsLost } from './_checkIfGameIsLost.js';


export class GenerateHangman {
    getHangman = document.querySelector('.hang-rope__hangman').children;
    checkIfGameLost = new CheckIfGameIsLost();

    hideBodyParts(){
        for(let i = 0; i < this.getHangman.length; i++){
            this.getHangman[i].setAttribute('style', 'opacity: 0');
        }
    }

    showBodyParts(buttons):void{
        // Wait for style to change

        
        setTimeout(() => {

            this.preventNoticeOnWrongButton();

            if(buttons.style.backgroundColor === 'red'){
                this.preventNoticeOnWrongButton();
                this.getHangman[this.checkIfGameLost.hangManBodyParts].setAttribute('style', 'opacity: 1');
                this.checkIfGameLost.hangManBodyParts++;
            }
            if(this.checkIfGameLost.hangManBodyParts === 6){
                this.checkIfGameLost.showLoseNotice();
            }

        }, 100)
    }

    preventNoticeOnWrongButton(){
        if(this.checkIfGameLost.hangManBodyParts === 6){
            this.checkIfGameLost.hangManBodyParts = 0;
        }
    }

}