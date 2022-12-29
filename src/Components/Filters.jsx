import React, { useEffect, useState } from "react";
import {
  getCategories,
  getGlasses,
  getInstructions,
  getTypes,
} from "../Scripts/getFilters";
import {
  Container,
  SelectContainer,
  Label,
  Right,
  Select,
  Title,
  SelectWrapper,
  Footer,
  Button,
} from "../Styles/Filters";
import {
  Wrapper,
  AddButton,
  Item,
  Left,
  LeftContainer,
} from "../Styles/MultiSelect";

const Filters = ({
  setSlideIndex,
  selectedCategory,
  setSelectedCategory,
  selectedGlass,
  setSelectedGlass,
  selectedType,
  setSelectedType,
  selected,
  setSelected,
}) => {
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [glasses, setGlasses] = useState([]);
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    getCategories({ setCategories });
    getGlasses({ setGlasses });
    getTypes({ setTypes });
    getInstructions({ setInstructions });
  }, []);

  return (
    <Container>
      <Right>
        <Title>Choose Your Filters</Title>
        <SelectWrapper>
          <SelectContainer>
            <Label>Category :</Label>
            <Select
              background="var(--light-yellow)"
              color="var(--text-yellow)"
              onChange={(e) => {
                setSelectedCategory(e.target.value);
              }}
              value={selectedCategory}
            >
              <option hidden>-- All Category --</option>
              {categories.map((item, index) => {
                return <option key={index}>{item.strCategory}</option>;
              })}
            </Select>
          </SelectContainer>

          <SelectContainer>
            <Label>Glass :</Label>
            <Select
              background="var(--light-blue)"
              color="var(--text-blue)"
              onChange={(e) => {
                setSelectedGlass(e.target.value);
              }}
              value={selectedGlass}
            >
              <option hidden>-- All Glass --</option>
              {glasses.map((item, index) => {
                return <option key={index}>{item.strGlass}</option>;
              })}
            </Select>
          </SelectContainer>

          <SelectContainer>
            <Label>Type :</Label>
            <Select
              background="var(--light-red)"
              color="var(--text-red)"
              onChange={(e) => {
                setSelectedType(e.target.value);
              }}
              value={selectedType}
            >
              <option hidden>-- All Type --</option>
              {types.map((item, index) => {
                return <option key={index}>{item.strAlcoholic}</option>;
              })}
            </Select>
          </SelectContainer>
        </SelectWrapper>
        <Wrapper>
          <LeftContainer>
            <Title>Instructions</Title>
            <Left>
              {instructions.map((item, index) => {
                return (
                  <Item key={index}>
                    <div>{item.strIngredient1}</div>
                    <AddButton
                      onClick={() => {
                        console.log(index);
                        setSelected([...selected, item]);
                        setInstructions(
                          instructions.filter((obj) => {
                            return obj !== item;
                          })
                        );
                      }}
                    >
                      +
                    </AddButton>
                  </Item>
                );
              })}
            </Left>
          </LeftContainer>
          <LeftContainer>
            <Title>Choosed </Title>
            <Left>
              {selected.map((item, index) => {
                return (
                  <Item key={index}>
                    <div>{item.strIngredient1}</div>
                    <AddButton
                      onClick={() => {
                        console.log(index);
                        setInstructions([...instructions, item]);
                        setSelected(
                          selected.filter((obj) => {
                            return obj !== item;
                          })
                        );
                      }}
                    >
                      -
                    </AddButton>
                  </Item>
                );
              })}
            </Left>
          </LeftContainer>
        </Wrapper>
        <Footer>
          <Button
            onClick={() => {
              setSlideIndex(0);
            }}
          >
            Previuos
          </Button>
          <Button
            onClick={() => {
              setSlideIndex(2);
            }}
          >
            Next
          </Button>
        </Footer>
      </Right>
    </Container>
  );
};

export default Filters;
