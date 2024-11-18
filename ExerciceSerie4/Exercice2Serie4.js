const tableau = [ 1, 2, 3, 4, 5];

function sommeTableau(tableau){
    return tableau.reduce((accumulateur, valeurActuelle) => accumulateur + valeurActuelle);
}
console.log(sommeTableau(tableau));
