// --- Panel Animation ---
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

if (signUpButton && signInButton && container) {
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
}

// --- Form Submission & Modal ---
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const modal = document.getElementById('successModal');
const closeButton = document.querySelector('.close-button');

// In your LOGIN page's JavaScript file

signInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // This now correctly goes UP one folder to find the portfolio file
    window.location.href = '../portfolio.html'; 
});

// 2. SIGN UP: Show cloud pop-up, then redirect to the sign-in panel
if (signUpForm) {
    signUpForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (modal) modal.style.display = "block";

        // After 4 seconds, close the pop-up and show the sign-in panel
        setTimeout(() => {
            if (modal) modal.style.display = "none";
            if (container) container.classList.remove("right-panel-active");
        }, 4000); // 4000 milliseconds = 4 seconds
    });
}

// 3. Close the modal manually if the user clicks the 'x'
if (modal && closeButton) {
    closeButton.addEventListener('click', () => {
        modal.style.display = "none";
        if (container) container.classList.remove("right-panel-active");
    });
}

// --- Show/Hide Password Toggle ---
const toggleSignUpPassword = document.getElementById('toggleSignUpPassword');
const signUpPassword = document.getElementById('signUpPassword');

if (toggleSignUpPassword && signUpPassword) {
    toggleSignUpPassword.addEventListener('click', function () {
        const type = signUpPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        signUpPassword.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });
}

const toggleSignInPassword = document.getElementById('toggleSignInPassword');
const signInPassword = document.getElementById('signInPassword');

if (toggleSignInPassword && signInPassword) {
    toggleSignInPassword.addEventListener('click', function () {
        const type = signInPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        signInPassword.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });
}
