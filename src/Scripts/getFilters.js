// 1.	List of all cocktails - https://www.thecocktaildb.com/api/json/v1/1/search.php?s

import axios from "axios";

export const getCategories = ({ setCategories }) => {
  axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
    .then((result) => {
      setCategories(result.data.drinks);
    })
    .catch((e) => {
      console.log(e);
    })
    .finally(() => {});
};

export const getGlasses = ({ setGlasses }) => {
  axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
    .then((result) => {
      setGlasses(result.data.drinks);
    })
    .catch((e) => {
      console.log(e);
    })
    .finally(() => {});
};

export const getTypes = ({ setTypes }) => {
  axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list")
    .then((result) => {
      setTypes(result.data.drinks);
    })
    .catch((e) => {
      console.log(e);
    })
    .finally(() => {});
};

export const getInstructions = ({ setInstructions }) => {
  axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
    .then((result) => {
      setInstructions(result.data.drinks);
    })
    .catch((e) => {
      console.log(e);
    })
    .finally(() => {});
};
