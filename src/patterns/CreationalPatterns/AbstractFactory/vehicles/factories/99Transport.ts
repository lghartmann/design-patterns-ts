import IAircraft from "../aerial/interfaces/IAircraft";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

import Helicopter from "../aerial/Helicopter";
import Motorcycle from "../land/Motorcycle";

export default class NinetyNineTransport implements ITransportFactory {
  createTransportVehicle(): ILandVehicle {
    return new Motorcycle();
  }
  createTransportAircraft(): IAircraft {
    return new Helicopter();
  }
}
