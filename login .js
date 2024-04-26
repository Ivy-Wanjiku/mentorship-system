const loginForm = document.getElementsByClassName('form');
// attach event listener to the form
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // get html input values upon form submission
    let email = document.getElementsByClassName('email').value;
    let password1 = document.getElementsByClassName('password').value;
    // call firebase auth method
    firebase.auth().signInWithEmailAndPassword(email,password1)
    .then(function() {
        alert('Login Successful, redirecting....');
        window.location.assign('sign in.html');
    })
    .catch(function(err) {
        alert(err.message);
    })
})