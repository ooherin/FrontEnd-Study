interface Shape {
  draw(): void;
}

class Circle implements Shape {
  draw(): void {
    console.log("원 그리기");
  }
}

class Triangle implements Shape {
  draw(): void {
    console.log("삼각형 그리기");
  }
}

class Rectangle implements Shape {
  draw(): void {
    console.log("사각형 그리기");
  }
}

class ShapeFactory {
  createShape(type: "circle" | "triangle" | "rectangle"): Shape {
    switch (type) {
      case "circle":
        return new Circle();
      case "triangle":
        return new Circle();
      case "rectangle":
        return new Rectangle();
    }
  }
}

const shapeFactory = new ShapeFactory();
const circle = shapeFactory.createShape("circle");

const triangle = shapeFactory.createShape("triangle");
