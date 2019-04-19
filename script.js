function activeModal() {
    var modal = document.getElementById("login");
    if (!modal.classList.contains("is-active")) {
        modal.classList.add("is-active");
    } else {
        modal.classList.remove("is-active");
    }
}

// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {
        lat: 19.344684,
        lng: -99.199675
    };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 15,
            center: uluru
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}


const MAPBOX_API_KEY = 'pk.eyJ1IjoiamFmNGsiLCJhIjoiY2pjM3JoYTY2MTVtaTJxczRvYzdndHMxaiJ9.vxWi3DCNu_dPTtMytbj0Og';
const MAPBOX_STYLE = 'mapbox://styles/mapbox/streets-v11';