import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import { Loading } from "../home/Loading";
import { styled } from "styled-components";
import { IMG_URL } from "../home/constants";

const ConWrap = styled.div`
  padding: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Bg = styled.div`
  width: 40%;
  height: 700px;
  background: url(${IMG_URL}/w1280/${(props) => props.$bgUrl}) no-repeat center /
    cover;
`;

const Con = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
`;

const Title = styled.div`
  margin: 20px;
  font-size: 70px;
  font-weight: 600;
`;

const Genres = styled.ul`
  margin: 20px 0;
`;

const Rated = styled.div`
  font-weight: 400;
`;

const Runtime = styled.div`
  font-weight: 400;
`;

const Release = styled.div`
  margin-bottom: 20px;
`;
const Desc = styled.div`
  max-width: 70%;
  width: 100%;
  margin-top: 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  padding-top: 50px;
  opacity: 0.7;
  line-height: 2em;
  font-weight: 300;
`;

export const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // async는 단독으로 사용이 안되기 때문에 익명의 함수를 사용해야 한다.
      try {
        const data = await movieDetail(id);
        setDetailData(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log("Error : " + error);
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <ConWrap>
            <Con>
              <Bg $bgUrl={detailData.poster_path} />
              <Title>{detailData.title}</Title>
              <Rated>The Rate : {Math.round(detailData.vote_average)}</Rated>
              <Genres>
                {detailData.genres.map((genres) => (
                  <li key={genres.id}>{genres.name}</li>
                ))}
              </Genres>
              <Release>{detailData.release_date}</Release>
              <Runtime>RunTime : {detailData.runtime} min </Runtime>
              <Desc>{detailData.overview}</Desc>
            </Con>
          </ConWrap>
        </div>
      )}
    </>
  );
};
