var AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-2';
var s3 = new AWS.S3();
var file = require('fs').createWriteStream('logo.png');
var params = {Bucket:'codingeverybody2', Key:'logo.png'};
s3.getObject(params).createReadStream().pipe(file);
