const tableau = [1, 2, 3, 4, 5, 6];

function extraireSousTableau(tableau, debut, fin){
    return tableau.slice(1,5);
}

console.log(extraireSousTableau(tableau));
