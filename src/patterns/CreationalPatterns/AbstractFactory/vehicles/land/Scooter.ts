import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Starting scooter delivery!");
  }
  getCargo(): void {
    console.log("Package collected!");
  }
}
