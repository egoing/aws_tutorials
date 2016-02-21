var express = require('express');
var app = express();
var AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-2';
var ec2  = new AWS.EC2();
app.get('/', function(req, res){
	res.send('Hello world');
});
app.get('/upload', function(req, res){
	var output = `
<html>
<body>
<form enctype="multipart/form-data" method="post" action="upload_receiver">
	<input type="file" name="userfile">
	<input type="submit">
</form>
</body>
</html>
	`;
	res.send(output);
})
/*
app.get('/ec2', function(req, res){
	ec2.describeInstances({}, function(err, data) {
		res.json(data);
	});
});
*/
app.listen(80, function(){
	console.log('Connect 80 port');
});
