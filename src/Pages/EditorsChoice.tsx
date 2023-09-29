import React from "react";
import styled from "styled-components";
import { BsTrophy } from "react-icons/bs";
import { LiaAwardSolid } from "react-icons/lia";

import pic from "../Assets/download.png";
import pics from "../Assets/download 2.png";
import pics2 from "../Assets/download-4.png";
import pics3 from "../Assets/download-5.png";
import pics4 from "../Assets/download-3.png";
import pics5 from "../Assets/download-4.png";

import Pic1 from "../Assets/download-5.png";
import Pic2 from "../Assets/download-6.png";
import Pic3 from "../Assets/download-7.png";
import Pic4 from "../Assets/editors1@3x.e0b9b07f.png";

const EditorsChoice = () => {
  return (
    <div>
      <Holder>
        <Container>
          <Textcontent>
            <Ick>
              <LiaAwardSolid />
            </Ick>
            <H1>Editors' Choice</H1>
          </Textcontent>
          <D>
            <Img src={pics} />
          </D>
        </Container>
        <SecondContainer>
          <Box>
            <Tx>
              <h1>The best of the best.</h1>
              <p>
                Our editors are always on the lookout for jaw-dropping content
                for you to discover and stay inspired. Check back weekly to see
                what’s new.
              </p>
            </Tx>
            <Button>View Editors' Choice</Button>
          </Box>
          <ImageBox>
            {/* <Img2 src={pics2} />
            <Img2 src={pics3} />
            <Img2 src={pics4} />
            <Img2 src={pics5} /> */}
            <P2>
              <Img2 src={pics2} />
            </P2>
            <P>
              <Img2 src={pics3} />
            </P>
            <P2>
              <Img2 src={pics4} />
            </P2>
            <P2>
              <Img2 src={pics5} />
            </P2>
          </ImageBox>
          <ImageBox>
            {/* <Img2 src={Pic1} />
            <Img2 src={Pic2} />
            <Img2 src={Pic3} /> */}
            <P2>
              <Img2 src={Pic1} />
            </P2>
            <P>
              <Img2 src={Pic4} />
            </P>
            <P>
              <Img2 src={Pic2} />
            </P>
            <P2>
              <Img2 src={Pic3} />
            </P2>
          </ImageBox>
        </SecondContainer>
      </Holder>
    </div>
  );
};

export default EditorsChoice;

const D = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
  margin: 30px 0;
  @media (max-width: 400px) {
    width: 100%;
    height: 200px;
    background-color: red;
    margin: 15px 0;
    display: flex;
    align-items: center;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const P2 = styled.div`
  width: 50%;
  height: 10%;
  flex-grow: 1;

  @media (min-width: 767px) {
    width: 30%;
    height: 30%;
    flex-shrink: -5;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;
const P = styled.div`
  width: 50%;
  height: 10%;
  flex-grow: 1;

  @media (min-width: 767px) {
    width: 30%;
    height: 30%;
    flex-shrink: -5;
  }
`;
const Img2 = styled.img`
  width: 100%;
  height: 10%;
  object-fit: cover;
  @media (min-width: 767px) {
    object-fit: cover;
    padding: 0 5px;
    width: 100%;
    height: 100%;
  }
`;

const H1 = styled.div`
  font-weight: bold;
  font-size: 60px;
  color: white;
  text-align: center;
`;

const Ick = styled.div`
  background-color: #45457c;
  color: white;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  align-items: center;
  font-size: 50px;
  height: 150px;
  width: 150px;
  @media screen and (max-width: 412px) {
    width: 20%;
    height: 50%;
    font-size: 30px;
    align-items: center;
  }
`;

const Textcontent = styled.div`
  height: 15%;
  width: 100%;
  position: absolute;
  top: 150px;
  p {
    color: white;
    text-align: right;
  }

  @media (max-width: 1024px) {
    /* z-index: -3; */
    display: none;
  }
`;

const Tx = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  p {
    margin-top: -10px;
  }
  h1 {
    text-align: center;
  }
`;

const Img = styled.img`
  max-height: 100%;
  width: 100%;
  object-fit: cover;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-color: #000000;
  color: white;
  padding: 15px 50px;
  margin: 20px auto;
  font-size: 20px;
  border-radius: 40px;
  border: none;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 90%;

  @media (min-width: 767px) {
    flex-wrap: nowrap;
    width: 70%;
  }
`;

const Box = styled.div`
  height: auto;
  width: 98%;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const SecondContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  /* background-color: burlywood; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
`;

const Holder = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
