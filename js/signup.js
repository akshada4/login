let passInput = document.getElementsByClassName('passwordinput');
passInput[0].addEventListener('click', e => {
	console.log(document.getElementById('messagedisplayed'));
	if (document.getElementById('messagedisplayed'))
		document.getElementById('messagedisplayed').remove();
	e.preventDefault();
});

passInput[1].addEventListener('click', e => {
	if (document.getElementById('messagedisplayed'))
		document.getElementById('messagedisplayed').remove();
	e.preventDefault();
});


let signUp = () => {
	let username = document.getElementById('username').value;
	let email = document.getElementById('email').value;		let password = document.getElementById('password');
	let confirmPassword = document.getElementById('confirmpassword');
	let address = document.getElementById('address').value;
	if (username && email && password.value && confirmPassword.value && address){
		if (password.value != confirmPassword.value){
			let message = document.createElement('div');
			message.id = 'messagedisplayed';
			message.style.color = 'red';
			message.style.fontFamily = 'sans-serif'
			message.style.fontSize = '1rem';
			message.appendChild(document.createTextNode("password and confirm password don't match"));
			password.value = '';
			confirmpassword.value = '';
			document.getElementById('signupform').appendChild(message);			

		}
		else {
			document.location.href = "index.html";
			document.getElementById('signupform').reset();
		}
	}

}


