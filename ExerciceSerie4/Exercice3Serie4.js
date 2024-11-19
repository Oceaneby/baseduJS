const tableauMots = ["je", "suis", "un" ,"tableau", "de" ,"mots"];


// function motPlusLong(tableauMots){
//     return tableauMots.reduce((plusLong, motActuel) =>{
//         return motActuel.length > plusLong.length ? motActuel : plusLong;
//     });
// }

// console.log(motPlusLong(tableauMots));



function motPlusLong(words){

    let result = "";

    for( let word of words){

        if(word.length > result.length){
            result = word;
        }
       return result
      
        
        
    };
}

// motPlusLong(tableauMots);
console.log(motPlusLong(tableauMots));