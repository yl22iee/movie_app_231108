import { useEffect, useState } from "react";
// import styled from "styled-components";
import { nowPlaying, popular } from "../../api";
import { Banner } from "./Banner";
import { ShowMovie } from "./ShowMovie";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export const Home = () => {
  const [nowPlayingData, setNowPlayingData] = useState();
  const [popData, setPopData] = useState();
  const [isloading, setIsLoaing] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResults } = await nowPlaying(); // 비구조화 할당 ,(results =>  nowResults로변경)
        setNowPlayingData(nowResults); // 지역함수의 변수를 외부에서 사용하기 위해 변수에 담았음

        const { results: popResults } = await popular();
        setPopData(popResults);
        // console.log(popResults);

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
            <ShowMovie moviedata={nowPlayingData} />
            <ShowMovie moviedata={popData} />
          </Layout>
        </div>
      )}
    </>
  );
};
