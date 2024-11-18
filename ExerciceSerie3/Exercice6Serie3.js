function ajouterPropriete(objet, ville, valeur){
    objet.ville = valeur;
    return objet;
}
const personne = {
    nom : "Séraphine",
    age : 22,
}

console.log(ajouterPropriete(personne, "ville", "Paris"));
