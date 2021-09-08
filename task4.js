const colors = ["Red", "Green", "White", "Black"];
let string = "";
for (let i = 0; i < colors.length; i++){
    string += colors[i] + ".";
}
console.log(string);
string = "";
for (let i = 0; i < colors.length; i++){
    string += colors[i] + ",";
}
console.log(string);
string = "";
for (let i = 0; i < colors.length; i++){
    string += colors[i] + "+";
}
console.log(string);
