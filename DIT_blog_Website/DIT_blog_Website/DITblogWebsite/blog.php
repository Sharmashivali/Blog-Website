<?php

$host = 'localhost';
$username = 'admin';
$password = 'mAnik@2222';
$database = 'blog';

// Create a connection object.
$conn = new mysqli($host, $username, $password, $database);

// Check the connection.
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

// Get the email and password from the user.
$email = $_POST['email'];
$password = $_POST['password'];

// Prepare the SQL statement.
$sql = 'SELECT * FROM users WHERE email = ?';

$stmt = $conn->prepare($sql);

// Bind the parameters.
$stmt->bind_param('s', $email);

// Execute the statement.
$stmt->execute();

// Get the result.
$result = $stmt->get_result();

// If the user exists, verify the password.
if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();

    if (password_verify($password, $user['password'])) {
        // The user is logged in successfully.

        // Create a session for the user.
        session_start();

        $_SESSION['user_id'] = $user['id'];

        // Redirect the user to the home page.
        header('Location: index.php');
    } else {
        // The password is incorrect.
        echo 'Invalid password.';
    }
} else {
    // The user does not exist.
    echo 'User does not exist.';
}

// Close the statement.
$stmt->close();

// Close the connection.
$conn->close();

?>
