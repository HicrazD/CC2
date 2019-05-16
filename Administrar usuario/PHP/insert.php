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

$name =  $_POST["nombre"];
$apellidop = $_POST["apellidop"];
$apellidom = $_POST["apellidom"];
$sexo = $_POST["sexo"];

$sql = "INSERT INTO datos (nom,apep,apem,sexo) VALUES('$name','$apellidop','$apellidom','$sexo')";
mysqli_query($connection,$sql) or die('Error. '.mysql_error());
echo 1;
?>