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

(function() {

  var json = {"zipCodes":
  zipsObj };

  var diameter = 800;

  var svg = d3.select('#graph').append('svg')
  .attr('width', diameter)
  .attr('height', diameter);

  var bubble = d3.layout.pack()
  .size([diameter, diameter])
  .value(function(d) {return d.size;})
  .padding(3);

  var nodes = bubble.nodes(processData(json))
  .filter(function(d) { return !d.children; });

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

  $('body').on('click', '#centralLA', function(){
    $('.z90005, .z90006, .z90007, .z90008, .z90010, .z90012, .z90013, .z90014, .z90015, .z90016, .z90017, .z90018, .z90019, .z90020, .z90026, .z90027, .z90031, .z90039, .z90041, .z90042, .z90043, .z90057').fadeToggle(2000);
  });

  $('body').on('click', '#eastLA', function(){
    $('.z90032, .z90033, .z90065, .z91803').fadeToggle(2000);
  });

  $('body').on('click', '#hollywood', function(){
    $('.z90004, .z90028, .z90029, .z90038, .z90046, .z90068, .z90069, .z91601, .z91602, .z91604, .z91605, .z91606, .z91607').fadeToggle(2000);
  });

  $('body').on('click', '#westLA', function(){
    $('.z90024, .z90025, .z90034, .z90035, .z90036, .z90045, .z90048, .z90049, .z90056, .z90064, .z90066,.z90067, .z90077, .z90094, .z90210, .z90212, .z90230, .z90291, .z90292, .z90293, .z90402').fadeToggle(2000);
  });

  $('body').on('click', '#southBay', function(){
    $('.z90247, .z90248, .z90501, .z90710, .z90717, .z90731, .z90732, .z90744').fadeToggle(2000);
  });

  $('body').on('click', '#southLA', function(){
    $('.z90001, .z90003, .z90011, .z90037, .z90044, .z90047, .z90058, .z90059, .z90061, .z90062, .z90063').fadeToggle(2000);
  });

  $('body').on('click', '#valley', function(){
    $('.z90002, .z90272, .z91040, .z91042, .z91303, .z91304, .z91306, .z91307, .z91311, .z91316, .z91324, .z91325, .z91326, .z91331, .z91335, .z91340, .z91342, .z91343, .z91344, .z91345, .z91351, .z91352, .z91356, .z91364, .z91367, .z91401, .z91402, .z91403, .z91405, .z91406, .z91411, .z91423, .z91436, .z91504, .z91505').fadeToggle(2000);
  });

})();
