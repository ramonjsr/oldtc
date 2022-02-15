<?php	

	$type_js = $_POST['type'];
	$action_js = $_POST['action'];

	$db = mysqli_connect('127.0.0.1', 'root', '', 'twochefs');

	function makeQueries($db, $query) {

		$result = mysqli_query($db, $query);

		$items = Array();

		while($result_array = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
			array_push($items, $result_array);
		}

		return json_encode($items);

	}

	function invoiceFilters() {

		$filter = $_POST['filter'];

		switch ($filter) {

			case 'get':

				return 'SELECT * FROM facturas';

				break;

			case 'debito':

				return 'SELECT * FROM facturas WHERE metodo = "debito";';

				break;

			case 'efectivo':

				return 'SELECT * FROM facturas WHERE metodo = "efectivo";';

				break;

			case 'zelle':

				return 'SELECT * FROM facturas WHERE metodo = "zelle";';

				break;

			case 'pm':

				return 'SELECT * FROM facturas WHERE metodo = "pm";';

				break;

			case 'transferencia':

				return 'SELECT * FROM facturas WHERE metodo = "transferencia";';

				break;
			
			default:
				
				return 'SELECT * FROM facturas';				
		}
	}

	function get($type) {

		switch ($type) {

			case 'products':

				$sql = 'SELECT * FROM productos';

				break;

			case 'clients':

				$sql = 'SELECT * FROM clientes';
				
				break;

			case 'invoices':

				$sql = invoiceFilters();
				
				break;

		}

		

		echo makeQueries(mysqli_connect('127.0.0.1', 'root', '', 'twochefs'), $sql);
	
	}
	
	get($type_js, $action_js);
?>