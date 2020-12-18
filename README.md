# timer-xx

Calculate elapsed time in different resolutions.

Supports:
   - seconds
   - milliseconds
   - microseconds
   - nanoseconds
  

## Installation

This is a [node.js](https://nodejs.org) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install timxer-xx
```


## Usage

### **<span style="color:blue">start<span>**  
Start the timer. The response is passed to the desired **elapsed_xx** function.

```javascript
const timer = require('timer-xx');
const start = timer.start();
```

### **<span style="color:blue">elapsed_s(start)<span>**  
Calculate elapsed time in seconds

```javascript
const timer = require('timer-xx');
const start = timer.start();
var duration = timer.elapsed_s(start);
```

### **<span style="color:blue">elapsed_ms(start)<span>**  
Calculate elapsed time in milliseconds

```javascript
const timer = require('timer-xx');
const start = timer.start();
var duration = timer.elapsed_ms(start);
```

### **<span style="color:blue">elapsed_us(start)<span>**  
Calculate elapsed time in microseconds

```javascript
const timer = require('timer-xx');
const start = timer.start();
var duration = timer.elapsed_us(start);
```

### **<span style="color:blue">elapsed_ns(start)<span>**  
Calculate elapsed time in nanoseconds

```javascript
const timer = require('timer-xx');
const start = timer.start();
var duration = timer.elapsed_ns(start);
```

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)

