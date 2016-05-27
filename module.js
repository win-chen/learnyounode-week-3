var fs = require('fs');

module.exports = function (directory, ext, callback) {
	fs.readdir(directory, function(err, list) {
		if(err) {return callback(err);}
		else {
			var nameList = []
			for(var i = 0; i < list.length; i++) {
				if(list[i].indexOf("." + ext) != -1) {
					console.log(list[i]);
					nameList.push(list[i]);
				}
			}
		}
		callback(null, nameList);
	});
}