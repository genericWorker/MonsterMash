"use strict";
var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    var topThree = [
        {product: "Fender Stratocaster", price: 699.00},
        {product: "Gibson Les Paul", price: 1199.00},
        {product: "Yamaha FG700S", price: 489.99}
    ];
    var links = document.getElementsByTagName('a');
    
    for (var i in topThree) {
        links[i].text = topThree[i].product;
        links[i].title = "$" + topThree[i].price.toFixed(2);
        
        links[i].onclick = function() {
            var selection = topThree[i].product + ", price $" + topThree[i].price.toFixed(2);
            $("selected").firstChild.nodeValue = selection;
        };
    }
};