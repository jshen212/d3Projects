var chart = d3.select('body').append('div').attr('class', 'chart');
var data = [];

var zips = [];
_.each(results, function(item){
  for(var i = 0; i < item.length; i++){
    zips.push(item[item.length - 1]);
  }
});

var zipsObj = {};
for(var i = 0; i < zips.length; i++){
  if(zipsObj[zips[i]] === undefined){
    zipsObj[zips[i]] = 1;
  } else {
    zipsObj[zips[i]]++;
  }
}

for(var key in zipsObj){
  data.push([key, zipsObj[key]]);
}

var uniqZips = [];
for(var key in zipsObj){
    uniqZips.push(key);
}



// console.log(data);
//
//
// chart.selectAll('div')
//   .data(data)
//     .enter().append('div')
//       .style({'width': 0 + 'px'})
//         .transition()
//           .duration(2000)
//             .style('width', function(d){
//               return d[1] * .3 + 'px'; })
//               .text(function(d){
//                 return d[0];})

(function() {

  // Fake JSON data
  var json = {"zipCodes":
    zipsObj
};

// D3 Bubble Chart

var diameter = 800;

var svg = d3.select('#graph').append('svg')
.attr('width', diameter)
.attr('height', diameter);

var bubble = d3.layout.pack()
.size([diameter, diameter])
.value(function(d) {return d.size;})
// .sort(function(a, b) {
// 	return -(a.value - b.value)
// })
.padding(3);

// generate data with calculated layout values
var nodes = bubble.nodes(processData(json))
.filter(function(d) { return !d.children; }); // filter out the outer bubble



var vis = svg.selectAll('circle')
.data(nodes);

vis
  .enter()
    .append('circle')
        .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
          .attr('r', function(d) { return d.r; })
            .attr('class', function(d) { return 'z' + d.className; });

function processData(data) {
  var obj = data.zipCodes;

  var newDataSet = [];

  for(var prop in obj) {
    newDataSet.push({name: prop, className: prop, size: obj[prop]});
  }
  return {children: newDataSet};
}

})();
