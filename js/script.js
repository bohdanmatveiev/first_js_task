/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

const personalMovieDB = {
    count() {
        let numberOfFilms;
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
        this.count = numberOfFilms;
        function detectPersonalLevel() {
            if (numberOfFilms < 10) {
                alert('Просмотрено довольно-таки мало фильмов');
            } else if (numberOfFilms < 30) {
                alert('Вы классический зритель');
            } else {
                alert('Вы киноман!');
            }
        }
        detectPersonalLevel();
    },
    showYourMovies() {
        for (let i = 0; i < 2; i++) {
            const q1 = prompt("Oдин из последних просмотренных фильмов?", ""),
                  q2 = prompt("На сколько оцените его?", "");
        
            if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
                personalMovieDB.movies[q1] = q2;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    movies: {},
    actors: {},
    writeYourGenres() {
        for (let i = 1; i < 4; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            while (personalMovieDB.genres[i - 1] == ''|| personalMovieDB.genres[i - 1] == null) {
                personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); 
            }
        }
        personalMovieDB.genres.forEach (function(genres, i) {
            console.log ( `Любимый жанр #${(i+1)} - это ${genres}`);
        });
    },
    genres: [],
    privat: false,
    toggleVisibleMyDB() {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
            console.log(personalMovieDB.privat);
        } else {
            personalMovieDB.privat = false;
            console.log(personalMovieDB.privat);
        }
    },
    showMyDB() {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    }
};

personalMovieDB.count();
personalMovieDB.showYourMovies();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();

// const arr = [1, 25, 23, 6, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }
// // console.log(arr.length); // length = last index + 1

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// let a = 5,
//     b = a;

// a = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj;

// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;
// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'BohdanMatveiev'
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'facebook', 'meta'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ["a", "b"];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};
// console.log(newObj);

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
//     health: 400,
//     armour: 100,
//     sayHello: function() {
//         console.log("Hello");
//     }
// };

// const john = Object.create(soldier);
// const john = {
//     health: 100
// };

// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);
// console.log(john.armour);
// john.sayHello();
// console.log(add);
// console.log(clone);
/* arr.push(9);

console.log(arr); */

/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));
/* const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
        main: 'blue',
        second: 'grey'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const {border, bg, main, second} = options.colors;

console.log(main); */

/* console.log(Object.keys(options).length);
 */
/* console.log(options.name);

delete options.name;

console.log(options);
 */

/* let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++; 
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++; 
    }
}

console.log(counter)
 */
/* function first() {
    // Do something
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок');
}

learnJS('JavaScript', done);
 */
/* const str = 'Test';

console.log(str.toLowerCase());

const fruit = 'Some fruit';

console.log(fruit.indexOf("Some"));

const logg = "hello world";

console.log(logg.slice(6, 9));

console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));
 */
/* console.log(parseInt(test)); 
const test = "12.2px";
console.log(parseFloat(test)); */
/* let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage("hello world");
console.log(num);
 */

/* function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));
 */
/* function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("hello");
};

logger();

const calc = (a, b) => { 
    console.log('1');
    return a + b; 
}; */
/* if (4 == 9) {
    console.log('OK');
} else {
    console.log('NoOk');
} */



/* if (num < 50) {
    console.log('Error');
} else if (num > 50) {
    console.log('Very much');
} else { 
    console.log('YES');
}


const num = 49;
(num === 50) ? console.log('YES') : console.log('Error'); */
/* const num = 51;

switch (num) {
    case 49: 
        console.log('неверно');
        break;
    case 100: 
        console.log('неверно');
        break; 
    case 50:
        console.log('верно');
        break;    
    default: 
        console.log('не в этот раз');
        break;        
} */

/* let num = 50;
 */
/* while (num <= 55) {
    console.log(num);
    num++;
} */

/* do {
    console.log(num);
    num++;
}
while (num < 55); */

/* for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
} */