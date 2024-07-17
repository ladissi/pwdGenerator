const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function genPass(pwdChoice) {
    let pwdVal = ""
    for (let i = 0; i < 15; i++) {
        let randVal = Math.floor(Math.random()*91)
        pwdVal += characters[randVal]
    }
    return pwdVal
}

function generate() {
    document.getElementById("pwdOne").textContent = genPass()
    document.getElementById("pwdTwo").textContent = genPass()
}

function copyTextOne() {
    console.log("hit func")
    let pwdOne = document.getElementById("pwdOne").textContent
    console.log(pwdOne)
    navigator.clipboard.writeText(pwdOne);
    alert("Copied the text: " + pwdOne);
}

function copyTextTwo() {
    console.log("hit func")
    let pwdTwo = document.getElementById("pwdTwo").textContent
    navigator.clipboard.writeText(pwdTwo);
    alert("Copied the text: " + pwdTwo);
}