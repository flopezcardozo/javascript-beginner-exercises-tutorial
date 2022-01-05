/* This exercise is almost identical to 15-Random numbers - consider merging them here and using another concept for 15? */

function generateRandom (min, max){
    return Math.floor(Math.random()* (max-min)+1) ;
 }

 console.log(generateRandom(0,9));