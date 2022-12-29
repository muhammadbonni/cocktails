import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderContainer = styled.div`
  flex: 1;
`;
const Header = styled.div`
  display: flex;
  margin: 40px 100px;
  align-items: center;
  box-shadow: var(--shadow);
  padding: 40px;
  border-radius: 25px;
  background-color: white;
`;

const Row = styled.div`
  height: 5px;
  border-radius: 10px;
  flex: 1;
  margin: -20px 10px 0;
  background-color: lightgray;
`;

const GreenRow = styled.div`
  height: 5px;
  border-radius: 10px;
  width: 0;
  transition: all 0.5s ease;
  background-color: var(--red);
  width: ${(props) => (props.slideIndex >= props.index ? "100%" : "0")};
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 125px;
`;

const Background = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100px;
  width: 100px;
  border-radius: 50%;
  box-shadow: var(--shadow);
  background-color: ${(props) =>
    props.slideIndex >= props.index ? "var( --red)" : "lightgray"};
`;

const Hint = styled.h4`
  color: var(--text-gray);
`;

const Main = styled.div`
  display: flex;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 0.5s ease;
`;

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-top: 10px;
`;

const Slide = styled.div`
  border: 1 solid lightgray;
  width: 90%;
  position: relative;
`;

export {
  Background,
  Container,
  GreenRow,
  Header,
  HeaderContainer,
  Hint,
  Main,
  Row,
  Slide,
  SlideContainer,
  Step,
  Wrapper,
};
