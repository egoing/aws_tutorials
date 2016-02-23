<?php
require 'vendor/autoload.php';
$param = Array('region'=>'ap-northeast-2', 'version'=>'2006-03-01');
$s3 = new Aws\S3\S3Client($param);
$result = $s3->putObject(Array(
    'ACL'=>'public-read',
    'SourceFile'=>$_FILES['userfile']['tmp_name'],
    'Bucket'=>'codingeverybody2',
    'Key'=>$_FILES['userfile']['name'],
    'ContentType'=>$_FILES['userfile']['type']
));
unlink($_FILES['userfile']['tmp_name']);
$resultArray = $result->toArray();
var_dump($resultArray['ObjectURL']);
?>
<html>
<body>
<img src="<?php print($resultArray['ObjectURL']);?>" style="width:100%">
</body>
</html>
