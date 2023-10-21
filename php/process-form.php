<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "ahmedaosman00@gmail.com";  // Replace with your personal email address
    $subject = "New Form Submission from $name";
    $headers = "From: $email";
    
    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message";
    
    // Send the email
    mail($to, $subject, $email_message, $headers);
    
    // Redirect to a thank-you page
    header("Location: thank-you.html");  // Create a thank-you page
}
?>
