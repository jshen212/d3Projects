var app = {

  makersquareLatitude: 34.0193015,
  makersquareLongitude: -118.49430619999998,

  disneyLat: 34.0554362,
  disneyLong: -118.24993999999998,

  LAXlat: 33.9415889,
  LAXlong: -118.40852999999998,

  VeniceLat: 33.9789783,
  VeniceLong: -118.46764619999999,

  init: function(){
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
          console.log(result) ;
        }
    });
  }
};

$(document).ready(function(){

  $("#Disney").on("click", function(e){
    e.preventDefault();
    app.getEstimatesForUserLocation(app.disneyLat, app.disneyLong);
  });

  $("#LAX").on("click", function(e){
    e.preventDefault();
    app.getEstimatesForUserLocation(app.LAXlat, app.LAXlong);
  });

  $("#Venice").on("click", function(e){
    e.preventDefault();
    app.getEstimatesForUserLocation(app.VeniceLat, app.VeniceLong);
  });

});
