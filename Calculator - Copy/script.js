"use strict";

const buttons = document.querySelectorAll("#btn");
let displayEl = document.querySelector(".display");
let display = document.getElementById("display");
let num, num1, num2, op, opCheck, res;
let dot;

function init() {
  displayEl.textContent = "";
  num = num1 = num2 = op = res = opCheck = "";
  // num2Input = true;
}

function getNum(button) {
  if (
    !(
      button === "=" ||
      button === "+" ||
      button === "-" ||
      button === "*" ||
      button === "/"
    )
  ) {
    if (button === "." && num.includes(".") > 0) {
      return num;
    }

    num += button;
    return num;
  }
}

//

function calc(num1, num2, op) {
  switch (op) {
    case "+":
      op = "";
      return num1 + num2;
      break;
    case "-":
      op = "";
      return num1 - num2;
      break;
    case "*":
      op = "";
      return num1 * num2;
      break;
    case "/":
      op = "";
      return num1 / num2;
    default:
      op = "";
      return res;
      break;
  }
}

function calculator(i) {
  // IF RES {
  //   num1 = res
  //   op = num2 = ""
  if (
    num2 &&
    (buttons[i].textContent === "=" ||
      buttons[i].textContent === "+" ||
      buttons[i].textContent === "-" ||
      buttons[i].textContent === "*" ||
      buttons[i].textContent === "/")
  ) {
    if (num2 && buttons[i].textContent === "=") {
      if (res) {
        num1 = res;
      }
      res = calc(num1, num2, op);
      displayEl.textContent += buttons[i].textContent + res;

      op = num2 = "";
    } else {
      if (!res) {
        res = num1;
      }
      res = calc(res, num2, op);
      op = buttons[i].textContent;
      displayEl.textContent += op;
      if (res) {
        num1 = "";
      }
      num2 = "";
    }
  } else if (op && op !== "=") {
    if (!num2) {
      num = "";
    }
    num2 = Number(getNum(buttons[i].textContent));

    if (num2) {
      displayEl.textContent += buttons[i].textContent;
    }
  } else if (
    num1 &&
    (buttons[i].textContent === "+" ||
      buttons[i].textContent === "-" ||
      buttons[i].textContent === "*" ||
      buttons[i].textContent === "/")
  ) {
    op = buttons[i].textContent;

    if (op !== "=") {
      displayEl.textContent += op;
    }

    if (num2) {
      num2 = "";
    }
  } else if (!res) {
    num1 = Number(getNum(buttons[i].textContent));

    if (num1) {
      displayEl.textContent += buttons[i].textContent;
    }
  }
}

init();

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    calculator(i);
    displayEl.scrollLeft = displayEl.scrollWidth;
    if (buttons[i].textContent === "CE") {
      init();
    }
  });
}
