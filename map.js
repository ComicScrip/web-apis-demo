// map initialization
const map = L.map('map').setView([51.505, -0.09], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
}).addTo(map);

if (navigator.geolocation) {
  // getting the user's location
  navigator.geolocation.getCurrentPosition((position) => {
    // once we got the location, we extract coordinates
    const userLocation = [position.coords.latitude, position.coords.longitude];
    // we "fly" from the current map's viewport to the user's location
    map.flyTo(userLocation, 12);
    // and add a marker on the map at the same location
    L.marker(userLocation).addTo(map);
  });
} else {
  alert('sorry, your browser does not support geolocation :(');
}
