import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import {
  Bottom,
  CategoryImage,
  GlassImage,
  Instructions,
  Rate,
  RateContainer,
  RateWrapper,
  Selections,
  SelectionsContainer,
  Title,
  Top,
  TypeImage,
  Image,
} from "../Styles/Cocktails";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 500,
  bgcolor: "background.paper",
  border: "0 solid #fff",

  boxShadow: 24,
  borderRadius: 10,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

export default function TransitionsModal({ cocktail, open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Top style={{ marginBottom: "60px" }}>
              <Image
                style={{ height: "300px" }}
                src={cocktail !== undefined ? cocktail.strDrinkThumb : ""}
              ></Image>
            </Top>
            <Bottom style={{ overflow: "scroll" }}>
              <SelectionsContainer>
                <Selections
                  color="var(--text-yellow)"
                  background="var(--light-yellow)"
                >
                  <CategoryImage />
                  {cocktail !== undefined ? cocktail.strCategory : ""}
                </Selections>
                <Selections
                  color="var(--text-blue)"
                  background="var(--light-blue)"
                >
                  <GlassImage />
                  {cocktail !== undefined ? cocktail.strGlass : ""}
                </Selections>
                <Selections
                  color="var(--text-red)"
                  background="var(--light-red)"
                >
                  <TypeImage />
                  {cocktail !== undefined ? cocktail.strAlcoholic : ""}
                </Selections>
              </SelectionsContainer>
              <Title>{cocktail !== undefined ? cocktail.strDrink : ""}</Title>
              <Instructions>
                {cocktail !== undefined ? cocktail.strInstructions : ""}
              </Instructions>
              <RateContainer>
                <RateWrapper>
                  <Rate>
                    <StarHalfIcon></StarHalfIcon>
                    <span style={{ color: "var(--text-gray" }}>4.5/(6300)</span>
                  </Rate>
                </RateWrapper>
              </RateContainer>
            </Bottom>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
