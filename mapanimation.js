const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

// TODO: add your own access token
mapboxgl.accessToken = 
'pk.eyJ1Ijoicm9iZXJ0b2Nhcm9jYSIsImEiOiJjbGcyZGM0b3QwNGV4M2txcmo3MDF3MDRsIn0.lY-eikcuAz3QFOlEkCvExA';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
let marker = new mapboxgl.Marker().setLngLat(busStops[0]).addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
let animationActive = false;
let animation;

  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops

  function move() {
    if (counter >= busStops.length - 1) {
      counter = 0;
    } else {
      counter++;
    }
    marker.setLngLat(busStops[counter]);
    if (animationActive) {
      animation = setTimeout(move, 1000);
    }
  }
  
  function startStopAnimation() {
    if (!animationActive) {
      animationActive = true;
      move();
      document.getElementById("startStopAnimationBtn").textContent = "Pause";
    } else {
      animationActive = false;
      clearTimeout(animation);
      document.getElementById("startStopAnimationBtn").textContent = "Show Stops between MIT and Harvard";
    }
  }
  
  document.getElementById("startStopAnimationBtn").addEventListener("click", startStopAnimation);