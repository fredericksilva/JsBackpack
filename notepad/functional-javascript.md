### Functional Javascript

_.each() via Lo-Dash.js

```
function forEach(collection, callback, thisArg) {
  var index = -1,
      length = collection ? collection.length : 0;

  callback = callback && typeof thisArg == 'undefined' ? callback : lodash.createCallback(callback, thisArg);
  if (typeof length == 'number'){
      while (++index < length) {
        if (callback(collection[index], index, collection) === false) {
          break;
        }
      }
  } else {
      forOwn(collection, callback);
  }
  return collection;
 }

```

_.pluck() via Underscore.js

```
 var stooges = [
      {name : 'moe', age : 40},
      {name : 'larry', age : 50},
      {name : 'curly', age : 60}
 ];

 _.pluck(stooges, 'name');
 //=> ["moe", "larry", "curly"]

_.pluck = function(obj, key) {
    return _.map(obj, function(value){
          return value[key];
      });
}:
```

_.compose()

```
_.compose = function(/*, func */) {
    var functions = arguments;
    return function() {
      var args = arguments;
      for (var i = functions.length - 1; i >= 0; i--){
          args = [functions[i].apply(this, args)];
      }
      return args[0];
    };
};

var plusFive = function(num) {
  return num + 5;
};

var multiplyThree = function(num){
  return num + 5;
};

var plus5_multiply3 = _.compose(multiplyThree, plusFive);
plus5_multiply3(4);
//=>27
```
_.pipeline
```
_.pipeline = function(/*, funs */){
    var functions = arguments;

    return function(seed) {
      return _.reduce(functions, function(l, r){
        return r(l);
        }, seed);
    };
}

var plusFive = function(num) {
  return num + 5;
};

var multiplyThree = function(num){
  return num + 5;
};

var multiply3_plus5 = _.pipeline(multiplyThree, plusFive);
multiply3_plus5(4);
//=>17

```

```
function square(x) {
  return x * x;
}

function inc(x) {
  return x + 1;
}

function isEven(x) {
  return x % 2 === 0;
}

var result = _.chain(array)
              .map(square).map(inc)
              .filter(isEven).take(5).value();

var result = Lazy(array)
             .map(square).map(inc)
             .filter(isEven).take(5);
```

### Documentação
1 - [Undescore](https://github.com/fredericksilva/underscore-contrib)
2 - [lazy.js](http://dtao.github.io/lazy.js)
3 - [Fun.js](http://functionaljs.org/)
3 - [_.domextend](http://github.com/1000ch/_.domextend)

thanks [@1000ch](http://github.com/@1000ch)
