function levDist(str1, str2){
    if(Math.min(str1.length, str2.length)==0){
        return Math.max(str1.length,str2.length);
    }
    if(str1[0]==str2[0]){

        let str0=str1.slice(1);
        let str3=str2.slice(1);
        return levDist(str0,str3);
    }
    else {
    let str0=str1.slice(1);
    let str3=str2.slice(1);
    
    return 1+Math.min(levDist(str0, str2), levDist(str1,str3), levDist(str0,str3));
    }
   
}
    
exports.levDist =  levDist;