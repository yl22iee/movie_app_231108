import { Link } from "react-router-dom";
import { routes } from "../routes";
import { styled } from "styled-components";
import { useEffect, useRef } from "react";

const WHeader = styled.header`
  width: 100%;
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: white;
  }
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  li {
    margin-left: 20px;
  }
`;

export const Header = () => {
  const headRef = useRef(); // useRef()??뭐임
  console.log(headRef);

  const scrollHandler = () => {
    // console.log("잘됨?");
    const pageY = window.scrollY;
    console.log(pageY); // page의 높이값을 가져왔음

    if (pageY > 300) {
      headRef.current.style.position = "fixed";
      headRef.current.style.backgroundColor = "raba(0,0,0,0.7)";
      headRef.current.style.backdropFilter = "blur(2px)";
    } else {
      headRef.current.style.position = "absolute";
      headRef.current.style.backgroundColor = "transparent";
      headRef.current.style.backdropFilter = "blur(0px)";
    }
  };

  useEffect(() => {
    return window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <WHeader ref={headRef}>
      {/* WHeader는 headRef를 참조 */}
      <Logo>
        <Link to={routes.home}>The_Mov</Link>
      </Logo>

      <Menu>
        <li>
          <Link to={routes.detail}>Detail</Link>
        </li>
        <li>
          <Link to={routes.search}>Search</Link>
        </li>
      </Menu>
    </WHeader>
  );
};
