
invoiceElement = document.getElementById('invoice-holder');
orderElement = document.getElementById('order-holder');

var invoiceNumber;

const saveInvoiceInDb = invoice => {

	var invoiceInfo = new FormData();

	invoiceInfo.append('nombre', invoice.name);
	invoiceInfo.append('apellido', invoice.lastName);
	invoiceInfo.append('telefono', invoice.phone);
	invoiceInfo.append('direccion', invoice.address);
	invoiceInfo.append('metodo', invoice.method);
	invoiceInfo.append('carrito', invoice.cart);
	invoiceInfo.append('total', invoice.total);

	axios.post('../../assets/php/admin/add_invoice.php', invoiceInfo).then(response => {
		console.log(response);
	});
};

const getInvoiceNumber = () => {

	axios.post('../../assets/php/admin/get_invoice_last_register.php').then(response => {
		invoiceNumber = response.data;
	});	

};

const getOrderInfo = () => {

	console.log('Hola desde getOrderInfo');

	var invoice = JSON.parse(sessionStorage.getItem('invoice'));

	var cart = JSON.parse(invoice.cart);

	var openOrderTag = '<div class="d-flex justify-content-center mt-4"><table class="table"><thead><tr><th scope="col">Nombre</th><th scope="col"></th><th scope="col">Precio</th></tr></thead><tbody id="tableBody">';

	var totalOrderTr = '<tr><th>Total</th><td></td><td class="text-success font-weight-bold">'+invoice.total+'$</td></tr>';

	var closeOrderTag = '</tbody></table></div>';

	cart.forEach(article => {
		var articleTr = '<tr><td>'+article.nombre+'</td><td></td><td>'+article.precio+'$</td></tr>';

		openOrderTag = openOrderTag + articleTr;
	});

	orderElement.innerHTML = openOrderTag + totalOrderTr + closeOrderTag;

};

const getInvoiceInfo = () => {

	var invoice = JSON.parse(sessionStorage.getItem('invoice'));

	saveInvoiceInDb(invoice);

	getInvoiceNumber();

	var fecha = new Date();

	invoiceElement.innerHTML = '<h1 class="fw-bold d-flex justify-content-center">Factura de pedido</h1><span class="fw-bold d-flex justify-content-center p-2">Nombre: '+invoice.name+'</span><span class="d-flex justify-content-center p-2">Apellido: '+invoice.lastName+'</span><span class="d-flex justify-content-center p-2">Número de teléfono: '+invoice.phone+'</span><span class="d-flex justify-content-center p-2">Dirección exacta: '+invoice.address+'</span><span class="d-flex justify-content-center p-2">Método de pago: '+invoice.method+'</span><span class="d-flex justify-content-center p-2">Fecha de pago: '+fecha+'</span><span class="d-flex justify-content-center p-2 text-success">Total: '+invoice.total + '$' +'</span>';

	getOrderInfo();

};

document.addEventListener('DOMContentLoaded', getInvoiceInfo);

document.getElementById('cap-button').addEventListener('click', () => {

	domtoimage.toBlob(document.body)
	.then(function(blob) {
		saveAs(blob, 'factura.png');
    });

});
