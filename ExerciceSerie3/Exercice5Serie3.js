function filtrerNombres(tableau, valeur){
    return tableau.filter(function(n){
        return n > valeur;
    });
}

console.log(filtrerNombres([1, 2, 3, 4], 3));
