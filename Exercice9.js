const min = 0;
const max = 10;


function getRandomInt() {
   
    return Math.floor(Math.random() * (max - min )) + min;

}
const number = getRandomInt();



// console.log(`afficher nombre ${number}`);
 function nombrePaire(){
    let pair = getRandomInt();
    if( pair % 2 !== 0){
        pair--;
    }
    return pair ;
 }

const numberPair = nombrePaire();

// console.log(numberPair);


function nombreImpaire(){

    // Premier nombre impaire 
    let impaire = getRandomInt();


/*On utilise modulo pour savoir si le nombre est divisible par 2, ici je vérifi si 'impaire' est un nombre paire.*/

    if(impaire % 2 === 0){ /*Ici le reste de division est 0 donc c'est vrai c'est paire*/
        impaire++; /*Ici j'ajoute ++ pour lui ajouter 1 et qu'il devient impaire*/
    }

    // Deuxième nombre impaire 
    let impaire2 = getRandomInt();
    if(impaire2 % 2 === 0){
        impaire2++;
    }
    return [impaire, impaire2];
}


let impaireNombre = nombreImpaire();
// console.log(impaireNombre);





console.log(numberPair, impaireNombre);

