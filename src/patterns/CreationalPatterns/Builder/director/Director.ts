import IBuilder from "../builders/IBuilder";
import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Director {
  constructor(private builder: IBuilder) {}

  constructSedan() {
    this.builder.setVehicleType(VehicleType.SEDAN);
    this.builder.setSeats(5);
    this.builder.setTransmission(Transmission.AUTOMATIC);
    this.builder.setEngine(new Engine(1600));

    this.builder.addWheel(new Wheel(18));
    this.builder.addWheel(new Wheel(18));
    this.builder.addWheel(new Wheel(18));
    this.builder.addWheel(new Wheel(18));
  }

  constructTruck() {
    this.builder.setVehicleType(VehicleType.TRUCK);
    this.builder.setSeats(3);
    this.builder.setTransmission(Transmission.SEQUENTIAL);
    this.builder.setEngine(new Engine(13000));

    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
  }

  constructSport() {
    this.builder.setVehicleType(VehicleType.SPORT);
    this.builder.setSeats(2);
    this.builder.setTransmission(Transmission.AUTOMATIC);
    this.builder.setEngine(new Engine(7000));

    this.builder.addWheel(new Wheel(17));
    this.builder.addWheel(new Wheel(17));
    this.builder.addWheel(new Wheel(17));
    this.builder.addWheel(new Wheel(17));
  }

  constructMotorcycle() {
    this.builder.setVehicleType(VehicleType.MOTORCYCLE);
    this.builder.setSeats(1);
    this.builder.setTransmission(Transmission.MANUAL);
    this.builder.setEngine(new Engine(800));

    this.builder.addWheel(new Wheel(16));
    this.builder.addWheel(new Wheel(16));
  }
}
