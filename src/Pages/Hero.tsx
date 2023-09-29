import { styled } from "styled-components";
import dog from "../Assets/dogheader.png";
import { Button } from "../Props/Buttons";
import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

export const Hero = () => {
  const [scroll, setScroll] = useState(false);

  const scrollUp = () => {
    if (window.pageYOffset > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const scrollT = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollUp);
  });
  return (
    <div>
      <Container>
        <Wrapper>
          <Wrap>
            <h1>Discover and share the world’s best photos</h1>
            <p>
              Get inspired with incredible photos from diverse styles and genres
              around the world. We're not guided by fads—just great photography.
            </p>
            <Hold>
              <Button
                bcc="white"
                bor=""
                text="Sign Up"
                color="black"
                pad="17px 60px"
              />
            </Hold>
          </Wrap>
          <H1>
            <h1>Discover and share the world’s best photos</h1>
          </H1>
        </Wrapper>
      </Container>

      <Cont>
        <Wra>
          <p>
            Get inspired with incredible photos from diverse styles and genres
            around the world. We're not guided by fads—just great photography.
          </p>
          <Holdw>
            <Button
              bcc="black"
              bor=""
              text="Sign Up"
              color="white"
              pad="17px 20px"
            />
          </Holdw>
        </Wra>
      </Cont>
      <ScrollBtn
        onClick={scrollT}
        style={{ display: scroll ? "flex" : "none" }}
      >
        <BsArrowUp />
      </ScrollBtn>
    </div>
  );
};

const ScrollBtn = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.241) 0px 0px 5px 3px;
  position: fixed;
  right: 20px;
  bottom: 20px;
`;

const Cont = styled.div`
  display: none;
  justify-content: center;
  @media (max-width: 767px) {
    display: flex;
  }
`;
const Holdw = styled.div`
  text-align: center;
  font-size: 20px;
`;
const Hold = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const H1 = styled.div`
  h1 {
    font-size: 24px;
    padding: 14px;
    width: 60%;
    color: white;
    display: none;

    @media (max-width: 767px) {
      display: block;
    }
  }
`;
const Wra = styled.div`
  width: 90%;
`;
const Wrap = styled.div`
  width: 50%;
  display: none;
  h1 {
    font-size: 48px;
    font-weight: 700;
    color: white;
  }

  p {
    color: white;
  }

  @media (min-width: 767px) {
    display: block;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Container = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url(${dog}), linear-gradient(black, black);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    width: 100%;
    height: 30vh;
  }
`;
