// Selecting form and input elements
const body = document.querySelector("body");
const form = document.querySelector("form");
const h2 = document.querySelector("h2");
const div = document.querySelector("div");
const label = document.querySelector("label");
const input = document.querySelector("input");
const gender = document.getElementById("gender");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

//from line 13 to 33 all seven event listeners are used for keep tracking of event bubbling
body.addEventListener("click", ()=> {
    console.log("Parent is clicked")
})
div.addEventListener("click", ()=> {
    console.log("div is clicked")
})
form.addEventListener("click", ()=> {
    console.log("form is clicked ")
})
h2.addEventListener("click", ()=> {
    console.log("h2 is clicked")
})
label.addEventListener("click", ()=> {
    console.log("label is clicked")
})
label.addEventListener("click", ()=> {
    console.log("label is clicked")
})
gender.addEventListener("click", ()=> {
    console.log("gender is clicked")
})

// Function to display error messages
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

// Function to handle form submission
const handleFormData = (e) => {
    e.preventDefault();

    // Retrieving input elements
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const dateInput = document.getElementById("date");
    const genderInput = document.getElementById("gender");

    // Getting trimmed values from input fields
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const date = dateInput.value;
    const gender = genderInput.value;

    // Regular expression pattern for email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Clearing previous error messages
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    // Performing validation checks
    if (fullname === "") {
        showError(fullnameInput, "Enter your full name");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }
    if (password === "") {
        showError(passwordInput, "Enter your password");
    }
    if (date === "") {
        showError(dateInput, "Select your date of birth");
    }
    if (gender === "") {
        showError(genderInput, "Select your gender");
    }

    // Checking for any remaining errors before form submission
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    // Submitting the form
    form.submit();
}


// Toggling password visibility
//Event bubbling
passToggleBtn.addEventListener('click', (event) => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    event.stopPropagation();// Event stopPropagation for the password input to prevent form submission
});
// Event delegation for password toggle buttons
form.addEventListener('click', (e) => {
    const target = e.target;

    // Check if the clicked element is a password toggle button
    if (target.id === 'pass-toggle-btn') {
        // Handle password toggle logic here
        target.className = passwordInput.type === 'password' ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    }
});

// Handling form submission event
//Event Caputring
form.addEventListener("submit", handleFormData, true);