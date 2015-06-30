// // Use d3.csv to convert it into an array of objects
// d3.csv("/data/cities.csv", function(data) {
//   console.log(data[0]); // => {city: "seattle", state: "WA", population: "652405", land area: "83.9"}
// });
//
// // -----
//
// d3.csv("/data/cities.csv", function(data) {
//   data.forEach(function(d) {
//     d.population = +d.population;
//     d["land area"] = +d["land area"];
//   });
//   console.log(data[0]); // => {city: "seattle", state: "WA", population: 652405, land area: 83.9}
// });
//
// // ----
//
// d3.csv("/data/cities.csv", function(d) {
//   return {
//     city : d.city,
//     state : d.state,
//     population : +d.population,
//     land_area : +d["land area"]
//   };
// }, function(data) {
//   console.log(data[0]); // => {city: "seattle", state: "WA", population: 652405, land_area: 83.9}
// });
//
// // ----
// // Loading animals.tsv with d3.tsv:
//
// d3.tsv("/data/animals.tsv", function(data) {
//   console.log(data[0]); // => {name: "tiger", type: "mammal", avg_weight: "260"}
// });
//
// // ----
// // We could create a pipe separated values (PSV) parser using d3.dsv:
//
// var psv = d3.dsv("|", "text/plain");
//
// psv("/data/animals_piped.txt", function(data) {
//   console.log(data[1]); // => {name: "hippo", type: "mammal", avg_weight: "3400"}
// });
//
// //Loading employees.json with d3.json:
//
// d3.json("/data/employees.json", function(data) {
//   console.log(data[0]); //=> {name: "Andy Hunt", title: "Big Boss", age: 68, bonus: true}
// });

// Loading Multiple Files

queue()
  .defer(d3.csv, "/data/cities.csv")
  .defer(d3.tsv, "/data/animals.tsv")
  .await(analyze);

function analyze(error, cities, animals) {
  if(error) { console.log(error); }

  console.log(cities[0]);
  console.log(animals[0]);
}
