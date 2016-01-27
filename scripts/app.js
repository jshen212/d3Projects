var app = {

  makersquareLatitude: 34.0193015,
  makersquareLongitude: -118.49430619999998,

  disneyLat: 34.0554362,
  disneyLong: -118.24993999999998,

  LAXlat: 33.9415889,
  LAXlong: -118.40852999999998,

  VeniceLat: 33.9789783,
  VeniceLong: -118.46764619999999,

  disneyDataObject: {},
  LAXDataObject: {},
  VeniceDataObject: {},


  init: function(){
    app.getEstimatesForUserLocation(app.disneyLat, app.disneyLong);
    app.getEstimatesForUserLocation(app.LAXlat, app.LAXlong);
    app.getEstimatesForUserLocation(app.VeniceLat, app.VeniceLong);
  },

  getEstimatesForUserLocation: function(endLatitude, endLongitude) {
    $.ajax({
      url: "https://api.uber.com/v1/estimates/price",
      headers: {
        Authorization: "Token " + uberServerToken,
      },
      data: {
        start_latitude: app.makersquareLatitude,
        start_longitude: app.makersquareLongitude,
        end_latitude: endLatitude,
        end_longitude: endLongitude
      },
      success: function(result) {
        if(endLatitude === app.disneyLat && endLongitude === app.disneyLong){
          app.disneyDataObject = result;
        }
        if(endLatitude === app.LAXlat && endLongitude === app.LAXlong){
          app.LAXDataObject = result;
        }
        if(endLatitude === app.VeniceLat && endLongitude === app.VeniceLong){
          app.VeniceDataObject = result;
        }
        console.log(app);
      }
    });
  }
};

$(document).ready(function(){

  app.init();

  $("#Disney").on("click", function(e){
    e.preventDefault();
    $('.chart').html('');
    var data = app.disneyDataObject.prices;
    d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter().append("div")
    .style("width", 0)
    .transition()
    .duration(2000)
    .style("width", function(d) { return d.high_estimate * 5 + "px"; })
    .text(function(d) { return d.display_name + ' - $' + d.high_estimate; });

  });

  $("#LAX").on("click", function(e){
    e.preventDefault();
    $('.chart').html('');
    var data = app.LAXDataObject.prices;
    d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter().append("div")
    .style("width", 0)
    .transition()
    .duration(2000)
    .style("width", function(d) { return d.high_estimate * 5 + "px"; })
    .text(function(d) { return d.high_estimate; });
  });

  $("#Venice").on("click", function(e){
    e.preventDefault();
    $('.chart').html('');
    var data = app.VeniceDataObject.prices;
    d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter().append("div")
    .style("width", 0)
    .transition()
    .duration(2000)
    .style("width", function(d) { return d.high_estimate * 5 + "px"; })
    .text(function(d) { return d.high_estimate; });
  });

});
