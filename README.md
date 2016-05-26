# es6-learnings
Simple playground for new ES6 awesome features!

## Installation
Just:

1. `git clone` the repository  
2. Run `npm install` followed by `npm run build`  
3. Open `index.html` file in browser of your preference!  

## File structure
`src` directory contains ES6 code.  
`output` directory contains code compiled by Babel.  
`index.html` is just a brief demo.

## Content:
* `Person.js`
  * Used to observe the compilation process of ES6 into ES5 (compare src/Person.js vs output/Person.js)
* `main.js`
  * ES6 var vs. let vs. const
  * Arrow syntax
* `main2.js`
  * ES6 default value handling
* `main3.js`
 or `npm run webpack`4.   * ES6 rest and spread operators
* `main4.js`
  * ES6 template strings on HTML templates example
* `main5.js`
  * Object enhancements
    * Object shorthand
    * Method shorthand
    * Object destructuring
* `main6.js`
  * Classes
    * Static methods
    * Getters and Setters
* `main7.js` + `TaskCollection.js`
  * ES6 exports
  * ES6 imports
  * Purely theoretical (it will not work in browser)
* `main8.js`, `main9.js`, `main10.js`
  1. Module bundling with Rollup
    * Call: `./node_modules/.bin/rollup src/main7.js > output/main8.js` or `npm run rollup`
    * It does not compile code to ES5!
  2. Module bundling with Rollup and its plugin Buble
    * Call: `./node_modules/.bin/rollup -c > output/main9.js` or `npm run rollup-buble`
    * This time we obtain ES5 compatible code!
  3. Module bundling with Webpack with Buble plugin
    * Call: `./node_modules/.bin/webpack` or `npm run webpack`
* `promise.js`
  * Introduction to promises