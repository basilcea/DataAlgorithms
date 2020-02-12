const https = require("https");
/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 * Base url: https://jsonmock.hackerrank.com/api/movies/search/?Title=
 */
function getMovieTitles(substr) {
  // use https.get to query this string

  function fetchData(substr) {
    const url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`;

    const req = https.get(url, res => {
      let pages;
      let titles = [];
      let movies;
      res.on("data", d => {
        movies = JSON.parse(d);
      });
      res.on("end", () => {
        titles.push(...movies.data.map(movie => movie.Title));
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
    });
  }
  fetchData(substr);
}

async function getRecordsByAgeGroup(ageStart, ageEnd, bpDiff) {
  // use https.get to query this string
  const url = `https://jsonmock.hackerrank.com/api/medical_records`;
  // const req =
  const response = https.get(url, res => {
    let pages;
    let records;
    res.on("data", d => {
      records = JSON.parse(d);
    });
    res.on("end", () => {
      pages = records.total_pages;
      let results = [];
      for (let i = 1; i < pages; i++) {
        https.get(
          `https://jsonmock.hackerrank.com/api/medical_records?&page=${i + 1}`,
          res => {
            let med_records;
            res.on("data", d => {
              med_records = JSON.parse(d);
            });
            res.on("end", () => {
              for (let i = 0; i <= med_records.data.length - 1; i++) {
                if (
                  ageStart <
                    calAge(
                      med_records.data[i].userDob,
                      med_records.data[i].timestamp
                    ) <
                    ageEnd &&
                  med_records.data[i].vitals.bloodPressureDiastole -
                    med_records.data[i].vitals.bloodPressureSystole >
                    bpDiff
                ) {
                  results.push(med_records.data[i].id);
                }
              }
              return results.length ? results : [-1];
            });
          }
        );
      }
    });
  });
  return response;
}
const calAge = (date, time) => {
  const splitedDate = date.split("-");
  const dob = new Date(`${splitedDate[1]}-${splitedDate[0]}-${splitedDate[2]}`);
  const dateOfCreation = new Date(time);
  const diff = dateOfCreation - dob;
  const age = Math.floor(diff / 31557600000);
  return age;
};
getRecordsByAgeGroup(12, 44, 44);
getMovieTitles("spiderman");
