const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 15 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Les frères Karamazov', id: 450911, rented: 15 },
    { title: 'Guerre et Paix', id: 748147, rented: 1 }
  
  ];
console.log("################################")
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
console.log("################################")  


let result = [];
books.forEach((book) => {
  if (book.rented !== 0) {
    result.push(true);
  } else result.push(false);
});
if (result.includes(false)) {
  console.log(false)
} else {
    console.log(true)
}

console.log("################################")
console.log("Quel est livre le plus emprunté ?")
console.log("################################")  

test = []

books.forEach(book => {
    test.push(book.rented)
    return test
});

let ok = Math.max.apply(null, test);

books.forEach(book => {
    if(book.rented === ok) {
        console.log(book.title + " " + ok)
    }
});


console.log("################################")
console.log("Quel est le livre le moins emprunté ?")
console.log("################################")  


test2 = []

books.forEach(book => {
    test2.push(book.rented)
    return test2
});

let ok2 = Math.min.apply(null, test2);

books.forEach(book => {
    if(book.rented === ok2) {
        console.log(book.title + " " + ok2)
    }
});



console.log("################################")
console.log("Trouve le livre avec l'ID: 873495")
console.log("################################")  

books.forEach(book => {
    if(book.id === 873495) {
        console.log(book.title + " " + book.id)
    }
});


console.log("################################")
console.log("Supprime le livre avec l'ID: 133712")
console.log("################################")  

let removebook = books.findIndex(book => {
    return book.id === 133712
})

books.splice(removebook, 1)
console.log(books)

console.log("################################")
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)")
console.log("################################")

console.log(books.sort((a, b) => a.title.localeCompare(b.title)))