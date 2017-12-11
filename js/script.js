function btnplus() {
    document.calculator.display.value +="+";
    document.calculator.display.style.textAlign="right";
}

function btnsub() {
    document.calculator.display.value +="-";
    document.calculator.display.style.textAlign="right";
}

function btnmul() {
    document.calculator.display.value +="*";
    document.calculator.display.style.textAlign="right";
}

function btnMod() {
    document.calculator.display.value +="%";
    document.calculator.display.style.textAlign="right";
}

function btndot() {
    document.calculator.display.value +=".";
    document.calculator.display.style.textAlign="right";
}

function btndiv() {
    document.calculator.display.value +="/";
    document.calculator.display.style.textAlign="right";
}

function btnclear() {
    document.calculator.display.value ="";
    document.calculator.display.style.textAlign="right";
}