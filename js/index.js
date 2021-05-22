let loginButton = document.getElementById('loginbtn');
loginButton.addEventListener('click',() => {
	login();
});

let login = () => {
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	if (email && password) {
		fetch('https://jsonplaceholder.typicode.com/users',{
			method: 'POST',
			headers:{
				'Content-Type' : 'application/json'
			},
			body : JSON.stringify({
				email: email,
				password : password
			})
		}).then(res => {
			document.location.href = "userpage.html";
			document.getElementById('loginform').reset();
		})
		
	}
}

// let loginRedirect = () => {
// 	document.location.href = "userpage.html";
// }

let signUpButton = () => document.location.href = "signup.html"