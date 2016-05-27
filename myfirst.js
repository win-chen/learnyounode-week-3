var fs = require('fs');

var contents = fs.readFileSync(process.argv[2]);

var str = contents.toString();
var arr = str.split("\n");
console.log(arr.length - 1);
