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
    this.marks = mark;
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
    delete Student.subject;
    delete Student.prototype.addMarks;
}
// ваш код для остальных методов
student22.setSubject('qwe');
student22.exclude('удален');
console.log(student22);