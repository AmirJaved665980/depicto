var d3 = require("d3");

function barChart() {
	// All options that should be accessible to caller
	var data = [];
	var width = 800;
	var height = 200;
    var barPadding = 1;
    var fillColor = 'steelblue';
 
	var updateData;
	var updateWidth;
 
	function chart(selection){
        selection.each(function (data) {
 
        	var barSpacing = height / data.length;
            	var barHeight = barSpacing - barPadding;
            	var maxValue = d3.max(data);
            	var widthScale = width / maxValue;
 
                d3.select(this).append('svg')
                    .attr('height', height)
                    .attr('width', width)
                    .selectAll('rect')
                    .data(data)
                	.enter()
                    .append('rect')
                    .attr('y', function (d, i) { return i * barSpacing })
                    .attr('height', barHeight)
                    .attr('x', 0)
                    .attr('width', function (d) { return d*widthScale})
                    .style('fill', fillColor);
 
            updateWidth = function() {
                widthScale = width / maxValue;
                bars.transition().duration(1000).attr('width', function(d) { return d*widthScale});
                svg.transition().duration(1000).attr('width', width);
            };
 
        	updateData = function() {
            	// use D3 update pattern with data
        	}
 
    	});
	}
 
	chart.data = function(value) {
    	if (!arguments.length) return data;
    	data = value;
    	if (typeof updateData === 'function') updateData();
    	return chart;
	};
 
	chart.width = function(value) {
    	if (!arguments.length) return width;
    	width = value;
    	if (typeof updateWidth === 'function') updateWidth();
    	return chart;
	};
	chart.height = function(value) {
        if (!arguments.length) return height;
        height = value;
        return chart;
    };

    chart.barPadding = function(value) {
        if (!arguments.length) return barPadding;
        barPadding = value;
        return chart;
    };

    chart.fillColor = function(value) {
        if (!arguments.length) return fillColor;
        fillColor = value;
        return chart;
    };

	return chart;
}

module.exports = { barChart };