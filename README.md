# ms-to-moment [![Build Status][travis-image]][travis-url]

  > Calculation milliseconds before and after the moment

## Install

```sh
npm install --save ms-to-moment
```

## Usage

```js
var msToMoment = require('ms-to-moment');
var date = new Date();

setTimeout(function() {
  msToMoment(date); // 1000
}, 1000)
```

## License

  MIT

[travis-url]: https://travis-ci.org/andrepolischuk/ms-to-moment
[travis-image]: https://travis-ci.org/andrepolischuk/ms-to-moment.svg?branch=master
