export class CheckIfGameWon{
    gameWinNotice = document.querySelector('.gameNotice__win');
    letters = document.querySelector('.word-letters').children[1].children
    letterCounter : number = 0;
    

    checkIfAllLetersAreOnLines(letters):void{
        // Wait for letter to come to lines
        // If textIndent is on 0, that means that letter is on line, then increase letterCounter
        // If letterCounter matches the lenght of length, we show winning notice!
        // We reset letterCounter to 0 everytime winning notice is shown to prevent Bug

        setTimeout(function () {
            if (letters.style.textIndent === "0px") {
                // this.letterCounter++;
                letterCounter++;
                this.showWinNotice();
            }
        }.bind(this), 100);
    }

    showWinNotice():void{
        if(letterCounter === this.letters.length){
            this.gameWinNotice.style.display = "block";
            letterCounter = 0;
            console.log(letterCounter);
            // this.letterCounter = 0;
        }
    }

}
