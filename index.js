const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a",
    "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4",
    "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*",
    "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";",
    "<", ">", ".", "?", "/"];

const btnEl = document.getElementById("btn-el");
const firstPwd = document.getElementById("first-pwd");
const secondPwd = document.getElementById("second-pwd");
const btnClipboard = document.getElementById("btn-copy");
const inputLength = document.getElementById("input-length");


function getRandom(passwordLength = 15, isCheckedArray){
    let pass = [];

    for(let i = 0; i < passwordLength; i++){
        let randomNum = Math.floor(Math.random() * isCheckedArray.length) + 1;
        let randomChar = isCheckedArray[randomNum];
        pass.push(randomChar);
    }
    return pass.join('');
}

btnEl.addEventListener("click", () => {
    let passwordLength = inputLength.value;
  
    if (!passwordLength) {
        passwordLength = 15;
    }
    
    const isChecked = getValue("input-symbol");
    const isCheckedArray = isInputChecked(isChecked);
    
    firstPwd.textContent = getRandom(passwordLength, isCheckedArray);
    secondPwd.textContent = getRandom(passwordLength, isCheckedArray);

    inputLength.value = "";
});

function isInputChecked(isChecked) {

    if(!isChecked){
        const regex = /[a-zA-Z0-9]/g;
        const filtered = characters.filter((character => character.match(regex)));
        
        return filtered
    } 
  
    return characters
}

function getValue(input) {
    const isChecked = document.getElementById(input).checked;
    let isInputChecked = isChecked ? true : false;

    return isInputChecked;
}

