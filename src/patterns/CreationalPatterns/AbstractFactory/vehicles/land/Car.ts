import ILandVehicle from "./interfaces/ILandVehicle";

export default class Car implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Starting trip");
  }
  getCargo(): void {
    console.log("Passengers getting in");
  }
}
