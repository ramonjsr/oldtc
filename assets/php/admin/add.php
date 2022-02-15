<?php

	$nombre = $_POST['nombre'];
	$descripcion = $_POST['descripcion'];
	$precio = $_POST['precio'];
	$categoria = $_POST['categoria'];
	$disponibilidad = $_POST['disponible'];
	$nombre_imagen = $_FILES['imagen']['name'];
	$imagen = $_FILES['imagen']['tmp_name'];

	$product = Array($nombre, $nombre_imagen, $precio, $descripcion, $categoria, $disponibilidad);


	$db = mysqli_connect('127.0.0.1', 'root', '', 'twochefs');

	$route = '../../images/shop/'.$categoria.'/'.$nombre_imagen;

	function add_product($db, $product) {

		$add_product_sql = 'INSERT INTO productos(nombre, link, precio, descripcion, categoria, disponible) VALUES("'.$product[0].'", "'.$product[1].'", "'.$product[2].'", "'.$product[3].'", "'.$product[4].'",'.$product[5].');';	

		if($add_product_query = mysqli_query($db, $add_product_sql)) {

			return true;

		} else {

			echo mysqli_error($db);
		}

	}

	if(move_uploaded_file($imagen, $route)) {

		if(add_product($db, $product)) {

			echo 'OK';

		} else {
		
			echo 'NO';
		}

	} else {

		echo "FILE NOT SAVED";

	}

?>