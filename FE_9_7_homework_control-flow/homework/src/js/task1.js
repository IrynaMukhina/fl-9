let userLogin = prompt('Please enter your Login:');

if (!userLogin) {
    alert('Canceled.');
} else if (userLogin.length < 4) {
    alert('I don\'t know any users having name length less than 4 symbols.');
} else if (userLogin === 'User') {
    let userPassword = prompt('Please enter your Password:');

    if (!userPassword) {
        alert('Canceled.');
    } else if (userPassword === 'SuperUser') {
        if (new Date().getHours() < 20) {
            alert('Good day!');
        } else {
            alert('Good evening!');
        }
    } else {
        alert('Wrong password.');
    }
} else {
    alert('I don\'t know you.');
}