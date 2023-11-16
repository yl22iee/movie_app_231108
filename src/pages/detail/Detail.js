import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";

export const Detail = () => {
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      // async는 단독으로 사용이 안되기 때문에 익명의 함수를 사용해야 한다.
      try {
        const data = await movieDetail(id);
        console.log(data);
      } catch (error) {}
    })();
  }, []);

  return <div></div>;
};
