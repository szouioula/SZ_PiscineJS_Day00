function threeLargestNumbers(array){
    let output=[];
    for(let i=0; i<3; i++){
        let result = Math.max(...array);
        output.push(result);
        array.splice(array.indexOf(result),1);
    }
		function compare(a,b)
    {
    	return a-b;
    }
    output.sort(compare);
    return output;
}
    
exports.threeLargestNumbers =  threeLargestNumbers;