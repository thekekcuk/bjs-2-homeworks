'use strict'

// Задача 1

function parseCount(count) {
    let parsed = parseInt(count, 10);
    if (isNaN(parsed)) {
        throw new Error("Невалидное значение");
    }
    return parsed;
}

function validateCount(count) {
    try {
        return parseCount(count);
    } catch (parsed) {
        return parsed;
    }
}

// Задача 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((a + b < c) || (a + c < b) || (b + c < a)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.perimeter = this.a + this.b + this.c;
    }

    getArea() {
        let semiPerimeter = this.getPerimeter() / 2;
        return this.area = +(Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c))).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        let trg = new Triangle(a, b, c);
        return trg;
    } catch {
        return {
            getPerimeter() { return "Ошибка! Треугольник не существует"; },
            getArea() { return "Ошибка! Треугольник не существует"; }
        }
    }
}

const q = new Triangle(3, 4, 5);