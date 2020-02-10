const https = require("https");
/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 * Base url: https://jsonmock.hackerrank.com/api/movies/search/?Title=
 */
function getMovieTitles(substr) {
  // use https.get to query this string

  function fetchData(substr){
  

  const url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`;

  const req =  https.get(url, res => {
    let pages;
    let titles = [];
    let movies;
    res.on("data", d => {
      movies = JSON.parse(d);
    });
    res.on("end", () => {
     titles.push(...movies.data.map(movie => movie.Title))
      pages = movies.total_pages;
      for (let i = 1; i < pages; i++) {
        https.get(
          `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=${i +
            1}`,
          res => {
            let titlesPerPage;
            res.on("data", d => {
              titlesPerPage = JSON.parse(d).data.map(movie => movie.Title);
            });
            res.on("end", () => {
              titles.push(...titlesPerPage);
              return titles.sort();
            });
          }
        );
      }
     
    });

})
  }
fetchData(substr)
}

// // console.log(movies)
// // let titles = movies.data
// // let anothertitles = titles.map(movie => movie.Title)

// https.request(``, res => {
//     console.log(res)
//      res.on('data', (d) =>  d)
//     })
// }

getMovieTitles("spiderman");
