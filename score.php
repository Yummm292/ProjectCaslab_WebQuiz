<?php

$open = file_get_contents("./score/score.txt", "r");


?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="materials.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
   </head>
<body>
  <div class="container">
    <div class="title">Previous Score</div>
    <div class="content">

    <h1>Score : <?=$open?></h1>
      
    </div>
  </div>

</body>
</html>
