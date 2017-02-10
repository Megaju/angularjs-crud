<?php
require_once 'database_connections.php';
$data = json_decode(file_get_contents("php://input"));
$query = "DELETE FROM users WHERE id=$data->del_id";
mysqli_query($connect, $query);
echo true;
?>
