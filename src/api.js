const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
const nowPlayingurl = baseUrl + "movie/now_playing" + "?language=ko-kr";
// => https://api.themoviedb.org/3/ + movie/now_playing + ?language=ko-kr

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMWU0NjEyNDc1ZTkyZTEyOWJjNWUyZmZmNmQ2OTk4MyIsInN1YiI6IjY1NGIzYTEyMjg2NmZhMDEzOGE5MTA0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rc9wZ9zcMs3EC1rtA93ULAde1TIQr-HhN4zXlJ1t9KM",
  },
};

export const nowPlaying = fetch(nowPlayingurl, options).then(
  (res) => res.json() // <= fetch()알아와야 함
);
