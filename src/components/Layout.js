import { styled } from "styled-components";

const Container = styled.div`
  padding: 150px 5%;
`;

export const Layout = ({ children }) => {
  return <Container>{children}</Container>; //children은 부모아래 자식으로. 부모의 기본틀을 유지하되 children은 내용이 변경됨
};
