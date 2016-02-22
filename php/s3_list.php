<?php
require 'vendor/autoload.php';
$param = Array('region'=>'ap-northeast-2', 'version'=>'2006-03-01');
$s3 = new Aws\S3\S3Client($param);
$list = $s3->listObjects(Array('Bucket'=>'codingeverybody2'));
$listArray = $list->toArray();
foreach($listArray['Contents'] as $item){
    print($item['Key']."\n");
}
?>
