export const filterArray = ({
  cocktails,
  setCocktails,
  selectedCategory,
  selectedGlass,
  selectedType,
  selected,
}) => {
  setCocktails(
    cocktails.filter((item) => {
      return (
        (selectedCategory !== ""
          ? item.strCategory === selectedCategory
          : true) &&
        (selectedGlass !== "" ? item.strGlass === selectedGlass : true) &&
        (selectedType !== "" ? item.strAlcoholic === selectedType : true)
      );
      // (item.strIngredient1 === selected[0].strIngredient1 ||
      //   item.strIngredient2 === selected[0].strIngredient1 ||
      //   item.strIngredient3 === selected[0].strIngredient1) &&
      // (selected[1] !== undefined
      //   ? item.strIngredient1 === selected[1].strIngredient1 ||
      //     item.strIngredient2 === selected[1].strIngredient1 ||
      //     item.strIngredient3 === selected[1].strIngredient1
      //   : true) &&
      // (selected[2] !== undefined
      //   ? item.strIngredient1 === selected[2].strIngredient1 ||
      //     item.strIngredient2 === selected[2].strIngredient1 ||
      //     item.strIngredient3 === selected[2].strIngredient1
      //   : true)
    })
  );
};
