function loginUser() {

let username =
document.getElementById("username").value;

let password =
document.getElementById("password").value;

if(username === "admin" && password === "1234") {

localStorage.setItem("loggedIn","true");

window.location.href = "dashboard.html";

}
else{

document.getElementById("message").innerHTML =
"❌ Invalid Username or Password";

document.getElementById("message").style.color =
"#ff6b6b";

}

}

function logoutUser(){

localStorage.removeItem("loggedIn");

window.location.href = "index.html";

}

function calculateProfit(){

let amount =
document.getElementById("amount").value;

if(amount === ""){

document.getElementById("result").innerHTML =
"Please enter an amount";

return;

}

let profit =
amount * 1.15;

document.getElementById("result").innerHTML =
"Estimated Return After Growth: ₹" +
profit.toLocaleString();

}

if(window.location.pathname.includes("dashboard.html")){

if(localStorage.getItem("loggedIn") !== "true"){

window.location.href = "index.html";

}

}

window.onload = function(){

let cards =
document.querySelectorAll(".card");

cards.forEach((card,index)=>{

card.style.opacity = "0";
card.style.transform = "translateY(20px)";

setTimeout(()=>{

card.style.transition = "0.6s";
card.style.opacity = "1";
card.style.transform = "translateY(0px)";

}, index * 150);

});

};