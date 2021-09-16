//geneerin random numbri
function getRandomNumber() {
    return Math.floor(Math.random() * (100 - 1) + 1);
}

//koostan array mis koosneb 5st erinevast random numbrist
const randomArray = [];

for (let i = 0; i < 5; i++){
    randomArray.push(getRandomNumber());
}

function getMaxOfArray(randomArray) {
    return Math.max.apply(null, randomArray);
}

function getMinOfArray(randomArray){
    return Math.min(...randomArray);
}

function getEvenNumbers(randomArray) {
    let evennumbers = [];
    for (var i = 0; i < randomArray.length; i++) {
        if (randomArray[i] % 2 === 0) {
            evennumbers.push("true");
        }else if(randomArray[i] % 2 === 1){
            evennumbers.push("false");
        }
    }

   var even = 0;
   for(let i = 0; i < evennumbers.length; i++){
       if(evennumbers[i] == "true"){
           even++;
        }else{}
   }
   return even;
}

console.log(randomArray);
console.log(getMaxOfArray(randomArray));
console.log(getMinOfArray(randomArray));
console.log(getEvenNumbers(randomArray));