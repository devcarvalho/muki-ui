import React from "react";
import { Grid, Button, styled } from "@mui/material";
import {ReactComponent as PlatinumCard} from '../../assets/icons/PlatinumCard.svg';

function Cards() {

    const AddButton = styled(Button)`
        height: 184px;
        width: 72px;
        background: linear-gradient(180deg, #FFCF53 0%, #FF9900 100%);
        box-shadow: 0px 10px 30px rgba(255, 153, 0, 0.2);
        border-radius: 15px;
        font-size: 24px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

  return (
    <Grid sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <AddButton>+</AddButton>
        <PlatinumCard height="184px" width="145px" sx={{ "rect": { height: "184px", width: "145px" } }} />
    </Grid>
    );
}

export default Cards;
