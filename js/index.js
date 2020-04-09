

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.063584, lng: -118.376354},
        zoom: 13,
        mapTypeId: 'roadmap',
        styles:
[
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#ffef60"
        },
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.icon",
      "stylers": [
        {
          "color": "#ffef60"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text",
      "stylers": [
        {
          "color": "#ffef60"
        },
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ffef60"
        },
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#ffef60"
        },
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "landscape.man_made",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#ffef60"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#ffef60"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "simplified"
        },
        {
          "weight": 4.5
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text",
      "stylers": [
        {
          "color": "#ffef60"
        },
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "stylers": [
        {
          "color": "#ffef60"
        },
        {
          "saturation": 70
        },
        {
          "lightness": 35
        },
        {
          "weight": 0.5
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#ffef60"
        },
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ]
    });

    displayStores();
    showMarkers();
    infoWindow = new google.maps.InfoWindow();
}

var map;
var markers = [];
var infoWindow;

function displayStores () {
    var storeHtml = ""

    for (var [index, n] of stores.entries()) {
        var address = n["addressLines"][0];;
        var name = n["name"];

        storeHtml+=`
            <div class="store-container">
   
                <div class="store-info">
                    <div class="store-address">
                            <span>
                             <b>${name}</b> <br>
                            ${address} 
                            </span>
                    </div>
                    <div class="store-phone-number">
                        ${n["phoneNumber"]}
                    </div>
                </div>
                <div class="store-number-container">
                    <div class="store-number">
                    <a href="https://www.google.com/maps?saddr=My+Location&daddr= ${n["coordinates"]["latitude"]},${n["coordinates"]["longitude"]}" onmouseover="showMarkers(this)" >${++index}</a>
                    </div>
                </div>

            </div>
        `
    };
    document.querySelector(".stores-list").innerHTML=storeHtml;
}


function showMarkers (){
    for (var [index, store] of stores.entries()) {

        var name = store['name'];
        var address = store["addressLines"][0];
        var phone = store["phoneNumber"];
        var schedule = store["schedule"][0]["hours"];

        var latlng = new google.maps.LatLng(
            parseFloat(store["coordinates"]["latitude"]),
            parseFloat(store["coordinates"]["longitude"]));

        createMarker(latlng, name, address, index+1, phone, schedule);
}

function createMarker(latlng, name, address, index) {
    var image = {
        url: 'https://restaurantpetros.ca/wp-content/uploads/chevron-down-icon.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(35, 35),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
      };


    var html = "<div class='info-container'>"+
    "<span>" +
    "<b>" + 
    "<div class='info-address'>" + name + "</div>" +
    "</b>" +
    "<div class='info-info'>" + address + "<br>" +"<br>" +"</div>" +
    "<br>" +
    "<i class='fas fa-phone-alt'></i> " + 
    phone +
    "<br>" +
    "<i class='fas fa-clock'></i> " +
    schedule +
    "</b> <br>" +
    "</span>" +
    "</div>";

    var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      icon: image
    });
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.setContent(html);
      infoWindow.open(map, marker);
    });
    
    markers.push(marker);
  };
}





