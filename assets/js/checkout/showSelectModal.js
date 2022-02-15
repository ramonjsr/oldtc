
const showSelectModal = (ev) => {

	const payMethod = ev.target.value;

	var payMethodCol = document.getElementById('payMethodCol');

	switch(payMethod) {

		case 'debito':

			payMethodCol.innerHTML = '<span class="text-center text-success">Debe tener su tarjeta de débito a la mano a la hora de recibir su pedido</span>';

			break;

		case 'pm':

			payMethodCol.innerHTML = '<label for="myfile" class="font-weight-bold" id="captureLabel">Captura del pago</label><input type="file" id="myfile" class="form-control" name="captura" required>';

			var myModal = new bootstrap.Modal(document.getElementById('pmModal'));

			myModal.show();

			break;
		
		case 'zelle':

			payMethodCol.innerHTML = '<label for="myfile" class="font-weight-bold" id="captureLabel">Captura del pago</label><input type="file" id="myfile" class="form-control" name="captura" required>';

			var myModal = new bootstrap.Modal(document.getElementById('zelleModal'));

			myModal.show();

			break;
		
		case 'transferencia':

			payMethodCol.innerHTML = '<label for="myfile" class="font-weight-bold" id="captureLabel">Captura del pago</label><input type="file" id="myfile" class="form-control" name="captura" required>';

			var myModal = new bootstrap.Modal(document.getElementById('bankModal'));

			myModal.show();

			break;

		default:

			payMethodCol.innerHTML = '<label for="myfile" class="font-weight-bold" id="captureLabel">Foto del efectivo</label><input type="file" id="myfile" class="form-control" name="captura" required>';
	}
	
};

