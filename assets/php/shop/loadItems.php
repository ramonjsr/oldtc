<?php 

	$dbC = mysqli_connect("127.0.0.1", "root", "", "twochefs");
	$category = $_GET["cat"];

	$countRowsQuery = 'SELECT count(nombre) FROM productos WHERE categoria = "'.$category.'";';
	$getItemsQuery = 'SELECT * FROM productos WHERE categoria = "'.$category.'";';

	function handler($dbC, $countRowsQuery, $getItemsQuery) {

		$rowsNumber = countRows($dbC, $countRowsQuery);
		$resultItems = getItems($dbC, $getItemsQuery);

		//var_dump($resultItems);
		return print($resultItems);

	}

	function getItems($dbC, $getItemsQuery) {

		$query = mysqli_query($dbC, $getItemsQuery);

		$items = array();

		while($arrayQuery = mysqli_fetch_array($query, MYSQLI_BOTH)) {

				array_push($items, $arrayQuery);
		}

		//return $items;
		return json_encode($items);
	}

	function countRows($dbC, $countRowsQuery) {

		$query = mysqli_query($dbC, $countRowsQuery);
		//$arrayQuery = mysqli_fetch_array($query->field_count, MYSQLI_BOTH);

		$jsonQuery = json_encode(/*$arrayQuery*/ $query->field_count);

		return $jsonQuery;

	}

	handler($dbC, $countRowsQuery, $getItemsQuery);

 ?>