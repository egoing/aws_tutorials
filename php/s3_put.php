<?php
require 'vendor/autoload.php';
$param = Array('region'=>'ap-northeast-2', 'version'=>'2006-03-01');
$s3 = new Aws\S3\S3Client($param);
$s3->putObject(Array(
    'ACL'=>'public-read',
    'SourceFile'=>'sample.txt',
    'Bucket'=>'codingeverybody2',
    'Key'=>'sample.txt'
));
?>
