export class CheckIfGameWon{
    gameWinNotice = document.querySelector('.gameNotice__win');
    letters = document.querySelector('.word-letters').children[1].children
    letterCounter : number = 0;

    checkIfAllLetersAreOnLines(letters):void{
        // Wait for letter to come to lines
        setTimeout(function () {
            if (letters.style.textIndent === "0px") {
                this.letterCounter++;
                this.showWinNotice();
            }
        }.bind(this), 100);
    }

    showWinNotice():void{
        if(this.letterCounter === this.letters.length){
            this.gameWinNotice.style.display = "block";
        }
    }



}