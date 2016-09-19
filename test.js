"strict";

var jsonKeyConvertor = require('./json-key-converter');

var jsonDemo = {
  "hello": "world",
  "i": {
    "am": true,
    "the": "cool_sd",
    "array": [{
      "first_num": 1,
      "firstArray": [1, 2],
      "first_object": {
        "tiny": "test"
      }
    }, {
      "secondNum": 2,
      "second_array": [3, 4],
      "second_object": {
        "tiny": "test"
      }
    }]
  }
};

console.log("====== Original JSON ======")
console.log(JSON.stringify(jsonDemo));

console.log();
console.time("Convert to underscore");
var newJsonDemo = jsonKeyConvertor.convert(jsonDemo);
console.timeEnd("Convert to underscore");
console.log(JSON.stringify(newJsonDemo));

console.log();
var option = {};
option.camel = true;
console.time("Convert to camel case");
var newJsonDemo1 = jsonKeyConvertor.convert(jsonDemo, option);
console.timeEnd("Convert to camel case");
console.log(JSON.stringify(newJsonDemo1));



