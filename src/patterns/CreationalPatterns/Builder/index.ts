import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./director/Director";

const builder = new VehicleBuilder();

const director = new Director(builder);

director.constructSedan();
const sedan = builder.getVehicle();
console.log(sedan);

director.constructTruck();
const truck = builder.getVehicle();
console.log(truck);

director.constructSport();
const sport = builder.getVehicle();
console.log(sport);

director.constructMotorcycle();
const motorcycle = builder.getVehicle();
console.log(motorcycle);
