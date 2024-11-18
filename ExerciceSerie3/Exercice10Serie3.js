function remplacerMot (phrase, ancienMot, nouveauMot){
    const regex = new RegExp(ancienMot, 'g');
/*RegExp créer une expression regulière avec 'g' pour remplacer toutes les occurences de la phrase*/


    return phrase.replace(regex, nouveauMot);
}

const phrase = "Un petit oiseaux en vadrouille avec ses amies oiseaux";
const nouvellePhrase = remplacerMot(phrase,"oiseaux", "renard");

console.log(nouvellePhrase);


