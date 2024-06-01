<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Database configuration
$servername = "localhost";
$username = "admin";
$password = "mAnik@2222";
$dbname = "blogcontactpage";
$port = 3307; // Ensure this is an integer

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Check connection
if ($conn->connect_error) {
    error_log("Connection failed: " . $conn->connect_error); // Log error message to server logs
    die(json_encode(array("success" => false, "message" => "Connection failed: " . $conn->connect_error)));
}

// Check request method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Log the request method for debugging
    error_log("Request method: " . $_SERVER["REQUEST_METHOD"]);

    // Sanitize inputs
    $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
    $number = isset($_POST['number']) ? intval($_POST['number']) : 0;
    $email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : '';
    $message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : '';

    // Validate inputs
    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(array("success" => false, "message" => "Please fill in all required fields."));
        exit;
    }

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO contacts (name, number, email, message) VALUES (?, ?, ?, ?)");
    if (!$stmt) {
        error_log("Prepare failed: " . $conn->error); // Log error message to server logs
        echo json_encode(array("success" => false, "message" => "Database error: " . $conn->error));
        exit;
    }

    $stmt->bind_param("siss", $name, $number, $email, $message); // Corrected the bind_param data types

    // Execute the statement
    if ($stmt->execute()) {
        echo json_encode(array("success" => true, "message" => "Message saved successfully"));
    } else {
        error_log("Execute failed: " . $stmt->error); // Log error message to server logs
        echo json_encode(array("success" => false, "message" => "Error: " . $stmt->error));
    }

    // Close the statement and connection
    $stmt->close();
} else {
    error_log("Invalid request method: " . $_SERVER["REQUEST_METHOD"]); // Log error message to server logs
    echo json_encode(array("success" => false, "message" => "Invalid request method."));
}

$conn->close();
?>
