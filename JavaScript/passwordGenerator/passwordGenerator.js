// random password generator app
// get html elements
const passwordLengthInput = document.getElementById("input-passLength");
const includesLowercaseBox = document.getElementById("input-includesLowercase");
const includesUppercaseBox = document.getElementById("input-includesUppercase");
const includesNumbersBox = document.getElementById("input-includesNumbers");
const includesSymbolsBox = document.getElementById("input-includesSymbols");
const outputBox = document.getElementById("outputBox");
// declare constants
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789";
const symbols = "!@#$%&*()";

function generatePassword(){
    //console.log("DEBUG: generating password...")
    // setup
    const passwordLength = passwordLengthInput.value;
    const includesLowercase = includesLowercaseBox.checked;
    const includesUppercase = includesUppercaseBox.checked;
    const includesNumbers = includesNumbersBox.checked;
    const includesSymbols = includesSymbolsBox.checked;
    let allowedChars = "";
    let password = "";
    allowedChars += includesLowercase ? lowercase : "";
    allowedChars += includesUppercase ? uppercase : "";
    allowedChars += includesNumbers ? numbers : "";
    allowedChars += includesSymbols ? symbols : "";

    // conditionals
    if (passwordLength <= 0){
        return `Password length must be at least 1`;
    }
    if (allowedChars.length === 0){
        return `At least one set of characters need to be selected`;
    }

    // generation and output
    for(let i = 0;i<passwordLength;i++){
        const randIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randIndex];
    }
    // console.log(`DEBUG: generated password: ${password} with inputs...`);
    // console.log(`    length: ${passwordLength}\n
    // including lowercase: ${includesLowercase}\n
    // including uppercase: ${includesUppercase}\n
    // including numbers: ${includesNumbers}\n
    // including symbols: ${includesSymbols}\n`);
    return password;
}
function output(){
    outputBox.value = generatePassword();
}