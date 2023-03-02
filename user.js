const emailInputUser = document.querySelector('.emailuser');
const passwordInputUser = document.querySelector('#passworduser');

var EmailUser;// !set email 
var PasswordUser;// !set password

//*Save new password to local storage
emailInputUser.addEventListener('input', (event) => {
  EmailUser = event.target.value;
});
passwordInputUser.addEventListener('input', (event) => {
    PasswordUser = event.target.value;
});

const saveEmail = () => {
   
   localStorage.setItem('email', EmailUser);
   localStorage.setItem('password', PasswordUser);
    console.log(EmailUser);
    console.log(PasswordUser);
};

