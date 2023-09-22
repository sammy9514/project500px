import react from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

interface MenuBarProps {
  closeMenu: () => void;
}

export const MenuBar: React.FC<MenuBarProps> = ({ closeMenu }) => {
  return (
    <div>
      <Container>
        <Top>
          <Wrap_1>
            <Logo>
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
            <Icon>
              <AiOutlineClose onClick={closeMenu} />
            </Icon>
          </Wrap_1>
        </Top>
        <Bottom>
          <Wrap_2>
            <P>
              <p>Award Winners</p>
              <p>NFT VAULT</p>
              <p>Discover</p>
              <p>Licensing</p>
              <p>Memberships</p>
              <p>Quests</p>
              <p>Ambassadors</p>
              <p>Create Stories</p>
              <p>Blog</p>
              <p style={{ paddingTop: "14px" }}>Log in / Sign up</p>
            </P>

            <Foot></Foot>
          </Wrap_2>
        </Bottom>
      </Container>
    </div>
  );
};

// const Container = styled.div`

// `

// const Container = styled.div`

// `

// const Container = styled.div`

// `

const Foot = styled.div``;

const P = styled.div``;

const Icon = styled.div`
  font-size: 29px;
`;

const Logo = styled.svg`
  width: 70px;
  height: 50px;
`;

const Wrap_2 = styled.div`
  width: 90%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: space-between;

  p {
    font-size: 16px;
    padding-top: 4px;
  }
`;

const Wrap_1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
`;

const Bottom = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

const Top = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 999;
`;
