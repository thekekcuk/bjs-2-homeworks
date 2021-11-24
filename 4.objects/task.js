// function Student(name, gender, age) {
//     // Ваш код
//
// }
//
// Student.prototype.setSubject = function (subjectName) {
//     //ваш код
// }
//
// // ваш код для остальных методов

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

    let newProperty = 'subject';
    this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    let newProperty = 'marks';
    if ( this.marks === undefined) {
        this.marks = [mark]; // Первая оценка добавляется в массив
    } else {
        this.marks.push(mark); // Все остальные оценки пушатся
    }
}

Student.prototype.addMarks = function (...mark) {
    let newProperty = 'marks';
    this.marks = mark;

}

Student.prototype.getAverage = function () {
    let newProperty = 'average';
    this.average;
}

Student.prototype.exclude = function (reason) {
    let newProperty = 'excluded';
    this.excluded = reason;

    // delete Student.prototype.subject;
    // delete Student.prototype.setSubject();
    // delete Student.prototype.setSubject;
    delete this.subject;
    delete this.marks;
}
// ваш код для остальных методов
student22.addMark(5);
student22.addMark(4);
student22.addMark(3);
student22.setSubject('Физика');
student22.exclude('Леньтяй');
console.log(student22);
student3.addMarks(4,4,5);
console.log(student3);
