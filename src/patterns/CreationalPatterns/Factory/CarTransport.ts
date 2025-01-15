import Transport from "./Transport";

import IVehicle from "./Vehicles/interfaces/IVehicle";

import Car from "./Vehicles/Car";

export default class CarTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Car();
  }
}
