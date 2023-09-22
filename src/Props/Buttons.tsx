import { styled } from "styled-components";

interface iButton {
  text: string;
  color: string;
  bcc: string;
  pad: string;
  bor: string;
}

export const Button: React.FC<iButton> = ({ text, color, bcc, pad, bor }) => {
  return (
    <div>
      <Container color={color} bcc={bcc} pad={pad} bor={bor}>
        {text}
      </Container>
    </div>
  );
};

const Container = styled.div<{
  color: string;
  bcc: string;
  pad: string;
  bor: string;
}>`
  color: ${({ color }) => color};
  background-color: ${({ bcc }) => bcc};
  padding: ${({ pad }) => pad};
  border: ${({ bor }) => bor};
  border-radius: 50px;
  font-weight: bold;
  transition: all ease-in-out 350ms;
  cursor: pointer;

  &:hover {
    color: dodgerblue;
  }
`;
