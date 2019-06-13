<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Обратная связь</title>
	<link rel="stylesheet" href="css/stylephph.css" type="text/css">
</head>
<body>
	<?php
		if (isset($_POST['name'])) {$name = $_POST['name'];}
		if (isset($_POST['offer'])) {$email = $_POST['offer'];
		if (isset($_POST['tel'])) {$tel = $_POST['tel'];}

		$to = "Nikulinairina1@yandex.ru";

		$headers = 'Content-type: text/html; charset=UTF-8'. "\r\n".
			'From: Nikulinairina1@yandex.ru' . "\r\n" .
			'Reply-To: Nikulinairina1@yandex.ru' . "\r\n" .
	    	'X-Mailer: PHP/' . phpversion();
	    $subject = "Заказ с лендинга LIGHTBOX";
	    $message = "имя клиента: $name <br>
	    			Услуга: $email <br>
	    			телефон заказчика: $tel";

	mail ($to, $subject, $message, $headers);
	   
	?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="js/script.js"></script>
</body>
</html>