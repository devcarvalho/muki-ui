import * as React from 'react';
import {useState} from "react";
import { styled } from "@mui/system";
import { Container, Typography, Button } from "@mui/material";
import { ReactComponent as Vector } from "../../../assets/icons/Vector.svg";
import { ReactComponent as CreditCard} from '../../../assets/icons/credit-card.svg';
import { ReactComponent as IconTeto} from '../../../assets/icons/icon-teto.svg';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';


function Planning() {
    const StyledBack = styled(Vector)`
    margin-bottom: 38px;
    `;

    const CreditCardIcon = styled(CreditCard)`
    width: 16px;
    height: 16px;
    path {
        stroke: ${( props ) => props.color || "#fff"}
    }
    `; 

    const Pills = styled("div")`
    display: flex;
    align-items: center;
    gap: 22px;
    `;

    const Pill = styled(Button)`
    margin-top: 12px;
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

    const StyledSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
        ))(({ theme }) => ({
        width: 48,
        height: 26,
        padding: 0,
        marginRight: "8px",
        '& .MuiSwitch-switchBase': {
          padding: 4,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(24px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: theme.palette.mode === 'dark' ? '#FFCF53' : '#FF9900',
              opacity: 1,
              border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color:
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
          },
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 16,
          height: 16,
        },
        '& .MuiSwitch-track': {
          borderRadius: 26 / 2,
          backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
          opacity: 1,
          transition: theme.transitions.create(['background-color'], {
            duration: 500,
          }),
        },
    }));

    const [ activePill, setActivePill ] = useState("ceiling");
    
    const [teto, setTeto] = React.useState('');

    const handleChangeTeto = (event) => {
        setTeto(event.target.value);
    };

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

    const Description = styled("div")`
        margin-bottom:24px;
    `;

    const Repeats = styled("div")`
        margin-bottom:24px;
    `;
    const [repet, setCateRepet] = React.useState('');

    const handleChangeRepet = (event) => {
        setCateRepet(event.target.value);
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
            <Typography variant="h1"  sx={{marginBottom: "26px"}}>Planejamento</Typography>
            <Typography variant="body3" sx={{fontWeight: 600}}>Categoria</Typography>
            <Pills sx={{marginBottom: "43px"}}>
                <Pill background={ activePill === "ceiling" ? "linear-gradient(180deg, #FFCF53 0%, #FF9900 100%)" : "#F7F7F7"} onClick={() => setActivePill("ceiling")}>
                    <PillIcon background={ activePill === "ceiling" ? "#fff" : "linear-gradient(180deg, #FFCF53 0%, #FF9900 100%)"}>
                    <CreditCardIcon color={ activePill === "ceiling" ? "#0D1636" : "#fff"} />
                    </PillIcon>
                    <Typography variant="body3" color={ activePill === "ceiling" ? "#fff" : "#0D1636"}>Teto</Typography>
                </Pill>
                <Pill background={ activePill === "fixed" ? "linear-gradient(180deg, #44BBFE 0%, #1E78FE 100%)" : "#F7F7F7"} onClick={() => setActivePill("fixed")}>
                    <PillIcon background={ activePill === "fixed" ? "#fff" : "linear-gradient(180deg, #44BBFE 0%, #1E78FE 100%)"}>
                    <CreditCardIcon color={ activePill === "fixed" ? "#0D1636" : "#fff"} />
                    </PillIcon>
                    <Typography variant="body3" color={ activePill === "fixed" ? "#fff" : "#0D1636"}>Fixos</Typography>
                </Pill>
            </Pills>
            {activePill === "ceiling" && 
            <Wrapper>
                <FormControl sx={{width: "100%"}}>
                    <OutlinedInput
                        id="ceiling-amount"
                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                        sx={{fontSize: "20px", fontWeight:700, color: "#0D1636", marginBottom: "24px"}}
                    />           
                </FormControl> 
                <Typography variant="body3" sx={{fontWeight: 600}}>Teto</Typography>
                <FormControl sx={{width: "100%", marginTop:"12px"}}>
                    <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth1"
                    value={teto}
                    onChange={handleChangeTeto}
                    startAdornment={<InputAdornment position="start">
                        <div style={{height: "40px", width: "40px", display: "flex", alignItems: "center",
                        justifyContent: "center", background: "#fff", borderRadius: "20px"}}>
                            <IconTeto/>
                        </div>
                    </InputAdornment>}>
                        <MenuItem value={0}> Limite Mensal </MenuItem>
                        <MenuItem value={1}> Limite Alimentação</MenuItem>
                    </Select>  
                </FormControl>
                <FormControlLabel sx={{marginTop:"12px"}}
                control={<StyledSwitch defaultChecked />}
                label="Aplicar para todos os meses"
                />
                <Button id="btnSaveCeiling" variant="contained" sx={{width:"100%", marginTop:"32px", marginBottom: "140px"}}>Salvar</Button>
            </Wrapper>
            }
        
            { activePill === "fixed" && 
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
                        <MenuItem value={2}> Alimentação </MenuItem>
                    </Select>  
                    </FormControl>
                </Category>
                <Description >
                    <Typography variant="body3" sx={{fontWeight: 600}}>Descrição</Typography>
                    <FormControl sx={{width: "100%", marginTop:"12px"}}>
                    <OutlinedInput />
                    </FormControl> 
                </Description>
                <Repeats>
                    <Typography variant="body3" sx={{fontWeight: 600}}>Repete</Typography>
                    <FormControl sx={{width: "100%", marginTop:"12px"}}>
                    <Select
                    labelId="select-repeats-label"
                    id="select-repeats"
                    value={repet}
                    onChange={handleChangeRepet}
                    startAdornment={<InputAdornment position="start">
                        <IconSelect>
                            <IconTeto/>
                        </IconSelect>
                    </InputAdornment>}
                    >
                        <MenuItem value={0}> A cada 7 dias </MenuItem>
                        <MenuItem value={1}> A cada 15 dias </MenuItem>
                        <MenuItem value={2}> A cada 1 mês </MenuItem>
                    </Select>  
                    </FormControl>
                </Repeats>
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
            </Wrapper> }
        </Container>
    );
}

export default Planning;
