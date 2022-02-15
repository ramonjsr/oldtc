
// FUNCIONES PARA CREAR Y ELIMINAR PRODUCTOS

const addProductItems = () => {

	const name = document.getElementsByName('nombre')[0].value;
	const description = document.getElementsByName('descripcion')[0].value;
	const price = document.getElementsByName('precio')[0].value;
	const category = document.getElementsByName('categoria')[0].value;
	const availability = document.getElementsByName('disponible')[0].value;
	const image = document.getElementsByName('imagen_producto')[0].files[0];

	var productInfo = new FormData();

	productInfo.append('nombre', name);
	productInfo.append('descripcion', description);
	productInfo.append('precio', price);
	productInfo.append('categoria', category);
	productInfo.append('disponible', availability);
	productInfo.append('imagen', image);

	axios.post('../../assets/php/admin/add.php', productInfo).then(response => {

		response.data == 'OK' ? alert('Producto "' + productInfo.get('nombre') + '" agregado correctamente') : alert('Error agregando producto. Por favor, revise los datos ingresados');
	});

};

const deleteProductItems = section => {

	const productName = document.getElementsByName('nombre_producto')[0].value;

	var deleteProductForm = new FormData();

	deleteProductForm.append('nombre_producto', productName);
	deleteProductForm.append('seccion', section);

	axios.post('../../assets/php/admin/del.php', deleteProductForm).then(response => {
		response.data == 'OK' ? alert('Producto "' + productInfo.get('nombre') + '" eliminado correctamente') : alert('No se ha encontrado el producto a eliminar. Por favor, revise los datos ingresados');
	});

};

// FUNCIONES PARA CREAR Y ELIMINAR CLIENTES

const addClientItems = section => {

	var client = {
		name: document.getElementsByName('nombre_cliente')[0].value,
		email: document.getElementsByName('email_cliente')[0].value
	};

	var clientInfo = new FormData();

	clientInfo.append('nombre', client.name);
	clientInfo.append('email', client.email);

	axios.post('../../assets/php/admin/add_client.php', clientInfo).then(response => {
		response.data == 'OK' ? alert('Cliente "' + clientInfo.get('nombre') + '" agregado correctamente') : alert('No se ha podido agregar el cliente. Por favor verifique los datos');
	});

};	

const deleteClientItems = section => {

	const clientID = document.getElementsByName('id_cliente')[0].value;

	var deleteClientInfo = new FormData();

	deleteClientInfo.append('id', clientID);
	deleteClientInfo.append('seccion', section);

	axios.post('../../assets/php/admin/del.php', deleteClientInfo).then(response => {
		response.data == 'OK' ? alert('Cliente eliminado correctamente') : alert('No se ha encontrado el cliente a eliminar. Por favor, revise los datos ingresados');
	});	

};

// FUNCIONES PARA LISTAR 

const displayGetInvoiceItems = invoices => {

	var tableOpenTag = '<table class="table"><thead><tr><th scope="col">ID</th><th scope="col">Nombre</th><th scope="col">Apellido</th><th scope="col">Teléfono</th><th scope="col">Dirección</th><th scope="col">Pago</th><th scope="col">Total</th></tr></thead><tbody>';
	var tableCloseTag = '</tbody></table>';

	invoices.forEach(invoice => {

		var invoiceRow = '<tr><th>'+invoice.id+'</th><td>'+invoice.nombre+'</td><td>'+invoice.apellido+'</td><td>'+invoice.telefono+'</td><td>'+invoice.direccion+'</td><td>'+invoice.metodo+'</td><td>'+invoice.total+'</td></tr>';

		tableOpenTag = tableOpenTag + invoiceRow;
	});

	tableOpenTag = tableOpenTag + tableCloseTag;

	var holder = document.getElementsByClassName('invoices-holder')[0];

	holder.innerHTML = tableOpenTag;


};

const displayGetClientItems = clients => {

	var tableOpenTag = '<table class="table"><thead><tr><th scope="col">ID</th><th scope="col">Nombre</th><th scope="col">Email</th></tr></thead><tbody>';
	var tableCloseTag = '</tbody></table>';

	clients.forEach(client => {

		var clientRow = '<tr><th>'+client.id+'</th><td>'+client.nombre+'</td><td>'+client.correo+'</td></tr>';

		tableOpenTag = tableOpenTag + clientRow;
	});

	tableOpenTag = tableOpenTag + tableCloseTag;

	var holder = document.getElementsByClassName('clients-holder')[0];

	holder.innerHTML = tableOpenTag;

};

const displayGetProductItems = products => {

	var tableOpenTag = '<table class="table"><thead><tr><th scope="col">Nombre</th><th scope="col">Link</th><th scope="col">Precio</th><th scope="col">Descripción</th><th scope="col">Categoría</th><th scope="col">Disponible</th></tr></thead><tbody>';
	var tableCloseTag = '</tbody></table>';

	products.forEach(product => {

		var productRow = '<tr><th>'+product.nombre+'</th><td>'+product.link+'</td><td>'+product.precio+'</td><td>'+product.descripcion+'</td><td>'+product.categoria+'</td><td>'+product.disponible+'</td></tr>';

		tableOpenTag = tableOpenTag + productRow;
	});

	tableOpenTag = tableOpenTag + tableCloseTag;

	var holder = document.getElementsByClassName('products-holder')[0];

	holder.innerHTML = tableOpenTag;

};

// FUNCIONES PARA CADA PROCEDIMIENTO

const getItems = (section, filter='get') => {

	var modeData = new FormData();
	modeData.append('type', section);
	modeData.append('action', 'list');
	modeData.append('filter', filter);

	switch (section) {

		case 'products':

			axios.post('../../assets/php/admin/get.php', modeData).then(response => {
				displayGetProductItems(response.data);
			});

			break;

		case 'clients':

			axios.post('../../assets/php/admin/get.php', modeData).then(response => {
				displayGetClientItems(response.data);
			});			

			break;

		case 'invoices':

			axios.post('../../assets/php/admin/get.php', modeData).then(response => {
				console.log(response.data);
				displayGetInvoiceItems(response.data);
			});			
 
			break;

	}
};

const addItem = (section, holder) => {

	switch (section) {

		case 'products':

			holder.innerHTML = '<div class="container d-flex justify-content-center flex-column"><div class="row p-4"><div class="col"><label for="nombre">Nombre</label><input type="text" name="nombre" class="form-control"></div><div class="col"><label for="descripcion">Descripción</label><input type="text" name="descripcion" class="form-control"></div></div><div class="row p-4"><div class="col"><label for="precio">Precio (USD)</label><input type="number" name="precio" class="form-control"></div><div class="col"><label for="categoria">Categoría</label><select name="categoria" id="categoria" class="form-control"><option value="bebidas">Bebidas</option><option value="comidas">Comidas</option><option value="postres">Postres</option></select></div></div><div class="row p-4"><div class="col"><label for="disponible">Disponibilidad</label><select name="disponible" id="disponible" class="form-control"><option value="1">Disponible</option><option value="0">No Disponible</option></select></div><div class="col"><label for="imagen_producto">Imagen del producto</label><input type="file" name="imagen_producto" class="form-control"></div></div><div class="row p-4"><div class="col d-flex justify-content-center mt-4"><button class="btn btn-success" id="add-button">Agregar</button></div></div></div>';

			document.getElementById('add-button').addEventListener('click', addProductItems);

			break;

		case 'clients':

			holder.innerHTML = '<div class="container d-flex justify-content-center flex-column"><div class="row p-4"><div class="col"><label for="nombre_cliente">Nombre</label><input type="text" name="nombre_cliente" class="form-control"></div><div class="col"><label for="email_cliente">Email</label><input type="email" name="email_cliente" class="form-control"></div></div><div class="row p-4"><div class="col d-flex justify-content-center mt-4"><button class="btn btn-success" id="add-button">Agregar</button></div></div></div>';

			document.getElementById('add-button').addEventListener('click', addClientItems);

			break;
	}
};
const delItem = (section, holder) => {

	switch (section) {

		case 'products':

			holder.innerHTML = '<div class="container d-flex justify-content-center flex-column"><div class="row p-4"><div class="col"><label for="nombre_producto">Nombre exacto del producto</label><input type="text" name="nombre_producto" class="form-control" placeholder="Hamburguesa 1/4 Libra"></div></div><div class="row pl-4 pr-4"><div class="col"><button id="del-button" class="btn btn-success">Eliminar</button></div></div></div>';

			document.getElementById('del-button').addEventListener('click', () => {deleteProductItems(section)});

			break;

		case 'clients':

			holder.innerHTML = '<div class="container d-flex justify-content-center flex-column"><div class="row p-4"><div class="col"><label for="id_cliente">ID del cliente</label><input type="text" name="id_cliente" class="form-control"></div></div><div class="row pl-4 pr-4"><div class="col"><button id="del-button" class="btn btn-success">Eliminar</button></div></div></div>';

			document.getElementById('del-button').addEventListener('click', () => {deleteClientItems(section)});

			break;
	}

};

const callForm = (section, use) => {

	var holder = document.getElementsByClassName(section+'-holder')[0];

	switch (use) {
 
		case 'add':
			
			addItem(section, holder);

			break;

		case 'list':

			//holder.innerHTML = "<p>Hi, list element!</p>";
			getItems(section);

			break;

		case 'update':

			holder.innerHTML = "<p>Hi, update element!</p>";

			break;

		case 'del':

			delItem(section, holder);

			break;

		default:

			holder.innerHTML = "<p>Hi, list element!</p>";

	}	
};

var actualSection = location.href.split('/')[5];

document.addEventListener('DOMContentLoaded', () => {
	callForm(actualSection, 'list');
});

//callForm('list');