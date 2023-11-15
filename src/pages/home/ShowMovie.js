import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { IMG_URL } from "./constants";

const Layout = styled.div`
  padding: 150px 5%;
  a {
    color: white;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 20px;
  @media screen and (max-width: 450px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

const CoverBg = styled.div`
  height: 300px;
  background: url(${IMG_URL}/w500/${(props) => props.$bgUrl}) no-repeat center /
    cover;
  border-radius: 15px;
  margin-bottom: 20px;
  @media screen and (max-width: 450px) {
    height: 150px;
    margin-bottom: 15px;
  }
`;

const MovieTitle = styled.div`
  font-size: 18px;
  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;

const params = {
  spaceBetween: 20,
  slidesPerView: 5.5,
  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerView: 5.5,
    },
    640: {
      spaceBetween: 15,
      slidesPerView: 4.3,
    },
    320: {
      spaceBetween: 10,
      slidesPerView: 3.3,
    },
  },
};

export const ShowMovie = ({ moviedata }) => {
  return (
    <div>
      <Layout>
        <Title>현재 상영 영화</Title>

        <Swiper {...params}>
          {moviedata.map((mapdata) => (
            <SwiperSlide key={mapdata.id}>
              <Link to={`/detail/${mapdata.id}`}>
                <CoverBg $bgUrl={mapdata.poster_path} />
                <MovieTitle>{mapdata.title}</MovieTitle>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Layout>
    </div>
  );
};
