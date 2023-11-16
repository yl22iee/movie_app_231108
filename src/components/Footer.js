import { styled } from "styled-components";

const Container = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.6);
`;

export const Footer = () => {
  return <Container>@Hello_World</Container>;
};
