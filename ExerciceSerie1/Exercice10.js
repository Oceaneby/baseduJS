let nombreInitial = 999;


// initialise le compteur de tirage
let nombreDeCoups =0

 let nombreTire;

for(nombreTire = 0; nombreTire !== nombreInitial; nombreDeCoups++) {
    nombreTire = Math.floor(Math.random() * 900) + 100;
}

console.log("Le nombre initial est " + nombreInitial);
console.log("Nombre de tirage nécessaires : ", nombreDeCoups);