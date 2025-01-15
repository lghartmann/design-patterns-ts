import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Starting flight");
  }
  getCargo(): void {
    console.log("Passengers seating");
  }
  checkWind(): void {
    console.log("Wind speeds are ok!");
  }
}
