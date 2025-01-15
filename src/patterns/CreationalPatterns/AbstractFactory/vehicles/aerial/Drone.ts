import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Starting delivery!");
  }
  getCargo(): void {
    console.log("Package collected!");
  }
  checkWind(): void {
    console.log("Winds are fine!");
  }
}
