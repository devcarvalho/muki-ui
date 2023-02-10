import * as React from "react";
import { styled } from "@mui/system";
import { Container, Typography, Button, Grid } from "@mui/material";
import { ReactComponent as Vector } from "../../../assets/icons/Vector.svg";
import { ReactComponent as IconTeto } from "../../../assets/icons/icon-teto.svg";
import { ReactComponent as ActiveIcon } from "../../../assets/icons/active.svg";
import creditCard from "../../../assets/icons/card-credit.png";
import debitCard from "../../../assets/icons/card-debit.png";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";

function AddOutings() {
  const StyledBack = styled(Vector)`
    margin-bottom: 38px;
  `;

  const Wrapper = styled("div")`
    gap: 10px;
  `;

  const Category = styled("div")`
    margin-bottom: 24px;
  `;

  const [selectCategory, setSelectCategory] = React.useState("");

  const handleChangeCategory = (event) => {
    setSelectCategory(event.target.value);
  };

  const Period = styled("div")`
    display: flex;
  `;

  const Date = styled("div")`
    margin-bottom: 32px;
  `;

  const Time = styled("div")`
    margin-bottom: 32px;
  `;

  const IconSelect = styled("div")`
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 20px;
  `;

  const Cards = styled("div")`
    display: flex;
    gap: 12px;
  `;

  const Card = styled("div")`
    width: 145px;
    height: 184px;
    background-position: -30px -20px;
    position: relative;
  `;

  const Active = styled(ActiveIcon)`
  position: absolute;
  right: -24px;
  top: -28px;
`;

  const [selectedCard, setSelectedCard] = React.useState("credit");

  return (
    <Container
      fixed
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "58px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <Link href="outings">
        <StyledBack />
      </Link>
      <Typography variant="h1" sx={{ marginBottom: "26px" }}>
        Adicionar Saída
      </Typography>

      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "24px",
        }}
      >
        <Cards>
          <Card style={{ backgroundImage: `url(${creditCard})`}} 
          onClick={() => setSelectedCard("credit")}
        >
            {selectedCard === "credit" && <Active />}
          </Card>
          <Card style={{ backgroundImage: `url(${debitCard})`}} 
          onClick={() => setSelectedCard("debit")}
        >
            {selectedCard === "debit" && <Active />}
          </Card>
        </Cards>
      </Grid>
      <Wrapper>
        <FormControl sx={{ width: "100%" }}>
          <OutlinedInput
            id="fixed-amount"
            startAdornment={
              <InputAdornment position="start">R$</InputAdornment>
            }
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#0D1636",
              marginBottom: "24px",
            }}
          />
        </FormControl>
        <Category>
          <Typography variant="body3" sx={{ fontWeight: 600 }}>
            Categoria
          </Typography>
          <FormControl sx={{ width: "100%", marginTop: "12px" }}>
            <Select
              labelId="select-category-label"
              id="select-category"
              value={selectCategory}
              onChange={handleChangeCategory}
              startAdornment={
                <InputAdornment position="start">
                  <IconSelect>
                    <IconTeto />
                  </IconSelect>
                </InputAdornment>
              }
            >
              <MenuItem value={0}> Essenciais </MenuItem>
              <MenuItem value={1}> Lazer </MenuItem>
              <MenuItem value={2}> Alimentação </MenuItem>
            </Select>
          </FormControl>
        </Category>
        <Period>
          <Date>
            <Typography variant="body3" sx={{ fontWeight: 600 }}>
              Data
            </Typography>
            <TextField
              id="date"
              type="date"
              defaultValue="2017-05-24"
              sx={{ marginTop: "12px" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Date>
          <Time>
            <Typography variant="body3" sx={{ fontWeight: 600 }}>
              Hora
            </Typography>
            <TextField
              id="time"
              type="time"
              defaultValue="07:30"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300,
              }}
              sx={{ width: 150, marginTop: "12px" }}
            />
          </Time>
        </Period>
        <Button
          id="btnSaveFixed"
          variant="contained"
          sx={{ width: "100%", marginBottom: "140px" }}
        >
          Adicionar
        </Button>
      </Wrapper>
    </Container>
  );
}
export default AddOutings;
