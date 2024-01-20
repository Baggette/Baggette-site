<?php
ob_start();
function visitorlogger() {
  $file = fopen('../visitors.txt', 'a') or die('unable to open file');
  $text = $_SERVER['REMOTE_ADDR'];
  fwrite($file, $text);
  fclose($file);
  $counter = fopen("counter.txt", "r+") or die("<script> console.log('cannot access counter file') </script>");
  $count = fread($counter,filesize("counter.txt"));
  $count = $count + 1;
  fclose($counter);
  file_put_contents("counter.txt", $count);
}
if( strpos(file_get_contents('../visitors.txt'),$_SERVER['REMOTE_ADDR']) !== false) {

} else {
  visitorlogger();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="og:description" content="Baggette: The coolest person on the internet">
  <link rel="stylesheet" href="style.css">
  <script type="text/javascript" src="./js/script.js"></script>
  
</head>
<body>
    <div class="top">
        <ul> 
            <li><a href="contact">Contact</a></li>
            <li><a href="projects">Projects</a></li>
            <li><a href="junk">Junk</a></li>
          </ul>
    </div>
    <div class="about">
        <h1 id="name">Baggette</h1>
        <div class="profile-image">
        </div>
        <p id="paragraph">internet dude that does internet things</p>
    </div>
    <div class="visitors">
      <p id="visitors"></p>
    </div>
</body>


