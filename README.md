# json-key-converter
A tiny tool to convert JSON key  from Camel to Underscore or from Underscore to Camel.

<p align="left">
  <a href="https://npmjs.org/package/json-key-converter">
    <img src="https://img.shields.io/npm/v/json-key-converter.svg?style=flat-square"
         alt="NPM Version">
  </a>

  <a href="https://npmjs.org/package/json-key-converter">
    <img src="http://img.shields.io/npm/dm/json-key-converter.svg?style=flat-square"
         alt="Downloads">
  </a>

  <a href="https://github.com/solee0524/json-key-converter/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/json-key-converter.svg?style=flat-square"
         alt="License">
  </a>
</p>

## Usage

```
  var jsonKeyConverter = require('json-key-converter');

  var option = {
    camel: true
  }

  var newJson = jsonKeyConverter(json[, option]);
```

The conveter **default** convert json key to underscore standard. With setting `option.camel = true`, it will convert json key to camel case standard.

This is a tiny tool, it does not consider those special cases. (May perfect it in the future.)

## License

MIT © Bo Li ([solee.me](http://solee.me))

