
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
    var myLatlng = new google.maps.LatLng(37.419857, -122.078827);
    // 39.399872
    // -8.224454
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 7,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map. 
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            }
        ]
    };

    

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    var latlng2 = "34.091514, -118.141407";
    var addresses = ['1641 West Main Str, Alhambra, CA 91801, USA'];
    var url = "http://maps.googleapis.com/maps/api/geocode/json?address=" + addresses + "&sensor=false";

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON(url, "AIzaSyDZZ7Qj7aqCtBrqiuBzcwfPf8_6hkxNx2s", function (data) {
            if (data.results.length > 0) {
                var p = data.results[0].geometry.location
                var latlng = new google.maps.LatLng(p.lat, p.lng);
                new google.maps.Marker({
                    position: latlng,
                    map: map,
                    icon: 'images/loc.png'
                });
            }

        });
    }
    
}
google.maps.event.addDomListener(window, 'load', init);