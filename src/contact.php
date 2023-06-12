<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';


$to = '552006jose2@gmail.com'; // Dirección de correo del destinatario
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$final_message = $name . " Ha decidido contactarte desde el formulario de tu Portafolio. Su email en caso de contacto es: " . $email . "\r\n";
$final_message .= $name . " te comunica que: \r\n";
$final_message .= $message;

$mail = new PHPMailer();
$mail->isSMTP();
$mail->SMTPDebug = 0;
$mail->Host = 'smtp.gmail.com';
$mail->Port = 465;
$mail->SMTPSecure = 'ssl';
$mail->SMTPAuth = true;
$mail->Username = '552006jose@gmail.com'; // Tu dirección de correo electrónico
$mail->Password = 'hkamzvhvjbpflnez'; // Tu contraseña
$mail->setFrom('noreply@gmail.com');
$mail->addAddress($to);
$mail->Subject = $subject;
$mail->Body = $final_message;

if ($mail->send()) {
    echo "El correo se envió correctamente.";
} else {
    echo "Error al enviar el correo. " . $mail->ErrorInfo;
}
?>



<!-- <?php

$to = '552006jose@gmail.com';
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$final_message = $name." Ha decidido contactarte desde el formulario de tu Portafolio. Su email en caso de contacto es: ".$email."\r\n";
$final_message .= $name." te comunica que: \r\n";
$final_message .= $message;

$headers = "From: noreply@gmail.com\r\n";

$llego = mail($to, $subject, $final_message, $headers);

if ($llego) {
    echo "El correo se envió correctamente.";
} else {
    echo "Error al enviar el correo.";
}

?> -->