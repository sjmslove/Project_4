/**
 *   @author Smith, Sierra (sjsmith8147@gmail.com)
 *   @version 0.0.2
 *   @summary Project 4 || created: 11.13.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let movies = [];

function main() {

    populateMovies();
    printMovies();
}

main();

function populateMovies() {
    const COLUMNS = 3,NUMMOVIES = 2, RATING = 0, TOTAL = 1, COUNTER = 2, AVERAGE = 3;
    process.stdout.write('\x1Bc');

    for (let i = 0; i < NUMMOVIES; i++) {
        movies[i] = PROMPT.question(`\n please enter name of movie `);
        movies[i] = [];
        for (let j = 0; j < COLUMNS; j++) {
            let attempts = 0;
            if (j=== RATING){
                movies[i][j] = Number(PROMPT.question(`please rate this movie: `));
                while(movies[i][j] < 0 || movies[i][j] > 5){
                    console.log(`\n invalid response, try again`);
                    movies[i][j] = Number(PROMPT.question(`please rate this movie: `));
                }
                attempts++;
            } else if (j === TOTAL){
                movies[i][j] = (`${movies[i][TOTAL]}`) + (`${movies[i][RATING]}`);
            } else if (j === COUNTER){
                movies[i][j] = (`${movies[i][COUNTER]}`) + (`${attempts}`);
            } else {
                movies[i][AVERAGE] = (`${movies[i][TOTAL]}`) / (`${movies[i][COUNTER]}`);
            }
            process.stdout.write('\x1Bc');
        }
    }
}


function printMovies(){
    process.stdout.write('\x1Bc');
    let COLUMNS = 4;
    for (let i = 0; i < movies.length; i++){
        for (let j = 0; j < COLUMNS; j++){
            console.log(`${movies[i][j]}`);
        }
    }
}