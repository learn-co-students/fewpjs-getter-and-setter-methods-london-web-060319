// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(diameter) {
        return this.radius = diameter / 2
    }

    get circumference() {
        debugger
        const result = Math.PI * this.diameter
        return Math.floor(result * 100) /100
    }

    set circumference(circumference) {
       const diam = circumference / Math.PI
       return this.diameter = diam
    }

    get area() {
        return Math.PI * (Math.pow(this.radius, 2))
    }
}