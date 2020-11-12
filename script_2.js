console.log("Coucou toi");

function factor(number) {
  let result = number;
  if (number == 0 || number == 1) {
    return 1;
  } else if (number < 0) {
    return "Un nombre positif stp";
  } else {
    while (number > 1) {
      number--;
      result *= number;
    }
    return result;
  }
}

console.log(factor(-15));
console.log(factor(5));
