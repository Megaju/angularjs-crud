<?php
// Including database connections
require_once 'database_connections.php';
// Fetching and decoding the inserted data
$data = json_decode(file_get_contents("php://input"));
// Escaping special characters from submitting data & storing in new variables.
$name = mysqli_real_escape_string($connect, $data->name);
$email = mysqli_real_escape_string($connect, $data->email);
$gender = mysqli_real_escape_string($connect, $data->gender);
$address = mysqli_real_escape_string($connect, $data->address);

// mysqli insert query
$query = "INSERT into users (name,email,gender,address) VALUES ('$name','$email','$gender','$address')";
// Inserting data into database
mysqli_query($connect, $query);
echo true;
?>
