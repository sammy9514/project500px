import { styled } from "styled-components";

interface iData {
  iconss: any;
  title: string;
  text: string;
}
export const DifferenceProps: React.FC<iData> = ({ iconss, title, text }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Container>
        <Crop>
          <Icon>{iconss}</Icon>
        </Crop>
        <Title>{title} </Title>
        <Text>{text} </Text>
      </Container>
    </div>
  );
};

const Crop = styled.div`
  height: 60px;
  width: 100%;
  text-align: center;

  @media (min-width: 1023px) {
    text-align: left;
  }
`;
const Text = styled.div`
  width: 100%;
`;
const Title = styled.h2`
  width: 100%;
`;
const Icon = styled.div`
  font-size: 50px;
  margin-top: 30px;
`;
const Container = styled.div`
  width: 100%;
  max-width: 700px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  flex-grow: 1;
  margin: 10px;
`;
