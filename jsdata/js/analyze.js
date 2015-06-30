// node start
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
