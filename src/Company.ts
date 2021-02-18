import faker from 'faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string {
    return `
    <h1>${this.companyName}</h1>
    <h3>${this.catchPhrase}</h3>
    `;
  }

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
