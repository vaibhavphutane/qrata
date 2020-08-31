const email = document.getElementById('email');
const gobtn = document.getElementById('go');

gobtn.addEventListener('click', function() {
    localStorage.setItem('email', email.value);
});

