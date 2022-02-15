<?php
	//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
	$loginJson = file_get_contents('php://input');

	$login = json_decode($loginJson);

	$conn = mysqli_connect('127.0.0.1', 'root', '', 'twochefs');	

	$result = mysqli_query($conn, 'SELECT * FROM admins WHERE usuario = "'.$login->user.'" AND password ="'.$login->pw.'"');

	$resultsArray = mysqli_fetch_array($result, MYSQLI_ASSOC);

	if ($resultsArray) {

		echo 'OK';

	} else {

		echo 'NO';
	}


?>