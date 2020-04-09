window.onload = () => {
    displayStores();
}


function initMap() {
    var Rome = {
        lat: 41.914208, 
        lng: 12.502852
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: Rome,
        zoom: 15,
        mapTypeId: 'roadmap',
    });
    var myMark1 = {
        lat: 41.914208, 
        lng: 12.502852
    };
    var myMark2 = {
        lat: 41.911332, 
        lng: 12.501737
    };
    var marker = new google.maps.Marker({
        position: myMark1,
        map: map,
        title: 'Hello World!'
      });
      var marker = new google.maps.Marker({
        position: myMark2,
        map: map,
        title: 'Hello World!'
      });
}



function displayStores () {
    for (var store of stores) {
        console.log(store);
    }
}