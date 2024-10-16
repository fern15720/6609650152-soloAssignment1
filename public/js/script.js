
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const roleField = document.getElementById("role");
const loginButton = document.getElementById("loginButton");

function checkFields() {
  if (usernameField.value.trim() !== "" && passwordField.value.trim() !== "" && roleField.value  !== "") {
    loginButton.disabled = false; 
  } else {
    loginButton.disabled = true; 
  }
}

usernameField.addEventListener("input", checkFields);
passwordField.addEventListener("input", checkFields);
roleField.addEventListener("change", checkFields);

function submitLogin() {
    const username = usernameField.value;
    const password = passwordField.value;

    /*const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;*/

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key' : 'TUcb24c31d468134b9d239d8465aebb11e3bad7796a3f0d9883cc665705c89006615ffbc4dd629091a23b613043869a0e8'
        },
        body: JSON.stringify({"UserName" : "username","PassWord" : "password"})
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('message').innerText = data.message;
    })
    .catch(error => console.error('Error:', error));
    
    
}

function togglePassword() {
    const passwordField = document.getElementById("password");
    const toggleIcon = document.getElementById("toggleIcon");

    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleIcon.classList.add("active"); 
    } else {
      passwordField.type = "password";
      toggleIcon.classList.remove("active"); 
    }
  }

/*function call_REST_API_Hello() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = (
        'http://localhost:3000/hello?' +
        new URLSearchParams({ myName: username, lastName: password}).toString()
      );
    
    fetch(url)
    .then(data => {
        document.getElementById('message').innerText = data.message;
    })
    .catch(error => console.error('Error:', error));
}*/
