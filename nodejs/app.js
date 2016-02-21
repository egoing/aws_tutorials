var express = require('express');
var app = express();
var AWS = require('aws-sdk');
var formidable = require('formidable');
var fs = require('fs');
AWS.config.region = 'ap-northeast-2';
var ec2  = new AWS.EC2();
app.get('/', function(req, res){
	res.send('Hello world');
});
app.get('/s3', function(req, res){
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
app.post('/upload_receiver', function(req, res){
        var form = new formidable.IncomingForm()
        form.parse(req, function(err, fields, files){
		var s3 = new AWS.S3();
		var params = {
		  Bucket: 'codingeverybody2', /* required */
		  Key: files.userfile.name, /* required */
		  ACL: 'public-read',
		  Body: fs.readFileSync(files.userfile.path)
		};
		console.log(params);
		s3.putObject(params, function(err, data) {
		  	if (err) console.log(err, err.stack); // an error occurred
		  	else     console.log(data);           // successful response
			res.json([err, fields, files, data]);
		});
        });
});
app.get('/ec2', function(req, res){
	ec2.describeInstances({}, function(err, data) {
		res.json(data);
	});
});
app.listen(80, function(){
	console.log('Connect 80 port');
});
