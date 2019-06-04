# args-finder

![npm](https://img.shields.io/npm/v/args-finder.svg) ![license](https://img.shields.io/npm/l/args-finder.svg) ![github-issues](https://img.shields.io/github/issues/wspecs/args-finder.svg)



![nodei.co](https://nodei.co/npm/args-finder.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/wspecs/args-finder.svg)
![stars](https://img.shields.io/github/stars/wspecs/args-finder.svg)
![forks](https://img.shields.io/github/forks/wspecs/args-finder.svg)

![forks](https://img.shields.io/github/forks/wspecs/args-finder.svg)

![](https://david-dm.org/wspecs/args-finder/status.svg)
![](https://david-dm.org/wspecs/args-finder/dev-status.svg)

## Features

- Parse text with chords

## Usage

```js
// node dist/index.js create --nostart --decent --lauch=dev speed 3

const argsFinder = require('args-finder');

console.log(argsFinder.operation);
// create

console.log(argsFinder.commands);
// ['create']

console.log(argsFinder.options);
// {
//   start: false,
//   decent: true,
//   launch: 'dev',
//   speed: 3
// }
```

## Install

`npm install --save args-finder`


## Scripts

 - **npm run build** : `rm -rf dist && tsc`
 - **npm run test** : `mocha ./dist/test/*.js`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[@types/node](https://www.npmjs.com/package/@types/node) | ^8.10.12 | ✖
[minimist](https://www.npmjs.com/package/minimist) | ^1.2.0 | ✖
[@types/chai](https://www.npmjs.com/package/@types/chai) | ^4.1.3 | ✔
[@types/minimist](https://www.npmjs.com/package/@types/minimist) | ^1.2.0 | ✔
[@types/mocha](https://www.npmjs.com/package/@types/mocha) | ^5.2.0 | ✔
[chai](https://www.npmjs.com/package/chai) | ^4.1.2 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^5.1.1 | ✔


## Contributing

Contributions welcome; Please submit all pull requests against the master branch. If your pull request contains TypeScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## Author

Wendly Saintil <wendlysaintil@gmail.com> https://twitter.com/wendlysaintil

## License

 - **MIT** : http://opensource.org/licenses/MIT