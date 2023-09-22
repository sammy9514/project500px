import { styled } from "styled-components";
import { DifferenceProps } from "../Props/DifferenceProps";
import { PiPlantDuotone } from "react-icons/pi";
import { BsGraphUp } from "react-icons/bs";
import { RiPencilRuler2Line } from "react-icons/ri";
import { LiaCrownSolid } from "react-icons/lia";

const data = [
  {
    id: 1,
    iconss: <PiPlantDuotone />,
    title: "Grow as a photographer",
    text: "Get immediate exposure with your first upload. Our Pulse algorithm surfaces new photographs and photographers, ensuring your photos are seen by the community so you receive valuable feedback on day one.",
  },
  {
    id: 2,
    iconss: <BsGraphUp />,
    title: "Build your career",
    text: "Market yourself as a professional photographer. showcase your articles, presents, videos, and more with Resources, and create a Portfolio website to showcase your work.",
  },
  {
    id: 3,
    iconss: <RiPencilRuler2Line />,
    title: "See how you're performing",
    text: "With Statistics and Pulse you get valuable insights into how your photos are performing and how you rank in comparison to other photographers in the community.",
  },
  {
    id: 4,
    iconss: <LiaCrownSolid />,
    title: "Sell your work",
    text: "Earn one of the highest royalty rates in the industry when you distribute your photography through 500px to a global marketplace, where buyers can view and purchase your work for commercial usage.",
  },
];

export const Wmud = () => {
  return (
    <div>
      <Container>
        <Head> What makes us diffrent</Head>
        <Wrapper>
          {data.map((props) => (
            <DifferenceProps
              key={props.id}
              iconss={props.iconss}
              title={props.title}
              text={props.text}
            />
          ))}
        </Wrapper>
      </Container>
    </div>
  );
};

const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 1023px) {
    flex-wrap: nowrap;
  }
`;

const Head = styled.h1`
  text-align: center;
`;
const Text = styled.div``;
const Title = styled.div``;
const Icon = styled.div``;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
