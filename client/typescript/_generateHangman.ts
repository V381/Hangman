import { CheckIfGameIsLost } from './_checkIfGameIsLost.js';
import { CheckIfGameWon } from './_checkIfGameWon.js';

export class GenerateHangman {
    getHangman = document.querySelector('.hang-rope__hangman').children;
    // hangManBodyParts : number = 0;

    checkIfGameIsLost = new CheckIfGameIsLost();

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
                this.getHangman[hangManBodyCounter].setAttribute('style', 'opacity: 1');
                hangManBodyCounter++;
            }
            if(hangManBodyCounter === 6){
                this.checkIfGameIsLost.showLoseNotice();
            }

        }, 100)
    }

    preventNoticeOnWrongButton(){
        if(hangManBodyCounter === 6){
            hangManBodyCounter = 0;
        }
    }

}
