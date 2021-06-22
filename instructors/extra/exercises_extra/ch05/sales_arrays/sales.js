var r1 = [1540, 1130, 1580, 1105];
var r2 = [2010, 1168, 2305, 4102];
var r3 = [2450, 1847, 2710, 2391];
var r4 = [1845, 1491, 1284, 1575];
var r5 = [2120, 1767, 1599, 3888];
var textDisplay;

var $ = function (id) {
    return document.getElementById(id); 
};
var showSalesByQuarter = function () {
	var qTotals = [0, 0, 0, 0];
	for ( var i = 0; i < 4; i++ ){
		qTotals[i] += r1[i];
		qTotals[i] += r2[i];
		qTotals[i] += r3[i];
		qTotals[i] += r4[i];
		qTotals[i] += r5[i];
    }
    textDisplay = "";
    var quarter;
    textDisplay += "Sales by Quarter\n";
    for (var i = 0; i < 4; i++) {
    	quarter = i + 1;
	    textDisplay += "Q" + quarter + ": " + qTotals[i] + "\n"
	}
    $("results").firstChild.nodeValue = textDisplay;	    
};
var showSalesByRegion = function () {
	var rTotals = [0, 0, 0, 0, 0];
	for ( var i = 0; i < 4; i++ ){
		rTotals[0] += r1[i];
		rTotals[1] += r2[i];
		rTotals[2] += r3[i];
		rTotals[3] += r4[i];
		rTotals[4] += r5[i];
	}
    textDisplay = "";
    textDisplay += "Sales by Region\n";
    for (var i = 0; i < 5; i++) {
    	region = i + 1;
	    textDisplay += "Region " + region + ": " + rTotals[i] + "\n"
	}
    $("results").firstChild.nodeValue = textDisplay;	    
};
var showTotalSales = function () {
	var totalSales = 0;
	for ( var i = 0; i < 4; i++ ){
		totalSales += r1[i];
		totalSales += r2[i];
		totalSales += r3[i];
		totalSales += r4[i];
		totalSales += r5[i];
    }
    textDisplay = "";
    textDisplay += "Total Sales: " + totalSales;   
    $("results").firstChild.nodeValue = textDisplay;
};
window.onload = function () {
	$("show_region").onclick = showSalesByRegion;
	$("show_quarter").onclick = showSalesByQuarter;
	$("show_total").onclick = showTotalSales;
	$("show_region").focus();
};


