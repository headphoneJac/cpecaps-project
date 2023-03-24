function loginAlert() {
    alert("Hello! Please login first!");
    window.location.href = "login.html";
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
const mangoStickyRiceParty = new menuItem("Mango Sticky Rice Party", 250, "images/mangoStickyRiceParty.png");
const sisigAlaCarteParty = new menuItem("Sisig ala Carte Party", 700, "images/sisigAlaCarteParty.png");
const bakedSisigParty = new menuItem("Baked Sisig ala Carte Party", 1100, "images/bakedSisigParty.png");
const bundleA = new menuItem("Bundle A", 1340, "images/bundleA.png");
const bundleB = new menuItem("Bundle B", 2120, "images/bundleB.png");

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

function menuImage4Click(){
    localStorage.setItem("itemPrice", mangoStickyRiceParty.getPrice());
    localStorage.setItem("itemName", mangoStickyRiceParty.getName());    
    localStorage.setItem("imageToDisplay", mangoStickyRiceParty.getImage());
    window.location.href = "selectItem.html";
}

function menuImage5Click(){
    localStorage.setItem("itemPrice", sisigAlaCarteParty.getPrice());
    localStorage.setItem("itemName", sisigAlaCarteParty.getName());    
    localStorage.setItem("imageToDisplay", sisigAlaCarteParty.getImage());
    window.location.href = "selectItem.html";
}

function menuImage6Click(){
    localStorage.setItem("itemPrice", bakedSisigParty.getPrice());
    localStorage.setItem("itemName", bakedSisigParty.getName());    
    localStorage.setItem("imageToDisplay", bakedSisigParty.getImage());
    window.location.href = "selectItem.html";
}

function menuImage7Click(){
    localStorage.setItem("itemPrice", bundleA.getPrice());
    localStorage.setItem("itemName", bundleA.getName());    
    localStorage.setItem("imageToDisplay", bundleA.getImage());
    window.location.href = "selectItem.html";
}

function menuImage8Click(){
    localStorage.setItem("itemPrice", bundleB.getPrice());
    localStorage.setItem("itemName", bundleB.getName());    
    localStorage.setItem("imageToDisplay", bundleB.getImage());
    window.location.href = "selectItem.html";
}

function addPrice() {   
    switch(document.getElementById("itemName").innerHTML){
        case mangoStickyRice.getName():
            var price = mangoStickyRice.getPrice();
            break;
        case sisigAlaCarte.getName():
            var price = sisigAlaCarte.getPrice();
            break;
        case bakedSisigAlaCarte.getName():
            var price = bakedSisigAlaCarte.getPrice();
            break;
        case mangoStickyRiceParty.getName():
            var price = mangoStickyRiceParty.getPrice(); 
            break;
        case sisigAlaCarteParty.getName():
            var price = sisigAlaCarteParty.getPrice(); 
            break;
        case bakedSisigParty.getName():
            var price = bakedSisigParty.getPrice(); 
            break;
        case bundleA.getName():
            var price = bundleA.getPrice(); 
            break;
        case bundleB.getName():
            var price = bundleB.getPrice(); 
            break;        
    }
    var amount = document.getElementById('amount');
    var currAmount = parseInt(amount.innerHTML);
    var newAmount = currAmount + 1;    
    amount.innerHTML =  newAmount;
    var newPrice = price * newAmount;
    document.getElementById('price').innerHTML =  "PhP " + newPrice.toFixed(2);
}
function subPrice(){
    switch(document.getElementById("itemName").innerHTML){
        case mangoStickyRice.getName():
            var price = mangoStickyRice.getPrice();
            break;
        case sisigAlaCarte.getName():
            var price = sisigAlaCarte.getPrice();
            break;
        case bakedSisigAlaCarte.getName():
            var price = bakedSisigAlaCarte.getPrice();
            break;
        case mangoStickyRiceParty.getName():
            var price = mangoStickyRiceParty.getPrice(); 
            break;
        case sisigAlaCarteParty.getName():
            var price = sisigAlaCarteParty.getPrice(); 
            break;
        case bakedSisigParty.getName():
            var price = bakedSisigParty.getPrice(); 
            break;
        case bundleA.getName():
            var price = bundleA.getPrice(); 
            break;
        case bundleB.getName():
            var price = bundleB.getPrice(); 
            break;        
    }
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
    var newPrice = price * newAmount;
    if(newAmount<0){
        newAmount = 0;
        newPrice = 0;
    }  
    amount.innerHTML =  newAmount;    
    document.getElementById('price').innerHTML = "PhP " + newPrice.toFixed(2);
}

function addOrder(){
    /* add the product to the order details*/
    var email = document.getElementById('email');
    var order_quantity = document.getElementById('amount');
    var order_name = document.getElementById('itemName');
    
}