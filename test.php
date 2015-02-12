<?php
$servername = "localhost";
$username = "root";
$password = "";
$db = "coolshop";

// Create connection
$conn = new mysqli($servername, $username, $password,$db);

$sql = "SELECT id, firstname, lastname FROM MyGuests";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " First Name: " . $row["firstname"]. " Last Name: " . $row["lastname"]. "<br>";
        
    }
} else {
    echo "0 results";
}

$conn->close();

?>