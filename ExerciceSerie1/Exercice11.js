// let dateActuelle = new Date();
// console.log(dateActuelle);


let dateActuelle =new Date();

let annee = dateActuelle.getFullYear();

let mois = dateActuelle.getMonth() +1;

let jour = dateActuelle.getDate();

let heure = dateActuelle.getHours();

let minutes = dateActuelle.getMinutes();

let secondes = dateActuelle.getSeconds();

console.log(`Aujourd'hui, nous sommes le ${jour}/${mois}/${annee}, et il est ${heure}h${minutes}.`)