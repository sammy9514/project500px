import React from "react";
import styled from "styled-components";
import pic from "../Assets/download-10.png";
import { BsTrophy } from "react-icons/bs";
import pics from "../Assets/download-8.png";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import img from "../Assets/download-11.png";
import { LiaCrownSolid } from "react-icons/lia";
import image from "../Assets/download.jpg";
import { LiaPiggyBankSolid } from "react-icons/lia";

const CardScreen = () => {
  return (
    <div>
      <Wrapper>
        <Wrap>
          <Container>
            {/* <Textcontent>
          <Ick>
            <HiOutlineRocketLaunch />
          </Ick>
          <H1>Quests</H1>
          <p>Photo by okoye francis</p>
        </Textcontent> */}
            <D>
              <Img src={pics} alt="Quest" />
            </D>
          </Container>
          <SecondContainer>
            <B>
              <Box>
                <Tx>
                  <Icon>
                    <BsTrophy />
                  </Icon>
                  <h1>Take photos. Win prizes.</h1>
                  <p>
                    Quests are creative photo challenges that encourage you to
                    test your skills and submit your best work for a chance to
                    win exciting prizes. We launch new Quests with unique themes
                    every week so there is always something for everyone!
                  </p>
                  <Button>View Quests</Button>
                </Tx>
              </Box>
              <Box2>
                <P>
                  <img src={pic} alt="Quest" />
                </P>
              </Box2>
            </B>
          </SecondContainer>

          <Container1>
            {/* <Textcontent>
              <Ick>
                <LiaCrownSolid />
              </Ick>
              <H2>Licensing</H2>
              <p>Photo by okoye francis</p>
            </Textcontent> */}
            <D>
              <Img src={img} alt="Licensing" />
            </D>
          </Container1>
          <SecondContainer2>
            <B>
              <Box3>
                <P>
                  <img src={image} alt="Get Paid" />
                </P>
              </Box3>
              <Box4>
                <Tx1>
                  <Icon1>
                    <LiaPiggyBankSolid />
                  </Icon1>
                  <h1>Get paid for your photos</h1>
                  <p>
                    Don’t let your photos sit there gathering dust, like on
                    other platforms. Gain exposure and get paid for your work
                    with 500px Licensing. Paid members earn up to 100% royalties
                    and free members earn up to 60% when you license your photos
                    exclusively with 500px.
                  </p>
                  <Button1>Tell me more</Button1>
                </Tx1>
              </Box4>
            </B>
          </SecondContainer2>
        </Wrap>
      </Wrapper>
    </div>
  );
};

export default CardScreen;

const D = styled.div`
  width: 100%;
  height: 100%;
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
const Button1 = styled.button`
  background-color: #000000;
  color: white;
  padding: 15px 50px;
  font-size: 20px;
  border-radius: 40px;
  border: none;
  font-weight: bold;
  margin-top: 20px;
`;

const Icon1 = styled.div`
  font-size: 80px;
`;

const P = styled.div`
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const Tx1 = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Box4 = styled.div`
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const Box3 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const SecondContainer2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const Container1 = styled.div`
  /* min-height: 45vh;
  width: 90%;
  background-color: burlywood; */
`;

const H2 = styled.div`
  font-weight: bold;
  font-size: 60px;
  color: white;
  text-align: center;
`;

const H1 = styled.div`
  font-weight: bold;
  font-size: 60px;
  color: white;
  text-align: center;
`;

const Ick = styled.div`
  /* background-color: brown;
  color: white;
  margin-top: 20px;
  margin-left: 45%;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  align-items: center;
  font-size: 80px;
  height: 15vh;
  width: 8%; */
`;

const Textcontent = styled.div`
  /* height: 50%;
  opacity: 50%;
  width: 90%;
  position: absolute;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: white;
    text-align: center;
    margin-top: 10px;
  } */
`;

const Tx = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: 40px 0;
`;

const Button = styled.button`
  background-color: #000000;
  color: white;
  padding: 15px 50px;
  font-size: 20px;
  border-radius: 40px;
  border: none;
  font-weight: bold;
  margin-top: 20px;
`;

const Icon = styled.div`
  font-size: 60px;
`;

const Box2 = styled.div`
  width: 100%;
  margin-bottom: 30px;

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const Box = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const B = styled.div`
  width: 90%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: gray; */
  display: flex;
  /* flex-wrap: wrap; */

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 50px;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const SecondContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  gap: 30px;
  /* background-color: green; */

  /* flex-wrap: wrap; */
`;

const Wrap = styled.div`
  width: 100%;
  margin: 0;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: burlywood; */
`;
