<?php

function millitime() {
    $microtime = microtime();
    $comps = explode(' ', $microtime);
  
    // Note: Using a string here to prevent loss of precision
    // in case of "overflow" (PHP converts it to a double)
    return sprintf('%d%03d', $comps[1], $comps[0] * 1000);
}

$currentTime = millitime();

$typeImage = '';
if ($_FILES['fileName']['type'] == 'image/jpeg') {
    $typeImage = 'jpg';
    echo 'jpg';
} else if ($_FILES['fileName']['type'] == 'image/png') {
    $typeImage = 'png';
    echo 'png';
};

$uploaddir = './';
$uploadfile = $uploaddir . basename($currentTime . '.' . $typeImage);



// echo '<pre>';
if (move_uploaded_file($_FILES['fileName']['tmp_name'], $uploadfile)) {
    echo "Файл корректен и был успешно загружен.\n";
} else {
    echo "Возможная атака с помощью файловой загрузки!\n";
}

// echo 'Некоторая отладочная информация:';
// print_r($_FILES);

// print "</pre>";

require_once('./phpmailer/PHPMailerAutoload.php');

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.timeweb.ru';                                               // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'mail@lobanof.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'qR8yHrcK'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('mail@lobanof.ru'); // от кого будет уходить письмо?
$mail->addAddress('facemoroz@yandex.ru');
//$mail->addAddress('mail@yandex.ru');               // Name is optional
//$mail->addAddress('mail@yandex.ru');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
$mail->AddEmbeddedImage($currentTime . '.' . $typeImage, 'attachimg', $currentTime . '.' . $typeImage);
// $mail->addAttachment($_FILES['upload']['tmp_name'], $_FILES['upload']['name']);    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML


foreach ( $_POST as $key => $value ) {
    if ($value !== "") {
  		$message .= "<strong>".$key.":</strong> ".$value."<br>";
    }
}

$mail->Subject = 'Onega';
$mail->Body    = $message . ' <img src=\"cid:attachimg\" /></p>' ;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Заявка не отправлена, позвоните пожалуйста по телефону';
} else {
    echo 'Спасибо за заявку, мы свяжемся с вами в ближайшее время';
}
?>
