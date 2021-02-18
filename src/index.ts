import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

//! call the map display function
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
