<?php
	
	$db = mysqli_connect('127.0.0.1', 'root', '', 'twochefs');

	$lr_sql = 'SELECT * FROM facturas ORDER BY id DESC LIMIT 1';

	$items = Array();

	if($result = mysqli_query($db, $lr_sql)) {

		while($result_array = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
			array_push($items, $result_array);
		}

		return json_encode($items);

	} else {

		echo mysqli_error($db);
	}


?>