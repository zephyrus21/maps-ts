import { User } from './User';
import { Company } from './Company';

//! one interface for other classes with same properties
interface MarkerMap {
  location: { lat: number; lng: number };
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

  addMarker(marker: MarkerMap): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: { lat: marker.location.lat, lng: marker.location.lng },
    });
  }

  addCompanyMarker(company: Company): void {}
}
