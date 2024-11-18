const mots = "bonjour";
function inverserChaine(chaine){
    let inverser = "";
    for (let i = 0; i < chaine.length; i++){
        i = chaine[i] + inverser;
    }
    return inverser;
}

console.log(inverserChaine("madame"));
