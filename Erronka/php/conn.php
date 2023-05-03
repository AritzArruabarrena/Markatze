<?php

/* the database configurations. This tells
   the server to connect to the database
   Jantokia using IP adress 192.168.72.204
   and the default mysql port on the admin
   account
*/
$servername = "mysql:dbname=jantokia;host=localhost;";
$usernameserv = "root";


$conn = new PDO($servername, $usernameserv);

?>