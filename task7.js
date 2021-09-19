//declaring new array and creating array containing 5 random numbers
const randomArray = [];

for (let i = 0; i < 5; i++){
    randomArray.push(getRandomNumber());
}

//function to generate a random number
function getRandomNumber() {
    return Math.floor(Math.random() * (100 - 1) + 1);
}

//finding max value of an array
function getMaxOfArray(randomArray) {
    return Math.max.apply(null, randomArray);
}

//finding min value of an array
function getMinOfArray(randomArray){
    return Math.min(...randomArray);
}

//finding what numbers are even and what numbers are not(sorting an array)
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

//printing results
console.log(randomArray);
console.log(getMaxOfArray(randomArray));
console.log(getMinOfArray(randomArray));
console.log(getEvenNumbers(randomArray));