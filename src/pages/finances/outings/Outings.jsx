import {useState} from "react";
import { Typography, Box, IconButton, Button, styled } from "@mui/material";
import {ReactComponent as CreditCard} from '../../../assets/icons/credit-card.svg';
import fruit from '../../../assets/icons/fruit.png';
import AddIcon from '@mui/icons-material/Add';

function Outings() {

  const Wrapper = styled("div")`
    padding: 0 24px;
  `;

  const Wallet = styled("div")`
    margin-top: 49px;
    display: flex;
    align-items: center;
    gap: 12px;
  `;

  const WalletIcon = styled("div")`
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #FFCF53 0%, #FF9900 100%);
    border-radius: 24px;
  `;

  const CreditCardIcon = styled(CreditCard)`
    width: 16px;
    height: 16px;
    path {
      stroke: ${( props ) => props.color || "#fff"}
    }
  `;

  const Heading = styled("div")`
    margin-top: 31px;
    display: flex;
    align-items: center;
    gap: 10px;
  `;

  const Pills = styled("div")`
    margin-top: 26px;
    display: flex;
    align-items: center;
    gap: 22px;
  `;

  const Pill = styled(Button)`
    margin-top: 26px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 15px;
    background: ${( props ) => props.background || "#fff"};
    border-radius: 50px;
    height: 72px;
    width: 140px;
    padding: 6px 11px;
  `;

  const PillIcon = styled("div")`
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${( props ) => props.background || "#fff"};
    border-radius: 50px;
  `;

  const Days = styled("div")`
    margin-top: 26px;
  `;

  const Day = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `;

  const DayHeading = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `;

  const DayOuting = styled("div")`
    display: flex;
    align-items: center;
  `;

  const DayOutingIcon = styled("div")`
    height: 40px;
    width: 40px;
    background: #F7F7F7;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const DayOutingDescription = styled("div")`
    margin-left: 12px;
  `;

  const [ activePill, setActivePill ] = useState("fixed");

  return (<Wrapper>
    <Wallet>
      <WalletIcon>
        <CreditCardIcon />
      </WalletIcon>
      <Box>
        <Typography variant="subtitle1">Carteira</Typography>
        <Typography variant="body3">R$ 16.874,97</Typography>
      </Box>
    </Wallet>
    <Heading>
      <Typography variant="h1">Todas as Saídas</Typography>
      <IconButton sx={{ background: "#F7F7F7", height: "48px", width: "48px", marginLeft: "auto" }}
       href="addOutings">
        <AddIcon sx={{color: "#000000"}}/>
      </IconButton>
    </Heading>
    <Pills>
      <Pill background={ activePill === "fixed" ? "linear-gradient(180deg, #44BBFE 0%, #1E78FE 100%)" : "#F7F7F7"} onClick={() => setActivePill("fixed")}>
        <PillIcon background={ activePill === "fixed" ? "#fff" : "linear-gradient(180deg, #44BBFE 0%, #1E78FE 100%)"}>
          <CreditCardIcon color={ activePill === "fixed" ? "#0D1636" : "#fff"} />
        </PillIcon>
        <Typography variant="body3" color={ activePill === "fixed" ? "#fff" : "#0D1636"}>Fixos</Typography>
      </Pill>
      <Pill background={ activePill === "cards" ? "linear-gradient(177.23deg, #9C2CF3 -13.49%, #3A49F9 109.75%)" : "#F7F7F7"} onClick={() => setActivePill("cards")}>
        <PillIcon background={ activePill === "cards" ? "#fff" : "linear-gradient(177.23deg, #9C2CF3 -13.49%, #3A49F9 109.75%)"}>
          <CreditCardIcon color={ activePill === "cards" ? "#0D1636" : "#fff"} />
        </PillIcon>
        <Typography variant="body3" color={ activePill === "cards" ? "#fff" : "#0D1636"}>Cartões</Typography>
      </Pill>
    </Pills>
    <Days>
      <Day>
        <DayHeading>
          <Typography variant="subtitle1">Sexta</Typography>
          <Typography variant="h3">19-06-2023</Typography>
        </DayHeading>
        <DayOuting>
          <DayOutingIcon>
            <img src={fruit} alt="fruit"/>
          </DayOutingIcon>
          <DayOutingDescription>
            <Typography variant="body1" fontWeight={600}>Pizzaria</Typography>
            <Typography variant="body2">Lazer</Typography>
          </DayOutingDescription>
          <Typography variant="body3" sx={{ background: "linear-gradient(180deg, #FFCF53 0%, #FF9900 100%)", backgroundClip: "text", WebkitTextFillColor: "transparent", marginLeft: "auto" }}>R$ 235,88</Typography>
        </DayOuting>
      </Day>
    </Days>
  </Wrapper>);
}

export default Outings;
