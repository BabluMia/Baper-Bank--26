document.getElementById('login-submit').addEventListener('click',function(){
    // get user email
    let emailField = document.getElementById('input-email');
    let userEmail = emailField.Value;
    // get user pass
    let passField = document.getElementById('input-pass')
    let userPass = passField.value ;
    // condition
    if(userEmail == 'abc' && userPass == 'secret'){
        console.log('Valid User!!');
    }
})