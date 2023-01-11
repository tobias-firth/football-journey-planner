// Initialize the map and the directionsDisplay object
let map;
let directionsDisplay;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    // Set the map center to the UK
    center: {lat: 54.5, lng: -4.5},
    zoom: 6
  });
  directionsDisplay = new google.maps.DirectionsRenderer();
}

// Request directions from the Google Maps Directions API
function getDirections(start, end) {
  let request = {
    origin: start,
    destination: end,
    travelMode: 'TRANSIT'
  };
  let directionsService = new google.maps.DirectionsService();
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

function clearMap() {
    directionsDisplay.setMap(null);
    directionsDisplay.setPanel(null);
}