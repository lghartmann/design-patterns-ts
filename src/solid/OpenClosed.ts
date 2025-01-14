class Vehicle {
  constructor(
    private color: string,
    private year: number,
    private engine: string,
    //! A motorcycle has only 1 seat and no doors, but if we make these fields optional
    //! they would be optional to a car instance aswell, and that's a undesired side effect
    private seats: number,
    private doors: number
  ) {}

  car(): void {
    console.log(
      `Creating car: ${this.color}, ${this.year}, ${this.engine}, ${this.doors}, ${this.seats}`
    );
    this.startVehicle();
  }

  motorcycle(): void {
    console.log(
      `Creating motorcycle: ${this.color}, ${this.year}, ${this.engine}`
    );

    this.startVehicle();
  }

  startVehicle(): void {
    console.log("Starting engine...");
  }
}

const car = new Vehicle("red", 1996, "1.0 TURBO", 4, 4);
car.car();

const motorcycle = new Vehicle("blue", 2002, "65cc", 2, 0);
motorcycle.motorcycle();

interface IVehicleCar {
  configure(
    color: string,
    year: number,
    engine: string,
    seats: number,
    doors: number
  ): void;

  startVehicle(): void;
}

interface IVehicleMotorcycle {
  configure(color: string, year: number, engine: string): void;

  startVehicle(): void;
}

class Car implements IVehicleCar {
  constructor(
    color: string,
    year: number,
    engine: string,
    seats: number,
    doors: number
  ) {
    this.configure(color, year, engine, seats, doors);
  }

  startVehicle(): void {
    console.log("Starting car...");
  }

  configure(
    color: string,
    year: number,
    engine: string,
    seats: number,
    doors: number
  ): void {
    console.log(
      `Creating car: ${color}, ${year}, ${engine}, ${doors}, ${seats}`
    );
    this.startVehicle();
  }
}

class Motorcycle implements IVehicleMotorcycle {
  constructor(color: string, year: number, engine: string) {
    this.configure(color, year, engine);
  }

  configure(color: string, year: number, engine: string): void {
    console.log(`Creating motorcycle: ${color}, ${year}, ${engine}`);

    this.startVehicle();
  }

  startVehicle(): void {
    console.log("Starting motorcycle...");
  }
}

const car2 = new Car("pink", 2015, "16v", 6, 4);

const motorcycle2 = new Motorcycle("brown", 2008, "125cc");
