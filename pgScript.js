const pw = document.getElementById("pw");
const copy = document.getElementById("copy");
const lenE = document.getElementById("len");
const upperE = document.getElementById("upper");
const lowerE = document.getElementById("lower");
const numberE = document.getElementById("number");
const symbolE = document.getElementById("symbol");
const generateE = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    const len = lenE.value;

    let password = "";

    if (upperE.checked) {
        password += getUppercase();
    }

    if (lowerE.checked) {
        password += getLowercase();
    }

    if (numberE.checked) {
        password += getNumber();
    }

    if (symbolE.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    pw.innerText = password;
}

function generateX() {
    const xs = [];
    if (upperE.checked) {
        xs.push(getUppercase());
    }

    if (lowerE.checked) {
        xs.push(getLowercase());
    }

    if (numberE.checked) {
        xs.push(getNumber());
    }

    if (symbolE.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

generateE.addEventListener("click", generatePassword);

copy.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pw.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});