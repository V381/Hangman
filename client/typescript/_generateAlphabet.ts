export class GenerateAlphabet{
    getAlphabetEl = document.querySelector('.alphabet');
    alphabet : string = 'abcdefghijklmnopqrstuvwxyz';
    

    generateAlphabetButtons ():void {
        this.getAlphabetEl.innerHTML = "";
        for(let i = 0; i < this.alphabet.length; i++){
            let button = document.createElement('button');
            button.innerHTML = this.alphabet[i];
            this.getAlphabetEl.appendChild(button);
        }
    }

}