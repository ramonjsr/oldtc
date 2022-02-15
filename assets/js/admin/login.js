
const makeRequest = (login) => {

	axios.post('../assets/php/admin/login.php', login)
		.then(function (response) {
    		// handle success
    		response.data == 'OK' ? location.href = 'home' : alert('Datos incorrectos');
  		})
  		.catch(function (error) {
    		// handle error
    		console.log(error);
  		})
  		.then(function () {
			// always executed
  		});
};

function validate (...args) {

	var validated = false;

	args.map(arg => {

		if(arg.value != '') validated = true;

		 
	});

	return validated ? true : alert('Campo '+arg.key+' vacío');
};

const getCredentials = () => {

	var user = document.getElementsByName('user')[0].value;
	var pw = document.getElementsByName('pw')[0].value;

	const validation = validate(
		{key: 'usuario', value: user},
		{key: 'contraseña', value: pw}
	);

	return validation ? {user: user, pw: pw} : validation();
};

const login = () => {

	const credentials = getCredentials();

	const request = credentials ? makeRequest(credentials) : false;
	
	const result = request ? goHome() : showError();
};
