var acid1 = "CCGUCGUUGCGCUACAGC"
var acid2 = "CCUCGCCGGUACUUCUCG"

var arn1 = []

var chain = acid1.split(/(?=(?:...)*$)/)
chain.forEach((arn) => {
    if (arn == "UCU" || arn == "UCC" || arn == "UCA" || arn == "UCG" || arn == "AGU" || arn == "AGC") {
        arn1.push("Sérine")
    }
    if (arn == "CCU" || arn == "CCC" || arn == "CCA" || arn == "CCG") {
        arn1.push("Proline")
    }
    if (arn == "UUA" ||  arn == "UUG") {
        arn1.push("Leucine")
    }
    if (arn == "UUU" || arn == "UUC") {
        arn1.push("Phénylalaline")
    }
    if (arn == "CGU" || arn == "CGC" || arn == "CGA" || arn == "CGG" || arn == "AGA" || arn == "AGG") {
        arn1.push("Arginine")
    }
    if (arn == "UAU" || arn == "UAC") {
        arn1.push("Tyrosine")
    }
})
console.log(arn1.join("-"))



var arn2 = []

var chain = acid2.split(/(?=(?:...)*$)/)
chain.forEach((arn) => {
    if (arn == "UCU" || arn == "UCC" || arn == "UCA" || arn == "UCG" || arn == "AGU" || arn == "AGC") {
        arn2.push("Sérine")
    }
    if (arn == "CCU" || arn == "CCC" || arn == "CCA" || arn == "CCG") {
        arn2.push("Proline")
    }
    if (arn == "UUA" ||  arn == "UUG") {
        arn2.push("Leucine")
    }
    if (arn == "UUU" || arn == "UUC") {
        arn2.push("Phénylalaline")
    }
    if (arn == "CGU" || arn == "CGC" || arn == "CGA" || arn == "CGG" || arn == "AGA" || arn == "AGG") {
        arn2.push("Arginine")
    }
    if (arn == "UAU" || arn == "UAC") {
        arn2.push("Tyrosine")
    }
})
console.log(arn2.join("-"))