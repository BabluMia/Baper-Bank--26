document.getElementById('login-submit').addEventListener('click',function(){
    // get user email
    let emailField = document.getElementById('input-email');
    let userEmail = emailField.value;
    // get user pass
    let passField = document.getElementById('input-pass')
    let userPass = passField.value ;
    // condition
    if(userEmail == 'abc@gmail.com' && userPass == 'abc'){
        window.location.href = 'banking.html'
    } else{
       alert('Invalid Input')
    }
})
