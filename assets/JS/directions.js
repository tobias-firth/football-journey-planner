// Initialize the map and the directionsDisplay object
var map;
var directionsDisplay;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    // Set the map center to the UK
    center: {lat: 54.5, lng: -4.5},
    zoom: 6
  });
  directionsDisplay = new google.maps.DirectionsRenderer();
}

// Request directions from the Google Maps Directions API
function getDirections() {
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  var request = {
    origin: start,
    destination: end,
    travelMode: 'TRANSIT'
  };
  var directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      // Clear the previous directions from the directionsDisplay object
      directionsDisplay.setDirections({routes: []});
      // Update the directionsDisplay object with the new directions
      directionsDisplay.setMap(map);
      directionsDisplay.setDirections(result);
      // Display the journey steps in the #steps element
      directionsDisplay.setPanel(document.getElementById('steps'));
    }
  });
}