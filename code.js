function operate(x, y, operator) {
    if (typeof y != "number") {
        y = 0;
    }
    switch (operator) {
        case '+':
            return(add(x, y));
            break;
        case '-':
            return (subtract(x,y));
            break;
        case '÷':
            return (divide(x,y));
            break;
        case '×':
            return (multiply(x,y));
            break;
    }
}

function add(a,b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}


let x = "";
let y = "";
let operator = "";
let finalValue;
const screen = document.querySelector(".screen");
const numBtn = document.querySelectorAll(".textBtn");
const operatorBtn = document.querySelectorAll(".operatorBtn");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal");
const buttons = document.querySelectorAll("button");


buttons.forEach((button) => button.addEventListener("click", (e) => {
    //Numbers
    if (e.target.classList.contains("textBtn")) {
        screen.textContent += e.target.textContent;
        if (operator == "") {
            x += e.target.textContent;
            x = Number(x);
        }
        else{
            y += e.target.textContent;
            y = Number(y);
        }
    }
    //Operators
    else if(e.target.classList.contains("operatorBtn"))
    {
        if (operator == "") {
            operator = e.target.textContent;
            screen.textContent += e.target.textContent;
        }
        else{
            finalValue =  Math. round(10*operate(x, y, operator))/10;
            screen.textContent = finalValue + e.target.textContent;
            console.log("X is " + x + " Y is " + y + " Operator is " + operator);
            x = typeof finalValue == "number" ? finalValue : "";
            y = "";
            operator = e.target.textContent;
        }

        
    }
    //Clear Button
    else if(e.target.classList.contains("clear"))
    {
        screen.textContent = ""
        x = "";
        y = "";
        operator = "";
    }
    //Equal button
    else if(e.target.classList.contains("equal"))
    {
        if (screen.childNodes.length === 0) {
            screen.textContent = "";
        }
        else{
            finalValue =  Math. round(10*operate(x, y, operator))/10;
            if (finalValue == Infinity) {
                screen.textContent = "Can't divide by 0 :p";
            }
            else{
                screen.textContent = finalValue;
            }
            
            console.log("X is " + x + " Y is " + y + " Operator is " + operator);
            x = typeof finalValue == "number" ? finalValue : "";
            y = "";
            operator = "";
        }
    }
} ))


/*
Add decimal points, and backspace lols
*/