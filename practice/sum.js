let a = document.getElementById("texta");
let b = document.getElementById("textb");
let resultBox = document.getElementById("result");

document.getElementById("sum").onclick = function() {
    let sum = parseFloat(a.value) + parseFloat(b.value);
    resultBox.textContent = "SUM IS: " + sum;
}

document.getElementById("diff").onclick = function() {
    let diff = parseFloat(a.value) - parseFloat(b.value);
    resultBox.textContent = "DIFFERENCE IS: " + diff;
}

document.getElementById("mul").onclick = function() {
    let mul = parseFloat(a.value) * parseFloat(b.value);
    resultBox.textContent = "PRODUCT IS: " + mul;
}

document.getElementById("div").onclick = function() {
    let div = parseFloat(a.value) / parseFloat(b.value);
    resultBox.textContent = "QUOTIENT IS: " + div;
}
