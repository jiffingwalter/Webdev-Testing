// init variables ---------------------------------------------------------------------------------
let users=[];
const divUserList=document.getElementById("user-list");
const inputUsername=document.getElementById('username');
const inputEmail=document.getElementById('email');
const inputPassword=document.getElementById('password');
const inputConfirmPassword=document.getElementById('confirmPassword');
const inputDob=document.getElementById('dob');

// root application ---------------------------------------------------------------------------------
createExampleUser();
initUserList();

// functions ---------------------------------------------------------------------------------
// form submission -- create user on button press
function submitForm(){
    // create new user and refresh user list on submission
    createUser();
    initUserList();
    clearForm();
}

// clears entry forms
function clearForm(){
    inputUsername.value="";
    inputEmail.value="";
    inputPassword.value="";
    inputConfirmPassword.value="";
    inputDob.value="";
}

function createUser(){
    // generate new user id and assign user info to object
    const newID = Math.floor(Math.random() * 999999);
    const newUser = {
        id: newID,
        username: inputUsername.value,
        email: inputEmail.value,
        password: inputPassword.value,
        dob: inputDob.value,
        dateCreated: new Date()
    };

    users.push(newUser);
    console.log(newUser);
}

function createExampleUser(){
    // generate new user id and assign user info to object
    const newUser = {
        id: 0,
        username: "USERNAME",
        email: "EXAMPLE@EMAIL.COM",
        password: "PASSWORD",
        dob: new Date(),
        dateCreated: new Date()
    };

    users.push(newUser);
    console.log(newUser);
}

// initialize user list --  recreate user list on page load or report no users
function initUserList(){
    if (users.length < 1){
        divUserList.innerHTML="No current users!";
    } else {
        let text = "";
        users.forEach(function(currentValue,index,array){
            text += "<b>User ID: </b>" + users[index]['id'] + "<br>" +
            "<b>Username: </b>" + users[index]['username'] + "<br>" +
            "<b>Email: </b>" + users[index]['email'] + "<br>" +
            "<b>Date of Birth: </b>" + users[index]['dob'] + "<br>" +
            "<b>Date Created: </b>" + users[index]['dateCreated'] + "<br><br>";
        });
        divUserList.innerHTML=text;
    }
}