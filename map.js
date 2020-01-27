// Initialize and add the map
function initMap() {
    // The location of Uluru
    var santiagoQro = { lat: 20.5888, lng: -100.3899 };
    var limpieza1 = { lat: 20.6006, lng: -100.3589 };
    var limpieza2 = [
        { lat: 20.6003, lng: -100.3763 },
        { lat: 20.6011, lng: -100.3840 },
        { lat: 20.5984, lng: -100.3894 },
        { lat: 20.5988, lng: -100.3937 },
        { lat: 20.5976, lng: -100.3983 },
        { lat: 20.5957, lng: -100.4070 },
        { lat: 20.5962, lng: -100.4103 },
        { lat: 20.5947, lng: -100.4146 },
    ];
    var limpieza3 = [
        { lat: 20.6007, lng: -100.3754 },
        { lat: 20.6005, lng: -100.3734 },
        { lat: 20.6012, lng: -100.3722 },
        { lat: 20.6028, lng: -100.3686 },
        { lat: 20.602, lng: -100.3673 },
        { lat: 20.6027, lng: -100.3652 },
        { lat: 20.6006, lng: -100.3589 },
    ];
    var limpieza4 = [
        { lat: 20.5944, lng: -100.4152 },
        { lat: 20.5925, lng: -100.4161 },
        { lat: 20.5918, lng: -100.4173 },
        { lat: 20.5897, lng: -100.4382 },
    ];
    var limpieza5 = { lat: 20.5905, lng: -100.4467 };
    var limpieza6 = { lat: 20.6010, lng: -100.3610 };
    var limpieza7 = { lat: 20.6069, lng: -100.3295 };

    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 13, center: santiagoQro });
    // The marker, positioned at Uluru
    var primera = new google.maps.Marker({ position: limpieza1, map: map, label: '1' });
    var segunda = new google.maps.Marker({ position: limpieza2[0], map: map, label: '2' });
    var tercera = new google.maps.Marker({ position: limpieza3[0], map: map, label: '3' });
    var cuarta = new google.maps.Marker({ position: limpieza4[0], map: map, label: '4' });
    var quinta = new google.maps.Marker({ position: limpieza5, map: map, label: '5' });
    var sexta = new google.maps.Marker({ position: limpieza6, map: map, label: '6' });
    var septima = new google.maps.Marker({ position: limpieza7, map: map, label: '7' });

    var segundaCamino = new google.maps.Polyline({
        path: limpieza2,
        geodesic: true,
        strokeColor: '#f96332',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    var terceraCamino = new google.maps.Polyline({
        path: limpieza3,
        geodesic: true,
        strokeColor: '#2ca8ff',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    var cuartaCamino = new google.maps.Polyline({
        path: limpieza4,
        geodesic: true,
        strokeColor: '#2a8273',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    segundaCamino.setMap(map);
    terceraCamino.setMap(map);
    cuartaCamino.setMap(map);

}
