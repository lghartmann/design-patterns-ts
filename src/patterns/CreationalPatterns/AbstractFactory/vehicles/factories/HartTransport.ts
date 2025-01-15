import IAircraft from "../aerial/interfaces/IAircraft";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

import Drone from "../aerial/Drone";
import Scooter from "../land/Scooter";

export default class HartTransport implements ITransportFactory {
  createTransportVehicle(): ILandVehicle {
    return new Scooter();
  }
  createTransportAircraft(): IAircraft {
    return new Drone();
  }
}
