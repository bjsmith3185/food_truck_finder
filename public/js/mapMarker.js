var gmarkers = [];
var infowindow = new google.maps.InfoWindow();

var locationSource = $("#location-template").html();
var locTemplate = Handlebars.compile(locationSource);

var serviceSource = $("#services-template").html();
var serviceTemplate = Handlebars.compile(serviceSource);

function initialize() {
  var center = new google.maps.LatLng(33.4483771, -112.07403729999999);
  var mapOptions = {
    zoom: 12,
    center: center,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: mapStyle
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  for (i = 0; i < mapData.dataPoints.locations.length; i++) {
    addMarker(mapData.dataPoints.locations[i]);
  }
}

function addMarker(marker) {
  var location = getLocation(marker);
  if (location) {
    var category = marker.type
    var title = location.name;
    var latLong = marker.latLong.split(',');
    var pos = new google.maps.LatLng(latLong[0],latLong[1]);
    var content = getLocationContent(location);
    
    $.extend( location, marker )
    
    mapMarker = new google.maps.Marker({
      title: title,
      position: pos,
      category: category,
      locationData:location,
      map: map
    });

    gmarkers.push(mapMarker);

    // Marker click listener
    google.maps.event.addListener(mapMarker, 'click', (function(mapMarker, content) {
      return function() {
        infowindow.setContent(content);
        infowindow.open(map, mapMarker);
        //map.panTo(this.getPosition());
        generateRelated(mapMarker);
      }
    })(mapMarker, content));
  }
}

function getLocation(marker) {
  var location = false;
  if (mapData.key.locationData.locations[marker.ID]) {
    location = mapData.key.locationData.locations[marker.ID];
  }
  return location;
}

function getLocationContent(location) {
  return locTemplate(location);
}

function generateRelated(marker){
  $('#output').text('');
  $('#output').html(generateServices(marker));
}

function generateServices(location){
  var serviceCards=[];
  
  for(var x in location.locationData.taxonomy.services){
      var serviceID = location.locationData.taxonomy.services[x];
        serviceCards.push(serviceTemplate(mapData.key.serviceData.services[serviceID]));
      }
  return serviceCards.join('')
}
initialize();