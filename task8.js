//Ex 8
//This took way too long to even admit, big thank you to google
//Included is ex 1-3

const moviedata = require("./moviedata.json");
let data = [];
function fixArray(e) {
  for (i in e) {
    let t = e[i];
    for (j in t)
      t[j] == t.Year || t[j] == t.imdbRating
        ? (t[j] = +t[j])
        : t[j] == t.Genre ||
          t[j] == t.Director ||
          t[j] == t.Writer ||
          t[j] == t.Actors
        ? (t[j] = t[j].split(", "))
        : t[j] == t.imdbVotes && (t[j] = +t[j].split(",").join(""));
    data.push(e[i]);
  }
  return data;
}

data = fixArray(moviedata);

console.log("\nExercise 1 ----------------");

function movieRange(e, t) {
  return data.filter((o) => o.Year >= e && o.Year <= t);
}
function logMovies(e) {
  console.log("\nMovies released between 1962 and 1972 are: ");
  for (let t = 0; t < e.length; t++) console.log(e[t].Title);
}
const selection = movieRange(1962, 1972),
  logSelectionTitle = logMovies(movieRange(1962, 1972));
let maxRating = selection.reduce((e, t) =>
    e.imdbRating > t.imdbRating ? e : t
  ),
  maxVotes = selection.reduce((e, t) => (e.imdbVotes > t.imdbVotes ? e : t));
console.log(
  "\n" +
    `Best rated movie is ${maxRating.Title}, directed by ${maxRating.Director} and was released in ${maxRating.Released}.`
),
  console.log(
    `Most rated movie is ${maxVotes.Title}, directed by ${maxVotes.Director} and was released in ${maxVotes.Released}.`
  ),
  //Ex 2
  console.log("\nExercise 2 ----------------");
const selectionByGenre = data.filter((e) => {
  if (e.Genre.includes("Drama")) return e;
});
let maxRating2 = selectionByGenre.reduce((e, t) =>
    e.imdbRating > t.imdbRating ? e : t
  ),
  maxVotes2 = selectionByGenre.reduce((e, t) =>
    e.imdbVotes > t.imdbVotes ? e : t
  );
console.log(
  "\n" +
    `Best rated drama is ${maxRating2.Title}, directed by ${maxRating2.Director} and was released in ${maxRating2.Released}.`
),
  console.log(
    `Most rated drama is ${maxVotes2.Title}, directed by ${maxVotes2.Director} and was released in ${maxVotes2.Released}.`
  ),
  console.log("\nExercise 3 -------------------------");
const selectionByRating = data.filter((e) => {
    if (e.Rated.includes("R")) return e;
  }),
  names = [];
function getMovieNames(e) {
  for (let t = 0; t < e.length; t++) names.push(e[t].Title);
  return names.join(", ");
}
console.log(
  "\nMovies that are rated R are:\n",
  getMovieNames(selectionByRating) + "."
);
const actors = [];
function getActorNames(e) {
  for (let t = 0; t < e.length; t++) {
    n = e[t].Actors;
    for (let e = 0; e < n.length; e++) actors.push(n[e]);
  }
  return [...new Set(actors)].join(", ");
}
console.log(
  "\nActors that played in those movies:\n",
  getActorNames(selectionByRating)
);
//I tried my best to compact this code as much as possible, i made it an challenge for me to see how little lines of code do i need
