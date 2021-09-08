//geneerin random numbri
function getRandomNumber() {
    return Math.floor(Math.random() * (100 - 1) + 1);
}

//koostan array mis koosneb 5st erinevast random numbrist
const numbers = [];

for (let i = 0; i < 5; i++){
    numbers.push(getRandomNumber());
}

function getMaxOfArray() {
    return Math.max.apply(null, numbers);
}

function getMinOfArray(){
    return Math.min(...numbers);
}

function getEvenNumbers() {
    let evennumbers = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evennumbers.push("true");
        }else if(numbers[i] % 2 === 1){
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

console.log(numbers);
console.log(getMaxOfArray());
console.log(getMinOfArray());
console.log(getEvenNumbers());