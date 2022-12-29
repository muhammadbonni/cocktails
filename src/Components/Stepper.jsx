import React, { useState } from "react";
import {
  ChooseFilters,
  FillDataImage,
  GetResultImage,
} from "../Resources/SvgImages";
import Cocktails from "./Cocktails";
import Filters from "./Filters";
import Register from "./Register";
import {
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
} from "../Styles/Stepper";

const Stepper = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedGlass, setSelectedGlass] = useState("");
  const [selected, setSelected] = useState([]);

  return (
    <Container>
      <HeaderContainer>
        <Header>
          <Step>
            <Background slideIndex={slideIndex} index={0}>
              <FillDataImage></FillDataImage>
            </Background>
            <Hint> 1 - Enter Your Info.</Hint>
          </Step>
          <Row>
            <GreenRow slideIndex={slideIndex} index={1}></GreenRow>
          </Row>
          <Step>
            <Background slideIndex={slideIndex} index={1}>
              <ChooseFilters></ChooseFilters>
            </Background>
            <Hint> 2 - Filter Your Data</Hint>
          </Step>
          <Row>
            <GreenRow slideIndex={slideIndex} index={2}></GreenRow>
          </Row>
          <Step>
            <Background slideIndex={slideIndex} index={2}>
              <GetResultImage></GetResultImage>
            </Background>
            <Hint> 3 - Get The Result</Hint>
          </Step>
        </Header>
      </HeaderContainer>
      <Main>
        <Wrapper slideIndex={slideIndex}>
          <SlideContainer>
            <Slide>
              {slideIndex === 0 ? (
                <Register setSlideIndex={setSlideIndex} />
              ) : (
                <></>
              )}
            </Slide>
          </SlideContainer>
          <SlideContainer>
            <Slide>
              {slideIndex === 1 ? (
                <Filters
                  setSlideIndex={setSlideIndex}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  selectedGlass={selectedGlass}
                  setSelectedGlass={setSelectedGlass}
                  selectedType={selectedType}
                  setSelectedType={setSelectedType}
                  selected={selected}
                  setSelected={setSelected}
                />
              ) : (
                <></>
              )}
            </Slide>
          </SlideContainer>
          <SlideContainer>
            <Slide>
              {slideIndex === 2 ? (
                <Cocktails
                  setSlideIndex={setSlideIndex}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  selectedGlass={selectedGlass}
                  setSelectedGlass={setSelectedGlass}
                  selectedType={selectedType}
                  setSelectedType={setSelectedType}
                  selected={selected}
                  setSelected={setSelected}
                />
              ) : (
                <></>
              )}
            </Slide>
          </SlideContainer>
        </Wrapper>
      </Main>
    </Container>
  );
};

export default Stepper;
