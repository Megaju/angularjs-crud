<?php
// Including database connections
require_once 'database_connections.php';
// Fetching the updated data & storin in new variables
$data = json_decode(file_get_contents("php://input"));
// Escaping special characters from updated data
$id = mysqli_real_escape_string($connect, $data->id);
$name = mysqli_real_escape_string($connect, $data->name);
$email = mysqli_real_escape_string($connect, $data->email);
$gender = mysqli_real_escape_string($connect, $data->gender);
$address = mysqli_real_escape_string($connect, $data->address);
// mysqli query to insert the updated data
$query = "UPDATE emp_details SET emp_name='$name',emp_email='$email',emp_gender='$gender',emp_address='$address' WHERE emp_id=$id";
mysqli_query($connect, $query);
echo true;
?>
