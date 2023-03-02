const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');


var Email;
var Password;
var userName = "pasan@gmail.com"; // !set email as Pasan
var password = 1234; // !set password as 1234

emailInput.addEventListener('input', (event) => {
  Email = event.target.value;
});
passwordInput.addEventListener('input', (event) => {
    Password = event.target.value;
});

const validateEmail = () => {
    // console.log(Email);
    // console.log(Password);
    if (Email == userName && Password == password) {
        clear();
        alert('Login Successful');
        window.location.href = "home.html";
        
    } else {
        clear();
        alert('Login Failed\n Please set email as ' + userName + ' and password as ' + password);
        
        return false;
    }

};

const clear=()=>{
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
};

