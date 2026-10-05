function initMap() {
  const targetLocation = { lat: 41.8349, lng: -87.6270 };

  const customMapStyles = [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }]
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#38414e" }]
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#212a37" }]
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9ca5b3" }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#6c0a8a" }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#1f2835" }]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#17263c" }]
    }
  ];

  const map = new google.maps.Map(document.getElementById("canvas"), {
    zoom: 14,
    center: targetLocation,
    styles: customMapStyles,
    mapTypeControl: false,
    streetViewControl: false
  });

  const marker = new google.maps.Marker({
    position: targetLocation,
    map: map,
    title: "Selected Destination",
    animation: google.maps.Animation.DROP
  });

  const infoWindow = new google.maps.InfoWindow({
    content: `
      <div style="color: #2e3440; padding: 6px; font-family: 'Segoe UI', sans-serif;">
        <h3 style="margin: 0 0 4px; font-family: 'Michroma', sans-serif; color: #6c0a8a; font-size: 1rem;">Destination</h3>
        <p style="margin: 0; font-size: 0.85rem;">Interactive pinpoint location.</p>
      </div>
    `
  });

  marker.addListener("click", () => {
    infoWindow.open({
      anchor: marker,
      map: map,
      shouldFocus: false
    });
  });

  new google.maps.Circle({
    strokeColor: "#6c0a8a",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#88c0d0",
    fillOpacity: 0.25,
    map: map,
    center: targetLocation,
    radius: 700
  });
}

window.addEventListener("load", initMap);