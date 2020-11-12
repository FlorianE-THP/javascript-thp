user = prompt("T'as quoi?")

if (user.substr(user.length -1) == "?") {
    console.log("Ouais ouais..")
} else if (user.match(/^[A-Z]+$/)) {
   console.log("Pwouuuuah.. calme toi!") 
} else if (user.includes("Fortnite")) {
    console.log("On joue?")
} else if (user === "") {
    console.log("T'es en PLS..")
} else {
    console.log("Balek..")
}