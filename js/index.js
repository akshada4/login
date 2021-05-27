let loginButton = document.getElementById('loginbtn');
loginButton.addEventListener('click',() => {
	login();
});

let login = () => {
	document.location.href = "userpage.html";
	// let email = document.getElementById('email').value;
	// let password = document.getElementById('password').value;
	// if (email && password) {
	// 	fetch('https://jsonplaceholder.typicode.com/users',{
	// 		method: 'POST',
	// 		headers:{
	// 			'Content-Type' : 'application/json'
	// 		},
	// 		body : JSON.stringify({
	// 			email: email,
	// 			password : password
	// 		})
	// 	}).then(() => {
	// 		document.location.href = "userpage.html";
	// 		document.getElementById('loginform').reset();
	// 	});
		
	// }
}

let signUpButton = () => document.location.href = "signup.html"