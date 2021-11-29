function sun(buildings, direction){
    let output=[];
    
    if(direction == "Ouest"){
        output.push(0);
        let maxBuild=buildings[0];
        for (let i=1; i<buildings.length; i++){
            if(maxBuild<buildings[i]){
                maxBuild=buildings[i];
                output.push(i);
            }
        }
    }else if (direction == "Est"){
   			output.push(buildings.length-1);
        let maxBuild=buildings[buildings.length-1];
        for (let i=buildings.length-2; i>=0; i--){
            if(maxBuild<buildings[i]){
                maxBuild=buildings[i];
                output.push(i);
            }
        }
    
    }
    
return output;
}
    

exports.sun = sun ;