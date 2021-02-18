export class CustomMap {
  private googleMap: google.maps.Map;

  // ! this will get the google map API and select the div in html with id of map and display the map there
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
