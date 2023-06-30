{
  interface Vehicle {
    moveForward(): void;
    moveBackward(): void;
  }
  class Car implements Vehicle {
    moveForward(): void {
      console.log("🚘가 전진합니다.");
    }
    moveBackward(): void {
      console.log("🚘가 후진합니다.");
    }
  }
  class MotoBike implements Vehicle {
    moveForward(): void {
      console.log("🏍️가 전진합니다.");
    }
    moveBackward(): void {
      console.log("🏍️가 후진합니다.");
    }
  }
  class Driver {
    drive(vehicle: Vehicle) {
      vehicle.moveBackward();
      vehicle.moveForward();
    }
  }
  // const car1 = new Car();
  // const motoBike1 = new MotoBike();
  const driver = new Driver();
  // driver.drive(car1);
  // driver.drive(motoBike1);

  const vehicles = [new MotoBike(), new Car()];
  vehicles.forEach((item) => {
    console.log("___________");
    driver.drive(item);
  });
}
