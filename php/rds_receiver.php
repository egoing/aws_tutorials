<?php
include('db.php');
$title = mysqli_real_escape_string($write, $_POST['title']);
$description = mysqli_real_escape_string($write, $_POST['description']);
$sql = "INSERT INTO topic (title, description, author, created) VALUES('{$title}', '{$description}', 'egoing', NOW())";
mysqli_query($write, $sql);
header('Location: rds.php');
?>
