import IVehicle from "./interfaces/IVehicle";

export default class Motorcycle implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Starting delivery!");
  }
  getCargo(): void {
    console.log("Got the package!");
  }
}
