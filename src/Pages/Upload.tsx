import React, { useState } from "react";
import styled from "styled-components";
import { BsImageFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Upload = () => {
  const [Image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [aurthor, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const upLoadImage = (e: any) => {
    const getFile = e.target.files?.[0];
    setImage(getFile);

    if (getFile) {
      const url = URL.createObjectURL(getFile);
      setPreviewImage(url);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Card>
          <Circle>
            <Img src={previewImage} />
          </Circle>

          <Input
            type="file"
            id="pics"
            accept="Image/PNG, Image/jpg, Image/jpeg"
            onChange={upLoadImage}
          />
          <Button htmlFor="pics">Upload Image</Button>
          {Image ? (
            <Link to={"/"}>
              <Button2
                cursor="cursor"
                bg="red"
                style={{
                  transform: "scale(1)",
                  transition: "350ms ease-in-out infinte",
                }}
              >
                Submit
              </Button2>
            </Link>
          ) : (
            <Button2 cursor="not-allowed" bg="grey">
              Submit
            </Button2>
          )}
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Upload;
const DefaultImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 100%;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Button2 = styled.button<{ bg: string; cursor: string }>`
  height: 40px;
  width: 150px;
  background-color: ${(props) => props.bg};
  color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  transition: all 350ms;
  cursor: ${(props) => props.cursor};
  margin-top: 10px;
  :hover {
    transform: scale(0.95);
  }
  @media screen and (max-width: 500px) {
    width: 120px;
  }
`;

const Select = styled.select`
  width: 370px;
  height: 30px;
  border-radius: 3px;
  border: 0.7px solid silver;
  outline-color: #f8cbe0;
  padding-left: 10px;
`;

const TexArea = styled.textarea`
  width: 350px;
  height: 70px;
  border-radius: 3px;
  border: 0.7px solid silver;
  outline-color: #f8cbe0;
  padding-left: 10px;
  resize: none;
`;

const Inp = styled.input`
  margin: 10px;
  width: 350px;
  height: 30px;
  border-radius: 3px;
  border: 0.7px solid silver;
  outline-color: #f8cbe0;
  padding-left: 10px;
`;

const Input = styled.input`
  display: none;
`;
const Button = styled.label`
  height: 40px;
  width: 200px;
  background-color: dodgerblue;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: all 350ms;
  margin-top: 10px;
  cursor: pointer;
  :hover {
    transform: scale(0.98);
  }
`;

const Circle = styled.div`
  height: 30vh;
  width: 100%;
  border: 3px dashed dodgerblue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: dodgerblue;
  flex-direction: column;
  font-size: 30px;
  span {
    font-size: 12px;
  }
`;

const Card = styled.div`
  width: 600px;
  /* height: 300px; */
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
