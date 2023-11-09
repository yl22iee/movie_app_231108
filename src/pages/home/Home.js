import { styled } from "styled-components";

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
  return (
    <MainBanner>
      <BlackBg>
        <h3>Five_night_at_Freddy</h3>
        <p>
          80년대에 아이들이 실종되고 폐업한지 오래된 프레디의 피자가게 그곳의
          야간 경비 알바를 하게 된 ‘마이크'는 캄캄한 어둠만이 존재하는 줄 알았던
          피자가게에서 살아 움직이는 피자가게...
        </p>
      </BlackBg>
    </MainBanner>
  );
};
