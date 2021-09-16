let firstName = 'Kristjan';
let birthDay = '22';
let birthMonth = '12';
let birthYear = '1998';
let hobbies = [ 'klaverimäng', 'elektroonika' ];
let object = {
    firstName: firstName,
    birthDay: birthDay,
    birthMonth: birthMonth,
    birthYear: birthYear,
    hobbies: hobbies
}

console.log(`${object.birthDay}.${object.birthMonth}.${object.birthYear}`);

let bday = new Date(1998,11,22);
object = {
    firstName: firstName,
    bday: bday,
    hobbies: hobbies
}
console.log(bday.getDate() + "." + (bday.getMonth()+1) + "." + bday.getFullYear());