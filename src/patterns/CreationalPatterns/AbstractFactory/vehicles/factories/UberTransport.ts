import IAircraft from "../aerial/interfaces/IAircraft";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

import Airplane from "../aerial/Airplane";
import Car from "../land/Car";

export default class UberTransport implements ITransportFactory {
  createTransportVehicle(): ILandVehicle {
    return new Car();
  }
  createTransportAircraft(): IAircraft {
    return new Airplane();
  }
}
