window.onload = () => {
    displayStores();
}


function initMap() {
    var Rome = {
        lat: 34.063584, 
        lng: -118.376354
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: Rome,
        zoom: 15,
        mapTypeId: 'roadmap',
    });
}



function displayStores () {
    var storeHtml = ""
    for (var [index, store] of stores.entries()) {
        storeHtml+=`
            <div class="store-container">
                <div class="store-info">
                    <div class="store-address">
                        ${name}
                    </div>
                    <div class="store-phone-number">
                        213-977-07051
                    </div>
                </div>
                <div class="store-number-container">
                    <div class="store-number">
                        1
                    </div>
                </div>
            </div>
        `
    }
    console.log(storeHtml)
}