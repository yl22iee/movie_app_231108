import { styled } from "styled-components";
import { GridLoader } from "react-spinners";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Wrap>
      <GridLoader color="crimson" />
    </Wrap>
  );
};
