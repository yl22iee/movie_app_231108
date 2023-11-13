import { useEffect, useState } from "react";
import styled from "styled-components";
import { nowPlaying } from "../../api";

const MainBanner = styled.section`
  height: 80vh;
  background-color: lightgray;
  position: relative;
  padding: 400px 5%;
  h3,
  p {
    position: relative;
  }

  h3 {
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -3px;
    line-height: 100px;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.8) 55%,
    rgba(0, 0, 0, 0) 95%
  );
  position: absolute;
  top: 0;
  left: 0;
`;

export const Home = () => {
  const [nowPlayingData, setNowPlayingData] = useState();
  const [loading, setLoaing] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await nowPlaying(); // 비구조화 할당
        setNowPlayingData(results); // 지역함수의 변수를 외부에서 사용하기 위해 변수에 담았음
        setLoaing(false);
        // console.log(results[1].title);
      } catch (error) {
        console.log("에러" + error);
      } // try, catch는 예외처리를 하기 위해서 만들어줬음
    })();
  }, []);

  console.log(loading);
  console.log(nowPlayingData);

  return (
    <>
      {loading ? ( // loading이 참이라면 "loading"을 출력하고
        "loading..."
      ) : (
        <div>
          {nowPlayingData && (
            <MainBanner>
              <BlackBg />
              <h3>{nowPlayingData[0].title}</h3>
              <p>{nowPlayingData[0].overview}</p>
            </MainBanner>
          )}
        </div>
      )}
    </>
  );
};
