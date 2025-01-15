import IVehicle from "./interfaces/IVehicle";

export default class Bike implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Starting trip...");
  }
  getCargo(): void {
    console.log("Getting passengers, we're ready");
  }
}
