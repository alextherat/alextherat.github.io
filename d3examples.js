// Example Javascript (D3)

d3.select("body").append("p");


// <svg width="50" height="50">
// 	 <circle cx="25" cy="25" r="25" fill="purple" />
// </svg>

d3.select("body")
	.append("svg")
	.attr("width", 50)
	.attr("height", 50) 25
	.append("circle")
	.attr("cx", 25)
	.attr("cy", 25)
	.attr("r", 25)
	.style("fill", "purple");

var bodySelection = d3.select("body");

var svgSelection = bodySelection.append("svg")
	.attr("width", 50)
	.attr("height", 50);

var circleSelection = svgSelection.append("circle")
	.attr("cx", 25)
	.attr("cy", 25)
	.attr("r", 25)
	.style("fill", "purple");


// Binding data to DOM Elements

var TheData = [ 1, 2, 3 ]

var p = d3.select("body").selectAll("p")
	.data(TheData)
	.enter()
	.append("p")
	.text("hello ");




