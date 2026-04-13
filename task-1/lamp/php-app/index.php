<?php
$host = "mysql";        // service name
$user = "root";
$password = "root";
$db = "testdb";

$conn = new mysqli($host, $user, $password, $db);

if ($conn->connect_error) {
    die("❌ Connection failed: " . $conn->connect_error);
}

echo "✅ Connected to MySQL successfully<br>";

$result = $conn->query("SELECT NOW() as time");

$row = $result->fetch_assoc();

echo "Server time from MySQL: " . $row['time'];

$conn->close();
?>
