var AWS = require('aws-sdk');
var fs = require('fs');
AWS.config.region = 'ap-northeast-2';
var s3 = new AWS.S3();
var param = {
    'Bucket':'codingeverybody2',
    'Key':'logo.png',
    'ACL':'public-read',
    'Body':fs.createReadStream('94.png'),
    'ContentType':'image/png'
}
s3.upload(param, function(err, data){
    console.log(err);
    console.log(data);
})
