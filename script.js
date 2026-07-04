function loginUser(){

let username =
document.getElementById("username").value;

let password =
document.getElementById("password").value;

if(username==="admin" && password==="1234"){

localStorage.setItem("loggedIn","true");

window.location.href="dashboard.html";

}
else{

document.getElementById("message").innerHTML =
"Invalid Username or Password";

}

}

function logoutUser(){

localStorage.removeItem("loggedIn");

window.location.href="login.html";

}

function calculateProfit(){

let amount =
document.getElementById("amount").value;

if(amount===""){
return;
}

let result =
amount * 1.15;

document.getElementById("result").innerHTML =
"Estimated Return: ₹" + result;

}

if(
window.location.pathname.includes("dashboard.html")
){

if(
localStorage.getItem("loggedIn")!=="true"
){

window.location.href="login.html";

}

}