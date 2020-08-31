(function() {
    let email = localStorage.getItem('email');
    fetch('https://ltv-data-api.herokuapp.com/api/v1/records.json?email='+email)
    .then(function(res) { 
        return res.json();
    })
    .then(function(res) {
        console.log(res)
        let address = document.getElementById('address');
        let email = document.getElementById('email');
        let number = document.getElementById('number');
        let relative = document.getElementById('relative');
        let profileName = document.getElementById('profileName');
        let description = document.getElementById('description');
        address.innerHTML = res.address;
        email.innerHTML = res.email;
        number.innerHTML = res.phone_numbers.join('<br/>');
        relative.innerHTML = res.relatives.join('<br/>');
        profileName.innerHTML = res.first_name + " " + res.last_name;
        description.innerHTML =  res.description;
    })
    .catch(function() {
        console.log(error);
    })
}
)();