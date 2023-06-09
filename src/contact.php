<?php

$to = '@gmail.com';
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$final_message = $name." Ha decidido contactarte desde el formulario de tu Portafolio. Su email en caso de contacto es: ".$email."\r\n";
$final_message .= $name." te comunica que: \r\n";
$final_message .= $message;

$headers = "From: noreply@gmail.com\r\n";
$headers .= "Reply-To: noreply@gmail.com\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";


$llego = mail($to, $subject, $final_message, $headers);

if ($llego) {
    echo "El correo se envió correctamente.";
} else {
    echo "Error al enviar el correo.";
}

?>