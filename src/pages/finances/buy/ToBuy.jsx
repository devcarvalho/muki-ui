import * as React from 'react';
import { styled } from "@mui/system";
import { Container, Typography, IconButton} from "@mui/material";
import { ReactComponent as Vector } from "../../../assets/icons/Vector.svg";
import AddIcon from '@mui/icons-material/Add';
import Link from '@mui/material/Link';
import { ReactComponent as IconTeto} from '../../../assets/icons/icon-teto.svg';

function ToBuy() {
    const StyledBack = styled(Vector)`
    margin-bottom: 38px;
    `;

    const Heading = styled("div")`
    display: flex;
    align-items: center;
    gap: 10px;
    `;

    const Items = styled("div")`
    margin-top: 26px;
    `;

    const Item = styled("div")`
        display: flex;
        align-items: center;
        margin-bottom: 20px
    `;

    const ItemIcon = styled("div")`
        height: 40px;
        width: 40px;
        background: #F7F7F7;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const ItemDescription = styled("div")`
        margin-left: 12px;
    `;



    return (
        <Container
        fixed
        sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "58px",
        paddingLeft: "24px",
        paddingRight: "24px"
        }}
        > 
            <Link href="home">
                <StyledBack />
            </Link>
            <Heading>
                <Typography variant="h1">Todos os itens</Typography>
                <IconButton sx={{ background: "#F7F7F7", height: "48px", width: "48px", marginLeft: "auto" }}
                href="addItemToBuy">
                    <AddIcon sx={{color: "#000000"}}/>
                </IconButton>
            </Heading>

            <Items>
                <Item>
                    <ItemIcon>
                        <IconTeto/>
                    </ItemIcon>
                    <ItemDescription>
                        <Typography variant="body1" fontWeight={600}>Roupas</Typography>
                        <Typography variant="body2">Média</Typography>
                    </ItemDescription>
                    <Typography variant="body3" sx={{ background: "linear-gradient(180deg, #FFCF53 0%, #FF9900 100%)", backgroundClip: "text", WebkitTextFillColor: "transparent", marginLeft: "auto" }}>R$ 1.000,00</Typography>
                </Item>
                <Item>
                    <ItemIcon>
                        <IconTeto/>
                    </ItemIcon>
                    <ItemDescription>
                        <Typography variant="body1" fontWeight={600}>Palete de Madeira</Typography>
                        <Typography variant="body2">Baixa</Typography>
                    </ItemDescription>
                    <Typography variant="body3" sx={{ background: "linear-gradient(180deg, #FFCF53 0%, #FF9900 100%)", backgroundClip: "text", WebkitTextFillColor: "transparent", marginLeft: "auto" }}>R$ 300,00</Typography>
                </Item>
                <Item>
                    <ItemIcon>
                        <IconTeto/>
                    </ItemIcon>
                    <ItemDescription>
                        <Typography variant="body1" fontWeight={600}>
                            <Link href='https://lolocamas.com.br/produtos/cama-nuvens-tam-junior/' sx={{color: "#1397C0"}}>
                                Cama
                            </Link>
                        </Typography>
                        <Typography variant="body2">Alta</Typography>
                    </ItemDescription>
                    <Typography variant="body3" sx={{ background: "linear-gradient(180deg, #FFCF53 0%, #FF9900 100%)", backgroundClip: "text", WebkitTextFillColor: "transparent", marginLeft: "auto" }}>R$ 1.954,58</Typography>
                </Item>
                <Item>
                    <ItemIcon>
                        <IconTeto/>
                    </ItemIcon>
                    <ItemDescription>
                        <Typography variant="body1" fontWeight={600}>
                            Cadeirinha
                        </Typography>
                        <Typography variant="body2">Alta</Typography>
                    </ItemDescription>
                    <Typography variant="body3" sx={{ background: "linear-gradient(180deg, #FFCF53 0%, #FF9900 100%)", backgroundClip: "text", WebkitTextFillColor: "transparent", marginLeft: "auto" }}>R$ 706,98</Typography>
                </Item>
            </Items>
          
        </Container>
    );
}

export default ToBuy;