import Transport from "./Transport";

import IVehicle from "./Vehicles/interfaces/IVehicle";

import Bike from "./Vehicles/Bike";

export default class BikeTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Bike();
  }
}
