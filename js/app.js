const loginSubmit = document.getElementById('login-submit');

loginSubmit.addEventListener('click',()=>{
    // get user email

    const emailFiled = document.getElementById('email-input');
    const userEmail = emailFiled.value;
    
    // get user password

    const passwordFiled = document.getElementById('pass-input');
    const userPassword  = passwordFiled.value;
    if (userEmail == 'you@gmail.com' && userPassword == '12345') {
        window.location.href = 'banking.html';
    }
})