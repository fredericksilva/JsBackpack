// Use d3.csv to convert it into an array of objects
d3.csv("/data/cities.csv", function(data) {
  // console.log(data[0]); // => {city: "seattle", state: "WA", population: "652405", land area: "83.9"}
});

// -----

d3.csv("/data/cities.csv", function(data) {
  data.forEach(function(d) {
    d.population = +d.population;
    d["land area"] = +d["land area"];
  });
  // console.log(data[0]); // => {city: "seattle", state: "WA", population: 652405, land area: 83.9}
});

// ----

d3.csv("/data/cities.csv", function(d) {
  return {
    city : d.city,
    state : d.state,
    population : +d.population,
    land_area : +d["land area"]
  };
}, function(data) {
//  console.log(data[0]); // => {city: "seattle", state: "WA", population: 652405, land_area: 83.9}
});

// ----
// Loading animals.tsv with d3.tsv:

d3.tsv("/data/animals.tsv", function(data) {
  //console.log(data[0]); // => {name: "tiger", type: "mammal", avg_weight: "260"}
});

// ----
// We could create a pipe separated values (PSV) parser using d3.dsv:

var psv = d3.dsv("|", "text/plain");

psv("/data/animals_piped.txt", function(data) {
  //console.log(data[1]); // => {name: "hippo", type: "mammal", avg_weight: "3400"}
});

//Loading employees.json with d3.json:

d3.json("/data/employees.json", function(data) {
  //console.log(data[0]); //=> {name: "Andy Hunt", title: "Big Boss", age: 68, bonus: true}
});

// Loading Multiple Files

queue()
  .defer(d3.csv, "/data/cities.csv")
  .defer(d3.tsv, "/data/animals.tsv")
  .await(analyze);

function analyze(error, cities, animals) {
  if(error) { console.log(error); }

  //console.log(cities[0]);
  //console.log(animals[0]);
}


var articles = [{
    "id": 1,
    "name": "vacuum cleaner",
    "weight": 9.9,
    "price": 89.9,
    "brand_id": 2
}, {
    "id": 2,
    "name": "washing machine",
    "weight": 540,
    "price": 230,
    "brand_id": 1
}, {
    "id": 3,
    "name": "hair dryer",
    "weight": 1.2,
    "price": 24.99,
    "brand_id": 2
}, {
    "id": 4,
    "name": "super fast laptop",
    "weight": 400,
    "price": 899.9,
    "brand_id": 3
}];


var brands = [{
    "id": 1,
    "name": "SuperKitchen"
}, {
    "id": 2,
    "name": "HomeSweetHome"
}];


articles.forEach(function(article) {
    var result = brands.filter(function(brand) {
        return brand.id === article.brand_id;
    });
    delete article.brand_id;
    article.brand = (result[0] !== undefined) ? result[0].name : null;
});
//console.log(articles);

/*
=> [{
    "id": 1,
    "name": "vacuum cleaner",
    "weight": 9.9,
    "price": 89.9,
    "brand": "HomeSweetHome"
}, {
    "id": 2,
    "name": "washing machine",
    "weight": 540,
    "price": 230,
    "brand": "SuperKitchen"
}, {
    "id": 3,
    "name": "hair dryer",
    "weight": 1.2,
    "price": 24.99,
    "brand": "HomeSweetHome"
}, {
    "id": 4,
    "name": "super fast laptop",
    "weight": 400,
    "price": 899.9,
    "brand": null
}];
*/
// http://stackoverflow.com/questions/17500312/is-there-some-way-i-can-join-the-contents-of-two-javascript-arrays-much-like-i/17500836#17500836
function join(lookupTable, mainTable, lookupKey, mainKey, select) {
    var l = lookupTable.length,
        m = mainTable.length,
        lookupIndex = [],
        output = [];
    for (var i = 0; i < l; i++) { // loop through l items
        var row = lookupTable[i];
        lookupIndex[row[lookupKey]] = row; // create an index for lookup table
    }
    for (var j = 0; j < m; j++) { // loop through m items
        var y = mainTable[j];
        var x = lookupIndex[y[mainKey]]; // get corresponding row from lookupTable
        output.push(select(y, x)); // select only the columns you need
    }
    return output;
};


var result = join(brands, articles, "id", "brand_id", function(article, brand) {
    return {
        id: article.id,
        name: article.name,
        weight: article.weight,
        price: article.price,
        brand: (brand !== undefined) ? brand.name : null
    };
});
//console.log(result);

//
// queue()
//     .defer(d3.csv, "/data/big_data_1.csv")
//     .defer(d3.csv, "/data/big_data_2.csv")
//     .defer(d3.csv, "/data/big_data_3.csv")
//     .await(combine);
//
// function combine(error, big_data_1, big_data_2, big_data_3) {
//     if (error) {
//         console.log(error);
//     }
//     //console.log(d3.merge([big_data_1, big_data_2, big_data_3])); //=> [{"a": "1", "b": "2"},{"a": "3", "b": "4"},{"a": "5", "b": "6"}]
// }


// Combine attributes from different data sets
var dataset_1 = [{
    'type': 'boat',
    'model': 'Ocean Queen 2000'
}, {
    'type': 'car',
    'model': 'Ferrari'
}];
var dataset_2 = [{
    'price': 23202020,
    'weight': 5656.9
}, {
    'price': 59988,
    'weight': 1.9
}];

var result = _.merge(dataset_1, dataset_2);
// console.log(result);



// Summarizing Data

var data = [
  {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
  {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
  {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
  {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
];

var minLand = d3.min(data, function(d) { return d.land_area; });
// console.log(minLand);

var maxLand = d3.max(data, function(d) { return d.land_area; });
// console.log(maxLand);

var landExtent = d3.extent(data, function(d) { return d.land_area; });
// console.log(landExtent);

// Summary Statistics
// D3 provides a few basic tools to analyze your data, all using the same format as the min and max functions.
// Simply provide the property you would like to analyze, and you are good to go.
// d3.mean

var landAvg = d3.mean(data, function(d) { return d.land_area; });
// console.log(landAvg); //  => 187.45

// d3.median
var landMed = d3.median(data, function(d) { return d.land_area; });
console.log(landMed); //=> 193.25

// d3.deviation - for standard deviation

var landSD = d3.deviation(data, function(d) { return d.land_area; });
console.log(landSD); // => 140.96553952414519
