'use strict'
//Задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel'
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic'
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective'
    }
}

const picknic = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
);


const ppp = new Book(
    'Alex',
    'Lukomorye',
    1820,
    1
);

const qqq = new Magazine(
    'кук',
    1998,
    25
);


const qwe = new PrintEditionItem(
    'чук',
    2000,
    100
);

qwe.state = 12;
qwe.fix();
console.log(qwe.state);

//Задача 2

class Library {

    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find(element => element[type] === value) || null;
        
    }

    giveBookByName(bookName) {
         if (typeof bookName != 'undefined') {
             for (let i in this.books) {
                 if (bookName === this.books[i].name) {
                    let result = this.books.splice(i, 1);
                    return result;
                 }
             }
         }
         return null;
    }

}

const library = new Library("Библиотека имени Ленина");

library.addBook(
    new DetectiveBook(
        "Артур Конан Дойл",
        "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
        2019,
        1008
    )
);

library.addBook(
    new FantasticBook(
        "Аркадий и Борис Стругацкие",
        "Пикник на обочине",
        1972,
        168
    )
);

library.addBook(
    new DetectiveBook(
        "Дойл",
        "Полное",
        2019,
        1008
    )
);
library.addBook(
    new DetectiveBook(
        "Конан",
        "Шерлоке Холмсе в одном томе",
        2019,
        1008
    )
);
library.addBook(
    new DetectiveBook(
        "Артур",
        "собрание в одном томе",
        2019,
        1008
    )
);
