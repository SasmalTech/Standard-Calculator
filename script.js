let buttons = document.querySelectorAll(".button");
let screen = document.querySelector(".screen");
let totalScore = 0;
let num = "";

function handleMath(num1, num2, opt) {
    if (opt === "+") {
        totalScore = num1 + num2;
    } else if (opt === "−") {
        totalScore = num1 - num2;
    } else if (opt === "×") {
        totalScore = num1 * num2;
    } else if (opt === "÷") {
        totalScore = num1 / num2;
    }
};

function clearAll() {
    screen.innerText = "0";
    num = "";
    totalScore = 0;
};

function clear() {
    let str = screen.innerText.substring(screen.innerText.length-1, screen.innerText.length)
    if (isNaN(str)) {
        opt = opt.substring(0, opt.length-1);
    } else {
        num = num.substring(0, num.length-1);
    }
    screen.innerText = screen.innerText.substring(0, screen.innerText.length-1);
};

function handleSymbol(symbol) {
    switch (symbol) {
        case "AC":
            clearAll();
            break;
        case "C":
            clear();
            break;
        case "%":
            
            break;
        case "÷":
        case "×":
        case "−":
        case "+":
            screen.innerText += symbol;
            if (num === "") {
                opt = symbol;
                break;
            }
            totalScore += Number(num);
            num = "";
            opt = symbol;
            break;
        case "=":
            handleMath(totalScore, parseInt(num), opt);
            screen.innerText = totalScore;
            num = "";
            break;
        case ".":
            screen.innerText += symbol;
            num += symbol;
            break;
    }
};

function handleNumber(btn) {
    if (screen.innerText === "0") {
        screen.innerText = "";
    }
    screen.innerText += btn;
};

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        btn = button.innerText;
        if(isNaN(btn)) {
            handleSymbol(btn);
        } else {
            num += btn;
            handleNumber(btn);
        }
    });
});
