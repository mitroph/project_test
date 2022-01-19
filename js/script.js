'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    genres:{},
    actors:{},
    privat: false
};

const a = prompt('Last movie?', ''),
      b = prompt('How many stars?', ''),
      c = prompt('Last movie?'),
      d = prompt('Stars?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB.movies);


