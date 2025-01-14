interface IVehicle {
  startVehicle(): void;
}

interface IVehicleCar extends IVehicle {
  configureCar(
    color: string,
    year: number,
    engine: string,
    seats: number
  ): void;
}

interface IVehicleMotorcycle extends IVehicle {
  configureMotorcycle(color: string, year: number, engine: string): void;
}

class Car implements IVehicleCar {
  constructor(color: string, year: number, engine: string, seats: number) {
    this.configureCar(color, year, engine, seats);
  }

  configureCar(
    color: string,
    year: number,
    engine: string,
    seats: number
  ): void {
    console.log(`Creating car: ${color}, ${year}, ${engine}, ${seats}`);
  }

  startVehicle(): void {
    console.log("Starting car...");
  }
}

class Motorcycle implements IVehicleMotorcycle {
  constructor(color: string, year: number, engine: string) {
    this.configureMotorcycle(color, year, engine);
  }

  configureMotorcycle(color: string, year: number, engine: string): void {
    console.log(`Creating car: ${color}, ${year}, ${engine}`);
    this.startVehicle();
  }

  startVehicle(): void {
    console.log("Starting Motorcycle...");
  }
}

const car = new Car("red", 2022, "4.2", 4);

const motorcycle = new Motorcycle("yellow", 2006, "180cc");
