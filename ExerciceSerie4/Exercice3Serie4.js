const tableauMots = ["je", "suis", "un" ,"tableau", "de" ,"mots"];


function motPlusLong(tableauMots){
    return tableauMots.reduce((plusLong, motActuel) =>{
        return motActuel.length > plusLong.length ? motActuel : plusLong;
    });
}

console.log(motPlusLong(tableauMots));
