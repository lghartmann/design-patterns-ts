import IAircraft from "../aerial/interfaces/IAircraft";
import NinetyNineTransport from "../factories/99Transport";
import HartTransport from "../factories/HartTransport";
import ITransportFactory from "../factories/interfaces/ITransportFactory";
import UberTransport from "../factories/UberTransport";
import ILandVehicle from "../land/interfaces/ILandVehicle";

export default class Client {
  private vehicle: ILandVehicle;
  private aircraft: IAircraft;

  constructor(factory: ITransportFactory) {
    this.vehicle = factory.createTransportVehicle();
    this.aircraft = factory.createTransportAircraft();
  }

  startRoute(): void {
    this.vehicle.startRoute();
    this.aircraft.startRoute();
  }
}

const transport = new UberTransport();
const client = new Client(transport);

const transport2 = new NinetyNineTransport();
const client2 = new Client(transport2);

const transport3 = new HartTransport();
const client3 = new Client(transport3);

client.startRoute();
client2.startRoute();
client3.startRoute();
