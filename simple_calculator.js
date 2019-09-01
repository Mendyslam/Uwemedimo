// A Simple Calculator
// The purpose of this project is to build a simple calculator with four basic functions.

var displayNum = "";
var savedNum = "";
var operation = 0;
var linedOperation = 0;
var arithmeticFinished = false;

function removeDisplay() {
    // Select the calculator's display
    var display = document.getElementById("display");

    // Clear the global variables and the display
    displayNum = "";
    savedNum = "";
    operation = 0;
    linedOperation = 0;        
    display.value = displayNum;

}

function input(num) {
    // Select the calculator's display
    var display = document.getElementById("display");

    // Check if the display is empty and the number being pressed is 0
    if ((display.value == "") && num == "0") {
    // If it is, do nothing
      return;
    }
    // Check if a arithmetic has finished
    else if (arithmeticFinished == true) {
        display.value = num;
        arithmeticFinished = false;
    }
    // if neither of these is the case input the numbers as usual
    else {
      display.value += num;
    }
}

function addDecimal(dec) {
    // Select the calculator's display
    var display = document.getElementById("display");

    // Loop through the current number to make sure there isn't already a decimal
    for (i = 0; i < display.value.length; i++)
        if (display.value.charAt(i) == '.') {
            // If there is, do nothing
            return;
        }
    // If there isn't add a decimal to the end of the displayed number
        display.value += dec;
}

function createOperation(operand) {
    // Select the calculator's display
    var display = document.getElementById("display"),
            displayNum = display.value;
    // eval both the numbers to remove quotes
    // otherwise 4 + 5 will be "4" + "5" which in JS will equal 45
            evalDisplay = eval(displayNum),
            evalSaved = eval(savedNum);

    // Check if there is a lined operation
    // If there is a lined operation calculate it
    // Then set the saved number to total of the calculation       
    if (linedOperation == 0) {
        savedNum = display.value;
    }
    else if (linedOperation == 1) {
        savedNum = evalSaved + evalDisplay;
    }
    else if (linedOperation == 2) {
        savedNum = evalSaved - evalDisplay;
    }
    else if (linedOperation == 3) {
        savedNum = evalSaved * evalDisplay;
    }
    else if (linedOperation == 4) {
        savedNum = evalSaved / evalDisplay;
    }

    // Check what operand was put into the calculator
    // Then set the operation to the correct number
    if (operand == 'add') {
        operation = 1;
    }
    else if (operand == 'subtract') {
        operation = 2;
    }
    if (operand == 'multiply') {
        operation = 3;
    }
    else if (operand == 'divide') {
        operation = 4;
    }

    // Queue up an operation for enterint multiple  commands without hitting equals
    linedOperation = operation;
    // Clear the display in order to get a new number
    display.value = '';
}

function calculate() {
    // Select the calculator's display
    var display = document.getElementById("display");
            displayNum = display.value;
    var evalDisplay = eval(displayNum),
            evalSaved = eval(savedNum);

    // Do the arithmetic
    if (operation == 1) {
        displayNum = evalSaved + evalDisplay;
    }
    else if (operation == 2) {
        displayNum = evalSaved - evalDisplay;
    }
    else if (operation == 3) {
        displayNum = evalSaved * evalDisplay;
    }
    else if (operation == 4) {
        displayNum = evalSaved / evalDisplay;
    }
    // Change display to the answer
    display.value = displayNum;
    if (operation != 0)
        arithmeticFinished = true;
    // Clear all the global variables
    // Necessary in case the user wants to make a calculation using the answer
    operation = 0;
    linedOperation = 0;
    displayNum = "";
    savedNum = "";
}