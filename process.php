<?php
$id = $_GET['id'];

$file = fopen("./score/score.txt", "w") or die ("Gagal input score!");
$score = $id;
fwrite($file, $score);
fclose($file);


?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="Css,1.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta http-equiv="refresh" content="0; url='/index.html'">

   </head>
<body>


</body>
</html>
