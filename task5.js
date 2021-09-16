let stringToCheck = "";

function checkstring(stringToCheck){
    if(stringToCheck){
        return true;
    }else if(stringToCheck === ""){
        return false;
    }else{
        return false;
    }
}

function uppercase(stringToCheck){
    if(stringToCheck){
        return stringToCheck.charAt(0).toUpperCase() + stringToCheck.slice(1);
    }else{
        return '""';
    }
}

console.log(checkstring());
console.log(checkstring("tere"));
console.log(checkstring("minu nimi on John"));
console.log(uppercase());
console.log(uppercase("tere"));
console.log(uppercase("minu nimi on John"));
