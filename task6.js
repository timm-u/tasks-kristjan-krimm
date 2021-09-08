function printing(n){
    if(n === undefined){
        console.log("Hi!");
    } else if(n > 0 && n < 10){
        for(let arv2 = 0; arv2 < n; arv2++){
            console.log("Hello!");
        }    
    } else if(n > 10){
        for(let arv = 0; arv < n; arv++){
            console.log("Hi!");
        }
    }
}

printing();
printing(2);
printing(12);