
var file;

const readFile = input => {

  file = input.files[0];

  if(file.name.split('.')[1] != 'jpg' && file.name.split('.')[1] != 'png') {

  	alert('Por favor, suba un archivo de imagen válido (PNG o JPG)');

  	file = null;

  	input.value = '';

  }

};

const saveInvoice = invoiceData => {

	const invoice = {
		name: invoiceData.get('nombre'),
		lastName: invoiceData.get('apellido'),
		phone: invoiceData.get('telefono'),
		address: invoiceData.get('direccion'),
		method: invoiceData.get('metodo'),
		cart: invoiceData.get('pedido'),
		total: invoiceData.get('total'),
	};

	sessionStorage.setItem('invoice', JSON.stringify(invoice));

};

const setInDatabase = (formData, cart, total) => {
	
	formData.append('pedido', cart);
	formData.append('total', total);

	axios.post('../assets/php/checkout/setOrderInDatabase.php', formData)
	.then((response) => {

		console.log(response);

		if (response.data == 'OK') {

			saveInvoice(formData);

			document.getElementById('orderAlert').innerHTML = 'El pedido se procesó correctamente. Se realizará una llamada para confirmar su orden';

			$('#orderModal').modal();

		} else {

			document.getElementById('orderAlert').innerHTML = 'El pedido no pudo ser procesado. Intente más tarde';

			$('#orderModal').modal();
		}
	});

};

let getDataFromForm = () => {

	var name = document.getElementsByName('nombre')[0].value;
	var lastName = document.getElementsByName('apellido')[0].value;
	var phone = document.getElementsByName('telefono')[0].value;
	var address = document.getElementsByName('direccion')[0].value;
	var method = document.getElementsByName('pago')[0].value;
	var capture = file;

	var orderData = new FormData();

	orderData.append('nombre', name);
	orderData.append('apellido', lastName);
	orderData.append('telefono', phone);
	orderData.append('direccion', address);
	orderData.append('metodo', method);
	orderData.append('captura', capture);

	return orderData;
	
};

let processData = ev => {

	//var cart = JSON.parse(localStorage.getItem('cart'));

	var cart = localStorage.getItem('cart');
	var total = localStorage.getItem('total');

	var formData = getDataFromForm();

	setInDatabase(formData, cart, total);
};

let setCheckoutTable = (cart, total) => {

	var tableElement = document.getElementById('tableBody');

	var tableRows = '';

	cart.forEach((item) => {

		var tableRow = '<tr><td>'+item.nombre+'</td><td></td><td>'+item.precio+'$</td></tr>';

		tableRows = tableRows + tableRow;
	});

	tableRows+= '<tr><th>Total</th><td></td><td class="text-success font-weight-bold">'+parseInt(total)+'$</td></tr>';
	tableElement.innerHTML = tableRows;
};

let loadOrder = () => {

	if (!localStorage.getItem('cart')) {

		alert('No hay productos en la orden');
		location.href='/twochefs/shop';

	} else {

		var cart = JSON.parse(localStorage.getItem('cart'));
		var total = localStorage.getItem('total');

		//console.log(total);
		setCheckoutTable(cart, total);	

	}
};

loadOrder();