
import { GenerateAlphabet } from './_generateAlphabet.js';
import { GenerateWords } from './_generateWords.js';
import { CheckForLetters } from './_checkForLetters.js';
import { GenerateHangman} from './_generateHangman.js';
import { StartNewGame } from './_startNewGame.js';

let generateAlphabet = new GenerateAlphabet();
generateAlphabet.generateAlphabetButtons();

let generateWords = new GenerateWords();
generateWords.generateEnglishWords();

let checkForLetters = new CheckForLetters();
checkForLetters.checkForLetterMatch(); 


let generateHangman = new GenerateHangman();

let startNewGame = new StartNewGame();
startNewGame.startNewGameIfLost();
startNewGame.startNewGameIfWon();

