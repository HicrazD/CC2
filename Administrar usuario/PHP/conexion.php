<?php
$host = "localhost";
$user = "Doci";
$pass = "12345";
$db   = "pruebaweb";
$connection = mysqli_connect($host,$user,$pass,$db);
if (mysqli_connect_errno($connection)) 
        {
        die( "Error al conectar a MySQL: " . mysqli_connect_error() );
        }
mysqli_set_charset($connection,"utf8");
 ?>
