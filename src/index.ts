import { User } from './User';
import { Company } from './Company';

// ! this will get the google map API and select the div in html with id of map and display the map there
new google.maps.Map(document.getElementById('map'), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
