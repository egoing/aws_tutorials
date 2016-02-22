<?php
// Include the SDK using the Composer autoloader
require 'vendor/autoload.php';
$param = Array('region'=>'ap-northeast-2', 'version'=>'2015-10-01');
$ec2 = new Aws\Ec2\Ec2Client($param);
$instances = $ec2->describeInstances([]);
var_dump($instances);
