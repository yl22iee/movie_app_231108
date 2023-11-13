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

export const nowPlaying = () =>
  fetch(nowPlayingurl, options).then(
    (res) => res.json() // <= fetch()알아와야 함
  );
//   위의 내용들을 한꺼번에 사용하기 위해서 fetch함수로 묶어서 사용해줬음
