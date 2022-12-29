import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 80px 40px;
  box-shadow: var(--shadow);
  border-radius: 25px;
  background-color: white;
`;

const Right = styled.div`
  flex: 1;
`;
const InputsContainer = styled.form`
  border-radius: 25px;
  box-shadow: var(--shadow);
  background-color: white;
  margin: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 2px solid var(--main-color);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 40px;
`;

const Label = styled.label`
  color: var(--text-gray);
  font-weight: 600;
`;

const Input = styled.input`
  border-radius: 7px;
  outline: none;
  border: 1px solid lightgray;
  font-size: 16px;
  color: var(--text-gray);
  padding: 0 5px;
  font-weight: 600;
`;

const Validation = styled.p`
  color: var(--red);
  height: 10px;
  font-size: 12px;
  font-weight: 600;
  margin-top: -5px;
`;

const Button = styled.input`
  border-radius: 7px;
  border: 2px solid var(--main-color);
  color: var(--main-color);
  font-size: 16px;
  cursor: pointer;
  flex: 1;
  font-weight: 600;
  margin-top: 20px;
  background-color: white;
  transition: all 0.5s ease;
  :hover {
    background-color: var(--main-color);
    color: white;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  margin-left: 20px;
`;

const Top = styled.h1`
  margin-left: 20px;
  color: var(--text-gray);
`;

const Desc = styled.p`
  margin-left: 40px;
  margin-bottom: -20px;
  z-index: 200;
  color: var(--text-gray);
  font-weight: 600;
`;

const Image = styled.img`
  height: 80%;
  width: 100%;
`;

export {
  Button,
  Container,
  Desc,
  Image,
  Input,
  InputContainer,
  InputsContainer,
  Label,
  Left,
  Right,
  Top,
  Validation,
};
