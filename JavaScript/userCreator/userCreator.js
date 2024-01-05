// form submission function
function submitForm(){
    // generate new user id and assign user info to object
    const newID = Math.floor(Math.random() * 999999);
    const newUser = {
        id: newID,
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        dob: document.getElementById('dob').value,
        dateCreated: new Date()
    };

    console.log(newUser);
}