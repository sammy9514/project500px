import React from "react";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import pic from "../Assets/apple_store_logo-removebg-preview.png";
import pics from "../Assets/play-store-logo.png";

export const Footer = () => {
  return (
    <div>
      <Container>
        <Wrap>
          <h1>Join our community today</h1>
          <p>
            Do you love photography? Want to constantly stay inspired and be
            surrounded by millions of like-minded creators? Then sign-up today
            and get rewarded for your love of photography.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button>Sign up</Button>
          </div>
        </Wrap>
      </Container>
      <Main>
        <Holder>
          <Company>
            <h2>Company</h2>
            <p>Newsroom</p>
            <p>About us Careers</p>
          </Company>
          <Community>
            <h2>Community</h2>
            <p>Popular photos</p>
            <p>Quests</p>
            <p>Portfolio</p>
          </Community>
          <Licensing>
            <h2>Licensing</h2>
            <p>About</p>
            <p>Licensing</p>
            <p>Become a Contributor</p>
            <p>Submission requirements</p>
            <p>Content types</p>
            <p> Distribution</p>
          </Licensing>
          <Social>
            <h2>Social</h2>
            <div style={{ display: "flex", gap: "10px" }}>
              <FaFacebookF />
              Facebook
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <FaTwitter />
              Twitter
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <RiInstagramLine />
              Instagram
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <FaPinterest />
              Pinterest
            </div>
          </Social>
          <Download>
            <h2>Download the app</h2>
            {/* <img src={pic} />
            <img src={pics} /> */}
          </Download>
        </Holder>
        <hr />
        <P>&copy; 500px</P>
      </Main>
    </div>
  );
};

const P = styled.div`
  margin-left: 90px;
  font-size: 20px;
  font-weight: 600;
`;

const Download = styled.div`
  /* background-color: #e7e541; */
  /* height: 370px;
  width: 260px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    height: auto;
  } */
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* background-color: #b5eb36; */
  height: 370px;
  width: 260px;
  display: flex;
  align-items: start;
  flex-direction: column;
  text-align: left;

  @media (max-width: 768px) {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Licensing = styled.div`
  /* background-color: #5ad8d8; */
  min-height: 360px;
  width: 260px;
  display: flex;
  align-items: start;
  flex-direction: column;
  text-align: left;

  @media (max-width: 768px) {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Community = styled.div`
  /* background-color: #44b97f; */
  height: 370px;
  width: 270px;
  display: flex;
  align-items: start;
  flex-direction: column;

  @media (max-width: 768px) {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Company = styled.div`
  /* background-color: aqua; */
  height: 370px;
  width: 270px;
  display: flex;
  align-items: start;
  flex-direction: column;

  @media (max-width: 768px) {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Holder = styled.div`
  display: flex;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  gap: 20px;
  flex-wrap: wrap;
  width: 90%;
  color: #5d5d5dd9;
  line-height: 0.4;
  /* background-color: red; */
  /* padding-left: 50px; */

  @media (max-width: 768px) {
    flex-direction: column;
    /* align-items: center; */
    flex-wrap: wrap;
    flex-direction: column;
    height: 10%;

    /* justify-content: center; */
  }

  /* background-color: red;
  width: 90%;
  flex-wrap: wrap; */
`;

const Main = styled.div`
  /* background-color: burlywood; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 50vh;
  width: 100%;
  flex-wrap: nowrap;

  @media screen and (max-width: 768px) {
    height: auto;
    display: flex;
    justify-content: center;
  }

  hr {
    width: 88%;
    background-color: black;
    margin-top: 60px;
    /* height: 2px; */
  }

  h3 {
  }
`;

const Button = styled.button`
  background-color: white;
  padding: 15px 70px;
  font-size: 20px;
  border-radius: 40px;
  border: none;
  font-weight: bold;
  margin-top: -10px;
  /* width: 200px; */

  &:hover {
    color: blue;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 19px;
  }
`;

const Wrap = styled.div`
  /* background-color: bisque; */
  min-height: 50vh;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  h1 {
    color: white;
    text-align: center;
    font-size: 40px;
  }

  p {
    text-align: center;
    color: white;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: 50%;

    h1 {
      color: white;
      text-align: center;
      font-size: 20px;
    }
    p {
      color: white;
      text-align: center;
      font-size: 14px;
    }
  }
`;

const Container = styled.div`
  background-color: rgb(69, 69, 124);
  width: 100%;
  min-height: 47vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
