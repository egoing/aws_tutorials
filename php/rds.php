<!DOCTYPE>
<html>
    <head><meta charset="utf-8"></head>
    <body>
        <form action="rds_receiver.php" method="post">
            <p>
                제목 :
                <input type="text" name="title">
            </p>
            <p>
                본문 :
                <textarea name="description">
                </textarea>
            </p>
            <p><input type="submit"></p>
        </form>
        <ul>
<?php
include('db.php');
$result = mysqli_query($read, "SELECT * FROM topic");
while($row = mysqli_fetch_assoc($result)){
    $title = mysqli_real_escape_string($read, $row['title']);
    print("<li>{$title}</li>");
}
?>
        </ul>
    </body>
</html>
