var express = require('express');
var formidable = require('formidable');
var AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-2';
var app = express();
app.get('/s3', function(req, res){
    console.log(1);
    res.send('Hello s3');
});
app.get('/form', function(req, res){
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
});
app.post('/upload_receiver', function(req, res){
   var form = new formidable.IncomingForm();
   form.parse(req, function(err, fields, files){
       var s3 = new AWS.S3();
       var params = {
            Bucket:'codingeverybody2', 
            Key:files.userfile.name,
            ACL:'public-read',
            Body: require('fs').createReadStream(files.userfile.path)
       }
       s3.upload(params, function(err, data){
            var result='';
            if(err)
                result = 'Fail';
            else
                result = `<img src="${data.Location}">`;
            res.send(`<html><body>${result}</body></html>`); 
       });
   });
});
app.use(function(err, req, res, next) {
      console.error(err.stack);
        res.status(500).send('Something broke!');
});
app.listen(80, function(){
    console.log('Connected');
})
