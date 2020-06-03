/*
const login = ['John Mckay', 'Chasmine Collins', 'Noname', 'Fun']
const attepmt = 2;

function validate(){
    const userName = document.getElementById('username');
    const passWord = document.getElementById('password');

 if (userName == login || passWord == "1"){
     alert("Login Successful");
     window.location = "index.html";
     return false;
 }


 else {
     attepmt --;
     prompt("You have "+ attepmt + " attepmts left!");
     if (attepmt == 0){
         document.getElementById("username").disable = true;
         document.getElementById("password").disable = true;
         document.getElementById("signIn").disable = true;
         return false;

     }
validate();
 } 

const login = ['John Mckay', 'Chasmine Collins', 'Noname', 'Fun']

let person = prompt('Whats your name?');

person.toLowerCase(login);
function signIn (){

    if (login.includes(person) ) {
        alert( 'Welome back ' + person + "!");
    }
    else{
        alert('Access Denied. Try again ' + person);
        window.location.reload(true);
    }

}
signIn();

used in validation function
 const userName = document.getElementById(`userName`).value;
 const passWord = document.getElementById(`passWord`).value;
*/