import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  box-shadow: var(--shadow);
  border-radius: 25px;
  margin: 0 10px 20px;
  padding-top: 20px;
`;

const Title = styled.h1`
  color: var(--text-gray);
  text-align: center;
`;

const SelectWrapper = styled.div`
  display: flex;
  margin: 0 40px;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  flex: 1;
`;

const Label = styled.label`
  color: var(--text-gray);
  font-weight: 700;
`;

const Select = styled.select`
  border: none;
  outline: none;
  border-radius: 10px;
  margin: 5px 10px;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
  padding: 0 10px;
  * {
    background-color: white;
    color: var(--text-gray);
    cursor: pointer;
  }
`;

const Right = styled.div`
  flex: 2;
`;

const Footer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  margin: 10px 0 20px;
`;

const Button = styled.button`
  border-radius: 7px;
  border: 2px solid var(--main-color);
  color: var(--main-color);
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  width: 100px;
  text-align: center;
  background-color: white;
  padding: 5px 10px;
  transition: all 0.5s ease;
  :hover {
    background-color: var(--main-color);
    color: white;
  }
`;

export {
  Container,
  Right,
  SelectContainer,
  SelectWrapper,
  Label,
  Select,
  Title,
  Footer,
  Button,
};
