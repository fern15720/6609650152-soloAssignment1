
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const roleField = document.getElementById("role");
const loginButton = document.getElementById("loginButton");

function validateUsername() {
  const username = usernameField.value;
  const usernameAlert = document.getElementById("usernameAlert");

  if (/^\d+$/.test(username)) { //Check that only all numbers are included
    if (username.length < 10) {
      usernameAlert.textContent = "Please fill in your username completely.";
      usernameAlert.style.display = "block";
    } else {
      usernameAlert.style.display = "none";
    }
  } else if (/^[a-zA-Z]/.test(username)) { //Check that it starts with a letter
    if (username.length < 5) {
      usernameAlert.textContent = "Please fill in your username completely.";
      usernameAlert.style.display = "block";
    } else {
      usernameAlert.style.display = "none";
    }
  } 
}

roleField.addEventListener("change", checkPasswordBeforeRole);

function checkPasswordBeforeRole() {
  const password = passwordField.value;
  const passwordAlert = document.getElementById("passwordAlert");

  //Check input password
  if (password.trim() === "") {
    passwordAlert.textContent = "Please enter your password.";
    passwordAlert.style.display = "block"; // Display alert message
  } else {
    passwordAlert.style.display = "none"; // Hide the alert message if password is filled
  }
}
// Add event listener to check the password input every time it changes
passwordField.addEventListener("input", checkPasswordBeforeRole);


function validateForm() {
  const username = usernameField.value;
  const password = passwordField.value;
  const roleAlert = document.getElementById("roleAlert");

  // Check username and password are entered completely.
  if (username.trim() !== "" && password.trim() !== "") {
    // Show warning message if role is not yet selected 
    if (roleField.value === "") {
      roleAlert.textContent = "Please select your role.";
      roleAlert.style.display = "block";
    } else {
      roleAlert.style.display = "none";
    }
  } else {
    roleAlert.style.display = "none"; // Hide message if username, password not filled
  }
}

// add event listener for validate form 
usernameField.addEventListener("input", validateForm);
passwordField.addEventListener("input", validateForm);
roleField.addEventListener("change", validateForm);




//checkFields
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

//Submit form
function submitLogin() {
  const username = usernameField.value;
  const password = passwordField.value;

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key' : 'TUcb24c31d468134b9d239d8465aebb11e3bad7796a3f0d9883cc665705c89006615ffbc4dd629091a23b613043869a0e8'
        },
        body: JSON.stringify({"UserName" : username, "PassWord" : password})
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('message').innerText = data.message;
    })
    .catch(error => console.error('Error:', error));
    
    
}

// Show/Hide Password 
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

  // Refresh form 
  document.getElementById('refreshButton').addEventListener('click', function() {
    location.reload(); 
});




