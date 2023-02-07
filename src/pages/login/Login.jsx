import React from "react";
import { Box, Button, Container, TextField, Link, Typography } from "@mui/material";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

function Login() {
  const navigate = useNavigate();

  const StyledLogo = styled(Logo)`
    margin: auto;
    path, line, circle {
      stroke: #76B561;
    }
  `;

  const { focused } = useFormControl() || {};

  return (
    <Container
      fixed
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "67px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "80%",
          maxWidth: "400px",
        }}
      >
        <StyledLogo />
        <div >
          <Typography variant="h1" sx={{textAlign: "center", marginBottom: "15px"}}>Bem vindo,</Typography>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Typography variant="body1" sx={{textAlign: "center", width: "180px", marginBottom: "30px"}}>Gaste menos do que ganha, e invista a diferença.</Typography>
        </div>
        <FormControl>
        <OutlinedInput placeholder="Email" />
        </FormControl>
        <FormControl>
        <OutlinedInput placeholder="Senha" type="password" />
        </FormControl>
        <Button onClick={() => navigate("/finances/dashboard")} variant="contained" sx={{marginTop: "15px"}}>Entrar</Button>
        <Link onClick={() => navigate("/password-recovery")}>Esqueceu a senha?</Link>
        <Link onClick={() => navigate("/user-register")}>Cadastrar-me</Link>
      </Box>
    </Container>
  );
}

export default Login;
