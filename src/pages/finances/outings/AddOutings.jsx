import * as React from 'react';
import { styled } from "@mui/system";
import { Container, Typography, Button, Grid} from "@mui/material";
import { ReactComponent as Vector } from "../../../assets/icons/Vector.svg";
import { ReactComponent as IconTeto} from '../../../assets/icons/icon-teto.svg';
import {ReactComponent as PlatinumCard} from '../../../assets/icons/PlatinumCard.svg';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';


function AddOutings() {
    const StyledBack = styled(Vector)`
    margin-bottom: 38px;
    `;

    const Wrapper = styled("div")`
    gap: 10px;
    `;

    const Category = styled("div")`
        margin-bottom:24px;
    `;

    const [selectCate, setCate] = React.useState('');
    
    const handleChangeCate = (event) => {
        setCate(event.target.value);
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

    const Cards = styled("div")`
    `;
    const Card = styled("div")`
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
            <Typography variant="h1"  sx={{marginBottom: "26px"}}>Adicionar Saída</Typography>
        
            <Grid sx={{ display: "flex", alignItems: "center", gap: "12px", marginBottom:"24px"}}>
                <AddButton>+</AddButton>
                <Cards>
                    <Card>
                        <Checkbox defaultChecked color="secondary"  />
                        <PlatinumCard height="184px" width="145px" sx={{ "rect": { height: "184px", width: "145px" } }} />
                    </Card>
                </Cards>
            </Grid>
            <Wrapper>
                <FormControl sx={{width: "100%"}}>
                    <OutlinedInput
                        id="fixed-amount"
                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                        sx={{fontSize: "20px", fontWeight:700, color: "#0D1636", marginBottom: "24px"}}
                    />           
                </FormControl> 
                <Category>
                    <Typography variant="body3" sx={{fontWeight: 600}}>Categoria</Typography>
                    <FormControl sx={{width: "100%", marginTop:"12px"}}>
                    <Select
                    labelId="select-category-label"
                    id="select-category"
                    value={selectCate}
                    onChange={handleChangeCate}
                    startAdornment={<InputAdornment position="start">
                        <IconSelect>
                            <IconTeto/>
                        </IconSelect>
                    </InputAdornment>}
                    >
                        <MenuItem value={0}> Essenciais </MenuItem>
                        <MenuItem value={1}> Lazer </MenuItem>
                        <MenuItem value={1}> Alimentação </MenuItem>
                    </Select>  
                    </FormControl>
                </Category>
                <Period>
                    <Date>
                        <Typography variant="body3" sx={{fontWeight: 600}}>Data</Typography>
                        <TextField
                        id="date"
                        type="date"
                        defaultValue="2017-05-24"
                        sx={{ width: 130, marginTop:"12px" }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        />
                    </Date>
                    <Time>
                        <Typography variant="body3" sx={{fontWeight: 600}}>Hora</Typography>
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
                            sx={{ width: 150, marginTop:"12px" }}
                        />
                    </Time>

            
                </Period>
                <Button id="btnSaveFixed" variant="contained" sx={{width:"100%", marginBottom: "140px"}}>Adicionar</Button>
            </Wrapper> 
          
        </Container>
    );
}
export default AddOutings;