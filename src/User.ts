import faker from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string {
    return `<h2>${this.name} here!!!</h2>`;
  }

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
