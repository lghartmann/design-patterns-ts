import Transport from "./Transport";

import IVehicle from "./Vehicles/interfaces/IVehicle";

import Motorcycle from "./Vehicles/Motorcycle";

export default class MotorcycleTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Motorcycle();
  }
}
