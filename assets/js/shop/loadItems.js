var cartTotal = 0;
var cart = [];
//sessionStorage.setItem('cart', []);

let displayModal = (productName) => {

	productName != undefined ? document.getElementById('addedAlert').innerHTML = productName+' añadido correctamente al carrito' : document.getElementById('addedAlert').innerHTML = 'Producto añadido correctamente al carrito';

	$('#myModal').modal();
};

let finalizeOrder = () => {

	if (cart.length != 0) {

		console.log(cart);
		localStorage.setItem('cart', JSON.stringify(cart));

		localStorage.setItem('total', parseInt(cartTotal));


		location.href='/twochefs/checkout';

	} else {

		alert('Carrito vacío. No ha ordenado nada todavía');

	}
	
};

let setTotal = (price) => {

	var cartTotalElement = document.getElementById('orderCounter');

	cartTotal = cartTotal + parseInt(price);
	cartTotalElement.innerHTML = cartTotal + '$';

	// Set products quantity

	var cartTotalQuantityElement = document.getElementById('productsCounter');

	cartTotalQuantityElement.innerHTML = parseInt(cartTotalQuantityElement.innerHTML) + 1;
};

let registerOnMemory = (name, price, category) => {

	var pedido = {

		'nombre': name,
		'precio': price, 
		'categoria': category
	};

	cart.push(pedido);

};

let loadOnCart = (name, price, category) => {

	registerOnMemory(name, price, category);
	setTotal(price);

	displayModal(name);
};

let setHtmlCategoryItems = (category, items) => {

	var categorySection = document.getElementById(category);
	var itemsHtml = '';

	items.forEach(item => {

		var htmlCard = '<div class="card m-2 p-2 ml-4 mr-4" style="width: 25rem; min-width: 25%; overflow: hidden;"><img src="'+'../assets/images/shop/'+category+'/'+item.link+'" class="card-img-top product-image" alt="..." style="max-height: 70%; min-height: 55%;"><div class="card-body mt-4" style="overflow: hidden;"><h5 class="card-title">'+item.nombre+'</h5><p class="card-text">'+item.descripcion+'<br><br><span class="text-success mt-4">'+item.precio+'$</span></p><div class="d-flex justify-content-left align-items-start w-100 flex-column"><div class="d-flex justify-content-end w-100 align-items-end"><a href="#" class="btn btn-primary mb-4" onclick="loadOnCart('+'\''+item.nombre+'\''+','+'\''+item.precio+'\''+', '+'\''+item.categoria+'\''+')">Agregar</a></div></div></div></div>';

		itemsHtml = itemsHtml + htmlCard;
	});

	categorySection.innerHTML = categorySection.innerHTML + itemsHtml;

};

let loadCategoryItems = (category) => {

	axios.get('../assets/php/shop/loadItems.php?cat='+category)
	.then((response) => {

		setHtmlCategoryItems(category, response.data);
	});
};

let loadItems = (cartTotalElement) => {

	var cartTotalElement = document.getElementById('orderCounter');

	//Set total counter to 0
	cartTotalElement.innerHTML = '0$';

	var categories = ['comidas', 'bebidas', 'postres'];

	categories.forEach((category) => {

		loadCategoryItems(category);
	});

};

loadItems();
