const { movies }  = require ('./data.js')

console.log(movies);

///Iteration 1: All directors Start:
function getAllDirectors(movies){


    const directors = movies.map(movie => movie.director);

  return directors;
}

const allDirectors = getAllDirectors(movies);

console.log(allDirectors);

//Itration1:finished

//Iteration 2: Steven Spielberg:start

// Function to count drama movies directed by Steven Spielberg
function howManyMovies(movies) {
    // Use the filter function to iterate through the array
    // and include only drama movies directed by Steven Spielberg
    const spielbergDramaMovies = movies.filter(movie =>
      movie.director === 'Steven Spielberg' && movie.genre === 'Drama'
    );
  
    // Return the count of drama movies directed by Steven Spielberg
    return spielbergDramaMovies.length;
  }
  
  // Call the function with the array of movies
  const count = howManyMovies(movies);
  
  // Output the result
  console.log(count);

  //FINISHED

  //3
  
// Function to calculate the average score of movies
function scoresAverage(movies) {
    // Use the reduce function to accumulate the total score
    const totalScore = movies.reduce((sum, movie) => sum + movie.score, 0);
  
    // Calculate the average score by dividing the total score by the number of movies
    const averageScore = totalScore / movies.length;
  
    // Round the average score to two decimal places
    const roundedAverage = averageScore.toFixed(2);
  
    // Return the rounded average
    return roundedAverage;
  }
  
  // Call the function with the array of movies
  const average = scoresAverage(movies);
  
  // Output the result
  console.log(average);

  //Itration number3Finished


  ///Iteration 4: Drama movies


  
// Function to calculate the average score of drama movies
function dramaMoviesScore(movies) {
    // Use the filter function to include only drama movies
    const dramaMovies = movies.filter(movie => movie.genre === 'Drama');
  
    // Use the reduce function to accumulate the total score of drama movies
    const totalDramaScore = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);
  
    // Calculate the average score of drama movies by dividing the total score by the number of drama movies
    const averageDramaScore = totalDramaScore / dramaMovies.length;
  
    // Round the average score to two decimal places
    const roundedAverageDramaScore = averageDramaScore.toFixed(2);
  
    // Return the rounded average score of drama movies
    return roundedAverageDramaScore;
  }
  
  // Call the function with the array of movies
  const dramaAverage = dramaMoviesScore(movies);
  
  // Output the result
  console.log(dramaAverage);


  ///Itration4 Finished

  //Iteration 5: Order by year



// Function to order movies by year and title
function orderByYear(movies) {
  // Create a shallow copy of the array to avoid modifying the original array
  const sortedMovies = [...movies];

  // Use the sort function to order the movies by year and title
  sortedMovies.sort((a, b) => {
    if (a.year !== b.year) {
      // If the years are different, sort by year in ascending order
      return a.year - b.year;
    } else {
      // If the years are the same, sort by title in alphabetical order
      return a.title.localeCompare(b.title);
    }
  });

  // Return the sorted array
  return sortedMovies;
}

// Call the function with the array of movies
const sortedMovies = orderByYear(movies);

// Output the result
console.log(sortedMovies);


//Itration 5 finished

//Itration6 start


// Function to order movies alphabetically and return titles of the first 20
function orderAlphabetically(movies) {
  // Create a shallow copy of the array to avoid modifying the original array
  const sortedMovies = [...movies];

  // Use the sort function to order the movies alphabetically by title
  sortedMovies.sort((a, b) => a.title.localeCompare(b.title));

  // Use the map function to extract the titles from the sorted array
  const titles = sortedMovies.map(movie => movie.title);

  // Return an array containing the titles of the first 20 movies (or all of them if less than 20)
  return titles.slice(0, 20);
}

// Call the function with the array of movies
const first20Titles = orderAlphabetically(movies);

// Output the result
console.log(first20Titles);
//itration6 finished













  



