var app = {

  makersquareLatitude: 34.0193015,
  makersquareLongitude: -118.49430619999998,

  disneyLat: 34.0554362,
  disneyLong: -118.24993999999998,

  LAXlat: 33.9415889,
  LAXlong: -118.40852999999998,

  VeniceLat: 33.9789783,
  VeniceLong: -118.46764619999999,

  HollywoodLat: 34.1020231,
  HollywoodLong: -118.3409712,

  HBLat: 33.660297,
  HBLong: -117.9992265,

  disneyDataObject: {},
  LAXDataObject: {},
  VeniceDataObject: {},
  HollywoodObject: {},
  HBObject: {},


  init: function(){
    app.getEstimatesForUserLocation(app.disneyLat, app.disneyLong);
    app.getEstimatesForUserLocation(app.LAXlat, app.LAXlong);
    app.getEstimatesForUserLocation(app.VeniceLat, app.VeniceLong);
    app.getEstimatesForUserLocation(app.HollywoodLat, app.HollywoodLong);
    app.getEstimatesForUserLocation(app.HBLat, app.HBLong);
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
        if(endLatitude === app.HollywoodLat && endLongitude === app.HollywoodLong){
          app.HollywoodDataObject = result;
        }
        if(endLatitude === app.HBLat && endLongitude === app.HBLong){
          app.HBDataObject = result;
        }
      }
    });
  }
};



$(document).ready(function(){

  app.init();

  function createChart(data){
    d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter().append("div")
    .style("width", 0)
    .transition()
    .duration(2000)
    .style("width", function(d) { return d.high_estimate * 5 + "px"; })
    .text(function(d) { return d.display_name + ' - $' + d.high_estimate; });
  }

  $("#Disney").on("click", function(e){
    e.preventDefault();
    $('.chart').html('');
    var data = app.disneyDataObject.prices;
    createChart(data);
  });

  $("#LAX").on("click", function(e){
    e.preventDefault();
    $('.chart').html('');
    var data = app.LAXDataObject.prices;
    createChart(data);
  });

  $("#Venice").on("click", function(e){
    e.preventDefault();
    $('.chart').html('');
    var data = app.VeniceDataObject.prices;
    createChart(data);
  });

  $("#Hollywood").on("click", function(e){
    e.preventDefault();
    $('.chart').html('');
    var data = app.HollywoodDataObject.prices;
    createChart(data);
  });

  $("#HuntingtonBeach").on("click", function(e){
    e.preventDefault();
    $('.chart').html('');
    var data = app.HBDataObject.prices;
    createChart(data);
  });
});
