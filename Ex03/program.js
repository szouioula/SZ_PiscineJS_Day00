function firstNonRepeatingCharacter(string) {
    let compteur=[];
    for(let i=0; i<string.length; i++){
    compteur[i]=0;
        for(let j=i+1; j<string.length; j++){
            if(string[i]==string[j]){
                compteur[i]++;
            }
    		}
        
        if(compteur[i]==0){
          	return i;
        }
    }
return -1;
}
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;