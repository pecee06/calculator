/* --Variables-- */

let display = document.getElementsByClassName("display")[0];

// Initial value
let string1 = "";
let string2 = "";
let operator = "";

let numKeys = document.getElementsByClassName("keys");

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");

let equal = document.getElementById("equal");
let clear = document.getElementById("all-clear");
let del = document.getElementById("delete");

/* --Functions-- */

function stringEvaluator(string1, string2, operator) {
  if (string2 !== "") {
    return Function("return " + string1 + operator + string2)();
  }
  return null;
}

function pressEqual() {
  string2 = display.textContent;
  display.textContent = stringEvaluator(string1, string2, operator);
  display.classList.remove("border");
}

function pressBack() {
  display.textContent = display.textContent.slice(
    0,
    display.textContent.length - 1
  );
  display.classList.remove("border");
}

function cal(opr) {
  operator = opr;
  string1 = display.textContent;
  display.textContent = "";
  display.classList.remove("border");
}

function add() {
  cal("+");
}
function sub() {
  cal("-");
}
function mul() {
  cal("*");
}
function div() {
  cal("/");
}

/* --Adding functionality-- */

for (let i = 0; i < numKeys.length; i++) {
  numKeys[i].addEventListener("click", () => {
    display.textContent += numKeys[i].textContent;
    display.classList.remove("border");
  });
}

document.addEventListener("keydown", (btn) => {
  let key = btn.key;
  switch (key) {
    case "Enter":
      pressEqual();
      break;
    case "Backspace":
      pressBack();
      break;
    case "+":
      add();
      break;
    case "-":
      sub();
      break;
    case "*":
      mul();
      break;
    case "/":
      div();
      break;

    default:
      if (
        key == "0" ||
        key == "1" ||
        key == "2" ||
        key == "3" ||
        key == "4" ||
        key == "5" ||
        key == "6" ||
        key == "7" ||
        key == "8" ||
        key == "9" ||
        key == "."
      ) {
        display.textContent += key;
        display.classList.remove("border");
      }
      break;
  }
});

plus.addEventListener("click", add);
minus.addEventListener("click", sub);
multiply.addEventListener("click", mul);
divide.addEventListener("click", div);

del.addEventListener("click", pressBack);
equal.addEventListener("click", pressEqual);

clear.addEventListener("click", () => {
  display.textContent = "";
  display.classList.remove("border");
});

display.addEventListener("click",()=>{
    display.classList.add("border");
})