let username;

document.getElementById('submit').onclick = function(){
    username = document.getElementById('username').value;
    document.getElementById('h1-welcome').textContent += `, ${username}`;
}