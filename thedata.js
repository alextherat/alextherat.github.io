// Binding data to dom elements


/*
*** This adds two to all bound elements ***
var TheData = [ 1, 2, 3 ]

var p = d3.select("body").selectAll("p")
	.data(TheData)
	.enter()
	.append("p")
	.text( function (d) { 
		var addedNumber = 2;
		var tempNumber;
		tempNumber = d + addedNumber;
		return tempNumber;
	} );
*/

var TheData = [ 1, 2, 3 ]

var p = d3.select("body").selectAll("p")
	.data(TheData)
	.enter()
	.append("p")
	.text( function (d,i) {
		return "i = " + i + " and d = "+d;
	});
