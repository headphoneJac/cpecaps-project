import { initializeApp } from 'firebase/app';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBqyyKsQ3Wk6reiLm8k9qBAuz59cZk3PbU",
    authDomain: "cpecaps-project.firebaseapp.com",
    databaseURL: "https://cpecaps-project-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cpecaps-project",
    storageBucket: "cpecaps-project.appspot.com",
    messagingSenderId: "1002343899498",
    appId: "1:1002343899498:web:125ea29ca0d15d98090513",
    measurementId: "G-0XXL384QBN"
});

function verifyLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "user@gmail.com" && password === "web_dev"){
        alert("You have successfully logged in.");
        window.location.href = "home.html";
    }
    else {
        alert("Invalid username and/or password");
        location.reload();
    }
}


class menuItem {
    constructor(name, price, image) {
      this.name = name;
      this.price = price;
      this.image = image;
    }  
    getName() {
        return this.name;
    }    
    getPrice() {
        return this.price;
    }    
    getImage() {
        return this.image;
    }
}

const mangoStickyRice = new menuItem("Mango Sticky Rice", 90, "images/mangoStickyRice.png");
const sisigAlaCarte = new menuItem("Sisig ala Carte", 250, "images/sisigAlaCarte.png");
const bakedSisigAlaCarte = new menuItem("Baked Sisig ala Carte", 300, "images/bakedSisigAlaCarte.png");


function menuImage1Click(){
    localStorage.setItem("itemPrice", mangoStickyRice.getPrice());
    localStorage.setItem("itemName", mangoStickyRice.getName());    
    localStorage.setItem("imageToDisplay", mangoStickyRice.getImage());
    window.location.href = "selectItem.html";
}

function menuImage2Click(){
    localStorage.setItem("itemPrice", sisigAlaCarte.getPrice());
    localStorage.setItem("itemName", sisigAlaCarte.getName());    
    localStorage.setItem("imageToDisplay", sisigAlaCarte.getImage());
    window.location.href = "selectItem.html";
}

function menuImage3Click(){
    localStorage.setItem("itemPrice", bakedSisigAlaCarte.getPrice());
    localStorage.setItem("itemName", bakedSisigAlaCarte.getName());    
    localStorage.setItem("imageToDisplay", bakedSisigAlaCarte.getImage());
    window.location.href = "selectItem.html";
}

function addPrice() {   
    
    if (document.getElementById("itemName").innerHTML== mangoStickyRice.getName()){
        var price = mangoStickyRice.getPrice();
    }
    else if (document.getElementById("itemName").innerHTML == sisigAlaCarte.getName()){
        var price = sisigAlaCarte.getPrice();
    }
    else if(document.getElementById("itemName").innerHTML == bakedSisigAlaCarte.getName()){
        var price = bakedSisigAlaCarte.getPrice();  
    }  
    var amount = document.getElementById('amount');
    var currAmount = parseInt(amount.innerHTML);
    var newAmount = currAmount + 1;    
    amount.innerHTML =  newAmount;
    var newPrice = price * newAmount;
    document.getElementById('price').innerHTML =  "PhP " + newPrice.toFixed(2);
}
function subPrice(){
    
    if (document.getElementById("itemName").innerHTML == mangoStickyRice.getName()){
        var price = mangoStickyRice.getPrice();
    }
    else if (document.getElementById("itemName").innerHTML == sisigAlaCarte.getName()){
        var price = sisigAlaCarte.getPrice();
    }
    else if(document.getElementById("itemName").innerHTML == bakedSisigAlaCarte.getName()){
        var price = bakedSisigAlaCarte.getPrice();  
    } 
    var amount = document.getElementById('amount');
    var currAmount = parseInt(amount.innerHTML);
    var newAmount = currAmount - 1;    
    amount.innerHTML =  newAmount;
    var newPrice = price * newAmount;
    document.getElementById('price').innerHTML = "PhP " + newPrice.toFixed(2);
}




function addOrder(){
    /* add the product to the order details*/
    var email = document.getElementById('email');
    var order_quantity = document.getElementById('amount');
    var order_name = document.getElementById('itemName');
    
}

function customerSignUp(){
    var firstname = document.getElementById('firstname');
    var surname = document.getElementById('surname');
    var email = document.getElementById('email');
    var contactNo = document.getElementById('contactNo');
    var address = document.getElementById('address');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
}