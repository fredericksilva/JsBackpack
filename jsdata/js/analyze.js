// node start
// npm install d3 lodash
// node js/analyze.js

var fs = require("fs");
var d3 = require("d3");
var _ = require("lodash");

fs.readFile("data/animals.tsv", "utf8", function(error, data) {
  data = d3.tsv.parse(data);
  console.log(JSON.stringify(data));

  var maxWeight = d3.max(data, function(d) { return d.avg_weight; });
  console.log(maxWeight);
});


var bigAnimals = data.filter(function(d) { return d.avg_weight > 300; });
bigAnimalsString = JSON.stringify(bigAnimals);

fs.writeFile("big_animals.json", bigAnimalsString, function(err) {
  console.log("file written");
});
