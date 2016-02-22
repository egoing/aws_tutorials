<?php
require 'vendor/autoload.php';
$param = Array('region'=>'ap-northeast-2', 'version'=>'2006-03-01');
$s3 = new Aws\S3\S3Client($param);
$s3->getObject(Array(
    'Bucket'=>'codingeverybody2',
    'Key'=>'sample.txt',
    'SaveAs'=>fopen('sample_saved.txt', 'w')
));
?>
