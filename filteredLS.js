var fs = require('fs');

fs.readdir(process.argv[2], function(err, list) {
      for(var i = 0; i < list.length; i++) {
		  if(list[i].indexOf("." + String(process.argv[3])) != -1) {
			console.log(list[i]);
		  }
	  }
});

/*
var fs = required('fs')
var path = require('path')
var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function(err, files) {
	if(err) return console.error(err)
		files.forEach(function(file) {
			if (path.extname(file) === ext) {
				console.log(file)
			}
		}
}
*/