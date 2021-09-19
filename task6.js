function printing(n){
    let words = [];
    if(!n){
        //console.log("Hi!");
        words.push("Hi!");
        return words;   
    }else if(n < 10){
        for(let i = 0; i < n; i++){
            words.push("Hello!");
        }
        return words;
    }else{
        for(let k = 0; k < n; k++){
            words.push("Hi!");
        }
        return words;        
    }
}

console.log(printing().toString());//undefined
console.log(printing(2).toString());
console.log(printing(3).toString());
console.log(printing(12).toString());