var region1 = [1540, 1130, 1580, 1105];
var region2 = [2010, 1168, 2305, 4102];
var region3 = [2450, 1847, 2710, 2391];
var region4 = [1845, 1491, 1284, 1575];
var region5 = [2120, 1767, 1599, 3888];

var qTotals = [0, 0, 0, 0];
for ( var i = 0; i < 4; i++ ){
	qTotals[i] += region1[i];
	qTotals[i] += region2[i];
	qTotals[i] += region3[i];
	qTotals[i] += region4[i];
	qTotals[i] += region5[i];
}
textDisplay = "";
var quarter;
textDisplay += "Sales by Quarter\n";
for (var i = 0; i < 4; i++) {
	quarter = i + 1;
	textDisplay += "Q" + quarter + ": " + qTotals[i] + "\n"
}
alert(textDisplay);	    

var regionTotals = [0, 0, 0, 0, 0];
for ( var i = 0; i < 4; i++ ) { 
	regionTotals[0] += region1[i]; 
	regionTotals[1] += region2[i]; 
	regionTotals[2] += region3[i]; 
	regionTotals[3] += region4[i]; 
	regionTotals[4] += region5[i];
}
textDisplay = "";
textDisplay += "Sales by Region\n";
for (var i = 0; i < 5; i++) {
	region = i + 1;
	textDisplay += "Region " + region + ": " + regionTotals[i] + "\n"
}
alert(textDisplay);

var totalSales = 0;
for ( var i = 0; i < 4; i++ ){
	totalSales += region1[i];
	totalSales += region2[i];
	totalSales += region3[i];
	totalSales += region4[i];
	totalSales += region5[i];
}
textDisplay = "";
textDisplay += "Total Sales: " + totalSales;   
alert(textDisplay);