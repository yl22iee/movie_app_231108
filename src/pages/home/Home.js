import { useEffect, useState } from "react";
// import styled from "styled-components";
import { nowPlaying, popular, toprate, upcoming } from "../../api";
import { Banner } from "./Banner";
import { ShowMovie } from "./ShowMovie";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export const Home = () => {
  const [nowPlayingData, setNowPlayingData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [isloading, setIsLoaing] = useState(true);
  const [upcomingData, setupcomingData] = useState();

  useEffect(() => {
    (async () => {
      // async은 단독으로 사용이 불가능하기 때문에 익명의 함수와 함께 사용해야한다.
      try {
        const { results: nowResults } = await nowPlaying(); // 비구조화 할당 ,(results =>  nowResults로변경)
        setNowPlayingData(nowResults); // 지역함수의 변수를 외부에서 사용하기 위해 변수에 담았음

        const { results: popResults } = await popular();
        setPopData(popResults);
        // console.log(popResults);

        const { results: topResults } = await toprate();
        setTopData(topResults);

        const { results: upcomingResults } = await upcoming();
        setupcomingData(upcomingResults);

        setIsLoaing(false); // 위에 내용들을 실행했다면 setIsLoading은 false가 되어...?
        // console.log(results[1].title);
      } catch (error) {
        console.log("에러" + error);
      } // try, catch는 예외처리를 하기 위해서 만들어줬음
    })();
  }, []);

  // console.log(popData);

  console.log(isloading);
  // console.log(nowPlayingData);

  return (
    <>
      {isloading ? ( // 조건1. loading이 참이라면 "loading"을 출력하고
        "loading..."
      ) : (
        // 조건2. loading이 참이 아니라면 ...
        <div>
          {/* <PageTitle titleName={"Nexflex"} /> */}
          <Banner data={nowPlayingData[0]} />
          <Layout>
            <ShowMovie
              titleName={"현재 상영 영화"}
              moviedata={nowPlayingData}
            />
            <ShowMovie titleName={"인기 영화"} moviedata={popData} />
            <ShowMovie titleName={"영화 최고 순위"} moviedata={topData} />
            <ShowMovie titleName={"업로드 예정"} moviedata={upcomingData} />
          </Layout>
        </div>
      )}
    </>
  );
};
