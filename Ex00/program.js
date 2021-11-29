function twoNumberSum(array, targetSum){
    for (let i=0; i<array.length ; i++){
        for (let j=0; j<i+1; j++){
            if(i==j){
                j++;
            }
            if(array[i]+array[j] == targetSum){
                return [array[i],array[j]];
            }
            
        }
    }
    return [];
}
    
// Merci de ne pas effacer la ligne en dessous.
exports.twoNumberSum =  twoNumberSum;