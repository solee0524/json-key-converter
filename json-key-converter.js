"strict";

var JsonKeyConvertor = {};

module.exports = JsonKeyConvertor;

JsonKeyConvertor.convert = function convertKey(json, option) {
  if (Array.isArray(json)) {
    var tmpArray = [];
    for (i in json) {
      if (typeof json[i] === 'object') {
        tmpArray.push(convertKey(json[i], option));
      } else {
        tmpArray.push(json[i]);
      }
    }
    return tmpArray;
  }

  var tmpJson = {};
  for (var key in json) {
    var tmpKey = "";
    if (option && option.camel === true) {
      tmpKey = underscoreToCamel(key);
    } else {
      tmpKey = camelToUnderscore(key);
    }
    if (typeof json[key] === 'object') {
      tmpJson[tmpKey] = convertKey(json[key], option);
    } else {
      tmpJson[tmpKey] = json[key];
    }
  }
  return tmpJson;
}

function camelToUnderscore(key) {
  var tmpKey = key.replace(/[A-Z]/g, "_$&");
  return tmpKey.toLowerCase();
}

function underscoreToCamel(key) {
  var tmpWords = [];
  var words = key.split('_');
  words.forEach(function(word, index){
    if (index !== 0) {
      word = word[0].toUpperCase() + word.slice(1, word.length);
      tmpWords.push(word);
    } else {
      tmpWords.push(word);
    }
  });
  return tmpWords.join("");
}

