import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Header,
  Container,
  Bottom,
  BtnDetails,
  Card,
  CategoryImage,
  GlassImage,
  Image,
  Instructions,
  Rate,
  RateContainer,
  RateWrapper,
  Selections,
  SelectionsContainer,
  Title,
  Top,
  TypeImage,
} from "../Styles/Cocktails";

import StarHalfIcon from "@mui/icons-material/StarHalf";
import Loader from "./Loader";
import { Button, Footer } from "../Styles/Filters";
import NoItems from "./NoItems";
import TransitionsModal from "./CocktailDetails";

const Cocktails = ({
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
  const [cocktails, setCocktails] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [open, setOpen] = useState(false);
  const [cocktail, setCocktail] = useState();

  const emptyFilters = () => {
    setSelectedCategory("");
    setSelectedGlass("");
    setSelectedType("");
    setSelected([]);
  };

  useEffect(() => {
    console.log(selected);
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
      .then((res) => {
        setCocktails(
          res.data.drinks.filter((item) => {
            return (
              (selectedCategory !== ""
                ? item.strCategory === selectedCategory
                : true) &&
              (selectedGlass !== "" ? item.strGlass === selectedGlass : true) &&
              (selectedType !== ""
                ? item.strAlcoholic === selectedType
                : true) &&
              (selected.length > 0
                ? (item.strIngredient1 === selected[0].strIngredient1 ||
                    item.strIngredient2 === selected[0].strIngredient1 ||
                    item.strIngredient2 === selected[0].strIngredient1 ||
                    item.strIngredient3 === selected[0].strIngredient1 ||
                    item.strIngredient4 === selected[0].strIngredient1 ||
                    item.strIngredient5 === selected[0].strIngredient1 ||
                    item.strIngredient6 === selected[0].strIngredient1) &&
                  (selected[1] !== undefined
                    ? item.strIngredient1 === selected[1].strIngredient1 ||
                      item.strIngredient2 === selected[1].strIngredient1 ||
                      item.strIngredient3 === selected[1].strIngredient1 ||
                      item.strIngredient4 === selected[1].strIngredient1 ||
                      item.strIngredient5 === selected[1].strIngredient1 ||
                      item.strIngredient6 === selected[1].strIngredient1
                    : true) &&
                  (selected[2] !== undefined
                    ? item.strIngredient1 === selected[2].strIngredient1 ||
                      item.strIngredient2 === selected[2].strIngredient1 ||
                      item.strIngredient3 === selected[2].strIngredient1 ||
                      item.strIngredient4 === selected[2].strIngredient1 ||
                      item.strIngredient5 === selected[2].strIngredient1 ||
                      item.strIngredient6 === selected[2].strIngredient1
                    : true)
                : true)
            );
          })
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsActive(false);
      });
  }, []);

  return (
    <>
      {isActive === false ? (
        cocktails.length > 0 ? (
          <>
            <Header>Available Cocktails : </Header>
            <Container>
              {cocktails.map((item, index) => {
                return (
                  <Card key={index}>
                    <Top>
                      <Image src={item.strDrinkThumb}></Image>
                    </Top>
                    <Bottom>
                      <SelectionsContainer>
                        <Selections
                          color="var(--text-yellow)"
                          background="var(--light-yellow)"
                        >
                          <CategoryImage />
                          {item.strCategory}
                        </Selections>
                        <Selections
                          color="var(--text-blue)"
                          background="var(--light-blue)"
                        >
                          <GlassImage />
                          {item.strGlass}
                        </Selections>
                        <Selections
                          color="var(--text-red)"
                          background="var(--light-red)"
                        >
                          <TypeImage />
                          {item.strAlcoholic}
                        </Selections>
                      </SelectionsContainer>
                      <Title>{item.strDrink}</Title>
                      <Instructions>
                        {item.strIngredient1}
                        {item.strIngredient2 !== null
                          ? " , " + item.strIngredient2
                          : ""}
                        {item.strIngredient3 !== null
                          ? " , " + item.strIngredient3
                          : ""}
                        {item.strIngredient4 !== null
                          ? " , " + item.strIngredient4
                          : ""}
                        {item.strIngredient5 !== null
                          ? " , " + item.strIngredient5
                          : ""}
                        {item.strIngredient6 !== null
                          ? " , " + item.strIngredient6
                          : ""}
                        {item.strIngredient7 !== null
                          ? " , " + item.strIngredient7
                          : ""}
                      </Instructions>
                      <RateContainer>
                        <RateWrapper>
                          <Rate>
                            <StarHalfIcon></StarHalfIcon>
                            <span style={{ color: "var(--text-gray" }}>
                              4.5/(6300)
                            </span>
                          </Rate>
                          <BtnDetails
                            onClick={() => {
                              setCocktail(item);
                              console.log(cocktail);
                              setOpen(true);
                            }}
                          >
                            Details
                          </BtnDetails>
                        </RateWrapper>
                      </RateContainer>
                    </Bottom>
                  </Card>
                );
              })}
              <TransitionsModal
                cocktail={cocktail}
                open={open}
                setOpen={setOpen}
              ></TransitionsModal>
            </Container>
            <Footer>
              <Button
                onClick={() => {
                  emptyFilters();
                  setSlideIndex(1);
                }}
              >
                Previuos
              </Button>
              <Button
                onClick={() => {
                  emptyFilters();
                  setSlideIndex(0);
                }}
              >
                Start Over
              </Button>
            </Footer>
          </>
        ) : (
          <div
            style={{
              boxShadow: "var(--shadow)",
              padding: "10px",
              marginBottom: "30px",
              borderRadius: "25px",
            }}
          >
            <NoItems></NoItems>
            <Footer>
              <Button
                onClick={() => {
                  emptyFilters();
                  setSlideIndex(1);
                }}
              >
                Previuos
              </Button>
              <Button
                onClick={() => {
                  emptyFilters();
                  setSlideIndex(0);
                }}
              >
                Start Over
              </Button>
            </Footer>
          </div>
        )
      ) : (
        <Loader></Loader>
      )}
    </>
  );
};

export default Cocktails;
