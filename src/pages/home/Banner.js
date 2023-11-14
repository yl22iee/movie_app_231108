import { styled } from "styled-components";
import { IMG_URL } from "./constants";

const MainBanner = styled.section`
  height: 80vh;
  background-color: lightgray;
  position: relative;
  padding: 400px 5%;
  background: url(${IMG_URL}/original/${(props) => props.$bgUrl}) no-repeat
    center / cover;

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

export const Banner = ({ data }) => {
  return (
    <div>
      {data && ( // nowPlayingData가 존재하고 MainBanner, BlackBg가 존재한다면 (&&(앤드연산자) => 참 + 참 = 참)
        <MainBanner $bgUrl={data.backdrop_path}>
          <BlackBg />
          <h3>{data.title}</h3>
          <p>{data.overview}</p>
        </MainBanner>
      )}
    </div>
  );
};
