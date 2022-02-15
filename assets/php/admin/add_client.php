<?php

	$cliente_nombre = $_POST['nombre'];
	$cliente_email = $_POST['email'];
	
	$db = mysqli_connect('127.0.0.1', 'root', '', 'twochefs');

	function add_client($db, $nombre, $email) {

		$add_client_sql = 'INSERT INTO clientes(nombre, correo) VALUES("'.$nombre.'", "'.$email.'")';	

		if($add_client_query = mysqli_query($db, $add_client_sql)) {

			echo 'OK';

		} else {

			echo mysqli_error($db);
		}

	}

	add_client($db, $cliente_nombre, $cliente_email);
?>