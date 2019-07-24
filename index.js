// Add your Circle class here

const pi = Math.PI
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // area
  get area() {
    return pi * this.radius ** 2;
  }
  set area(n) {
    this.radius = Math.sqrt(n / pi);
  }
  // diameter
  get diameter() {
    return this.radius * 2;
  }
  set diameter(n) {
    this.radius = n / 2;
  }
  // circumference
  get circumference() {
    return pi * (this.radius * 2);
  }
  set circumference(n) {
    this.radius = n / (pi * 2);
  }
}
