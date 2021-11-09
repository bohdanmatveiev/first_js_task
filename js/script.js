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

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count < 10) {
    console.log("просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("вы классический зритель");
} else if (personalMovieDB.count >=30) {
    console.log("вы киноман");
} else {
    console.log('произошла ошибка');
}

console.log(personalMovieDB);

/* let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage("hello world");
console.log(num);
 */
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