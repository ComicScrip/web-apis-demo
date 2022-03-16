const showPositionBtn = document.getElementById('showPositionBtn');
// map initialization
const map = L.map('map').setView([50.421545, 30.523695], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
}).addTo(map);

function handleGeolocationSuccess(position) {
  // once we got the location, we extract coordinates
  const userLocation = [position.coords.latitude, position.coords.longitude];
  // we "fly" from the current map's viewport to the user's location
  map.flyTo(userLocation, 16);
  // and add a marker on the map at the same location
  const marker = L.marker(userLocation).addTo(map);
  // when we click on the marker, a popup will appear with the user's coordinates
  marker.bindPopup(
    `latitude : ${userLocation[0]}, longitude : ${userLocation[1]}`
  );
}

showPositionBtn.addEventListener('click', () => {
  if (navigator.geolocation) {
    // getting the user's location
    navigator.geolocation.getCurrentPosition(handleGeolocationSuccess);
  } else {
    alert('sorry, your browser does not support geolocation :(');
  }
});
