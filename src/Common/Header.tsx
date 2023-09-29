import react, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillPicture } from "react-icons/ai";
import { AiOutlineCompass } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MenuBar } from "../Props/MenuBar";
import { LiaAngleDownSolid } from "react-icons/lia";
import { IoArrowUp } from "react-icons/io5";
import { Dropdown } from "../Props/Dropdown";
import { DropdownTwo } from "../Props/DropdownTwo";
import { Button } from "../Props/Buttons";
import { NavLink } from "react-router-dom";
import { useColorChange } from "../Common/useColor";
import { useGlobalContext } from "../Common/useContext";

export const Header: React.FC = () => {
  const [show, setShow] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showFour, setShowFour] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { colorChange, dark } = useColorChange();
  const { isBoolean, toggleBoolean } = useGlobalContext();

  let [on, off] = useState(false);

  const toggle = () => {
    off(!on);
  };
  const showMenu = () => {
    setShow(true);
  };
  const closeMenu = () => {
    setShow(false);
  };

  const showMenuTwo = () => {
    setShowTwo(!showTwo);
    setShowThree(false);
  };
  const showMenuThree = () => {
    setShowThree(!showThree);
    setShowTwo(false);
  };
  const showMenuFour = () => {
    setShowThree(false);
    setShowTwo(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Container color={isBoolean ? "#282828" : "white"}>
        <Top color={isBoolean ? "white" : "black"}>
          <Wrap_1>
            <Left>
              <Logo
                onClick={() => {
                  toggle();
                  toggleBoolean();
                }}
              >
                <svg
                  id="logo_svg"
                  data-name="Logo SVG"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 80 20"
                >
                  <title>500px</title>
                  <path
                    d="M24.83,0a10,10,0,1,0,10,10h0A10.09,10.09,0,0,0,24.83,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.9,7.9,0,0,1,24.83,17.9ZM46.32,0a10,10,0,1,0,10,10h0A10,10,0,0,0,46.32,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.77,7.77,0,0,1,46.32,17.9ZM7.63,6a6.74,6.74,0,0,0-5.3,1.4V2.1h9c0.3,0,.5-0.1.5-1s-0.4-.9-0.6-0.9H1.33a0.9,0.9,0,0,0-.9.9V9.9c0,0.5.3,0.6,0.8,0.7a0.76,0.76,0,0,0,.9-0.2h0a5.69,5.69,0,0,1,5-2.4,5.2,5.2,0,0,1,4.5,4.4A5.06,5.06,0,0,1,7.23,18H6.63a5.1,5.1,0,0,1-4.7-3.3c-0.1-.3-0.3-0.5-1.1-0.2s-0.9.5-.8,0.8a7.09,7.09,0,0,0,9,4.2,7.09,7.09,0,0,0,4.2-9A7,7,0,0,0,7.63,6ZM63.12,0.1a5.42,5.42,0,0,0-4.8,5.4v8.9c0,0.5.4,0.6,1,.6s1-.1,1-0.6V5.5a3.36,3.36,0,0,1,2.9-3.4,3.29,3.29,0,0,1,2.5.8,3.19,3.19,0,0,1,1.1,2.4,4,4,0,0,1-.7,1.9,3.15,3.15,0,0,1-2.8,1.3h0c-0.4,0-.7,0-0.8.9,0,0.6,0,.9.5,1a4.92,4.92,0,0,0,2.9-.6,5.37,5.37,0,0,0,2.9-4.2A5.18,5.18,0,0,0,64,0,2.77,2.77,0,0,1,63.12.1Zm13.1,5.2,3.6-3.6c0.1-.1.4-0.4-0.2-1.1a1,1,0,0,0-.7-0.4h0a0.52,0.52,0,0,0-.4.2L74.92,4l-3.6-3.7c-0.3-.3-0.6-0.2-1.1.2s-0.5.8-.2,1.1l3.6,3.6L70,8.9h0a0.76,0.76,0,0,0-.2.4,0.84,0.84,0,0,0,.4.7,1.61,1.61,0,0,0,.7.4h0a1.06,1.06,0,0,0,.5-0.2L75,6.6l3.6,3.6a0.52,0.52,0,0,0,.4.2h0a1,1,0,0,0,.7-0.4c0.3-.4.4-0.8,0.1-1Z"
                    transform="translate(0)"
                  ></path>
                </svg>
              </Logo>
              <NavHold>
                <Navs
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    position: "relative",
                  }}
                >
                  {showTwo ? <Dropdown /> : null}
                  Discovery
                  <LiaAngleDownSolid
                    onClick={showMenuTwo}
                    style={{
                      fontSize: "12px",
                      color: "gray",
                      fontWeight: "600",
                    }}
                  />
                </Navs>
                <Navs
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    position: "relative",
                  }}
                >
                  {showThree ? <DropdownTwo /> : null}
                  Licensing
                  <LiaAngleDownSolid
                    onClick={showMenuThree}
                    style={{
                      fontSize: "12px",
                      color: "gray",
                      fontWeight: "600",
                    }}
                  />
                </Navs>
                <Navs>Memberships</Navs>
                {/* <Navs>Quests</Navs> */}
                <Navs>Blog</Navs>
                <Navs>Upload</Navs>
              </NavHold>
            </Left>

            <Right>
              <Button bcc="" bor="" pad="" color="" text="Log in" />
              <Button
                bcc=""
                bor="2px solid black"
                pad="7px 19px"
                color=""
                text="Sign Up"
              />
            </Right>
            <Icon onClick={showMenu}>
              {show ? (
                <AiOutlineClose onClick={closeMenu} />
              ) : (
                <IoMenuOutline onClick={showMenu} />
              )}
            </Icon>
          </Wrap_1>
        </Top>
        {show && <MenuBar closeMenu={closeMenu} />}

        <Bottom isSticky={isSticky}>
          <Wrap_2>
            <P1>
              <AiFillPicture style={{ fontSize: "28px" }} />
              Home
            </P1>
            <P2>
              <AiOutlineCompass style={{ fontSize: "28px" }} />
              Discover
            </P2>
            <NavLink
              to="/upload"
              style={{
                textDecoration: "none",
                padding: "20px 20px",
                backgroundColor: "dodgerblue",
                fontSize: "18px",
                color: "white",
                borderRadius: "50%",
              }}
            ></NavLink>
            <P3>
              <IoPersonCircleSharp
                style={{ fontSize: "35px", color: "gray" }}
              />
            </P3>
          </Wrap_2>
        </Bottom>
      </Container>
    </div>
  );
};

// const Container = styled.div`

// `

const Right = styled.div`
  display: none;
  @media (min-width: 1023px) {
    gap: 20px;
    align-items: center;
    gap: 30px;
    display: flex;
  }
`;

const Navs = styled.div`
  padding: 0;
  margin: 0;
`;

const NavHold = styled.div`
  display: none;
  @media (min-width: 1023px) {
    gap: 30px;
    display: flex;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const P3 = styled.div``;

const P2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const P1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.div`
  font-size: 33px;
  @media (min-width: 900px) {
    display: none;
  }
`;

const Logo = styled.svg`
  width: 70px;
  height: 50px;
`;

const Wrap_2 = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
`;

const Wrap_1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
`;

const Bottom = styled.div<{ isSticky: boolean }>`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  background-color: white;
  align-items: center;
  position: ${(props) => (props.isSticky ? "fixed" : "sticky")};
  top: 0;
  /* z-index: 1; */

  @media (min-width: 900px) {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: none;
  }
`;

const Top = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: ${(props) => props.color};

  @media (min-width: 900px) {
    height: 60px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.color};

  @media (min-width: 900px) {
    height: 60px;
  }
`;
