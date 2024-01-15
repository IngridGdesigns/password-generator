const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const btnEl = document.getElementById("btn-el");
const firstPwd = document.getElementById("first-pwd");
const secondPwd = document.getElementById("second-pwd");
const btnClipboard = document.getElementById("btn-copy");
const inputLength = document.getElementById("input-length");



function getRandom(passwordLength = 15, isToggleChecked){
    let pass = [];

    for(let i = 0; i < passwordLength; i++){
        let randomNum = Math.floor(Math.random() * characters.length) + 1;
        let randomChar = characters[randomNum];
        pass.push(randomChar);
    }
    return pass.join('');
}

btnEl.addEventListener("click", () => {
    let passwordLength = inputLength.value;
  
    if (!passwordLength) {
        passwordLength = 15;
    }
    
    const isChecked = getValue();
    const arry = isInputChecked(isChecked);
    
    firstPwd.textContent = getRandom(passwordLength);
    secondPwd.textContent = getRandom(passwordLength);
});

function isInputChecked(isChecked) {
    if(!isChecked){
        console.log('not checked')
        return ['a', 'b']
    } 
    console.log('checked');
    return characters
    
}

function getValue() {
    const isChecked = document.getElementById("input-symbol").checked;

   if(isChecked){
     console.log("Input is checked");
     return true;
   } else {
     console.log("Input is NOT checked");
     return false;
   }
}

