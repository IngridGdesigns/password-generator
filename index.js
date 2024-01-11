const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const btnEl = document.getElementById("btn-el");
const firstPwd = document.getElementById("first-pwd");
const secondPwd = document.getElementById("second-pwd");
const btnClipboard = document.getElementById("btn-copy");
const input = document.getElementById("input-length");


function getRandom(passwordLength = 15){
  let pass = [];

    for(let i = 0; i < passwordLength; i++){
        let randomNum = Math.floor(Math.random() * characters.length) + 1;
        let randomChar = characters[randomNum];
        pass.push(randomChar);
    }
    return pass.join('');
}

btnEl.addEventListener("click", () => {
    let passwordLength = input.value;
  
    if (!passwordLength) {
        passwordLength = 15;
    }
  
    if(passwordLength < 4 || passwordLength > 20){
        passwordLength = 15;
    }
    
    firstPwd.textContent = getRandom(passwordLength);
    secondPwd.textContent = getRandom(passwordLength);
});


