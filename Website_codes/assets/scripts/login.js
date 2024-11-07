const btn = document.querySelector('#login-form');
console.log(btn);
btn.addEventListener('submit', async function(e) {
    e.preventDefault();

    const id = document.getElementById('loginID').value;
    const password = document.getElementById('password').value;
    alert(id);
    localStorage.setItem('id',id);
    window.location.href = 'dashboard.html';


    // const response = await fetch('http://localhost:5000/api/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ id, password }),
    // });

    // const data = await response.json();
    // if (response.ok) {
    //     localStorage.setItem('loggedInUser', JSON.stringify(data.user));
    //     let x = JSON.parse(localStorage.getItem('loggedInUser'));
    //     alert('Welcome! '+x.name);
    //     window.location.href = 'dashboard.html';    
    // } else {
    //     alert(data.message);
    // }



});