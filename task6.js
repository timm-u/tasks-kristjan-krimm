function printing(n){
    if(!n){
        console.log("Hi!");
    } else if(n > 0 && n < 10){
        for(let i = 0; i < n; i++){
            console.log("Hello!");
        }    
    } else if(n > 10){
        for(let k = 0; k < n; k++){
            console.log("Hi!");
        }
    }
}

printing();
printing(2);
printing(12);