
let number = prompt("Combien d'étage veux-tu?");

let blank = number - 1

for (stairs = 1; stairs <= number; stairs++) {
    string = " "
    pyramid = "#"
    console.log(string.repeat(blank) + pyramid.repeat(stairs));
    blank--
}

