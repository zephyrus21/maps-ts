//! one interface for other classes with same properties
interface MarkerMap {
  location: { lat: number; lng: number };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  //! this will get the google map API and select the div in html with id of map and display the map there
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(markerMap: MarkerMap): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: { lat: markerMap.location.lat, lng: markerMap.location.lng },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: markerMap.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
