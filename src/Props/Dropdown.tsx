import { styled } from "styled-components";

export const Dropdown = () => {
  return (
    <div>
      <Container>
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
        </Wrap_2>
      </Container>
    </div>
  );
};

const P = styled.div``;

const Wrap_2 = styled.div`
  width: 90%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;

  p {
    font-size: 16px;
    padding-top: 4px;
  }
`;

const Container = styled.div`
  background-color: white;
  color: black;
  padding: 10px 15px;
  width: 170px;
  height: 500px;
  border-radius: 5px;
  margin: 10px 0;
  position: relative;
  position: absolute;
  top: 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 1px -5px 20px 0px;
  z-index: 2;

  &::after {
    content: "";
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent white;
    transform: translate(-50%);
    position: absolute;
    bottom: 100%;
    right: 75%;
    /* box-shadow: rgba(99, 99, 99, 0.2) 10px 2px 8px 0px; */
  }
`;
