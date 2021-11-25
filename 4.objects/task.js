'use strict'
function Student(name, gender, age) {
    // Ваш код
    //let year = new Date().getFullYear();
    this.name = name;
    this.gender = gender;
    this.age = age;
}
let student11 = new Student('Sanya', 'male', 30);
let student22 = new Student('Lyoha', 'male', 20);
let student3 = new Student('Sonya', 'female', 33);
let student4 = new Student('Kira', 'female', 27);

Student.prototype.setSubject = function (subjectName) {
    //ваш код
    this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    if ( this.marks === undefined) {
        this.marks = [mark]; // Первая оценка добавляется в массив
    } else {
        this.marks.push(mark); // Все остальные оценки пушатся
    }
}

Student.prototype.addMarks = function (...mark) {
    this.marks = mark;
    if (this.marks === undefined) {
        this.marks = [mark];
    } else {
        this.marks.concat(mark);
    }
}

Student.prototype.getAverage = function () {
    let sum = 0;
   // let aver = 0;
    for (let i = 0; i < this.marks.length; i++) {
        sum += this.marks[i];
        this.average = (sum / this.marks.length).toFixed(2);
    }
    //this.average = aver.toFixed(2);
    return this.average;
}

Student.prototype.exclude = function (reason) {
    let newProperty = 'excluded';
    this.excluded = reason;
    delete this.subject;
    delete this.marks;
}
// ваш код для остальных методов
student22.addMarks(1,4,5);
// student22.addMark(5);
// student22.addMark(4);
student22.addMarks(2,4,5);
student22.addMark(3);
student22.setSubject('Физика');
student22.getAverage();
//student22.exclude('Леньтяй');
student3.addMarks(4,4,5);
student3.getAverage();
console.log(student3);
console.log(student22);