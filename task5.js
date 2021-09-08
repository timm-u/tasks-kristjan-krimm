let sisend = "";

function checkstring(sisend){
    if(sisend === undefined){
        return false;
    }else if(sisend === ""){
        return false;
    }else{
        return true;
    }
}

function uppercase(sisend){
    if(sisend === undefined){
        return '""';
    }else{
        return sisend.charAt(0).toUpperCase() + sisend.slice(1);
    }
}

console.log(checkstring());
console.log(checkstring("tere"));
console.log(checkstring("minu nimi on John"));
console.log(uppercase());
console.log(uppercase("tere"));
console.log(uppercase("minu nimi on John"));
