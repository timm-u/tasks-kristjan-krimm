const eesnimi = 'Kristjan';
const synnapaev = '22';
const synnakuu = 'detsember';
const synnaaasta = ' 1998';''
let hobid = [ 'klaverimäng', 'elektroonika' ];
const kokku = {eesnimi, synnapaev, synnakuu, synnaaasta, hobid};
console.log(synnapaev,synnakuu,synnaaasta);

const eesnimi1 = 'Kristjan';
const synna = new Date(1998, 11, 22, 0, 0, 0, 0);
let hobid2 = [ 'klaverimäng', 'elektroonika' ];
const kokku2 = {eesnimi1, synna, hobid2};
console.log(synna.getDate(),".",synna.getMonth()+1,".",synna.getFullYear());