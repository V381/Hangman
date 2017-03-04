import { GenerateHangman } from './_generateHangman.js';
import { CheckIfGameWon } from './_checkIfGameWon.js'

export class CheckForLetters{
    getButtons = document.querySelector('.alphabet').children;
    getLetters = document.querySelector('.word-letters__letters').children;
    generateHangman = new GenerateHangman();
    checkIfGameWon = new CheckIfGameWon();

    checkForLetterMatch():void{
        /**
         * Add click to all buttons.
         * Convert node list of 'LI' to Array
         * If button letter matches with 'LI' add letter to the lines and set background-color green
         * If don`t set it red
         * 
         * 
         */

        for(let i = 0; i < this.getButtons.length; i++){
            ((i) => {
                this.getButtons[i].addEventListener('click', () => {
                    this.generateHangman.showBodyParts(this.getButtons[i]);
                    let nodeList = Array.prototype.slice.call(this.getLetters);
                    for(let j = 0; j < nodeList.length; j++){
                        if(this.getButtons[i].innerHTML === nodeList[j].innerHTML){
                            nodeList[j].style.textIndent = 0;
                            this.getButtons[i].style.backgroundColor = 'green';
                            this.checkIfGameWon.checkIfAllLetersAreOnLines(nodeList[j]);
                        }else{
                            if(this.getButtons[i].style.backgroundColor === 'green'){
                                continue;
                            }
                            this.getButtons[i].style.backgroundColor = 'red';
                            this.getButtons[i].setAttribute('disabled', 'true');
                        }
                    }
                });
            })(i);
        }
    }

}
