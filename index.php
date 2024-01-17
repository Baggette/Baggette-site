<?php
ob_start();
if(!isset($_COOKIE['visited'])) {
  setcookie('visited', 'false', 2147483647, '/') or die ("<script> console.log(Cookies are disabled.) </script>");
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
<?php
if(!isset($_COOKIE['visited'])) {
  echo "<script> console.log('Cookies are disabled.') </script>";
} elseif ($_COOKIE['visited'] == 'false') {
  $counter = fopen("counter.txt", "r+") or die("<script> console.log('Unable to open file!') </script>");
  $count = fread($counter,filesize("counter.txt"));
  $count = $count + 1;
  fclose($counter);
  file_put_contents("counter.txt", $count);
  echo ("<script> document.cookie = 'visited=true; expires=Tue, 19 Jan 2038 03:14:07 UTC'; </script>");
}
?>

