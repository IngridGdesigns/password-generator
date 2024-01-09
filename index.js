const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const btnEl = document.getElementById("btn-el");
const firstPwd = document.getElementById("first-pwd");
const secondPwd = document.getElementById("second-pwd");
const btnClipboard = document.getElementById("btn-copy");

function getRandom(){
  let pass = [];

    for(let i = 0; i < 15; i++){
        let randomNum = Math.floor(Math.random() * characters.length) + 1;
        let randomChar = characters[randomNum];
        pass.push(randomChar);
    }
    return pass.join('');
}

btnEl.addEventListener("click", () => {
   firstPwd.textContent = getRandom();
   secondPwd.textContent = getRandom();
});


