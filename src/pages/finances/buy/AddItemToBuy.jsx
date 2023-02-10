import * as React from 'react';
import { styled } from "@mui/system";
import { Container, Typography, Button} from "@mui/material";
import { ReactComponent as Vector } from "../../../assets/icons/Vector.svg";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import { ReactComponent as IconTeto} from '../../../assets/icons/icon-teto.svg';

function AddItemToBuy() {
    const StyledBack = styled(Vector)`
    margin-bottom: 38px;
    `;

    const Form = styled("div")`
    margin-top: 25px;
    margin-bottom: 18px;
    `;

    const Priority = styled("div")`
    margin-bottom:24px;
    `;
    
    const [selectPriority, setPriority] = React.useState('');

    const handleChangePriority = (event) => {
        setPriority(event.target.value);
    };


    const Description = styled("div")`
        margin-bottom:24px;
    `;

    
    const LinkItem = styled("div")`
        margin-bottom:24px;
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
            <Link href="toBuy">
                <StyledBack />
            </Link>
            <Typography variant="h1">Item a Comprar</Typography>

            <Form>
                <FormControl sx={{width: "100%"}}>
                    <OutlinedInput
                        id="fixed-amount"
                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                        sx={{fontSize: "20px", fontWeight:700, color: "#0D1636", marginBottom: "24px"}}
                    />           
                </FormControl> 
                <Priority>
                    <Typography variant="body3" sx={{fontWeight: 600}}>Prioridade</Typography>
                    <FormControl sx={{width: "100%", marginTop:"12px"}}>
                    <Select
                    labelId="select-priority-label"
                    id="select-priority"
                    value={selectPriority}
                    onChange={handleChangePriority}
                    startAdornment={<InputAdornment position="start">
                        <IconSelect>
                            <IconTeto/>
                        </IconSelect>
                    </InputAdornment>}
                    >
                        <MenuItem value={0}> Alta </MenuItem>
                        <MenuItem value={1}> Média </MenuItem>
                        <MenuItem value={2}> Baixa </MenuItem>
                    </Select>  
                    </FormControl>
                </Priority>

                <Description >
                    <Typography variant="body3" sx={{fontWeight: 600}}>Descrição</Typography>
                    <FormControl sx={{width: "100%", marginTop:"12px"}}>
                    <OutlinedInput />
                    </FormControl> 
                </Description>

                <LinkItem >
                    <Typography variant="body3" sx={{fontWeight: 600}}>Link</Typography>
                    <FormControl sx={{width: "100%", marginTop:"12px"}}>
                    <OutlinedInput />
                    </FormControl> 
                </LinkItem>
                
                <Button id="btnSaveFixed" variant="contained" sx={{width:"100%", marginBottom: "140px"}}>Adicionar</Button>
            </Form>
          
        </Container>
    );
}

export default AddItemToBuy;