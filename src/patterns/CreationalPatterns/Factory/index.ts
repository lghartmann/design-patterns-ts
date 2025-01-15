import BikeTransport from "./BikeTransport";
import CarTransport from "./CarTransport";
import MotorcycleTransport from "./MotorcycleTransport";
import Transport from "./Transport";

let transport: Transport;

let type = "uber";

switch (type) {
  case "uber":
    transport = new CarTransport();
  case "log":
    transport = new MotorcycleTransport();
  case "bike":
    transport = new BikeTransport();
  default:
    console.log("select a type!");
}

if (transport) {
  transport.startTransport();
  console.log("Done!");
}
